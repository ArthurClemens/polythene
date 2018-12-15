(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-icon",
    // states
    avatar: "pe-icon--avatar",
    large: "pe-icon--large",
    medium: "pe-icon--medium",
    regular: "pe-icon--regular",
    small: "pe-icon--small"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      color: "currentColor"
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint]
    })],
    ["color_" + tint + "_avatar_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-icon--avatar": {
        backgroundColor: vars["color_" + tint + "_avatar_background"]
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

  const sizeDirective = size => (selector, vars) => polytheneCoreCss.sel(selector, {
    [`.pe-icon--${size}`]: {
      width: vars[`size_${size}`] + "px",
      height: vars[`size_${size}`] + "px"
    }
  });

  const varFns = Object.assign({}, {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      display: "inline-block",
      verticalAlign: "middle",
      backgroundRepeat: "no-repeat",
      position: "relative",
      fontSize: 0,
      lineHeight: 0,
      ".pe-icon--avatar": {
        borderRadius: "50%"
      },
      ".pe-icon--avatar img": {
        border: "none",
        borderRadius: "50%",
        width: "inherit",
        height: "inherit"
      },
      " img": {
        height: "inherit"
      },
      " .pe-svg, .pe-svg > div": {
        /* React creates an additional div when wrapping an SVG */
        width: "inherit",
        height: "inherit"
      }
    })]
  }, ["small", "regular", "medium", "large"].reduce((acc, size) => (acc[`size_${size}`] = sizeDirective(size), acc), {}));
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    size_small: polytheneTheme.vars.unit_icon_size_small,
    // 16 
    size_regular: polytheneTheme.vars.unit_icon_size,
    // 24
    size_medium: polytheneTheme.vars.unit_icon_size_medium,
    // 32
    size_large: polytheneTheme.vars.unit_icon_size_large,
    // 40
    // avatar background is visible when image is not yet loaded
    color_light_avatar_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_dark_avatar_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
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
//# sourceMappingURL=polythene-css-icon.js.map
