(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-css-button'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-css-button', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-css-button'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCssButton,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-raised-button",
    super: "pe-button pe-text-button"
  };

  var color = polytheneCoreCss.createColor({
    superColor: polytheneCssButton.color
  });

  var layout = polytheneCoreCss.createLayout({
    superLayout: polytheneCssButton.layout
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var themeVars = {
    contained: true
  };

  var vars = _extends({}, {
    general_styles: true,

    // Override Button:
    padding_h: 4 * polytheneTheme.vars.grid_unit, // 16

    color_light_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover), // same as hover
    color_light_background: "#fff",
    color_light_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_disabled_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),

    color_dark_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_dark),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
    color_dark_disabled_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_active),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover)

    // hover colors may be set in theme; disabled by default

    // color_light_hover_background:    "transparent",
    // color_dark_hover_background:     vars.color_primary_active,
  }, themeVars);

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-raised-button.js.map
