import m from "mithril";
import spinner from "polythene-spinner";
import { customTheme } from "./theme";
import { easing } from "polythene-utilities";
import themeVars from "./theme/vars";
import classes from "./classes";

const sizeFromType = (type = "regular") => themeVars["size_" + type];

const percentageValue = (min, max, percentage = 0) => min + ((max - min) * percentage);

const rotateCircle = (el, min, max, percentage) => {
  const style = el.style;
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

const handlePercentage = (percentage, state, size, attrs = {}) => {
  if (!state.el) {
    return;
  }
  state.previousPercentage = state.previousPercentage || 0;
  if (attrs.animated && state.previousPercentage !== percentage) {
    const STEP_DURATION = attrs.updateDuration * 1000;
    let start = null;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const stepPercentage = 1.0 / STEP_DURATION * progress;
      const newPercentage = state.previousPercentage + stepPercentage * (percentage - state.previousPercentage);
      animate(state.el, size, easing.easeInOutQuad(newPercentage));
      state.previousPercentage = newPercentage;
      if (start && progress < STEP_DURATION) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
      }
    };
    window.requestAnimationFrame(step);
  } else {
    animate(state.el, size, percentage);
    state.previousPercentage = percentage;
  }
};

const view = ({ attrs }) => {
  const rawSize = sizeFromType(attrs.type);
  const { padding, paddedSize } = themeVars.raisedSize(rawSize);

  const size = attrs.raised
    ? paddedSize - 2 * padding
    : rawSize;

  attrs.content = m("div",
    {
      class: classes.animation,
      style: {
        width: size + "px",
        height: size + "px"
      }
    },
    [
      m("div", {
        class: [classes.circle, classes.circleLeft].join(" ")
      }),
      m("div", {
        class: [classes.circle, classes.circleRight].join(" ")
      })
    ]
  );
  attrs.instanceClass = classes.component;
  attrs.getPercentage = (percentage, state) => handlePercentage(percentage, state, size, attrs);
  return m(spinner, attrs);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
