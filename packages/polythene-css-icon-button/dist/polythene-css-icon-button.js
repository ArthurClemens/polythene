(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-button pe-icon-button",
    // elements
    content: "pe-icon-button__content",
    label: "pe-icon-button__label",
    // states
    compact: "pe-icon-button--compact"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "&, .pe-icon-button__label": {
        color: vars["color_" + tint]
      }
    })],
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })],
    ["color_" + tint + "_wash_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      opacity: vars["color_" + tint + "_wash_opacity"]
    })],
    ["color_" + tint + "_focus_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_opacity"]
        }
      }
    })],
    ["color_" + tint + "_disabled"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars["color_" + tint + "_disabled"]
        }
      }
    })]
  });

  const hoverTintFns = tint => ({
    ["color_" + tint + "_hover"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__content": {
        color: vars["color_" + tint + "_hover"]
      }
    })],
    ["color_" + tint + "_label_hover"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": {
        color: vars["color_" + tint + "_label_hover"]
      }
    })],
    ["color_" + tint + "_background_hover"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars["color_" + tint + "_background_hover"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  const lightTintHoverFns = hoverTintFns("light");
  const darkTintHoverFns = hoverTintFns("dark");
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns,
      lightTintHoverFns,
      darkTintHoverFns
    }
  });

  const alignSide = isRTL => vars => ({}); // eslint-disable-line no-unused-vars


  const alignLeft = alignSide(false);
  const alignRight = alignSide(true);

  const label_padding_before = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-icon-button__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: vars.label_padding_before + "px"
    }
  });

  const label_padding_after = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-icon-button__label": {
      [isRTL ? "paddingLeft" : "paddingRight"]: vars.label_padding_after + "px"
    }
  });

  const varFns = {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, [alignLeft(vars), {
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
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight(vars)]
    }])],
    padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__content": {
        padding: vars.padding + "px"
      }
    })],
    padding_compact: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars.padding_compact + "px"
        }
      }
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
    })],
    label_font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": {
        fontSize: vars.label_font_size + "px"
      }
    })],
    label_line_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars.label_line_height + "px"
      }
    })],
    label_font_weight: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars.label_font_weight
      }
    })],
    label_text_transform: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": {
        textTransform: vars.label_text_transform
      }
    })],
    label_padding_after: (selector, vars) => [polytheneCoreCss.sel(selector, {}), label_padding_after(selector, vars, false), label_padding_after(polytheneCoreCss.selectorRTL(selector), vars, true)],
    label_padding_before: (selector, vars) => [polytheneCoreCss.sel(selector, {}), label_padding_before(selector, vars, false), label_padding_before(polytheneCoreCss.selectorRTL(selector), vars, true)]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    animation_duration: polytheneTheme.vars.animation_duration,
    label_font_size: 16,
    label_font_weight: 400,
    label_line_height: 20,
    label_padding_after: 0,
    label_padding_before: polytheneTheme.vars.grid_unit * 1,
    // 4
    label_text_transform: "initial",
    label_top_margin_factor: 1 / 12,
    // align with icon
    padding: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2,
    // 12
    padding_compact: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 3,
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
    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium,
    color_light_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_focus_opacity: polytheneTheme.vars.blend_dark_background_hover_medium,
    color_dark_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover) // hover colors may be set in theme; disabled by default
    // color_light_background_hover:         "currentColor",
    // color_dark_background_hover:          "currentColor",

  };

  const fns = [layout, color];
  const selector = `.${classes.component.replace(/ /g, ".")}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon-button.js.map
