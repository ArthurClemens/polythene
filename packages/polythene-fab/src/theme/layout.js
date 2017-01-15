import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

export default (selector, componentVars) => [{
  [selector]: [
    mixin.vendorize({
      "user-select": "none"
    }, vars.prefixes_user_select), {
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

      "&.pe-button--fab-mini": {
        " .pe-button__content": {
          width: componentVars.size_mini + "px",
          height: componentVars.size_mini + "px",
          padding: ((componentVars.size_mini - vars.unit_icon_size) / 2) + "px"
        }
      },

      " .pe-ripple": {
        borderRadius: "inherit"
      },

      " .pe-button__wash": [
        mixin.vendorize({
          transition: "background-color " + vars.animation_duration + " ease-in-out"
        }, vars.prefixes_transition), {
          borderRadius: "inherit",
          pointerEvents: "none",
          backgroundColor: "transparent"
        }
      ]
    }
  ]
}];
