import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;             

const padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

export default {
  general_styles:            true,

  font_size:                 18,
  height:                    vars.grid_unit_component * 7, // 56
  height_compact:            vars.grid_unit_component * 6, // 48
  height_large:              vars.grid_unit_component * 8, // 64
  indent:                    vars.unit_indent,
  line_height:               vars.line_height,
  padding_side,
  padding_side_large:        vars.grid_unit_component * 3 - 12, // 24 - 12 = 12
  title_after_icon_padding:  vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side, // 72 - 48 - 4 = 20
  title_padding:             12, // icon padding

  color_light_text:          rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_border:        rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background:    rgba(vars.color_light_background),

  color_dark_text:           rgba(vars.color_dark_foreground,  vars.blend_dark_text_primary),
  color_dark_border:         rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background:     rgba(vars.color_dark_background),
};
