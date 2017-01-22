import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";

export const classes = {
  component: "pe-control",
  formLabel: "pe-control__form-label",
  label:     "pe-control__label",
  input:     "pe-control__input",
  on:        "pe-control--on",
  off:       "pe-control--off",
  disabled:  "pe-control--disabled",
  inactive:  "pe-control--inactive",
  small:     "pe-control--small",
  regular:   "pe-control--regular",
  medium:    "pe-control--medium",
  large:     "pe-control--large"
};

const typeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large
};

const classForType = (mode = "regular") => typeClasses[mode];

const view = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  if (typeof attrs.checked === "function") {
    state.setChecked(attrs.checked());
  }
  const checked = state.checked();
  const selectable = attrs.selectable !== undefined
    ? attrs.selectable(checked)
    : false;
  const inactive = attrs.disabled || !selectable;
  const element = attrs.element || "div";
  const name = attrs.name || "";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.defaultClass,
        checked ? classes.on : classes.off,
        attrs.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForType(attrs.size),
        attrs.class
      ].join(" ")
    },
    attrs.events ? attrs.events : null
  );
  const content = [
    m("input", {
      class: classes.input,
      name,
      value: state.value(),
      type: attrs.type, // set by checkbox / radio-button
      tabindex: -1, // set in controlView / icon-button
      checked,
      oncreate: vnode => state.setInputEl(vnode.dom)
    }),
    m("label", {
      class: classes.formLabel
    }, [
      attrs.controlView
        ? attrs.controlView(checked, {
          ...attrs,
          events: { onclick: state.toggle }
        })
        : null,
      attrs.label
        ? m(`.${classes.label}`,
          inactive
            ? null
            : {
              onclick: state.toggle
            }, attrs.label)
        : null
    ])
  ];
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const selectionControl = {
  oninit: vnode => {
    const attrs = vnode.attrs;
    // Because this module also supports radio buttons (paired control elements)
    // we won"t keep a separate "checked" value but instead keep the checked value
    // as a HTMLElement checked state.
    const defaultChecked = false;
    let value = attrs.value || "1";
    let inputEl;

    const setInputElChecked = isChecked => {
      if (inputEl) {
        inputEl.checked = isChecked;
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

    const setChecked = isChecked => {
      setInputElChecked(isChecked);
      if (attrs.getState) {
        attrs.getState({
          checked: inputEl ? inputEl.checked : getAttrsChecked(),
          value,
          el: inputEl,
        });
      }
    };

    const toggle = () => setChecked(!inputEl.checked);

    vnode.state = {
      setInputEl,
      setChecked,
      checked: () => inputEl ? inputEl.checked : getAttrsChecked(),
      toggle,
      value: () => value
    };
  },
  view
};
