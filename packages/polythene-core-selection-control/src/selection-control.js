import { filterSupportedAttributes } from "polythene-core";
// Does not export theme
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;

  const defaultChecked = attrs.defaultChecked !== undefined
    ? !!attrs.defaultChecked
    : !!attrs.checked;

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

export const createContent = (vnode, { renderer: h, keys: k, ViewControl }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const { checked, inactive } = currentState(attrs, state);
  return h("label",
    { className: classes.formLabel },
    [
      h(ViewControl, Object.assign(
        {},
        attrs,
        {
          inactive,
          checked,
          onChange: state.onChange,
          key: "control"
        }
      )),
      attrs.label
        ? h(`.${classes.label}`,
            Object.assign(
              {},
              {
                key: "label"
              },
              inactive
                ? null
                : { [k.onclick]: state.onChange }
            ),
            attrs.label
          )
        : null
    ]
  );
};
