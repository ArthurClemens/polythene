import { mixin } from "polythene-css";
import { vars } from "polythene-config";

const shadowDirective = (dir) => {
  return mixin.vendorize({
    "box-shadow": dir
  }, vars.prefixes_box_shadow);
};

const createStyles = (config) => {
  return [{
    ".pe-shadow": [
      mixin.fit(), {
        "border-radius": "inherit",
        "pointer-events": "none",

        " .pe-shadow__bottom, .pe-shadow__top": [
          mixin.fit(), {
            "border-radius": "inherit"
          }
        ],

        "&.pe-shadow--animated": {
          " .pe-shadow__bottom, .pe-shadow__top": mixin.vendorize({
            "transition": config.transition
          }, vars.prefixes_transition)
        }
      },

      [1, 2, 3, 4, 5].map(index => ({
        [" .pe-shadow__top.pe-shadow--z-" + index]: shadowDirective(config["shadow-top-z-" + index]),
        [" .pe-shadow__bottom.pe-shadow--z-" + index]: shadowDirective(config["shadow-bottom-z-" + index])
      }))
    ]
  }];
};

export default (config) => (mixin.createStyles(config, createStyles));
