import {
  filterSupportedAttributes,
  processDataset,
  transitionComponent,
  isClient,
  isServer,
  transitionStateReducer,
  initialTransitionState,
} from "polythene-core";
import { Timer } from "polythene-utilities";
import classes from "polythene-css-classes/notification";

const DEFAULT_TIME_OUT = 3;

const setTitleStyles = (titleEl) => {
  if (isServer) return;
  const height = titleEl.getBoundingClientRect().height;
  const lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  const paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  const paddingBottom = parseInt(
    window.getComputedStyle(titleEl).paddingBottom,
    10
  );
  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

export const _Notification = ({
  h,
  a,
  useState,
  useEffect,
  useRef,
  getRef,
  useReducer,
  ...props
}) => {
  const [transitionState, dispatchTransitionState] = useReducer(
    transitionStateReducer,
    initialTransitionState
  );
  const [domElement, setDomElement] = useState();
  const [isPaused, setIsPaused] = useState(false);
  const containerElRef = useRef();
  const titleElRef = useRef();
  const timerRef = useRef();

  const isVisible = (transitionState || initialTransitionState).isVisible;
  const isTransitioning = (transitionState || initialTransitionState)
    .isTransitioning;
  const isHiding = (transitionState || initialTransitionState).isHiding;

  const transitionOptions = ({ isShow, referrer }) => ({
    dispatchTransitionState,
    instanceId: props.instanceId,
    props,
    isShow,
    beforeTransition: stopTimer,
    afterTransition: isShow
      ? () => {
          // set timer to hide in a few seconds
          const timeout = props.timeout;
          if (timeout === 0) {
            // do not time out
          } else {
            const timeoutSeconds =
              timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
            timerRef.current.start(() => hideNotification(), timeoutSeconds);
          }
        }
      : null,
    domElements: {
      el: domElement,
      containerEl: containerElRef.current,
    },
    showClass: classes.visible,
    referrer,
  });

  const showNotification = () =>
    transitionComponent(transitionOptions({ isShow: true }));

  const hideNotification = ({ referrer } = {}) =>
    transitionComponent(transitionOptions({ isShow: false, referrer }));

  const pause = () => {
    setIsPaused(true);
    if (timerRef.current) {
      timerRef.current.pause();
    }
  };

  const unpause = () => {
    setIsPaused(false);
    if (timerRef.current) {
      timerRef.current.resume();
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      timerRef.current.stop();
    }
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  // Timer
  useEffect(() => {
    timerRef.current = new Timer();
  }, []);

  // DOM elements
  useEffect(() => {
    if (!domElement) {
      return;
    }
    if (isClient) {
      // props.holderSelector is passed as option to Multiple
      containerElRef.current = document.querySelector(
        props.containerSelector || props.holderSelector
      );
      if (!containerElRef.current) {
        console.error("No container element found"); // eslint-disable-line no-console
      }
      if (props.containerSelector && containerElRef.current) {
        containerElRef.current.classList.add(classes.hasContainer);
      }
    }

    titleElRef.current = domElement.querySelector(`.${classes.title}`);
    if (titleElRef.current) {
      setTitleStyles(titleElRef.current);
    }
  }, [domElement]);

  // Show / hide logic
  useEffect(() => {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }
    if (props.hide) {
      if (isVisible) {
        hideNotification();
      }
    } else if (props.show) {
      if (!isVisible) {
        showNotification();
      }
    }
  }, [
    domElement,
    isTransitioning,
    isVisible,
    isHiding,
    props.hide,
    props.show,
  ]);

  // Pause logic
  useEffect(() => {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }
    if (props.unpause) {
      if (isPaused) {
        unpause();
      }
    } else if (props.pause) {
      if (!isPaused) {
        pause();
      }
    }
  }, [domElement, isTransitioning, isHiding, props.pause, props.unpause]);

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props, { remove: ["style"] }), // style set in content, and set by show/hide transition
    processDataset(props),
    getRef(
      (dom) =>
        dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom))
    ),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.fromMultipleClassName,
        // classes.visible is set in showNotification though transition
        props.tone === "light" ? null : "pe-dark-tone", // default dark tone
        props.containerSelector ? classes.hasContainer : null,
        props.layout === "vertical" ? classes.vertical : classes.horizontal,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
      [a.onclick]: (e) => e.preventDefault(),
    }
  );

  const contents = h(
    "div",
    {
      className: classes.content,
      style: props.style,
    },
    props.content || [
      props.title ? h("div", { className: classes.title }, props.title) : null,
      props.action
        ? h("div", { className: classes.action }, props.action)
        : null,
    ]
  );
  const content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};
