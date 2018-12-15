(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-material-design-spinner'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-material-design-spinner', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-material-design-spinner'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssMaterialDesignSpinner,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-md-progress-spinner",
    // elements
    animation: "pe-md-progress-spinner__animation",
    circle: "pe-md-progress-spinner__circle",
    circleRight: "pe-md-progress-spinner__circle-right",
    circleLeft: "pe-md-progress-spinner__circle-left"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
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
    superColor: polytheneCssMaterialDesignSpinner.color
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      position: "relative",
      " .pe-md-progress-spinner__animation": {
        position: "absolute",
        width: "100%",
        height: "100%"
      },
      " .pe-md-progress-spinner__circle": {
        position: "absolute",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "50%"
      },
      " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
        transform: "rotate(0)",
        clip: "rect(0, 0, 0, 0)"
      }
    })],
    progress_animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars.progress_animation_duration
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns,
    superLayout: polytheneCssMaterialDesignSpinner.layout
  });

  var vars = {
    general_styles: true,
    progress_animation_duration: ".8s",
    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary)
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
//# sourceMappingURL=polythene-css-material-design-progress-spinner.js.map
