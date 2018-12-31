import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/radio-group";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const getInitialState = (vnode, createStream) => {
  const checkedIndex = createStream(null);
  return {
    checkedIndex,
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

  const buttons = attrs.content
    ? attrs.content
    : attrs.buttons
      ? attrs.buttons
      : attrs.children || vnode.children || [];

  return buttons.length
    ? buttons.map((buttonOpts, index) => {
      if (!buttonOpts) {
        return null;
      }
      if (buttonOpts.value === undefined) {
        console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
      }
      // Only set defaultChecked the first time when no value has been stored yet
      const isDefaultChecked =
        (
          buttonOpts.defaultChecked ||
          buttonOpts.checked ||
          (attrs.defaultSelectedValue !== undefined && buttonOpts.value === attrs.defaultSelectedValue)
        ) && checkedIndex === null;
      const buttonOptsChecked = buttonOpts.checked !== undefined
        ? buttonOpts.checked
        : checkedIndex === index; // Use internal state if checked state is not set in attrs
      const isChecked = isDefaultChecked || buttonOptsChecked;
      
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
