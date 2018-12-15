(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-button'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-button', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-button'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssButton,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-fab",
    // elements
    content: "pe-fab__content",
    // states
    mini: "pe-fab--mini"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        color: vars["color_" + tint]
      }
    })],
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })],
    ["color_" + tint + "_focus_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_background"]
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
    },
    textButtonColor: polytheneCssButton.textButtonColor
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",
      " .pe-button__content": {
        position: "relative",
        borderRadius: "50%"
      },
      " .pe-fab__content": {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      " .pe-button__wash, .pe-button__focus": [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit"
      }],
      " .pe-ripple": {
        borderRadius: "inherit"
      },
      " .pe-button__wash": {
        transition: "background-color " + polytheneTheme.vars.animation_duration + " ease-in-out",
        borderRadius: "inherit",
        pointerEvents: "none",
        backgroundColor: "transparent"
      }
    })],
    size_regular: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        width: vars.size_regular + "px",
        height: vars.size_regular + "px"
      }
    })],
    size_mini: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-fab--mini": {
        " .pe-button__content": {
          width: vars.size_mini + "px",
          height: vars.size_mini + "px",
          padding: (vars.size_mini - polytheneTheme.vars.unit_icon_size) / 2 + "px"
        }
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns,
    textButtonLayout: polytheneCssButton.textButtonLayout
  });

  var vars = {
    general_styles: true,
    size_mini: 5 * polytheneTheme.vars.grid_unit_component,
    // 5 * 8 = 40
    size_regular: 7 * polytheneTheme.vars.grid_unit_component,
    // 7 * 8 = 56
    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_foreground),
    color_light_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium,
    // same as button
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_foreground),
    color_dark_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    // same as button
    color_dark_focus_opacity: polytheneTheme.vars.blend_dark_background_hover_medium,
    // same as button
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary)
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
//# sourceMappingURL=polythene-css-fab.js.map
