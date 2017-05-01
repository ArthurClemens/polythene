import { vars } from "polythene-theme";

const rgba = vars.rgba;

export default {
  size_regular:           7 * vars.grid_unit_component,
  size_mini:              5 * vars.grid_unit_component,
  padding_regular:        2 * vars.grid_unit_component,

  color_light:            rgba(vars.color_primary_foreground),
  color_dark:             rgba(vars.color_primary_foreground),
  
  color_light_background: rgba(vars.color_primary),
  color_dark_background:  rgba(vars.color_primary)
};
