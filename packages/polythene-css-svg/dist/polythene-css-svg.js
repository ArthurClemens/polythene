(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css']));
}(this, (function (exports,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-svg"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      color: "inherit",
      " svg": {
        color: "inherit",
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " svg": {
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: vars["color_" + tint]
          }
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      lineHeight: 1,
      " > div, svg": {
        width: "inherit",
        height: "inherit"
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    color_light: "currentcolor",
    color_dark: "currentcolor"
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-svg.js.map
