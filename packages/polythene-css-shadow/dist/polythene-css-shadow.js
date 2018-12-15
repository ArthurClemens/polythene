(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-shadow",
    // elements
    bottomShadow: "pe-shadow__bottom",
    topShadow: "pe-shadow__top",
    // states
    animated: "pe-shadow--animated",
    depth_n: "pe-shadow--depth-"
  };

  const _createShadowForSelector = (which, depth) => (selector, vars) => polytheneCoreCss.sel(selector, {
    [` .pe-shadow__${which}.pe-shadow--depth-${depth}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

  const _createShadow = (selector, vars, depth, which) => polytheneCoreCss.sel(selector, {
    [` .pe-shadow__${which}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

  const shadow = (selector, vars, depth) => [_createShadow(selector, vars, depth, "top"), _createShadow(selector, vars, depth, "bottom")];

  const shadow_depth = (selector, vars) => vars.shadow_depth !== undefined ? shadow(selector, vars, vars.shadow_depth) : null;

  const sharedVarFns = {
    shadow_depth
  };
  const varFns = Object.assign({}, {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, [polytheneCoreCss.mixin.fit(), shadow(selector, vars, 1), {
      borderRadius: "inherit",
      pointerEvents: "none",
      " .pe-shadow__bottom, .pe-shadow__top": [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit"
      }]
    }])],
    transition: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: vars.transition
        }
      }
    })],
    shadow_depth
  }, [0, 1, 2, 3, 4, 5].reduce((acc, depth) => (acc[`shadow_top_depth_${depth}`] = _createShadowForSelector("top", depth), acc[`shadow_bottom_depth_${depth}`] = _createShadowForSelector("bottom", depth), acc), {}));
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  const sharedVars = {
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
  var vars = Object.assign({}, {
    general_styles: true,
    transition: `box-shadow ${polytheneTheme.vars.animation_duration} ease-out`
  }, sharedVars);

  const fns = [layout];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
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
