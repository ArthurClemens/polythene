(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-css-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-css-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-css-button']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCssButton) { 'use strict';

  var vars = {
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
  };

  var classes = {
    component: "pe-button pe-text-button pe-raised-button"
  };

  // Only used for theme styles

  // Only used for theme styles

  var fns = [polytheneCssButton.layout, polytheneCssButton.color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.color = polytheneCssButton.color;
  exports.layout = polytheneCssButton.layout;
  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-raised-button.js.map
