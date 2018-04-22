import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

const padding = (vars.grid_unit_icon_button - vars.unit_icon_size) / 2; // 12
const padding_compact = (vars.grid_unit_icon_button - vars.unit_icon_size) / 3; // 8
const color_light = rgba(vars.color_light_foreground, vars.blend_light_text_secondary);
const color_dark = rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary);

export default {
  padding,
  padding_compact,

  label_font_size:           16,
  label_padding_before:      vars.grid_unit * 1, // 4
  label_padding_after:       0,
  label_font_weight:         400,
  label_text_transform:      "initial",
  label_top_margin_factor:   1/12, // align with icon

  color_background:          "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light,               
  color_light_label:         rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled:      rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_wash:          color_light,
  color_light_wash_opacity:  vars.blend_light_background_hover_medium,
  color_light_focus_opacity: vars.blend_light_background_hover_medium,

  color_dark,
  color_dark_label:          rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled:       rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_wash:           color_dark,
  color_dark_wash_opacity:   vars.blend_dark_background_hover_medium,
  color_dark_focus_opacity:  vars.blend_dark_background_hover_medium,
};
