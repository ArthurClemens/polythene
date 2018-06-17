import { createColor, createLayout, rgba, styler } from 'polythene-core-css';
import { color, layout } from 'polythene-css-button';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-raised-button",
  super: "pe-button pe-text-button"
};

var color$1 = createColor({
  superColor: color
});

var layout$1 = createLayout({
  superLayout: layout
});

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

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color$1 as color, getStyle, layout$1 as layout, vars$1 as vars };
