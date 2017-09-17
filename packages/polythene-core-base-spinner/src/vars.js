import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
export default {
  size_small:   3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium:  5 * vars.grid_unit_component,
  size_large:   6 * vars.grid_unit_component,
  size_fab:     7 * vars.grid_unit_component,

  raisedSize: size => {
    const padding = size * 0.25;
    const paddedSize = size + padding * 2;
    return { padding, paddedSize };
  },

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(vars.color_light_background)
};
