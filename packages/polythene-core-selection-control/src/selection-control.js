import { filterSupportedAttributes } from "polythene-core";
// Does not export theme
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

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

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const isChecked = attrs.defaultChecked !== undefined
    ? attrs.defaultChecked
    : attrs.checked || false;
  const checked = createStream(isChecked);

  const notifyChange = (e, isChecked) => {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    } 
  };

  const onChange = e => {
    let isChecked = e.currentTarget.checked;
    if (attrs.type === "radio") {
      // do not set directly
    } else {
      checked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  return {
    checked,
    onChange,
    redrawOnUpdate: createStream.merge([checked])
  };
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
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k, ViewControl }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const { checked, inactive } = currentState(attrs, state);
  return h("label", Object.assign(
    {},
    { className: classes.formLabel }
    ),
    [
      h(ViewControl, Object.assign(
        {},
        attrs,
        {
          inactive,
          checked,
          key: "control"
        }
      )),
      attrs.label
        ? h(`.${classes.label}`,
          { key: "label" },
          attrs.label
        )
        : null,
      h("input", Object.assign(
        {},
        attrs.events,
        {
          name: attrs.name,
          type: attrs.type,
          value: attrs.value,
          checked
        },
        attrs.disabled || inactive
          ? { disabled: "disabled" }
          : { [k.onchange]: state.onChange }
      ))
    ]
  );
};
