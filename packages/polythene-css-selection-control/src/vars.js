// @ts-check

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

/**
 * @typedef {import("../index").SelectionControlVars} SelectionControlVars
 */

 /**
 * @type {SelectionControlVars} selectionControlVars
 */

const selectionControlVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:                      true,
  
  animation_duration:                  vars.animation_duration,
  button_size:                         6 * vars.grid_unit_component,
  icon_size:                           3 * vars.grid_unit_component,
  label_font_size:                     2 * vars.grid_unit_component, // 16
  label_height:                        3 * vars.grid_unit_component, // 24
  label_padding_after:                 0,
  label_padding_before:                vars.grid_unit * 4, // 16

  color_light_on:                      rgba(vars.color_primary),
  color_light_off:                     rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label:                   rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled:                rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  // color_light_thumb_off_focus_opacity: .08,
  // color_light_thumb_on_focus_opacity:  .11,

  // icon colors may be set in theme; set to "inherit" by default
  color_light_on_icon:                 "inherit",
  color_light_off_icon:                "inherit",

  // label on/off colors may be set in theme; set to color_light_label by default
  color_light_on_label:                rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_off_label:               rgba(vars.color_light_foreground, vars.blend_light_text_secondary),

  // color_light_focus_on:                rgba(vars.color_primary),
  // color_light_focus_on_opacity:        .11,
  // color_light_focus_off:               rgba(vars.color_light_foreground),
  // color_light_focus_off_opacity:       .07,

  color_dark_on:                       rgba(vars.color_primary),
  color_dark_off:                      rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled:                 rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  // color_dark_thumb_off_focus_opacity:  .08,
  // color_dark_thumb_on_focus_opacity:   .11,

  // icon color may be set in theme; set to "inherit" by default
  color_dark_on_icon:                  "inherit",
  color_dark_off_icon:                 "inherit",
  
  // label on/off colors may be set in theme; set to color_dark_label by default
  color_dark_on_label:                 rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_off_label:                rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),

  // color_dark_focus_on:                 rgba(vars.color_primary), // or '#80cbc4'
  // color_dark_focus_on_opacity:         .14,
  // color_dark_focus_off:                rgba(vars.color_dark_foreground),
  // color_dark_focus_off_opacity:        .09
};

export default selectionControlVars;
