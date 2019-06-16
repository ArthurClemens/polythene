import { pointerEndEvent, filterSupportedAttributes } from "polythene-core";
import rippleAnimation from "./ripple-animation";
import classes from "polythene-css-classes/ripple";

export { rippleAnimation };

export const _Ripple = ({ h, a, getRef, useRef, useState, useEffect, ...props }) => {
  const [domElement, setDomElement] = useState();
  const animationCountRef = useRef(0);
  const triggerEl = props.target || (domElement ? domElement.parentElement : undefined);

  const tap = e => {
    if (props.disabled || !domElement || (!props.multi && animationCountRef.current > 0)) {
      return;
    }
    if (props.start) {
      props.start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    rippleAnimation({ e, id, el: domElement, props, classes })
      .then(evt => {
        if (props.end) {
          props.end(evt);
        }
        animationCountRef.current--;
      });
      animationCountRef.current++;
  };

  useEffect(
    () => {
      if (triggerEl && triggerEl.addEventListener) {
        pointerEndEvent.forEach(evt =>
          triggerEl.addEventListener(evt, tap, false));
      
        return () => {
          pointerEndEvent.forEach(evt =>
            triggerEl.removeEventListener(evt, tap, false));
        };
      }
    },
    [triggerEl]
  );

  const componentProps = Object.assign({}, 
    filterSupportedAttributes(props),
    getRef(dom => dom && !domElement && setDomElement(dom)),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.unconstrained ? classes.unconstrained : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );

  const content = [
    props.before,
    props.after,
  ];

  return h(props.element || "div",
    componentProps,
    content
  );
};
