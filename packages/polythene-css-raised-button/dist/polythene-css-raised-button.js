(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-raised-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-raised-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-raised-button']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreRaisedButton) { 'use strict';

  var classes = {
    component: "pe-button pe-text-button pe-raised-button"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
    var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
    var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
    return [_defineProperty({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      "&, &:link, &:visited": {
        color: componentVars["color_" + tint + "_text"]
      },

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_background"],
        borderColor: normalBorder
      },

      ".pe-button--disabled": {
        color: componentVars["color_" + tint + "_disabled_text"],

        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_disabled_background"],
          borderColor: disabledBorder
        }
      },

      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_active_background"],
          borderColor: activeBorder
        },
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
        }
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
        }
      }
    })];
  };

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
    var normalBorder = componentVars["color_" + tint + "_border"];
    var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
    return [_defineProperty({}, scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(","), {
      ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
        backgroundColor: componentVars["color_" + tint + "_hover_background"],
        borderColor: hoverBorder
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
    noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
    noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreRaisedButton.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreRaisedButton.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreRaisedButton.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreRaisedButton.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-raised-button.js.map
