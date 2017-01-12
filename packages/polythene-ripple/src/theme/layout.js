import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

export default selector => [{
  [selector]: [
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

      " .pe-ripple__waves": {
        outline: "1px solid transparent", // for IE10
        position: "absolute",
        "border-radius": "50%",
        "pointer-events": "none",
        display: "none"
      },
      " .pe-ripple__waves--animating": {
        display: "block"
      }
    }
  ]
}];
