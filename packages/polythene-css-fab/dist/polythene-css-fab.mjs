import { textButtonColor, textButtonLayout } from 'polythene-css-button';
import { createColor, sel, createLayout, mixin, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1
      }
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars$$1) => [sel(selector, {
    " .pe-button__content": {
      color: vars$$1["color_" + tint]
    }
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-button__content": {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    }
  })],
  ["color_" + tint + "_focus_background"]: (selector, vars$$1) => [sel(selector, {
    ".pe-button--focus": {
      " .pe-button__focus": {
        backgroundColor: vars$$1["color_" + tint + "_focus_background"]
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
  },
  textButtonColor
});

const varFns = {
  general_styles: selector => [sel(selector, {
    userSelect: "none",
    "-moz-user-select": "none",
    display: "inline-block",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    padding: 0,
    border: "none",
    " .pe-button__content": {
      position: "relative",
      borderRadius: "50%"
    },
    " .pe-fab__content": {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    " .pe-button__wash, .pe-button__focus": [mixin.fit(), {
      borderRadius: "inherit"
    }],
    " .pe-ripple": {
      borderRadius: "inherit"
    },
    " .pe-button__wash": {
      transition: "background-color " + vars.animation_duration + " ease-in-out",
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }
  })],
  size_regular: (selector, vars$$1) => [sel(selector, {
    " .pe-button__content": {
      width: vars$$1.size_regular + "px",
      height: vars$$1.size_regular + "px"
    }
  })],
  size_mini: (selector, vars$$1) => [sel(selector, {
    ".pe-fab--mini": {
      " .pe-button__content": {
        width: vars$$1.size_mini + "px",
        height: vars$$1.size_mini + "px",
        padding: (vars$$1.size_mini - vars.unit_icon_size) / 2 + "px"
      }
    }
  })]
};
var layout = createLayout({
  varFns,
  textButtonLayout
});

var vars$1 = {
  general_styles: true,
  size_mini: 5 * vars.grid_unit_component,
  // 5 * 8 = 40
  size_regular: 7 * vars.grid_unit_component,
  // 7 * 8 = 56
  color_light: rgba(vars.color_primary_foreground),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_opacity: vars.blend_light_background_hover_medium,
  // same as button
  color_light_background: rgba(vars.color_primary),
  color_dark: rgba(vars.color_primary_foreground),
  color_dark_focus_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  // same as button
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
  // same as button
  color_dark_background: rgba(vars.color_primary)
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
