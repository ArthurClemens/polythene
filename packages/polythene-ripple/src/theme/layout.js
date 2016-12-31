import { mixin } from "polythene-css";
import { vars } from "polythene-config";

const kfRipple = (config) => ({
  " 100%": {
    transform: "scale(" + config.end_scale + ")",
    "opacity": config.end_opacity
  }
});

const createStyles = (config) => {
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
            "transform": "scale(" + config.start_scale + ")"
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
            opacity: config.start_opacity,
            "pointer-events": "none",
            display: "none"
          }
        ],
        " .pe-ripple__waves--animating": {
          display: "block"
        }
      }
    ],

    "@keyframes ripple": kfRipple(config)
  }];
};

export default (config) => (mixin.createStyles(config, createStyles));

