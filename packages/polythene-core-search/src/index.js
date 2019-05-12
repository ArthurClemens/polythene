import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/search";

const getNameOfState = searchState =>
  searchState.focus && searchState.dirty
    ? "focus_dirty"
    : searchState.focus
      ? "focus"
      : searchState.dirty
        ? "dirty"
        : "none";

export const _Search = ({ h, a, useState, TextField, ...props }) => {
  const [searchState, setSearchState] = useState({});
  
  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.fullWidth ? classes.searchFullWidth : classes.searchInset,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    },
    props.events
  );

  const searchStateName = getNameOfState(searchState);
  const buttons = (props.buttons || {})[searchStateName] || {};
  const textfieldAttrs = props.textfield || {};

  const contents = h("div",
    { className: classes.content },
    [
      buttons.before,
      h(TextField, Object.assign(
        {},
        textfieldAttrs,
        {
          key: "input",
          onChange: newState => {
            setSearchState(newState);
            if (textfieldAttrs.onChange) {
              textfieldAttrs.onChange(newState);
            }
          },
        }
      )),
      buttons.after
    ]
  );
  const content = [
    props.before,
    contents,
    props.after
  ];
  
  return h(props.element || "div", componentProps, content);
};
