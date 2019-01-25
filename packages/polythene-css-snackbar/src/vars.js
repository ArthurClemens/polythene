// @ts-check

/**
 * @typedef {import("../index").SnackbarVars} SnackbarVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {SnackbarVars} snackbarVars
 */
const snackbarVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:         true,
 
  animation_hide_css:     "",
  animation_show_css:     "",
  border_radius:          0,
  max_width:              568,
  min_height:             0,
  min_width:              288,
  
  color_light_background: rgba(vars.color_light_background),   
  color_dark_background:  rgba(vars.color_dark_background)
};

export default snackbarVars;
