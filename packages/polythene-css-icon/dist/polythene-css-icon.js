(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-icon",

    // states
    avatar: "pe-icon--avatar",
    large: "pe-icon--large",
    medium: "pe-icon--medium",
    regular: "pe-icon--regular",
    small: "pe-icon--small"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        color: "currentColor"
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint, function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color_" + tint]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_avatar_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-icon--avatar": {
          backgroundColor: vars["color_" + tint + "_avatar_background"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sizeDirective = function sizeDirective(size) {
    return function (selector, vars) {
      return polytheneCoreCss.sel(selector, _defineProperty$1({}, ".pe-icon--" + size, {
        width: vars["size_" + size] + "px",
        height: vars["size_" + size] + "px"
      }));
    };
  };

  var varFns = _extends$1({}, {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
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

        " .pe-svg, .pe-svg > div": { /* React creates an additional div when wrapping an SVG */
          width: "inherit",
          height: "inherit"
        }
      })];
    }
  }, ["small", "regular", "medium", "large"].reduce(function (acc, size) {
    return acc["size_" + size] = sizeDirective(size), acc;
  }, {}));

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    size_small: polytheneTheme.vars.unit_icon_size_small,
    size_regular: polytheneTheme.vars.unit_icon_size,
    size_medium: polytheneTheme.vars.unit_icon_size_medium,
    size_large: polytheneTheme.vars.unit_icon_size_large,

    // avatar background is visible when image is not yet loaded
    color_light_avatar_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_dark_avatar_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),

    color_light: "currentcolor",
    color_dark: "currentcolor"
  };

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
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon.js.map
