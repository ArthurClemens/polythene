import { filterSupportedAttributes, transitionComponent, classForSize } from "polythene-core";
import classes from "polythene-css-classes/base-spinner";

const showSpinner = opts =>
  transitionComponent({
    ...opts,
    isShow: true
  });

// const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });

export const _BaseSpinner = ({ h, a, useState, useEffect, getRef, Shadow, ...props }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(!!props.permanent);
  const [domElement, setDomElement] = useState();

  const transitionOptions = {
    isTransitioning,
    setIsTransitioning,
    setIsVisible,
    attrs: props,
    domElements: {
      el: domElement,
    },
    showClass: classes.visible
  };

  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      if (!props.permanent) {
        showSpinner(transitionOptions);
      }
    },
    [domElement]
  );

  const componentProps = Object.assign(
    {}, 
    filterSupportedAttributes(props),
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.ref && props.ref(dom)
    )),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.instanceClass,
        classForSize(classes, props.size),
        props.singleColor ? classes.singleColor: null,
        props.raised ? classes.raised : null,
        props.animated ? classes.animated : null,
        props.permanent ? classes.permanent : null,
        isVisible ? classes.visible : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events
  );

  // if (state.hide) {
  //   setTimeout(() => { hideSpinner(state, attrs); }, 0);
  // }

  return h("div",
    componentProps, [
      props.raised && props.content
        ? h(Shadow, { key: "shadow", shadowDepth: props.shadowDepth })
        : null,
      props.content
    ]
  );
};
