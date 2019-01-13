// @ts-check

/**
 * @typedef {import("../index").MaterialDesignProgressSpinnerVars} MaterialDesignProgressSpinnerVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @type {MaterialDesignProgressSpinnerVars} materialDesignProgressSpinnerVars
 */
const materialDesignProgressSpinnerVars = {
  general_styles:              true,
  
  progress_animation_duration: ".8s",

  color_light:                 rgba(vars.color_primary),
  color_dark:                  rgba(vars.color_primary),
};

export default materialDesignProgressSpinnerVars;
