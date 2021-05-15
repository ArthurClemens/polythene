import {
  filterSupportedAttributes,
  processDataset,
  subscribe,
  unsubscribe,
  transitionComponent,
  stylePropCompare,
  transitionStateReducer,
  initialTransitionState,
} from "polythene-core";
import classes from "polythene-css-classes/dialog";

const DEFAULT_SHADOW_DEPTH = 3;

export const openDialogsSelector = `.${classes.component}`;

const createPane = ({ h, Pane, props }) =>
  h(Pane, {
    body: props.content || props.body || props.menu || props.children,
    element: props.element,
    borders: props.borders,
    className: props.className,
    footer: props.footer,
    footerButtons: props.footerButtons,
    formOptions: props.formOptions,
    fullBleed: props.fullBleed,
    header: props.header,
    style: props.style,
    title: props.title,
  });

export const _Dialog = ({
  h,
  a,
  useState,
  useEffect,
  useRef,
  getRef,
  useReducer,
  Pane,
  Shadow,
  openDialogsSelector,
  ...props
}) => {
  const [transitionState, dispatchTransitionState] = useReducer(
    transitionStateReducer,
    initialTransitionState
  );
  const [domElement, setDomElement] = useState();
  const backdropElRef = useRef();
  const touchElRef = useRef();
  const contentElRef = useRef();

  const isVisible = (transitionState || initialTransitionState).isVisible;
  const isTransitioning = (transitionState || initialTransitionState)
    .isTransitioning;

  const transitionOptions = ({
    isShow,
    hideDelay = props.hideDelay,
    referrer,
  }) => ({
    transitionState,
    dispatchTransitionState,
    instanceId: props.instanceId,
    props: Object.assign({}, props, {
      hideDelay,
    }),
    isShow,
    domElements: {
      el: domElement,
      contentEl: contentElRef.current,
      backdropEl: backdropElRef.current,
    },
    showClass: classes.visible,
    transitionClass: classes.transition,
    referrer,
  });

  const showDialog = () =>
    transitionComponent(transitionOptions({ isShow: true }));

  const hideDialog = ({ hideDelay, referrer } = {}) =>
    transitionComponent(
      transitionOptions({ isShow: false, hideDelay, referrer })
    );

  const isModal = () =>
    props.modal ||
    (domElement && domElement.classList.contains(classes.modal)) ||
    stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: `"${"modal"}"`,
    });

  const isFullScreen = () =>
    props.fullScreen ||
    (domElement && domElement.classList.contains(classes.fullScreen)) ||
    stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: `"${"full_screen"}"`,
    });

  // DOM elements
  useEffect(() => {
    if (!domElement) {
      return;
    }
    backdropElRef.current = domElement.querySelector(`.${classes.backdrop}`);
    touchElRef.current = domElement.querySelector(`.${classes.touch}`);
    contentElRef.current = domElement.querySelector(`.${classes.content}`);
  }, [domElement]);

  // Handle Escape key
  useEffect(() => {
    if (!domElement || props.inactive) {
      return;
    }
    const handleEscape = (e) => {
      if (props.disableEscape && (isFullScreen() || isModal())) return;
      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        const openDialogs = document.querySelectorAll(openDialogsSelector);
        if (openDialogs[openDialogs.length - 1] === domElement) {
          hideDialog();
          unsubscribe("keydown", handleEscape);
        }
      }
    };
    subscribe("keydown", handleEscape);

    return () => {
      unsubscribe("keydown", handleEscape);
    };
  }, [domElement, props.inactive]);

  // Show / hide logic
  useEffect(() => {
    if (!domElement || isTransitioning) {
      return;
    }
    if (props.hide) {
      if (isVisible) {
        hideDialog();
      }
    } else if (props.show) {
      if (!isVisible) {
        showDialog();
      }
    }
  }, [domElement, isTransitioning, isVisible, props.hide, props.show]);

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props, { remove: ["style"] }), // style set in content, and set by show/hide transition
    processDataset(props),
    getRef(
      (dom) =>
        dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom))
    ),
    {
      className: [
        props.parentClassName || classes.component,
        props.fromMultipleClassName,
        props.fullScreen ? classes.fullScreen : null,
        props.modal ? classes.modal : null,
        props.backdrop ? classes.showBackdrop : null,
        // classes.visible is set in showDialog though transition
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
      "data-spawn-id": props.spawnId, // received from Multi
      "data-instance-id": props.instanceId, // received from Multi
      // click backdrop: close dialog
      [a.onclick]: (e) => {
        if (
          e.target !== domElement &&
          e.target !== backdropElRef.current &&
          e.target !== touchElRef.current
        ) {
          return;
        }
        if (isModal()) {
          // not allowed
          return;
        }
        hideDialog();
      },
      role: props.role || "dialog",
    }
  );

  const pane =
    props.panesOptions && props.panesOptions.length
      ? h(Pane, props.panesOptions[0])
      : props.panes && props.panes.length
      ? props.panes[0]
      : createPane({ h, Pane, props });
  const shadowDepth = props.shadowDepth;

  const content = [
    h("div", {
      className: classes.backdrop,
    }),
    h("div", {
      className: classes.touch,
    }),
    h(
      "div",
      {
        className: [
          classes.content,
          props.menu ? classes.menuContent : null,
        ].join(" "),
      },
      [
        props.fullScreen
          ? null
          : h(Shadow, {
              shadowDepth:
                shadowDepth !== undefined ? shadowDepth : DEFAULT_SHADOW_DEPTH,
              animated: true,
            }),
        props.before,
        pane,
        props.after,
      ]
    ),
  ];
  return h("div", componentProps, content);
};
