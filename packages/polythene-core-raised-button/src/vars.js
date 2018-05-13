import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  general_styles:                  true,

  color_light_background:          "#fff",
  color_light_text:                rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background:     rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background:    rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background:   rgba(vars.color_light_foreground, vars.blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_disabled_text:       rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_background:           rgba(vars.color_primary),
  color_dark_text:                 rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background:      rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_focus_background:     rgba(vars.color_primary_active),
  color_dark_active_background:    rgba(vars.color_primary_dark),
  color_dark_disabled_background:  rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_disabled_text:        rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),

  // hover colors may be set in theme; disabled by default

  // color_light_hover_background:    "transparent",
  // color_dark_hover_background:     vars.color_primary_active,
};