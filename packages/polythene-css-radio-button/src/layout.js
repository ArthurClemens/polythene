import { layout } from "polythene-css-selection-control";

export default (selector, componentVars, customVars) => [
  layout(selector, componentVars, customVars, "radio"),
  {
    " .pe-radio-group": {
      display: "flex"
    }
  }
];
