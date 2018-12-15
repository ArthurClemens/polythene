import { vars } from 'polythene-theme';
import { sel, createColor, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    color: "currentColor"
  })]
};

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars$$1) => [sel(selector, {
    color: vars$$1["color_" + tint]
  })],
  ["color_" + tint + "_avatar_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-icon--avatar": {
      backgroundColor: vars$$1["color_" + tint + "_avatar_background"]
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

const sizeDirective = size => (selector, vars$$1) => sel(selector, {
  [`.pe-icon--${size}`]: {
    width: vars$$1[`size_${size}`] + "px",
    height: vars$$1[`size_${size}`] + "px"
  }
});

const varFns = Object.assign({}, {
  general_styles: selector => [sel(selector, {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,
    ".pe-icon--avatar": {
      borderRadius: "50%"
    },
    ".pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "inherit",
      height: "inherit"
    },
    " img": {
      height: "inherit"
    },
    " .pe-svg, .pe-svg > div": {
      /* React creates an additional div when wrapping an SVG */
      width: "inherit",
      height: "inherit"
    }
  })]
}, ["small", "regular", "medium", "large"].reduce((acc, size) => (acc[`size_${size}`] = sizeDirective(size), acc), {}));
var layout = createLayout({
  varFns
});

var vars$1 = {
  general_styles: true,
  size_small: vars.unit_icon_size_small,
  // 16 
  size_regular: vars.unit_icon_size,
  // 24
  size_medium: vars.unit_icon_size_medium,
  // 32
  size_large: vars.unit_icon_size_large,
  // 40
  // avatar background is visible when image is not yet loaded
  color_light_avatar_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_dark_avatar_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_light: "currentcolor",
  color_dark: "currentcolor"
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
