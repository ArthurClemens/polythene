// @ts-check

/**
 * @typedef {import("../index").SearchVars} SearchVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {SearchVars} searchVars
 */
const searchVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:                 true,

  font_size_input:                20,
  full_width_border_radius:       0,
  full_width_height:              56,
  full_width_input_right_padding: 0,
  full_width_side_margin:         0,
  full_width_side_padding:        8,
  inset_border_radius:            vars.unit_block_border_radius,
  inset_height:                   48,
  inset_input_indent:             16,
  inset_input_right_padding:      0,
  inset_side_padding:             0,
  line_height_input:              20,

  color_light_label_text:         rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_input_text:         rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_background:         rgba(vars.color_light_background),
        
  color_dark_label_text:          rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_input_text:          rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_background:          rgba(vars.color_dark_background),
};

export default searchVars;
