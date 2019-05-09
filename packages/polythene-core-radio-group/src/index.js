import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/radio-group";

export const _RadioGroup = ({ h, a, useState, useEffect, RadioButton, ...props }) => {
  const [checkedIndex, setCheckedIndex] = useState();
  const buttons = props.content || props.buttons || props.children;

  useEffect(
    () => {
      const index = buttons.reduce((acc, buttonOpts, index) => {
        if (buttonOpts.value === undefined) {
          console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
        }
        return acc !== null
          ? acc
          : (
            buttonOpts.defaultChecked !== undefined
            || (props.defaultCheckedValue !== undefined && buttonOpts.value === props.defaultCheckedValue)
            || (props.defaultSelectedValue !== undefined && buttonOpts.value === props.defaultSelectedValue) // deprecated
          )
            ? index
            : acc;
      }, null);
      setCheckedIndex(index);
    },
    []
  );
  
  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    }
  );

  const groupCheckedValue= props.checkedValue;
  const contents = buttons.length
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
          name: props.name,
          key: buttonOpts.value
        },
        props.all,
        /* individual button options */
        buttonOpts,
        {
          /* this component's options */
          onChange: ({ value }) => (
            setCheckedIndex(index),
            props.onChange && props.onChange({ value })
          ),
          checked: isChecked
        }
      ));
    })
    : null;
  const content = [
    props.before,
    contents,
    props.after,
  ];
  return h(props.element || "div", componentProps, content);
};
