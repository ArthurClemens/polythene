import { vars } from "polythene-theme";
import { mixin } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: {
    userSelect: "none",
    display: "inline-block",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    padding: 0,
    border: "none",

    " .pe-button__content": {
      position: "relative",
      width: componentVars.size_regular + "px",
      height: componentVars.size_regular + "px",
      borderRadius: "50%",
      padding: componentVars.padding_regular + "px",
    },

    " .pe-button__wash, .pe-button__focus": [
      mixin.fit(),
      {
        borderRadius: "inherit",
      }
    ],

    ".pe-fab--mini": {
      " .pe-button__content": {
        width: componentVars.size_mini + "px",
        height: componentVars.size_mini + "px",
        padding: ((componentVars.size_mini - vars.unit_icon_size) / 2) + "px"
      }
    },

    " .pe-ripple": {
      borderRadius: "inherit"
    },

    " .pe-button__wash": {
      transition: "background-color " + vars.animation_duration + " ease-in-out",
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }
  }
}];
