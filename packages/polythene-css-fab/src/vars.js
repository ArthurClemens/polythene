import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

export default {
  general_styles:               true,

  size_mini:                    5 * vars.grid_unit_component, // 5 * 8 = 40
  size_regular:                 7 * vars.grid_unit_component, // 7 * 8 = 56

  color_light:                  rgba(vars.color_primary_foreground),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_opacity:    vars.blend_light_background_hover_medium, // same as button
  color_light_background:       rgba(vars.color_primary),
  
  color_dark:                   rgba(vars.color_primary_foreground),
  color_dark_focus_background:  rgba(vars.color_dark_foreground, vars.blend_dark_background_hover), // same as button
  color_dark_focus_opacity:     vars.blend_dark_background_hover_medium, // same as button
  color_dark_background:        rgba(vars.color_primary)
};
