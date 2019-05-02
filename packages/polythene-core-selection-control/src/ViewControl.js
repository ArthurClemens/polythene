import classes from "polythene-css-classes/selection-control";

const CONTENT = [
  { iconType: "iconOn", className: classes.buttonOn},
  { iconType: "iconOff", className: classes.buttonOff}
];

// export const getElement = vnode =>
//   vnode.props.element || `.${classes.box}`;

const createIcon = (h, iconType, props, className) => (
  // if props.iconOn/props.iconOff is passed, use that icon options object and ignore size
  // otherwise create a new object
  Object.assign(
    {},
    {
      className,
      key: iconType
    },
    props[iconType]
      ? props[iconType]
      : { svg: { content: h.trust(props.icons[iconType]) } },
    props.icon,
    props.size
      ? { size: props.size }
      : null
  )
);

export const _ViewControl = ({ h, Icon, IconButton, ...props }) => {
  const element = props.element || `.${classes.box}`;
  const content = h(IconButton, Object.assign({},
    {
      element: "div",
      className: classes.button,
      content: CONTENT.map(o =>
        h(Icon, createIcon(h, o.iconType, props, o.className))
      ),
      ripple: { center: true },
      disabled: props.disabled,
      events: props.events,
      inactive: props.inactive
    },
    props.iconButton // for example for hover behaviour
  ));
  return h(element, null, content);
};
