import { mixin, styler } from "polythene-css";
import { vars } from "polythene-theme";

const shadowDirective = dir => (
  mixin.vendorize({
    "box-shadow": dir
  }, vars.prefixes_box_shadow)
);

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-shadow`;
  return [{
    [selector]: [
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
            "transition": componentVars.transition
          }, vars.prefixes_transition)
        }
      },

      [1, 2, 3, 4, 5].map(index => ({
        [" .pe-shadow__top.pe-shadow--z-" + index]: shadowDirective(componentVars["shadow-top-z-" + index]),
        [" .pe-shadow__bottom.pe-shadow--z-" + index]: shadowDirective(componentVars["shadow-bottom-z-" + index])
      }))
    ]
  }];
};

export default componentVars => styler.createStyles(componentVars, createStyles);
