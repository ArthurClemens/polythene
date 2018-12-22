import { color, layout } from 'polythene-css-base-spinner';
import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { styleDurationToMs } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    " .pe-ios-spinner__blade": {
      background: "currentcolor"
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars$$1) => [sel(selector, {
    color: vars$$1["color_" + tint]
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color$1 = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  },
  superColor: color
});

const bladeWidth = 9; // percent

const bladeHeight = 28; // percent

const kfFade = () => ({
  " 0%": {
    opacity: .640
  },
  " 100%": {
    opacity: .035
  }
});

const positionBlades = vars$$1 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
  // reverse to improve performance on iOS
  const delay = -1 / 12 * i * styleDurationToMs(vars$$1.rotation_animation_duration);
  const rotation = 360 - 360 / 12 * i;
  return {
    [" .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")"]: {
      transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
      animation: "iosSpinnerFade " + vars$$1.rotation_animation_duration + " " + delay + "ms linear infinite"
    }
  };
});

const varFns = {
  general_styles: selector => [sel(selector, {
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
      left: (100 - bladeWidth) / 2 + "%",
      top: (100 - bladeHeight) / 2 + "%",
      opacity: 0,
      borderRadius: "50px"
    },
    "@keyframes iosSpinnerFade": kfFade()
  })],
  rotation_animation_duration: (selector, vars$$1) => [sel(selector, {
    " .pe-ios-spinner__blades": [positionBlades(vars$$1)]
  })]
};
var layout$1 = createLayout({
  varFns,
  superLayout: layout
});

var vars$1 = {
  general_styles: true,
  rotation_animation_duration: "1s",
  color_light: rgba(vars.color_light_foreground),
  color_dark: rgba(vars.color_dark_foreground)
};

const fns = [layout$1, color$1];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color$1 as color, getStyle, layout$1 as layout, vars$1 as vars };
