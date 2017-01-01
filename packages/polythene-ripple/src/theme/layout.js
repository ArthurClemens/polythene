import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

const kfRipple = componentVars => ({
  " 100%": {
    transform: "scale(" + componentVars.end_scale + ")",
    "opacity": componentVars.end_opacity
  }
});

const createStyles = componentVars => {
  return [{
    ".pe-ripple": [
      mixin.fit(), {
        color: "inherit",
        "border-radius": "inherit",

        "&.pe-ripple--constrained": {
          "border-radius": "inherit",

          " .pe-ripple__mask": {
            overflow: "hidden",
            "border-radius": "inherit"
          }
        },
        " .pe-ripple__mask": [
          mixin.fit(),
          mixin.vendorize({
            "transform": "translate3d(0,0,0)"
          }, vars.prefixes_transform)
        ],

        " .pe-ripple__waves": [
          mixin.vendorize({
            "transform": "scale(" + componentVars.start_scale + ")"
          }, vars.prefixes_transform),
          mixin.vendorize({
            "animation": "ripple " + vars.animation_curve_default
          }, vars.prefixes_animation),
          // default durations; finally set in js
          mixin.vendorize({
            "animation-duration": vars.animation_duration
          }, vars.prefixes_animation), {
            outline: "1px solid transparent", // for IE10
            position: "absolute",
            "border-radius": "50%",
            opacity: componentVars.start_opacity,
            "pointer-events": "none",
            display: "none"
          }
        ],
        " .pe-ripple__waves--animating": {
          display: "block"
        }
      }
    ],

    "@keyframes ripple": kfRipple(componentVars)
  }];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);

