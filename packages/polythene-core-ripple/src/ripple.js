import { touchEndEvent, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import animation from "./theme/animation";
import classes from "./classes";

export const element = "div";

export const theme = customTheme;

export const getInitialState = (vnode, createStream) => {
  const animating = createStream(false);
  const removeEventListeners = createStream(false);
  return {
    animating,
    removeEventListeners
  };
};

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
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  const rippleEl = vnode.dom;

  const tap = e => {
    if (attrs.disabled) {
      return;
    }
    if (state.animating() && !attrs.multi) {
      return;
    }
    animation({ e, el: rippleEl, attrs, classes, onEndCallback: () => state.animating(false) });
    state.animating(true);
  };
  const triggerEl = attrs.target
    ? attrs.target()
    : vnode.dom && vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  state.removeEventListeners(() =>
    triggerEl.removeEventListener(touchEndEvent, tap, false));
};

export const onUnmount = ({ state }) =>
  state.removeEventListeners()();

