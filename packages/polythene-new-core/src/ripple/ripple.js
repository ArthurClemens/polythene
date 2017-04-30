import { touchEndEvent, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import animation from "./theme/animation";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.constrained !== false ? classes.constrained : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const onMount = vnode => {
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
  const triggerEl = attrs.target
    ? attrs.target()
    : vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  state.removeEventListeners = () =>
    triggerEl.removeEventListener(touchEndEvent, tap, false);
};

export const onUnmount = ({ state }) => {
  state.removeEventListeners();
};

export const createContent = (vnode, { renderer: h }) => {
  const attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  return h("div", { className: classes.mask },
    h("div", { className: classes.waves })
  );
};
