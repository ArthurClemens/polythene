import {
  filterSupportedAttributes,
  processDataset,
  transitionComponent,
  classForSize,
  transitionStateReducer,
} from "polythene-core";
import classes from "polythene-css-classes/base-spinner";

const showSpinner = (opts) =>
  transitionComponent({
    ...opts,
    isShow: true,
  });

// const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });

const initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false,
};

export const _BaseSpinner = ({
  h,
  a,
  useReducer,
  useState,
  useEffect,
  getRef,
  Shadow,
  ...props
}) => {
  const [transitionState, dispatchTransitionState] = useReducer(
    transitionStateReducer,
    initialTransitionState
  );
  const [domElement, setDomElement] = useState();

  const isVisible = (transitionState || initialTransitionState).isVisible;

  const transitionOptions = {
    dispatchTransitionState,
    props,
    domElements: {
      el: domElement,
    },
    showClass: classes.visible,
  };

  useEffect(() => {
    if (!domElement) {
      return;
    }
    if (!props.permanent) {
      showSpinner(transitionOptions);
    }
  }, [domElement]);

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    processDataset(props),
    getRef(
      (dom) =>
        dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom))
    ),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.instanceClass,
        classForSize(classes, props.size),
        props.singleColor ? classes.singleColor : null,
        props.raised ? classes.raised : null,
        props.animated ? classes.animated : null,
        props.permanent ? classes.permanent : null,
        isVisible ? classes.visible : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events
  );

  const content = [props.before, props.content, props.after];

  if (props.raised && content.length > 0) {
    content.push(h(Shadow, { shadowDepth: props.shadowDepth }));
  }

  return h("div", componentProps, content);
};
