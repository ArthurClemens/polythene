(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css']));
}(this, (function (exports,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-ripple",
    // elements
    mask: "pe-ripple__mask",
    waves: "pe-ripple__waves",
    // states
    unconstrained: "pe-ripple--unconstrained",
    wavesAnimating: "pe-ripple__waves--animating"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      color: "inherit"
    })]
  };

  const tintFns = tint => ({
    ["color"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color"]
    })],
    ["color_" + tint]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint]
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
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.mixin.fit(), {
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
        outline: "1px solid transparent",
        // for IE10
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        display: "none"
      },
      " .pe-ripple__waves--animating": {
        display: "block"
      }
    }])]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    color: "inherit" // only specify this variable to get both states
    // color_light:   "inherit",
    // color_dark:    "inherit"

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
//# sourceMappingURL=polythene-css-ripple.js.map
