import { arrowForward, arrowBackward } from "./theme";
import classes from "./classes";

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

export const onMount = vnode => {
  const dom = vnode.dom;
  if (!dom) {
    return;
  }
  const attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};

export const createProps = (vnode, { renderer: h, keys: k }) => {
  const attrs = vnode.attrs;
  const icon = attrs.position === "start"
    ? attrs.icon || { svg: h.trust(arrowBackward) }
    : attrs.icon || { svg: h.trust(arrowForward) };
  return {
    className: [
      classes.scrollButton,
      attrs.className || attrs[k.class]
    ].join(" "),
    icon,
    ripple: { center: true },
    events: attrs.events,
  };
};
