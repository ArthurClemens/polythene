(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-spinner",
    // elements
    animation: "pe-spinner__animation",
    placeholder: "pe-spinner__placeholder",
    // states
    animated: "pe-spinner--animated",
    fab: "pe-spinner--fab",
    large: "pe-spinner--large",
    medium: "pe-spinner--medium",
    permanent: "pe-spinner--permanent",
    raised: "pe-spinner--raised",
    regular: "pe-spinner--regular",
    singleColor: "pe-spinner--single-color",
    small: "pe-spinner--small",
    visible: "pe-spinner--visible"
  };

  const generalFns = {
    general_styles: selector => [] // eslint-disable-line no-unused-vars

  };

  const tintFns = tint => ({
    ["color_" + tint + "_raised_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--raised": {
        backgroundColor: vars["color_" + tint + "_raised_background"]
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

  const sizes = size => ({
    width: size + "px",
    height: size + "px"
  });

  const raisedSize = size => {
    const padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues

    const paddedSize = size + padding * 2;
    return {
      width: paddedSize + "px",
      height: paddedSize + "px",
      padding: padding + "px"
    };
  };

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      transitionProperty: "all",
      ".pe-spinner--raised": {
        position: "relative",
        borderRadius: "50%"
      }
    })],
    animation_show_css: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--visible, &.pe-spinner--permanent": [vars.animation_show_css]
    })],
    animation_hide_css: (selector, vars) => ({
      [selector]: vars.animation_hide_css
    }),
    animation_delay: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionDelay: vars.animation_delay
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionDuration: vars.animation_duration
    })],
    animation_timing_function: (selector, vars) => [polytheneCoreCss.sel(selector, {
      transitionTimingFunction: vars.animation_timing_function
    })],
    size_small: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--small": sizes(vars.size_small),
      ".pe-spinner--raised": {
        ".pe-spinner--small": raisedSize(vars.size_small)
      }
    })],
    size_regular: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--regular": sizes(vars.size_regular),
      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars.size_regular)
      }
    })],
    size_medium: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--medium": sizes(vars.size_medium),
      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars.size_medium)
      }
    })],
    size_large: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--large": sizes(vars.size_large),
      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars.size_large)
      }
    })],
    size_fab: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-spinner--fab": sizes(vars.size_fab),
      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars.size_fab)
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    animation_delay: "0s",
    animation_duration: ".220s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    size_fab: 7 * polytheneTheme.vars.grid_unit_component,
    size_large: 6 * polytheneTheme.vars.grid_unit_component,
    size_medium: 5 * polytheneTheme.vars.grid_unit_component,
    size_regular: 4 * polytheneTheme.vars.grid_unit_component,
    size_small: 3 * polytheneTheme.vars.grid_unit_component,
    color_light_raised_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_raised_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background) // also use light background with dark tone

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
//# sourceMappingURL=polythene-css-base-spinner.js.map
