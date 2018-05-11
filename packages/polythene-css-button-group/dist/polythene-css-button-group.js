(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-button-group')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-button-group'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-button-group']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreButtonGroup) { 'use strict';

  var classes = {
    component: "pe-button-group",

    // states
    separator: "pe-button-group--separator"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        display: "flex",

        " .pe-button": {
          minWidth: 0,

          ":not(:first-child)": {
            "&, .pe-button__content, .pe-button__wash, .pe-button__focus": {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0
            }
          },
          ":not(:last-child)": {
            "&, .pe-button__wash, .pe-button__focus": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        },

        ".pe-button-group--separator": {
          " .pe-button": {
            ":not(:first-child)": {
              " .pe-button__content": {
                borderStyle: "none none none solid"
              }
            }
          }
        }
      })];
    },
    separator_width: function separator_width(selector, vars) {
      return [sel(selector, {
        ".pe-button-group--separator": {
          " .pe-button": {
            ":not(:first-child)": {
              " .pe-button__content": {
                borderWidth: vars.separator_width + "px"
              }
            }
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
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty$1({}, "color_" + tint + "_separator", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-button": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_separator"]
          }
        }
      })];
    });
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreButtonGroup.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreButtonGroup.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreButtonGroup.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreButtonGroup.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-button-group.js.map
