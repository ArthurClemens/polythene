import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

export default {
  general_styles:                true,
    
  animation_delay:               "0s",
  animation_duration:            ".220s",
  animation_hide_css:            "opacity: 0;",
  animation_show_css:            "opacity: 1;",
  animation_timing_function:     "ease-in-out",
  size_fab:                      7 * vars.grid_unit_component,
  size_large:                    6 * vars.grid_unit_component,
  size_medium:                   5 * vars.grid_unit_component,
  size_regular:                  4 * vars.grid_unit_component,
  size_small:                    3 * vars.grid_unit_component,

  color_light_raised_background: rgba(vars.color_light_background),
  color_dark_raised_background:  rgba(vars.color_light_background) // also use light background with dark tone
};
