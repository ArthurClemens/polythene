import { pointerEndEvent, filterSupportedAttributes } from "polythene-core";
import animation from "./animation";
import classes from "polythene-css-classes/ripple";

const useAnimationsState = ({ useState }) => {
  const [animations, setAnimations] = useState({});
  return [
    animations,
    (addId, animation) => setAnimations(Object.assign(
      {},
      animations,
      { [addId]: animation }
    )),
    removeId => {
      const updated = Object.assign({}, animations);
      delete(updated[removeId]);
      setAnimations(updated);
    }
  ];
};

export const _Ripple = ({ h, a, getRef, useState, useEffect, ...props }) => {
  const [domElement, setDomElement] = useState();
  const [animations, addAnimation, removeAnimation] = useAnimationsState({ useState });
  const isAnimating = animations
    ? Object.keys(animations).length > 0
    : false;
  const triggerEl = props.target || (domElement ? domElement.parentElement : undefined);
  
  const tap = e => {
    if (props.disabled || !domElement || (!props.multi && isAnimating)) {
      return;
    }
    if (props.start) {
      props.start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    const rippleAnimation = animation({ e, id, el: domElement, props, classes })
      .then(evt => {
        if (props.end) {
          props.end(evt);
        }
        removeAnimation(id);
      });
    addAnimation(id, rippleAnimation);
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
