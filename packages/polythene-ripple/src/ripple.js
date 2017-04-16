import m from "mithril";
import { touchEndEvent, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import animation from "./theme/animation";
import classes from "./classes";

let destroyRipple;

const initRipple = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  const rippleEl = vnode.dom;
  const wavesEl = vnode.dom.querySelector(`.${classes.waves}`);
  
  const tap = e => {
    if (state.animating) {
      return;
    }
    animation(e, rippleEl, wavesEl, attrs, classes, () => state.animating = false);
    state.animating = true;
  };
  const triggerEl = attrs.getTarget
    ? attrs.getTarget()
    : vnode.dom.parentElement;
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
        attrs.constrained !== false ? classes.constrained : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
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

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => vnode.state.animating = false,
  oncreate: initRipple,
  onremove: destroyRipple,
  view
};
