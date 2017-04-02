import { vars } from "polythene-theme";

const labelWidth = 24;
const trackWidth = 164;
const inputWidth = 32;

export default [{
  " .rgb-slider": {
    " .result": {
      width: "100%",
      height: "100px",
      marginBottom: "10px"
    },
    " .pe-header": {
      fontSize: "14px",
      color: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      marginTop: "0 !important",
      marginBottom: "0 !important",

      " .pe-slider__label": {
        width: labelWidth + "px"
      },
      " .pe-slider__track": {
        width: trackWidth + "px"
      }
    },
    " .pe-textfield": {
      color: "#009688",
      width: inputWidth + "px",

      " .pe-textfield__input": {
        "text-align": "center"
      }
    }
  }
}];
