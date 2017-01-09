import m from "mithril";
import { touchEndEvent, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import animation from "./theme/animation";

const classes = {
  component:      "pe-ripple",
  waves:          "pe-ripple__waves",
  mask:           "pe-ripple__mask",
  constrained:    "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

let destroyRipple;

const initRipple = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  state.ripple = vnode.dom;
  state.waves = vnode.dom.querySelector(`.${classes.waves}`);
  
  const tap = e => {
    if (state.animating) {
      return;
    }
    animation(e, state.ripple, state.waves, attrs, classes, () => state.animating = false);
    state.animating = true;
  };
  const triggerEl = vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  destroyRipple = () => {
    triggerEl.removeEventListener(touchEndEvent, tap, false);
  };
};

const view = vnode => {
  const attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        (attrs.constrained !== false ? classes.constrained : null),
        attrs.class
      ].join(" ")
    }
  );
  const content = m("div", {
    class: classes.mask
  }, m("div", {
    class: classes.waves
  }));
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const ripple = {
  theme: customTheme, // accepts (className, vars)
  oninit: vnode => {
    vnode.state = {
      animating: false,
      ripple: undefined,
      waves: undefined
    };
  },
  oncreate: initRipple,
  onremove: destroyRipple,
  view
};
