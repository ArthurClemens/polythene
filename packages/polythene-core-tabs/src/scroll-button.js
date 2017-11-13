import classes from "polythene-css-classes/tabs";

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

const arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
const arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

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
    ? attrs.icon || { svg: { content: h.trust(arrowBackward) } }
    : attrs.icon || { svg: { content: h.trust(arrowForward) } };
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
