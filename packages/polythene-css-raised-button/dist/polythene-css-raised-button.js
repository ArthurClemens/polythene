(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-css-button'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-css-button', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global.polytheneTheme,global['polythene-css-button'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCssButton,polytheneCoreCss) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    // Override Button:
    padding_h: 4 * polytheneTheme.vars.grid_unit, // 16

    color_light_background: "#fff",
    color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_wash_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_focus_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_active_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover), // same as hover
    color_light_disabled_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_disabled_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),

    color_dark_background: rgba(polytheneTheme.vars.color_primary),
    color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_wash_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_focus_background: rgba(polytheneTheme.vars.color_primary_active),
    color_dark_active_background: rgba(polytheneTheme.vars.color_primary_dark),
    color_dark_disabled_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
    color_dark_disabled_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled)

    // hover colors may be set in theme; disabled by default

    // color_light_hover_background:    "transparent",
    // color_dark_hover_background:     vars.color_primary_active,
  };

  var classes = {
    component: "pe-button pe-text-button pe-raised-button"
  };

  // Only used for theme styles

  var layout = (function (selector, componentVars, customVars) {
    return polytheneCssButton.layout(selector, componentVars, customVars);
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        ".pe-button--focus": {
          " .pe-button__focus": {
            opacity: 1
          }
        },
        ".pe-button--selected": {
          " .pe-button__focus": {
            opacity: 1
          }
        },
        " .pe-button__content": {
          borderColor: "transparent"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_text", function (selector, vars) {
      return [sel(selector, {
        ":not(.pe-button--disabled)": {
          "&, &:link, &:visited": {
            color: vars["color_" + tint + "_text"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_border", function (selector, vars) {
      return [sel(selector, {
        ":not(.pe-button--disabled)": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel(selector, {
        ":not(.pe-button--disabled)": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_disabled_text", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--disabled": {
          color: vars["color_" + tint + "_disabled_text"]
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_disabled_border", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--disabled": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_disabled_border"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_disabled_background", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--disabled": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_disabled_background"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_active_border", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--selected": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_active_border"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_active_background", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_active_background"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_focus_background", function (selector, vars) {
      return [sel(selector, {
        ".pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
        },
        ".pe-button--selected": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
    polytheneCssButton.noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
    polytheneCssButton.noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
  });

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
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-raised-button.js.map
