import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

export default {
  general_styles:                  true,

  animation_delay:                 "0s",
  animation_duration:              ".220s",
  animation_hide_css:              "opacity: 0;",
  animation_show_css:              "opacity: 1;",
  animation_timing_function:       "ease-in-out",
  border_radius:                   vars.unit_block_border_radius,
  padding_horizontal:              5 * vars.grid_unit_component,
  padding_vertical:                3 * vars.grid_unit_component,
  position:                        "fixed",

  // theme vars
  
  full_screen:                     false,

  // color vars

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background:  "rgba(0, 0, 0, .5)",

  color_light_background:          rgba(vars.color_light_background),
  color_dark_background:           rgba(vars.color_dark_background),

  color_light_text:                rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_dark_text:                 rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
};
