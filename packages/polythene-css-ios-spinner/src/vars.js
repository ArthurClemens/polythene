// @ts-check

/**
 * @typedef {import("../index").IOSSpinnerVars} IOSSpinnerVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {IOSSpinnerVars} iOSSpinnerVars
 */
const iOSSpinnerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:              true,

  rotation_animation_duration: "1s",

  color_light:                 rgba(vars.color_light_foreground),
  color_dark:                  rgba(vars.color_dark_foreground)
};

export default iOSSpinnerVars;
