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

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var layout = (function (selector, componentVars) {
    return [_defineProperty({}, selector, {
      userSelect: "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",

      " .pe-button__content": {
        position: "relative",
        width: componentVars.size_regular + "px",
        height: componentVars.size_regular + "px",
        borderRadius: "50%",
        padding: componentVars.padding_regular + "px"
      },

      " .pe-button__wash, .pe-button__focus": [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit"
      }],

      ".pe-fab--mini": {
        " .pe-button__content": {
          width: componentVars.size_mini + "px",
          height: componentVars.size_mini + "px",
          padding: (componentVars.size_mini - polytheneTheme.vars.unit_icon_size) / 2 + "px"
        }
      },

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
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_background"],
        color: componentVars["color_" + tint]
      },

      "&.pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
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
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreFab.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreFab.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreFab.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreFab.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-fab.js.map
