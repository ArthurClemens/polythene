import { createColor, sel, createLayout, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        backgroundColor: "currentcolor"
      }
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars$$1) => [sel(selector, {
    "&, .pe-icon-button__label": {
      color: vars$$1["color_" + tint]
    }
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__content": {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    }
  })],
  ["color_" + tint + "_wash_opacity"]: (selector, vars$$1) => [sel(selector, {
    opacity: vars$$1["color_" + tint + "_wash_opacity"]
  })],
  ["color_" + tint + "_focus_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: vars$$1["color_" + tint + "_focus_opacity"]
      }
    }
  })],
  ["color_" + tint + "_disabled"]: (selector, vars$$1) => [sel(selector, {
    ".pe-button--disabled": {
      " .pe-button__content, .pe-icon-button__label": {
        color: vars$$1["color_" + tint + "_disabled"]
      }
    }
  })]
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_hover"]: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__content": {
      color: vars$$1["color_" + tint + "_hover"]
    }
  })],
  ["color_" + tint + "_label_hover"]: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__label": {
      color: vars$$1["color_" + tint + "_label_hover"]
    }
  })],
  ["color_" + tint + "_background_hover"]: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__content": {
      backgroundColor: vars$$1["color_" + tint + "_background_hover"]
    }
  })],
  ["color_" + tint + "_wash_background"]: (selector, vars$$1) => [sel(selector, {
    ":not(.pe-button--disabled):not(.pe-button--selected)": {
      " .pe-button__wash": {
        backgroundColor: vars$$1["color_" + tint + "_wash_background"]
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns,
    lightTintHoverFns,
    darkTintHoverFns
  }
});

const alignSide = isRTL => vars$$1 => ({}); // eslint-disable-line no-unused-vars


const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const label_padding_before = (selector, vars$$1, isRTL) => sel(selector, {
  " .pe-icon-button__label": {
    [isRTL ? "paddingRight" : "paddingLeft"]: vars$$1.label_padding_before + "px"
  }
});

const label_padding_after = (selector, vars$$1, isRTL) => sel(selector, {
  " .pe-icon-button__label": {
    [isRTL ? "paddingLeft" : "paddingRight"]: vars$$1.label_padding_after + "px"
  }
});

const varFns = {
  general_styles: (selector, vars$$1) => [sel(selector, [alignLeft(vars$$1), {
    // don't set button size to facilitate different icon sizes
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    " .pe-button__content": {
      display: "flex",
      alignItems: "center",
      fontSize: "1rem",
      borderRadius: "50%",
      position: "relative"
    },
    " .pe-icon-button__content": {
      lineHeight: 1,
      borderRadius: "50%",
      pointerEvents: "none"
    }
  }, {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight(vars$$1)]
  }])],
  padding: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__content": {
      padding: vars$$1.padding + "px"
    }
  })],
  padding_compact: (selector, vars$$1) => [sel(selector, {
    ".pe-icon-button--compact": {
      " .pe-icon-button__content": {
        padding: vars$$1.padding_compact + "px"
      }
    }
  })],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars$$1.animation_duration)]
  })],
  label_font_size: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__label": {
      fontSize: vars$$1.label_font_size + "px"
    }
  })],
  label_line_height: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__label": {
      lineHeight: vars$$1.label_line_height + "px"
    }
  })],
  label_font_weight: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__label": {
      fontWeight: vars$$1.label_font_weight
    }
  })],
  label_text_transform: (selector, vars$$1) => [sel(selector, {
    " .pe-icon-button__label": {
      textTransform: vars$$1.label_text_transform
    }
  })],
  label_padding_after: (selector, vars$$1) => [sel(selector, {}), label_padding_after(selector, vars$$1, false), label_padding_after(selectorRTL(selector), vars$$1, true)],
  label_padding_before: (selector, vars$$1) => [sel(selector, {}), label_padding_before(selector, vars$$1, false), label_padding_before(selectorRTL(selector), vars$$1, true)]
};
var layout = createLayout({
  varFns
});

var vars$1 = {
  general_styles: true,
  animation_duration: vars.animation_duration,
  label_font_size: 16,
  label_font_weight: 400,
  label_line_height: 20,
  label_padding_after: 0,
  label_padding_before: vars.grid_unit * 1,
  // 4
  label_text_transform: "initial",
  label_top_margin_factor: 1 / 12,
  // align with icon
  padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2,
  // 12
  padding_compact: (vars.grid_unit_icon_button - vars.unit_icon_size) / 3,
  // 8
  color_background: "transparent",
  // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",
  // color_light_hover:         "inherit",
  // color_dark_hover:          "inherit",
  // color_light_label_hover:   "inherit",
  // color_dark_label_hover:    "inherit",
  color_light: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_focus_opacity: vars.blend_light_background_hover_medium,
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_dark: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_focus_opacity: vars.blend_dark_background_hover_medium,
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover) // hover colors may be set in theme; disabled by default
  // color_light_background_hover:         "currentColor",
  // color_dark_background_hover:          "currentColor",

};

const fns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
