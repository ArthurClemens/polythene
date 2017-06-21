import { vars } from "polythene-theme";

const rgba = vars.rgba;

const insetSideMargin = 8;

const line_height_input = 20;
const font_size_input = 20;

const inset_height = 48;
const inset_input_indent = 16;
const inset_input_right_padding = 0;
const inset_side_padding = 0;
const inset_border_radius = vars.unit_block_border_radius;

const full_width_side_margin = 0;
const full_width_height = 56;
const full_width_side_padding = insetSideMargin;
const full_width_input_right_padding = 0;
const full_width_border_radius = 0;

export default {
  font_size_input,
  line_height_input,

  inset_height,
  inset_input_indent,
  inset_side_padding,
  inset_input_right_padding,
  inset_border_radius,

  full_width_height,
  full_width_side_margin,
  full_width_side_padding,
  full_width_input_right_padding,
  full_width_border_radius,

  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_background: rgba(vars.color_light_background),

  color_dark_label_text:  rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_input_text:  rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_background:  rgba(vars.color_dark_background)
};
