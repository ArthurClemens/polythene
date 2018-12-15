import { sel, createColor, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-svg"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    color: "inherit",
    " svg": {
      color: "inherit",
      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: "currentcolor"
        }
      }
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [sel(selector, {
    " svg": {
      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: vars["color_" + tint]
        }
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  }
});

const varFns = {
  general_styles: selector => [sel(selector, {
    lineHeight: 1,
    " > div, svg": {
      width: "inherit",
      height: "inherit"
    }
  })]
};
var layout = createLayout({
  varFns
});

var vars = {
  general_styles: true,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

const fns = [layout, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars);
const getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export { addStyle, color, getStyle, layout, vars };
