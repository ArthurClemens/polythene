import classes from "./classes";

export const element = `.${classes.box}`;

const createIcon = (h, iconType, attrs, className) => (
  // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
  // otherwise create a new object
  Object.assign(
    {},
    attrs[iconType]
      ? attrs[iconType]
      : { svg: h.trust(attrs.icons[iconType]) },
    { className },
    attrs.icon,
    attrs.size
      ? { size: attrs.size }
      : null
  )
);

export const createContent = (vnode, { renderer: h, keys: k, Icon, IconButton }) => {
  const attrs = vnode.attrs;
  return h(IconButton, Object.assign(
    {},
    {
      element: "div",
      className: classes.button,
      content: [
        { iconType: "iconOn", className: classes.buttonOn},
        { iconType: "iconOff", className: classes.buttonOff}
      ].map(o =>
        h(Icon, createIcon(h, o.iconType, attrs, o.className))
      ),
      ripple: { center: true },
      disabled: attrs.disabled,
      events: { [k.onclick]: attrs.onChange },
      inactive: attrs.inactive
    },
    attrs.iconButton // for example for hover behaviour
  ));
};
