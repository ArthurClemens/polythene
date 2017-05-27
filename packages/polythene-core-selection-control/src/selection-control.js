import { filterSupportedAttributes } from "polythene-core";
// Does not export theme
import classes from "./classes";

export const element = "div";

export const getInitialState = (vnode, createStream) => {
  // Because this module also supports radio buttons (paired control elements)
  // we won't keep a separate "checked" value but instead keep the checked value
  // as a HTMLElement checked state.
  
  const attrs = vnode.attrs;
  const defaultChecked = false;
  let value = attrs.value || "1";
  let inputEl;

  const inputElChecked = createStream();

  const setInputElChecked = (isChecked, isQuiet = false) => {
    if (inputEl) {
      inputEl.checked = isChecked;
      !isQuiet && inputElChecked(isChecked);
    }
  };

  const getAttrsChecked = () => {
    if (typeof attrs.checked === "function") {
      const v = attrs.checked();
      return v !== undefined
        ? v
        : defaultChecked;
    } else {
      return attrs.checked !== undefined
        ? attrs.checked
        : defaultChecked;
    }
  };

  const setInputEl = el => {
    inputEl = el;
    setInputElChecked(getAttrsChecked());
  };

  const setChecked = (isChecked, isQuiet) => {
    setInputElChecked(isChecked, isQuiet);
    if (attrs.getState) {
      attrs.getState({
        checked: inputEl ? inputEl.checked : getAttrsChecked(),
        value,
        el: inputEl,
      });
    }
  };

  const toggle = () => setChecked(!inputEl.checked);
  const checked = () => inputEl
    ? inputEl.checked
    : getAttrsChecked();

  return {
    setInputEl,
    setChecked,
    checked,
    toggle,
    value: () => value,
    redrawOnUpdate: createStream.merge([inputElChecked])
  };
};

const sizeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large
};

const classForSize = (size = "regular") => sizeClasses[size];

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  if (typeof attrs.checked === "function") {
    state.setChecked(attrs.checked(), true);
  }
  const checked = state.checked();
  const selectable = attrs.selectable !== undefined
    ? attrs.selectable(checked)
    : false;
  const inactive = attrs.disabled || !selectable;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.instanceClass,
        checked ? classes.on : classes.off,
        attrs.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForSize(attrs.size),
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.events ? attrs.events : null
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Icon, IconButton }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const checked = state.checked();
  const selectable = attrs.selectable !== undefined
    ? attrs.selectable(checked)
    : false;
  const inactive = attrs.disabled || !selectable;
  const name = attrs.name || "";
  const controlView = attrs.createControl
    ? attrs.createControl({ h, k, checked, toggle: state.toggle, attrs, Icon, IconButton })
    : null;

  return [
    h("input", {
      className: classes.input,
      name,
      value: state.value(),
      type: attrs.type, // set by checkbox / radio-button
      [k.tabindex]: -1, // set in control / icon-button
      checked,
      onChange: () => {},
      key: "input"
    }),
    h("label",
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
                : { [k.onclick]: state.toggle },
              attrs.label
            )
          : null
      ]
    )
  ];
};

export const onMount = vnode =>
  vnode.state.setInputEl(vnode.dom.querySelector("input"));

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

export const createControl = ({ h, k, attrs, checked, toggle, Icon, IconButton }) =>
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
        events: { [k.onclick]: toggle }
      },
      attrs.selectable !== undefined
        ? { inactive: !attrs.selectable(checked) }
        : null,
      attrs.iconButton // for example for hover behaviour
    ))
  );
