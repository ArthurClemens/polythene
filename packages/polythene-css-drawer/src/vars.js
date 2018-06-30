import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

export default {
  general_styles:                  true,

  animation_delay:                 "0s",
  animation_duration:              ".260s",
  animation_timing_function:       "ease-in-out",
  border_radius:                   0,
  content_max_width:               5 * vars.increment,           // 5 * 56
  content_width:                   240,
  content_width_mini_collapsed:    vars.increment,               // 1 * 56

  // theme vars
  
  backdrop:                        false,
  border:                          false,
  cover:                           false,
  floating:                        false,
  mini:                            false,
  permanent:                       false,
  push:                            false,

  // color vars
  
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background:  "rgba(0, 0, 0, .5)",
  
  color_light_background:          rgba(vars.color_light_background),
  color_dark_background:           rgba(vars.color_dark_background),
     
  color_light_border:              rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border:               rgba(vars.color_dark_foreground,  vars.blend_dark_border_light),
};
