(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-button pe-icon-button",

    // elements
    content: "pe-icon-button__content",
    label: "pe-icon-button__label",

    // states
    compact: "pe-icon-button--compact"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--focus, &.pe-button--selected": {
          " .pe-button__focus": {
            backgroundColor: "currentcolor"
          }
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-icon-button__label": {
          color: vars["color_" + tint]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        opacity: vars["color_" + tint + "_wash_opacity"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_focus_opacity", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--focus, &.pe-button--selected": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_opacity"]
          }
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--disabled": {
          " .pe-button__content, .pe-icon-button__label": {
            color: vars["color_" + tint + "_disabled"]
          }
        }
      })];
    }), _ref;
  };

  var hoverTintFns = function hoverTintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__content": {
          color: vars["color_" + tint + "_hover"]
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_label_hover", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__label": {
          color: vars["color_" + tint + "_label_hover"]
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_background_hover", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__content": {
          backgroundColor: vars["color_" + tint + "_background_hover"]
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var lightTintHoverFns = hoverTintFns("light");
  var darkTintHoverFns = hoverTintFns("dark");

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (vars) {
      return {};
    };
  }; // eslint-disable-line no-unused-vars
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var _label_padding_before = function _label_padding_before(selector, vars, isRTL) {
    return polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
    });
  };

  var _label_padding_after = function _label_padding_after(selector, vars, isRTL) {
    return polytheneCoreCss.sel(selector, {
      " .pe-icon-button__label": _defineProperty$1({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
    });
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [polytheneCoreCss.sel(selector, [alignLeft(vars), {
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
      }, _defineProperty$1({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars)])])];
    },
    padding: function padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__content": {
          padding: vars.padding + "px"
        }
      })];
    },
    padding_compact: function padding_compact(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-icon-button--compact": {
          " .pe-icon-button__content": {
            padding: vars.padding_compact + "px"
          }
        }
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
      })];
    },
    label_font_size: function label_font_size(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__label": {
          fontSize: vars.label_font_size + "px"
        }
      })];
    },
    label_line_height: function label_line_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__label": {
          lineHeight: vars.label_line_height + "px"
        }
      })];
    },
    label_font_weight: function label_font_weight(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__label": {
          fontWeight: vars.label_font_weight
        }
      })];
    },
    label_text_transform: function label_text_transform(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-icon-button__label": {
          textTransform: vars.label_text_transform
        }
      })];
    },
    label_padding_after: function label_padding_after(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(polytheneCoreCss.selectorRTL(selector), vars, true)];
    },
    label_padding_before: function label_padding_before(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(polytheneCoreCss.selectorRTL(selector), vars, true)];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    animation_duration: polytheneTheme.vars.animation_duration,
    label_font_size: 16,
    label_font_weight: 400,
    label_line_height: 20,
    label_padding_after: 0,
    label_padding_before: polytheneTheme.vars.grid_unit * 1, // 4
    label_text_transform: "initial",
    label_top_margin_factor: 1 / 12, // align with icon
    padding: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2, // 12
    padding_compact: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 3, // 8

    color_background: "transparent", // only specify this variable to get all 2 states
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
    color_dark_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover)

    // hover colors may be set in theme; disabled by default

    // color_light_background_hover:         "currentColor",
    // color_dark_background_hover:          "currentColor",
  };

  var fns = [layout, color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon-button.js.map
