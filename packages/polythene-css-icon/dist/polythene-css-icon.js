(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    size_small: polytheneTheme.vars.unit_icon_size_small,
    size_regular: polytheneTheme.vars.unit_icon_size,
    size_medium: polytheneTheme.vars.unit_icon_size_medium,
    size_large: polytheneTheme.vars.unit_icon_size_large,

    // avatar background is visible when image is not yet loaded
    color_light_avatar_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_dark_avatar_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),

    color_light: "currentcolor",
    color_dark: "currentcolor"
  };

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

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var sizeDirective = function sizeDirective(size) {
    return function (selector, vars) {
      return sel(selector, _defineProperty({}, ".pe-icon--" + size, {
        width: vars["size_" + size] + "px",
        height: vars["size_" + size] + "px"
      }));
    };
  };

  var varFns = _extends({}, {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
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

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [sel$1(selector, {
        color: "currentColor"
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint, function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_avatar_background", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-icon--avatar": {
          backgroundColor: vars["color_" + tint + "_avatar_background"]
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
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
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
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
//# sourceMappingURL=polythene-css-icon.js.map
