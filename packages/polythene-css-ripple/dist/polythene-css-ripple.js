(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-ripple']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreRipple) { 'use strict';

  var classes = {
    component: "pe-ripple",

    // elements
    mask: "pe-ripple__mask",
    waves: "pe-ripple__waves",

    // states
    unconstrained: "pe-ripple--unconstrained",
    wavesAnimating: "pe-ripple__waves--animating"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var layout = (function (selector) {
    return [_defineProperty({}, selector, [polytheneCoreCss.mixin.fit(), {
      color: "inherit",
      borderRadius: "inherit",
      pointerEvents: "none",

      ":not(.pe-ripple--unconstrained)": {
        borderRadius: "inherit",

        " .pe-ripple__mask": {
          overflow: "hidden",
          borderRadius: "inherit"
        }
      },
      " .pe-ripple__mask": [polytheneCoreCss.mixin.fit(), {
        transform: "translate3d(0,0,0)"
      }],

      " .pe-ripple__waves": {
        outline: "1px solid transparent", // for IE10
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        display: "none"
      },
      " .pe-ripple__waves--animating": {
        display: "block"
      }
    }])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
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
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreRipple.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreRipple.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreRipple.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreRipple.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-ripple.js.map
