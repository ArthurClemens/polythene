import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
const content_side_offset =       vars.grid_unit_component * 7; // 56
const content_side_offset_large = vars.grid_unit_component * 8; // 64
const content_max_width =         5 * vars.increment;
const content_max_width_large =   5 * vars.increment_large;

export default {
  content_side_offset,
  content_side_offset_large,
  content_max_width,
  content_max_width_large,

  color_light_border:     rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border:      rgba(vars.color_dark_foreground,  vars.blend_dark_border_light),
};
