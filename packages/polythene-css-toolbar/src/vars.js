// @ts-check

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const padding_side       = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
const padding_side_large = vars.grid_unit_component * 3 - 12; // 24 - 12 = 12

export default {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:                 true,
     
  font_size:                      20,
  font_weight:                    400,
  height:                         vars.grid_unit_component * 7, // 56
  height_compact:                 vars.grid_unit_component * 6, // 48
  height_large:                   vars.grid_unit_component * 8, // 64
  line_height:                    vars.line_height,
  padding_side,     
  padding_side_large,     
  indent:                         vars.unit_indent - padding_side,
  indent_large:                   vars.unit_indent_large - padding_side_large,
  title_after_icon_padding:       4,
  title_after_icon_padding_large: 12,
  title_padding:                  16,
  title_padding_large:            8,

  color_light_text:               rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_border:             rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background:         rgba(vars.color_light_background),
     
  color_dark_text:                rgba(vars.color_dark_foreground,  vars.blend_dark_text_primary),
  color_dark_border:              rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background:          rgba(vars.color_dark_background),
};
