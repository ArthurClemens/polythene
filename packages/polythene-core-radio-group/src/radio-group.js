import { filterSupportedAttributes } from "polythene-core";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const getInitialState = (vnode, createStream) => {
  const checkedValue = createStream(null);
  return {
    checkedValue,
    redrawOnUpdate: createStream.merge([checkedValue])
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
  const checkedValue = state.checkedValue();

  const buttons = attrs.content
    ? attrs.content
    : attrs.buttons
      ? attrs.buttons
      : attrs.children || vnode.children || [];

  return buttons.length
    ? buttons.map(buttonOpts => {
      if (!buttonOpts) {
        return null;
      }
      // Only set defaultChecked the first time when no value has been stored yet
      const isDefaultChecked = (buttonOpts.defaultChecked || buttonOpts.checked) && checkedValue === undefined;
      if (buttonOpts.value === undefined) {
        console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
      }
      const isChecked = isDefaultChecked || attrs.checked || checkedValue === buttonOpts.value;
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
          onChange: newState => (
            state.checkedValue(newState.value),
            attrs.onChange && attrs.onChange({ value: newState.value })
          ),
          checked: isChecked
        }
      ));
    })
    : null;
};
