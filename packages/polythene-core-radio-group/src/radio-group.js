import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/radio-group";

const getButtons = vnode => {
  const attrs = vnode.attrs;
  return attrs.content
    ? attrs.content
    : attrs.buttons
      ? attrs.buttons
      : attrs.children || vnode.children || [];
};

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  if (attrs.defaultSelectedValue !== undefined) {
    deprecation("RadioGroup", { option: "defaultSelectedValue", newOption: "defaultCheckedValue", since: "1.4.2" });
  }
  const buttons = getButtons(vnode);
  const checkedIdx = buttons.reduce((acc, buttonOpts, index) => {
    if (buttonOpts.value === undefined) {
      console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
    }
    return acc !== null
      ? acc
      : (
        buttonOpts.defaultChecked !== undefined
        || (attrs.defaultCheckedValue !== undefined && buttonOpts.value === attrs.defaultCheckedValue)
        || (attrs.defaultSelectedValue !== undefined && buttonOpts.value === attrs.defaultSelectedValue) // deprecated
      )
        ? index
        : acc;
  }, null);
  const checkedIndex = createStream(checkedIdx);
  return {
    checkedIndex: checkedIndex,
    redrawOnUpdate: createStream.merge([checkedIndex])
  };
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    }
  );
};

export const createContent = (vnode, { renderer: h, RadioButton }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const checkedIndex = state.checkedIndex();
  const buttons = getButtons(vnode);
  const groupCheckedValue= attrs.checkedValue;

  return buttons.length
    ? buttons.map((buttonOpts, index) => {
      if (!buttonOpts) {
        return null;
      }
      const isChecked = buttonOpts.checked !== undefined
        ? buttonOpts.checked
        : groupCheckedValue !== undefined
          ? buttonOpts.value === groupCheckedValue
          : checkedIndex === index;
      return h(RadioButton, Object.assign(
        {},
        {
          /* group attributes that may be overwritten by individual buttons */
          name: attrs.name,
          key: buttonOpts.value
        },
        attrs.all,
        /* individual button options */
        buttonOpts,
        {
          /* this component's options */
          onChange: ({ value }) => (
            state.checkedIndex(index),
            attrs.onChange && attrs.onChange({ value })
          ),
          checked: isChecked
        }
      ));
    })
    : null;
};
