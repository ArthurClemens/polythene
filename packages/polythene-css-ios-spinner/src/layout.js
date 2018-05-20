import { layout as baseSpinnerLayout } from "polythene-css-base-spinner";
import { styleDurationToMs } from "polythene-core";

const sel = (selector, o) => ({
  [selector]: o
});

const bladeWidth  = 9; // percent
const bladeHeight = 28; // percent

const kfFade = () => ({
  " 0%": {
    opacity: .640
  },
  " 100%": {
    opacity: .035
  }
});

const positionBlades = vars => 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
    // reverse to improve performance on iOS
    const delay = -1 / 12 * i * styleDurationToMs(vars.rotation_animation_duration);
    const rotation = 360 - (360 / 12 * i);
    return {
      [" .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")"]: {
        transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
        animation: "iosSpinnerFade " + vars.rotation_animation_duration + " " + delay + "ms linear infinite"
      }
    };
  });

const varFns = {
  general_styles: selector => [
    sel(selector, {
      " .pe-ios-spinner__blades": {
        transform: "translate3d(0,0,0)",
        position: "relative",
        width: "100%",
        height: "100%"
      },

      " .pe-ios-spinner__blade": {
        position: "absolute",
        width: bladeWidth + "%",
        height: bladeHeight + "%",
        left: ((100 - bladeWidth) / 2) + "%",
        top: ((100 - bladeHeight) / 2) + "%",
        opacity: 0,
        borderRadius: "50px"
      },

      "@keyframes iosSpinnerFade": kfFade()
    })
  ],
  rotation_animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-ios-spinner__blades": [
        positionBlades(vars),
      ],
    })
  ],
};

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return baseSpinnerLayout(selector, componentVars, customVars)
    .concat(Object.keys(currentVars)
      .map(v => (
        varFns[v] !== undefined 
          ? varFns[v](selector, allVars)
          : null
      ))
      .filter(s => s)
    );
};
