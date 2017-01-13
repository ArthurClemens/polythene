import { vars } from "polythene-theme";

const rgba = vars.rgba;

const title_padding =           vars.grid_unit_component * 2;
const padding_side =            vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
const height_mobile_portrait =  vars.grid_unit_component * 7; // 56
const height_desktop =          vars.grid_unit_component * 8; // 64

export default {
  padding_side,
  title_padding,
  indent:                    vars.unit_indent,
  transition_duration:       vars.animation_duration,
  font_size:                 vars.font_size_title,
  line_height:               vars.line_height,

  height:                    height_desktop,
  height_compact:            height_mobile_portrait,

  color_light_text:          rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_dark_text:           rgba(vars.color_dark_foreground,  vars.blend_dark_text_primary),

  // default gray background, expected to be overridden
  color_light_background:    "#CFD8DC", // blue-gray-100
  color_dark_background:     "#37474F"  // blue-gray-800
};
