import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/selection-control";

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

  const toggle = e => {
    const newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  return {
    checked,
    toggle,
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
  const viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  const viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown]
    ? attrs.events[k.onkeydown]
    : e => {
      if (e.key === "Enter") {
        if (viewControlClickHandler) {
          viewControlClickHandler(e);
        } else {
          state.toggle(e);
        }
      }
    };

  return h("label",
    Object.assign(
      {},
      {
        className: classes.formLabel,
        [k.onclick]: viewControlClickHandler
      }
    ),
    [
      h(ViewControl, Object.assign(
        {},
        attrs,
        {
          inactive,
          checked,
          key: "control",
          events: {
            // Only use key down event; click events are handled by input element
            [k.onkeydown]: viewControlKeyDownHandler
          }
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
          : {
            [k.onchange]: state.onChange
          }
      ))
    ]
  );
};
