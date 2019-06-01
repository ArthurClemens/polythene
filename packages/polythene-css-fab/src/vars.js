// @ts-check

/**
 * @typedef {import("../index").DrawerVars} DrawerVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {DrawerVars} drawerVars
 */
const drawerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:               true,

  size_mini:                    5 * vars.grid_unit_component, // 5 * 8 = 40
  size_regular:                 7 * vars.grid_unit_component, // 7 * 8 = 56

  color_light:                  rgba(vars.color_primary_foreground),
  color_light_background:       rgba(vars.color_primary),
  color_light_wash_background:  "currentColor",
  color_light_wash_opacity:     0.1,

  color_dark:                   rgba(vars.color_primary_foreground),
  color_dark_background:        rgba(vars.color_primary),
  color_dark_wash_background:   "currentColor",
  color_dark_wash_opacity:      0.1,

};

export default drawerVars;
