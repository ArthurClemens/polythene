(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-base-spinner'), require('polythene-core'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-base-spinner', 'polythene-core', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-base-spinner'],global['polythene-core'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssBaseSpinner,polytheneCore,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-ios-spinner",
    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-ios-spinner__blade": {
        background: "currentcolor"
      }
    })]
  };

  const tintFns = tint => ({
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
    },
    superColor: polytheneCssBaseSpinner.color
  });

  const bladeWidth = 9; // percent

  const bladeHeight = 28; // percent

  const kfFade = () => ({
    " 0%": {
      opacity: .640
    },
    " 100%": {
      opacity: .035
    }
  });

  const positionBlades = vars => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
    // reverse to improve performance on iOS
    const delay = -1 / 12 * i * polytheneCore.styleDurationToMs(vars.rotation_animation_duration);
    const rotation = 360 - 360 / 12 * i;
    return {
      [" .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")"]: {
        transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
        animation: "iosSpinnerFade " + vars.rotation_animation_duration + " " + delay + "ms linear infinite"
      }
    };
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-ios-spinner__blades": {
        transform: "translate3d(0,0,0)",
        position: "relative",
        width: "100%",
        height: "100%"
      },
      " .pe-ios-spinner__blade": {
        position: "absolute",
        width: bladeWidth + "%",
        height: bladeHeight + "%",
        left: (100 - bladeWidth) / 2 + "%",
        top: (100 - bladeHeight) / 2 + "%",
        opacity: 0,
        borderRadius: "50px"
      },
      "@keyframes iosSpinnerFade": kfFade()
    })],
    rotation_animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-ios-spinner__blades": [positionBlades(vars)]
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns,
    superLayout: polytheneCssBaseSpinner.layout
  });

  var vars = {
    general_styles: true,
    rotation_animation_duration: "1s",
    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground),
    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground)
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
//# sourceMappingURL=polythene-css-ios-spinner.js.map
