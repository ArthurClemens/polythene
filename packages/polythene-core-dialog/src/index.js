import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, stylePropCompare, transitionStateReducer, initialTransitionState, createDialogicStyles } from "polythene-core";
import classes from "polythene-css-classes/dialog";
import { dialog, Dialog as _Dialog } from "dialogic-mithril";

const DEFAULT_SHADOW_DEPTH = 3;

export const openDialogsSelector =
  `.${classes.component}`;

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

export const _DialogComponent = ({ h, a, useState, useEffect, useRef, getRef, useReducer, Pane, Shadow, openDialogsSelector, ...props }) => {
  const [domElement, setDomElement] = useState();
  const dialogElRef = useRef();
  const backdropElRef = useRef();
  const touchElRef = useRef();
  const contentElRef = useRef();

  const hideDialog = () => {
    dialog.hide({
      dialogic: {
        spawn: props.spawnId,
        id: props.instanceId
      }
    });
  };
  
  const isModal = () =>
    props.modal
    || (dialogElRef.current && dialogElRef.current.classList.contains(classes.modal))
    || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: `"${"modal"}"`
    });

  console.log("domElement", domElement);
  console.log("dialogElRef.current", dialogElRef.current);

  const isFullScreen = () =>
    props.fullScreen
    || (dialogElRef.current && dialogElRef.current.classList.contains(classes.fullScreen))
    || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: `"${"full_screen"}"`
    });

  // DOM elements
  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      backdropElRef.current = domElement.querySelector(`.${classes.backdrop}`);
      touchElRef.current = domElement.querySelector(`.${classes.touch}`);
      contentElRef.current = domElement.querySelector(`.${classes.content}`);
      dialogElRef.current = domElement.parentNode;
      
      const handleClick = e => {
        if (e.target !== dialogElRef.current && e.target !== backdropElRef.current && e.target !== touchElRef.current) {
          return;
        }
        if (isModal()) {
          // not allowed
          return;
        }
        hideDialog();
      };
      dialogElRef.current.addEventListener("click", handleClick);

      const fullScreen = isFullScreen();
      const modal = isModal();

      const classNames = [
        props.parentClassName/* || classes.component*/,
        props.fromMultipleClassName,
        fullScreen ? classes.fullScreen : null,
        modal ? classes.modal : null,
        props.backdrop ? classes.showBackdrop : null,
        // classes.visible is set in showDialog though transition
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].filter(Boolean);
      if (classNames.length) {
        dialogElRef.current.classList.add(...classNames);
      }
      
      return () => {
        dialogElRef.current.removeEventListener("click", handleClick);
      }
    },
    [domElement]
  );

  // Handle Escape key
  useEffect(
    () => {
      if (!dialogElRef.current || props.inactive) {
        return;
      }
      const handleEscape = e => {
        if (props.disableEscape && (isFullScreen() || isModal())) return;
        if (e.key === "Escape" || e.key === "Esc") { // "Esc" for IE11
          const openDialogs = document.querySelectorAll(openDialogsSelector);
          if (openDialogs[openDialogs.length - 1] === dialogElRef.current) {
            hideDialog();
            unsubscribe("keydown", handleEscape);
          }
        }
      };
      subscribe("keydown", handleEscape);

      return () => {
        unsubscribe("keydown", handleEscape);
      };
    },
    [domElement, props.inactive]
  );
  
  const componentProps = Object.assign(
    {}, 
    filterSupportedAttributes(props, { remove: ["style"] }), // style set in content, and set by show/hide transition
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.ref && props.ref(dom)
    )),
    {
      "data-spawn-id": props.spawnId,
      "data-instance-id": props.instanceId,
    }
  );

  const pane = props.panesOptions && props.panesOptions.length
    ? h(Pane, props.panesOptions[0])
    : props.panes && props.panes.length
      ? props.panes[0]
      : createPane({ h, Pane, props });
  const shadowDepth = props.shadowDepth;

  const content = [
    h("div",
      {
        className: classes.backdrop
      }
    ),
    h("div",
      {
        className: classes.touch
      }
    ),
    h("div",
      {
        className: [
          classes.content,
          props.menu ? classes.menuContent : null
        ].join(" "),
      },
      [
        props.fullScreen
          ? null
          : h(Shadow, {
            shadowDepth: shadowDepth !== undefined
              ? shadowDepth
              : DEFAULT_SHADOW_DEPTH,
            animated: true,
          }),
        props.before,
        pane,
        props.after,
      ]
    )
  ];

  return h("div", componentProps, content);
};

export { _Dialog };

export const _show = ({ DialogComponent }) => (props = {}, spawnProps = {}) => {
  const { styles, otherProps: componentProps } = createDialogicStyles(props);
  const { spawn, id } = spawnProps;
  return dialog.show({
    dialogic: {
      className: classes.component,
      component: DialogComponent,
      styles,
      spawn,
      id,
    },
    ...componentProps,
    spawnId: spawn,
    instanceId: id
  })
};

export const _hide = ({ spawn, id } = {}) => {
  return dialog.hide({
    dialogic: {
      spawn,
      id,
    },
    spawnId: spawn,
    instanceId: id
  })
};
