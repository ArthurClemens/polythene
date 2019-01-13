// @ts-check

/**
 * @typedef {import("../index").NotificationVars} NotificationVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const buttonPaddingH = 8; // padding, inner text space

/**
 * @type {NotificationVars} notificationVars
 */
const notificationVars = {
  general_styles:            true,

  animation_delay:           "0s",
  animation_duration:        ".3s",
  animation_hide_css:        "opacity: 0;",
  animation_show_css:        "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius:             vars.unit_block_border_radius,
  font_size:                 14,
  line_height:               20,
  min_height:                80,
  side_padding:              24 - buttonPaddingH,
  title_multi_padding_v:     20, // 24 - natural line height
  title_padding_h:           buttonPaddingH,
  title_single_padding_v:    14,
  width:                     288,
   
  color_light_background:    rgba(vars.color_light_background),
  color_light_text:          rgba(vars.color_light_foreground, vars.blend_light_dark_primary),
   
  color_dark_background:     rgba(vars.color_dark_background),
  color_dark_text:           rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};

export default notificationVars;
