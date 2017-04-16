import { vars } from "polythene-theme";
const rgba = vars.rgba;

export default {
  size_small:   3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium:  5 * vars.grid_unit_component,
  size_large:   6 * vars.grid_unit_component,
  size_fab:     7 * vars.grid_unit_component,

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark theme
  color_dark_raised_background: rgba(vars.color_light_background)
};
