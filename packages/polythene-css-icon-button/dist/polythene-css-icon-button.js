(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-css-button'), require('polythene-core-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-css-button', 'polythene-core-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-css-button'],global['polythene-core-icon-button']));
}(this, (function (exports,polytheneCoreCss,polytheneCssButton,polytheneCoreIconButton) { 'use strict';

  var classes = {
    component: "pe-button pe-icon-button",

    // elements
    content: "pe-icon-button__content",
    label: "pe-icon-button__label",

    // states
    compact: "pe-icon-button--compact"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (componentVars) {
      var _peIconButton__la;

      return {
        " .pe-icon-button__label": (_peIconButton__la = {}, _defineProperty(_peIconButton__la, isRTL ? "paddingLeft" : "paddingRight", componentVars.label_padding_after + "px"), _defineProperty(_peIconButton__la, isRTL ? "paddingRight" : "paddingLeft", componentVars.label_padding_before + "px"), _peIconButton__la)
      };
    };
  };

  var alignLeft = alignSide(false);

  var alignRight = alignSide(true);

  var layout = (function (selector, componentVars) {
    return [_defineProperty({}, selector, [alignLeft(componentVars), {
      // don't set button size to facilitate different icon sizes
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",

      " .pe-button__content": {
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        position: "relative"
      },

      " .pe-icon-button__content": {
        lineHeight: 1,
        padding: componentVars.padding + "px",
        borderRadius: "50%",
        pointerEvents: "none"
      },

      " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", componentVars.animation_duration)],

      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: componentVars.padding_compact + "px"
        }
      },

      " .pe-icon-button__label": {
        fontSize: componentVars.label_font_size + "px",
        lineHeight: componentVars.label_font_size + "px",
        fontWeight: componentVars.label_font_weight,
        textTransform: componentVars.label_text_transform
      }
    }]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(componentVars)])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {

      "&, .pe-icon-button__label": {
        color: componentVars["color_" + tint]
      },

      " .pe-icon-button__content": {
        backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"]
      },

      " .pe-button__wash": {
        opacity: componentVars["color_" + tint + "_wash_opacity"]
      },

      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_opacity"],
          backgroundColor: "currentcolor"
        }
      },

      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: componentVars["color_" + tint + "_disabled"]
        }
      }
    })];
  };

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
    return polytheneCssButton.noTouchStyle(scopes, selector, componentVars, tint).concat([_defineProperty$1({}, [].concat(scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(",")).concat(scopes.map(function (s) {
      return s + selector + ":active";
    }).join(",")), {
      ":not(.pe-button--selected):not(.pe-button--inactive)": {
        " .pe-icon-button__label": {
          color: componentVars["color_" + tint + "_label_hover"]
        }
      }
    })]);
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
    noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
    noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreIconButton.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreIconButton.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreIconButton.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreIconButton.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon-button.js.map
