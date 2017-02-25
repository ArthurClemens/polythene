import { vars } from "polythene-theme";
const rgba = vars.rgba;

export default {
  sizes:                  [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size:               1.5,
  max_size_small_screen:  5,
  size_factor:            vars.grid_unit_menu,
  border_radius:          vars.unit_block_border_radius,

  color_light_background: rgba(vars.color_light_background),
  color_dark_background:  rgba(vars.color_dark_background)
};
