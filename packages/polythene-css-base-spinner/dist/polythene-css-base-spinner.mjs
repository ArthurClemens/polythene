import { vars } from 'polythene-theme';
import { sel, createColor, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

const generalFns = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns = tint => ({
  ["color_" + tint + "_raised_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--raised": {
      backgroundColor: vars$$1["color_" + tint + "_raised_background"]
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

const sizes = size => ({
  width: size + "px",
  height: size + "px"
});

const raisedSize = size => {
  const padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues

  const paddedSize = size + padding * 2;
  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

const varFns = {
  general_styles: selector => [sel(selector, {
    transitionProperty: "all",
    ".pe-spinner--raised": {
      position: "relative",
      borderRadius: "50%"
    }
  })],
  animation_show_css: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--visible, &.pe-spinner--permanent": [vars$$1.animation_show_css]
  })],
  animation_hide_css: (selector, vars$$1) => ({
    [selector]: vars$$1.animation_hide_css
  }),
  animation_delay: (selector, vars$$1) => [sel(selector, {
    transitionDelay: vars$$1.animation_delay
  })],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    transitionDuration: vars$$1.animation_duration
  })],
  animation_timing_function: (selector, vars$$1) => [sel(selector, {
    transitionTimingFunction: vars$$1.animation_timing_function
  })],
  size_small: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--small": sizes(vars$$1.size_small),
    ".pe-spinner--raised": {
      ".pe-spinner--small": raisedSize(vars$$1.size_small)
    }
  })],
  size_regular: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--regular": sizes(vars$$1.size_regular),
    ".pe-spinner--raised": {
      ".pe-spinner--regular": raisedSize(vars$$1.size_regular)
    }
  })],
  size_medium: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--medium": sizes(vars$$1.size_medium),
    ".pe-spinner--raised": {
      ".pe-spinner--medium": raisedSize(vars$$1.size_medium)
    }
  })],
  size_large: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--large": sizes(vars$$1.size_large),
    ".pe-spinner--raised": {
      ".pe-spinner--large": raisedSize(vars$$1.size_large)
    }
  })],
  size_fab: (selector, vars$$1) => [sel(selector, {
    ".pe-spinner--fab": sizes(vars$$1.size_fab),
    ".pe-spinner--raised": {
      ".pe-spinner--fab": raisedSize(vars$$1.size_fab)
    }
  })]
};
var layout = createLayout({
  varFns
});

var vars$1 = {
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  size_fab: 7 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_small: 3 * vars.grid_unit_component,
  color_light_raised_background: rgba(vars.color_light_background),
  color_dark_raised_background: rgba(vars.color_light_background) // also use light background with dark tone

};

const fns = [layout, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
