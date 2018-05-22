(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-css-raised-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-css-raised-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-css-raised-button']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCssRaisedButton) { 'use strict';

  var vars = {
    general_styles: true,

    size_mini: 5 * polytheneTheme.vars.grid_unit_component, // 5 * 8 = 40
    size_regular: 7 * polytheneTheme.vars.grid_unit_component, // 7 * 8 = 56

    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_foreground),
    color_light_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium, // same as button
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),

    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_foreground),
    color_dark_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover), // same as button
    color_dark_focus_opacity: polytheneTheme.vars.blend_dark_background_hover_medium, // same as button
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary)
  };

  var classes = {
    component: "pe-fab",

    // elements
    content: "pe-fab__content",

    // states
    mini: "pe-fab--mini"
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
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

        " .pe-button__wash, .pe-button__focus": [polytheneCoreCss.mixin.fit(), {
          borderRadius: "inherit"
        }],

        " .pe-ripple": {
          borderRadius: "inherit"
        },

        " .pe-button__wash": {
          transition: "background-color " + polytheneTheme.vars.animation_duration + " ease-in-out",
          borderRadius: "inherit",
          pointerEvents: "none",
          backgroundColor: "transparent"
        }
      })];
    },
    size_regular: function size_regular(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content": {
          width: vars.size_regular + "px",
          height: vars.size_regular + "px"
        }
      })];
    },
    size_mini: function size_mini(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-fab--mini": {
          " .pe-button__content": {
            width: vars.size_mini + "px",
            height: vars.size_mini + "px",
            padding: (vars.size_mini - polytheneTheme.vars.unit_icon_size) / 2 + "px"
          }
        }
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns, superLayout: polytheneCssRaisedButton.layout });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--focus": {
          " .pe-button__focus": {
            opacity: 1
          }
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content": {
          color: vars["color_" + tint]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

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
//# sourceMappingURL=polythene-css-fab.js.map
