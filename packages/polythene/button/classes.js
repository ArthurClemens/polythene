
var baseClass = "pe-button";

export default {
  base: baseClass,
  component: baseClass + " pe-text-button",
  raised: baseClass + " pe-text-button pe-raised-button",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};