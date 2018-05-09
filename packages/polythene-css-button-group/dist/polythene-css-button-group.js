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

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var layout = (function (selector) {
    return [_defineProperty({}, selector, [{
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
              borderStyle: "none none none solid",
              borderWidth: "1px"
            }
          }
        }
      }
    }])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      " .pe-button": {
        " .pe-button__content": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreButtonGroup.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreButtonGroup.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreButtonGroup.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreButtonGroup.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-button-group.js.map
