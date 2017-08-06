import { unpackAttrs } from "polythene-core";
import { customTheme } from "./theme";
import { easing } from "polythene-utilities";
import themeVars from "./theme/vars";
import classes from "./classes";

export const theme = customTheme;

const DEFAULT_UPDATE_DURATION = .8;

const sizeFromName = (size = "regular") => themeVars["size_" + size];

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

const handlePercentage = (percentage, state, size, attrs) => {
  if (!state.dom()) {
    return;
  }
  if (state.animating()) {
    return;
  }
  const previousPercentage = state.percentage();
  if (attrs.animated && previousPercentage !== percentage) {
    const animationDuration = (attrs.updateDuration || DEFAULT_UPDATE_DURATION) * 1000;
    const el = state.dom();
    let start = null;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const stepPercentage = 1.0 / animationDuration * progress;
      const newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, easing.easeInOutQuad(newPercentage));
      if (start && progress < animationDuration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        state.percentage(percentage);
        state.animating(false);
      }
    };
    state.animating(true);
    window.requestAnimationFrame(step);
  } else {
    animate(state.dom(), size, percentage);
    state.percentage(percentage);
  }
};

const notifyState = (state, attrs, size) => {
  if (attrs.percentage !== undefined) {
    const percentage = unpackAttrs(attrs.percentage);
    handlePercentage(percentage, state, size, attrs);
  }
};

const getSize = attrs => {
  const rawSize = sizeFromName(attrs.size);
  const { padding, paddedSize } = themeVars.raisedSize(rawSize);
  return attrs.raised
    ? paddedSize - 2 * padding
    : rawSize;
};

export const getInitialState = (vnode, createStream) => {
  const percentage = createStream(0);
  const dom = createStream();
  const animating = createStream(false);
  return {
    dom,
    percentage,
    animating
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.dom(vnode.dom);
  const size = getSize(attrs);
  notifyState(state, attrs, size);
};

export const createProps = (vnode, { renderer: h }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const size = getSize(attrs);
  notifyState(state, attrs, size);

  const content = h("div",
    {
      key: "content",
      className: classes.animation,
      style: {
        width: size + "px",
        height: size + "px"
      }
    },
    [
      h("div", {
        key: "left",
        className: [classes.circle, classes.circleLeft].join(" ")
      }),
      h("div", {
        key: "right",
        className: [classes.circle, classes.circleRight].join(" ")
      })
    ]
  );

  return Object.assign(
    {},
    attrs,
    {
      className: [classes.component, attrs.className].join(" "),
      content
    }
  );
};
