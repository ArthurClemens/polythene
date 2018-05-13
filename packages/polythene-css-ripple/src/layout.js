import { mixin } from "polythene-core-css";

const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, [
      mixin.fit(),
      {
        color: "inherit",
        borderRadius: "inherit",
        pointerEvents: "none",
        
        ":not(.pe-ripple--unconstrained)": {
          borderRadius: "inherit",

          " .pe-ripple__mask": {
            overflow: "hidden",
            borderRadius: "inherit"
          }
        },
        " .pe-ripple__mask": [
          mixin.fit(),
          {
            transform: "translate3d(0,0,0)"
          }
        ],

        " .pe-ripple__waves": {
          outline: "1px solid transparent", // for IE10
          position: "absolute",
          borderRadius: "50%",
          pointerEvents: "none",
          display: "none"
        },
        " .pe-ripple__waves--animating": {
          display: "block"
        }
      }
    ])
  ],
};

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
