// @ts-check

/**
 * @typedef {import("../index").DialogPaneVars} DialogPaneVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {DialogPaneVars} dialogPaneVars
 */
const dialogPaneVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:                  true,

  border_width:                    1,
  footer_height:                   52,
  header_bottom:                   20,
  header_height:                   64,
  line_height_title:               24,
  max_width:                       7 * vars.grid_unit_menu,      // 7 * 56 = 392 
  min_width:                       5 * vars.grid_unit_menu,      // 5 * 56 = 280
  padding:                         3 * vars.grid_unit_component, // 3 * 8 = 24
  side_padding_mobile:             6 * vars.grid_unit,           // 6 * 4 = 48
  max_height:                      8 * vars.grid_unit_component,
  margin_vertical:                 8 * vars.grid_unit_component,

  color_light_title_text:          "inherit",
  color_light_body_text:           "inherit",
  color_light_body_border:         rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background:          "inherit",

  color_dark_title_text:           "inherit",
  color_dark_body_text:            "inherit",
  color_dark_body_border:          rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background:           "inherit",
};

export default dialogPaneVars;
