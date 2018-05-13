(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-icon')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-icon'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-icon']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreIcon) { 'use strict';

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

  // import { vars as defaultVars } from "polythene-theme";

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
    // size_small: (selector, vars) => [
    //   sel(selector, {
    //     ".pe-icon--small": iconSize(vars.size_small),
    //   })
    // ],
    // size_regular: (selector, vars) => [
    //   sel(selector, {
    //     ".pe-icon--regular": iconSize(vars.size_regular),
    //   })
    // ],
    // size_medium: (selector, vars) => [
    //   sel(selector, {
    //     ".pe-icon--medium": iconSize(vars.size_medium),
    //   })
    // ],
    // size_large: (selector, vars) => [
    //   sel(selector, {
    //     ".pe-icon--large": iconSize(vars.size_large),
    //   })
    // ],
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreIcon.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreIcon.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreIcon.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreIcon.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon.js.map
