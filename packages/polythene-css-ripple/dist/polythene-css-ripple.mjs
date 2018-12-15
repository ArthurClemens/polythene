import { sel, createColor, mixin, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-ripple",
  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",
  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    color: "inherit"
  })]
};

const tintFns = tint => ({
  ["color"]: (selector, vars) => [sel(selector, {
    color: vars["color"]
  })],
  ["color_" + tint]: (selector, vars) => [sel(selector, {
    color: vars["color_" + tint]
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
  general_styles: selector => [sel(selector, [mixin.fit(), {
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
    " .pe-ripple__mask": [mixin.fit(), {
      transform: "translate3d(0,0,0)"
    }],
    " .pe-ripple__waves": {
      outline: "1px solid transparent",
      // for IE10
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      display: "none"
    },
    " .pe-ripple__waves--animating": {
      display: "block"
    }
  }])]
};
var layout = createLayout({
  varFns
});

var vars = {
  general_styles: true,
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"

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
