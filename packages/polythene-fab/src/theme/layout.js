import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

const createStyles = componentVars => {
  return [{
    ".pe-button--fab": [
      mixin.vendorize({
        "user-select": "none"
      }, vars.prefixes_user_select), {
        display: "inline-block",
        position: "relative",
        outline: "none",
        cursor: "pointer",
        width: componentVars.size_regular + "px",
        height: componentVars.size_regular + "px",
        padding: componentVars.padding_regular + "px",
        "border-radius": "50%",
        border: "none",

        "&.pe-button--fab-mini": {
          width: componentVars.size_mini + "px",
          height: componentVars.size_mini + "px",
          padding: ((componentVars.size_mini - vars.unit_icon_size) / 2) + "px"
        },

        " .pe-button__content": {
          padding: 0,
          "border-radius": "inherit"
        },

        " .pe-ripple": {
          "border-radius": "inherit"
        },

        " .pe-button__wash": [
          mixin.vendorize({
            transition: "background-color " + vars.animation_duration + " ease-in-out"
          }, vars.prefixes_transition), {
            "border-radius": "inherit",
            "pointer-events": "none",
            "background-color": "transparent"
          }
        ]
      }
    ]
  }];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);
