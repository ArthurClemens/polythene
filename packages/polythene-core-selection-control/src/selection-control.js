import { filterSupportedAttributes } from "polythene-core";
// Does not export theme
import classes from "./classes";

export const element = "div";

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;

  const defaultChecked = attrs.checked !== undefined
    ? !!attrs.checked
    : !!attrs.defaultChecked || false;

  const checked = createStream(defaultChecked);
  const redrawOnChange = createStream(defaultChecked);

  const toggle = () => {
    const oldChecked = attrs.checked !== undefined
      ? attrs.checked
      : checked();
    checked(!oldChecked);
    redrawOnChange(!oldChecked);
  };

  const onChange = attrs.onChange !== undefined
    ? e => (
        toggle(),
        attrs.onChange({
          event: e,
          checked: checked(),
          value: attrs.value
        })
      )
    : () => toggle();

  return {
    checked,
    onChange,
    redrawOnUpdate: createStream.merge([redrawOnChange])
  };
};

const sizeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large
};

const classForSize = (size = "regular") => sizeClasses[size];

const currentState = (attrs, state) => {
  const checked = attrs.checked !== undefined
    ? attrs.checked
    : state.checked();
  const selectable = attrs.selectable !== undefined
    ? attrs.selectable(checked)
    : false;
  const inactive = attrs.disabled || !selectable;
  return { checked, inactive };
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const { checked, inactive } = currentState(attrs, state);
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.instanceClass, // for instance pe-checkbox-control
        checked ? classes.on : classes.off,
        attrs.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForSize(attrs.size),
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.events
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Icon, IconButton }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const { inactive } = currentState(attrs, state);
  const controlView = attrs.createControl
    ? attrs.createControl({ h, k, inactive, onChange: state.onChange, attrs, Icon, IconButton })
    : null;

  return h("label",
    {
      className: classes.formLabel,
      key: "label"
    },
    [
      controlView,
      attrs.label
        ? h(`.${classes.label}`,
            inactive
              ? null
              : { [k.onclick]: state.onChange },
            attrs.label
          )
        : null
    ]
  );
};

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

export const createControl = ({ h, k, attrs, inactive, onChange, Icon, IconButton }) => (
  h("div",
    { className: classes.box },
    h(IconButton, Object.assign(
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
        events: { [k.onclick]: onChange },
        inactive
      },
      attrs.iconButton // for example for hover behaviour
    ))
  )
);
