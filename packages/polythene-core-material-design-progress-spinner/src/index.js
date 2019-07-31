import { unpackAttrs, getStyle, styleDurationToMs } from "polythene-core";
import { easing } from "polythene-utilities";
import classes from "polythene-css-classes/material-design-progress-spinner";

const percentageValue = (min, max, percentage = 0) => min + ((max - min) * percentage);

const rotateCircle = (domElement, min, max, percentage) => {
  const style = domElement.style;
  style["transform"] =
    style["-webkit-transform"] =
    style["-moz-transform"] =
    style["-ms-transform"] =
    style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

const animate = (stateEl, size, percentage) => {
  const animationEl = stateEl.querySelector("." + classes.animation);
  const animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  const leftCircle = stateEl.querySelector("." + classes.circleLeft);
  const rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

const updateWithPercentage = ({ domElement, isAnimating, setIsAnimating, percentage, setPercentage, size, props }) => {
  if (!domElement || isAnimating || size === undefined || props.percentage === undefined) {
    return;
  }
  const currentPercentage = unpackAttrs(props.percentage);
  const previousPercentage = percentage;
  if (previousPercentage !== currentPercentage) {
    const easingFn = props.animated
      ? easing.easeInOutQuad
      : v => v;
    if (props.animated) {
      const animationDuration = props.updateDuration !== undefined
        ? props.updateDuration * 1000
        : styleDurationToMs(getStyle({ element: domElement.querySelector(`.${classes.animation}`), prop: "animation-duration" }));
      let start = null;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const stepPercentage = 1.0 / animationDuration * progress;
        const newPercentage = previousPercentage + stepPercentage * (currentPercentage - previousPercentage);
        animate(domElement, size, easingFn(newPercentage));
        if (start && progress < animationDuration) {
          window.requestAnimationFrame(step);
        } else {
          start = null;
          setPercentage(currentPercentage);
          setIsAnimating(false);
        }
      };
      setIsAnimating(true);
      window.requestAnimationFrame(step);
    } else {
      animate(domElement, size, easingFn(currentPercentage));
      setPercentage(currentPercentage);
    }
  }
};

const getSize = element => 
  Math.round(
    element
      ? parseFloat(getStyle({ element, prop: "height" })) - 2 * parseFloat(getStyle({ element, prop: "padding" }))
      : 0
  );

export const _Spinner = ({ h, useState, useEffect, BaseSpinner, ...props }) => {
  const [percentage, setPercentage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [domElement, setDomElement] = useState();
  const [size, setSize] = useState();

  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      setSize(getSize(domElement));
    },
    [domElement]
  );

  updateWithPercentage({ domElement, isAnimating, percentage, setPercentage, setIsAnimating, size, props });

  const content = props.content || h("div",
    {
      // key: "content",
      className: classes.animation,
      style: {
        width: size + "px",
        height: size + "px"
      }
    },
    [
      h("div", {
        // key: "left",
        className: [classes.circle, classes.circleLeft].join(" ")
      }),
      h("div", {
        // key: "right",
        className: [classes.circle, classes.circleRight].join(" ")
      })
    ]
  );

  const componentProps = Object.assign({}, 
    props,
    {
      ref: dom => dom && !domElement && (
        setDomElement(dom)
      ),
      className: [classes.component, props.className].join(" "),
      content,
    }
  );

  return h(BaseSpinner, componentProps);
};
