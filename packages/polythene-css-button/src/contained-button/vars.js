// @ts-check

/**
 * @typedef {import("../../index").ContainedButtonVars} ContainedButtonVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";
import { sharedVars as shadowVars } from "polythene-css-shadow";

export const themeVars = {
  border:    false,
  contained: true,

  ...shadowVars,
};

/**
 * @type {ContainedButtonVars} containedButtonVars
 */
const containedButtonVars = {
  general_styles:                  true,
  
  padding_h:                       4 * vars.grid_unit, // 16

  color_light_background:          "#fff",
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_wash_background:     "transparent",

  color_dark_active_background:    rgba(vars.color_primary_dark),
  color_dark_background:           rgba(vars.color_primary),
  color_dark_disabled_background:  rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_wash_background:      "transparent",

  ...themeVars
};

export default containedButtonVars;
