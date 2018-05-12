(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css'), require('polythene-core-fab')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css', 'polythene-core-fab'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css'],global['polythene-core-fab']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss,polytheneCoreFab) { 'use strict';

  var classes = {
    component: "pe-fab",

    // elements
    content: "pe-fab__content",

    // states
    mini: "pe-fab--mini"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
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
    padding_regular: function padding_regular(selector, vars) {
      return [sel(selector, {
        " .pe-button__content": {
          padding: vars.padding_regular + "px"
        }
      })];
    },
    size_regular: function size_regular(selector, vars) {
      return [sel(selector, {
        " .pe-button__content": {
          width: vars.size_regular + "px",
          height: vars.size_regular + "px"
        }
      })];
    },
    size_mini: function size_mini(selector, vars) {
      return [sel(selector, {
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
        ".pe-button--focus": {
          " .pe-button__focus": {
            opacity: 1
          }
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint, function (selector, vars) {
      return [sel$1(selector, {
        " .pe-button__content": {
          color: vars["color_" + tint]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_background", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreFab.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreFab.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreFab.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreFab.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-fab.js.map
