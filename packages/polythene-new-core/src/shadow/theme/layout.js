import { mixin } from "polythene-css";

const shadowDirective = dir => ({
  boxShadow: dir
});

export default (selector, componentVars) => [{
  [selector]: [
    mixin.fit(), {
      borderRadius: "inherit",
      pointerEvents: "none",

      " .pe-shadow__bottom, .pe-shadow__top": [
        mixin.fit(), {
          borderRadius: "inherit"
        }
      ],

      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: componentVars.transition
        }
      }
    },

    [1, 2, 3, 4, 5].map(index => ({
      [" .pe-shadow__top.pe-shadow--z-"    + index]: shadowDirective(componentVars["shadow-top-z-"    + index]),
      [" .pe-shadow__bottom.pe-shadow--z-" + index]: shadowDirective(componentVars["shadow-bottom-z-" + index])
    }))
  ]
}];
