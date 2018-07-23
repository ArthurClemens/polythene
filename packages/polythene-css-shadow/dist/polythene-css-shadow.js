(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-shadow",

    // elements
    bottomShadow: "pe-shadow__bottom",
    topShadow: "pe-shadow__top",

    // states
    animated: "pe-shadow--animated",
    depth_n: "pe-shadow--depth-"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _createShadowForSelector = function _createShadowForSelector(which, depth) {
    return function (selector, vars) {
      return polytheneCoreCss.sel(selector, _defineProperty({}, " .pe-shadow__" + which + ".pe-shadow--depth-" + depth, {
        boxShadow: vars["shadow_" + which + "_depth_" + depth]
      }));
    };
  };

  var _createShadow = function _createShadow(selector, vars, depth, which) {
    return polytheneCoreCss.sel(selector, _defineProperty({}, " .pe-shadow__" + which, {
      boxShadow: vars["shadow_" + which + "_depth_" + depth]
    }));
  };

  var shadow = function shadow(selector, vars, depth) {
    return [_createShadow(selector, vars, depth, "top"), _createShadow(selector, vars, depth, "bottom")];
  };

  var shadow_depth = function shadow_depth(selector, vars) {
    return vars.shadow_depth !== undefined ? shadow(selector, vars, vars.shadow_depth) : null;
  };

  var sharedVarFns = {
    shadow_depth: shadow_depth
  };

  var varFns = _extends({}, {
    general_styles: function general_styles(selector, vars) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.mixin.fit(), shadow(selector, vars, 1), {
        borderRadius: "inherit",
        pointerEvents: "none",

        " .pe-shadow__bottom, .pe-shadow__top": [polytheneCoreCss.mixin.fit(), {
          borderRadius: "inherit"
        }]
      }])];
    },
    transition: function transition(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-shadow--animated": {
          " .pe-shadow__bottom, .pe-shadow__top": {
            transition: vars.transition
          }
        }
      })];
    },
    shadow_depth: shadow_depth
  }, [0, 1, 2, 3, 4, 5].reduce(function (acc, depth) {
    return acc["shadow_top_depth_" + depth] = _createShadowForSelector("top", depth), acc["shadow_bottom_depth_" + depth] = _createShadowForSelector("bottom", depth), acc;
  }, {}));

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var sharedVars = {
    shadow_top_depth_0: "none",
    shadow_bottom_depth_0: "none",

    shadow_top_depth_1: "none",
    shadow_bottom_depth_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

    shadow_top_depth_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
    shadow_bottom_depth_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

    shadow_top_depth_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
    shadow_bottom_depth_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

    shadow_top_depth_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
    shadow_bottom_depth_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

    shadow_top_depth_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
    shadow_bottom_depth_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

    // theme vars
    shadow_depth: undefined
  };

  var vars = _extends$1({}, {
    general_styles: true,

    transition: "box-shadow " + polytheneTheme.vars.animation_duration + " ease-out"
  }, sharedVars);

  var fns = [layout];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;
  exports.sharedVars = sharedVars;
  exports.sharedVarFns = sharedVarFns;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-shadow.js.map
