import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  sizes:                  [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size:               1.5,
  max_size_small_screen:  5,
  size_factor:            vars.grid_unit_menu,
  border_radius:          vars.unit_block_border_radius,

  animation_delay:           "0s",
  animation_duration:        ".220s",
  animation_timing_function: "ease-in-out",
  animation_hide_css:        "opacity: 0;",
  animation_show_css:        "opacity: 1;",

  color_light_background: rgba(vars.color_light_background),
  color_dark_background:  rgba(vars.color_dark_background)
  // text colors are set by content, usually list tiles
};