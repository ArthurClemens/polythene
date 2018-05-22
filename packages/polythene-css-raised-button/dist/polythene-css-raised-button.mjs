import { rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { layout, color } from 'polythene-css-button';
export { color, layout } from 'polythene-css-button';

var vars$1 = {
  general_styles: true,

  // Override Button:
  padding_h: 4 * vars.grid_unit, // 16
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover), // same as hover
  color_light_background: "#fff",
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),

  color_dark_active_background: rgba(vars.color_primary_dark),
  color_dark_background: rgba(vars.color_primary),
  color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_focus_background: rgba(vars.color_primary_active),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)

  // hover colors may be set in theme; disabled by default

  // color_light_hover_background:    "transparent",
  // color_dark_hover_background:     vars.color_primary_active,
};

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

// Only used for theme styles

// Only used for theme styles

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$1, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, getStyle, vars$1 as vars };
