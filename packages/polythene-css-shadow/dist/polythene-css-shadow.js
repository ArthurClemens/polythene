(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-shadow']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreShadow) { 'use strict';

  var classes = {
    component: "pe-shadow",

    // elements
    bottomShadow: "pe-shadow__bottom",
    topShadow: "pe-shadow__top",

    // states
    animated: "pe-shadow--animated",
    depth_n: "pe-shadow--z-"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var shadowDirective = function shadowDirective(dir) {
    return {
      boxShadow: dir
    };
  };

  var layout = (function (selector, componentVars) {
    return [_defineProperty({}, selector, [polytheneCoreCss.mixin.fit(), {
      borderRadius: "inherit",
      pointerEvents: "none",

      " .pe-shadow__bottom, .pe-shadow__top": [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit"
      }],

      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: componentVars.transition
        }
      }
    }, [1, 2, 3, 4, 5].map(function (index) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-top-z-" + index])), _defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-bottom-z-" + index])), _ref;
    })])];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreShadow.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreShadow.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreShadow.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreShadow.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-shadow.js.map
