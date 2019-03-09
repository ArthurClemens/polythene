import { filterSupportedAttributes, classForSize } from "polythene-core";
import classes from "polythene-css-classes/selection-control";

export const getElement = vnode =>
  vnode.attrs.element || "div";

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

export const getInitialState = (vnode, createStream, { keys: k }) => {
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

  const viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  const viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown]
    ? attrs.events[k.onkeydown]
    : e => {
      if (e.key === "Enter" || e.keyCode === 32) {
        e.preventDefault();
        if (viewControlClickHandler) {
          viewControlClickHandler(e);
        } else {
          toggle(e);
        }
      }
    };

  return {
    checked,
    toggle,
    onChange,
    viewControlClickHandler,
    viewControlKeyDownHandler,
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
    attrs.testId && { "data-test-id": attrs.testId },
    {
      className: [
        classes.component,
        attrs.instanceClass, // for instance pe-checkbox-control
        checked ? classes.on : classes.off,
        attrs.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForSize(classes, attrs.size),
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
  

  return h("label",
    Object.assign(
      {},
      {
        className: classes.formLabel,
      },
      state.viewControlClickHandler && {
        [k.onclick]: e => (
          e.preventDefault(),
          state.viewControlClickHandler(e)
        )
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
            [k.onkeydown]: state.viewControlKeyDownHandler
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
