import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
const padding_side =              vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
const padding_side_large =        vars.grid_unit_component * 3 - 12; // 24 - 12 = 12
const title_padding =             12; // icon padding
const title_after_icon_padding =  vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side; // 72 - 48 - 4 = 20
const height =                    vars.grid_unit_component * 7; // 56
const height_compact =            vars.grid_unit_component * 6; // 48
const height_large =              vars.grid_unit_component * 8; // 64

export default {
  padding_side,
  padding_side_large,
  height,
  height_compact,
  height_large,

  // title vars
  title_padding,
  title_after_icon_padding,
  indent:                    vars.unit_indent,
  transition_duration:       vars.animation_duration,
  font_size:                 18,
  line_height:               vars.line_height,

  // color vars
  color_light_text:          rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_dark_text:           rgba(vars.color_dark_foreground,  vars.blend_dark_text_primary),
  color_light_border:        rgba(vars.color_light_foreground, vars.blend_light_border_light),

  color_light_background:    rgba(vars.color_light_background),
  color_dark_background:     rgba(vars.color_dark_background),
  color_dark_border:         rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
};
