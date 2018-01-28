import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  sizes:                  [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size:               1.5,
  max_size_small_screen:  5,
  size_factor:            vars.grid_unit_menu,
  border_radius:          vars.unit_block_border_radius,

  color_light_background: rgba(vars.color_light_background),
  color_dark_background:  rgba(vars.color_dark_background),

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background:  "rgba(0, 0, 0, .5)",
  
  // text colors are set by content, usually list tiles
};
