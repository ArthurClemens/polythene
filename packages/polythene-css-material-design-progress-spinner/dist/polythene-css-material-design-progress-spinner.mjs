import { color, layout } from 'polythene-css-material-design-spinner';
import { vars } from 'polythene-theme';
import { sel, createColor, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    " .pe-md-progress-spinner__circle": {
      borderColor: "currentcolor"
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

const varFns = {
  general_styles: selector => [sel(selector, {
    position: "relative",
    " .pe-md-progress-spinner__animation": {
      position: "absolute",
      width: "100%",
      height: "100%"
    },
    " .pe-md-progress-spinner__circle": {
      position: "absolute",
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      borderStyle: "solid",
      borderRadius: "50%"
    },
    " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
      transform: "rotate(0)",
      clip: "rect(0, 0, 0, 0)"
    }
  })],
  progress_animation_duration: (selector, vars$$1) => [sel(selector, {
    " .pe-md-progress-spinner__animation": {
      animationDuration: vars$$1.progress_animation_duration
    }
  })]
};
var layout$1 = createLayout({
  varFns,
  superLayout: layout
});

var vars$1 = {
  general_styles: true,
  progress_animation_duration: ".8s",
  color_light: rgba(vars.color_primary),
  color_dark: rgba(vars.color_primary)
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
