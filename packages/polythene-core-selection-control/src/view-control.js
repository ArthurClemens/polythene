import classes from "polythene-css-classes/selection-control";

const CONTENT = [
  { iconType: "iconOn", className: classes.buttonOn},
  { iconType: "iconOff", className: classes.buttonOff}
];

export const getElement = vnode =>
  vnode.attrs.element || `.${classes.box}`;

const createIcon = (h, iconType, attrs, className) => (
  // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
  // otherwise create a new object
  Object.assign(
    {},
    {
      className,
      key: iconType
    },
    attrs[iconType]
      ? attrs[iconType]
      : { svg: { content: h.trust(attrs.icons[iconType]) } },
    attrs.icon,
    attrs.size
      ? { size: attrs.size }
      : null
  )
);

export const createContent = (vnode, { renderer: h, Icon, IconButton }) => {
  const attrs = vnode.attrs;
  return h(IconButton, Object.assign(
    {},
    {
      element: "div",
      className: classes.button,
      content: CONTENT.map(o =>
        h(Icon, createIcon(h, o.iconType, attrs, o.className))
      ),
      ripple: { center: true },
      disabled: attrs.disabled,
      events: attrs.events,
      inactive: attrs.inactive
    },
    attrs.iconButton // for example for hover behaviour
  ));
};
