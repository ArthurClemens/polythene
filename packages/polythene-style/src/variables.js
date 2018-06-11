// Global style variables

const grid_unit = 4;
const grid_unit_component = 8;
const increment = 7 * grid_unit_component;       // 7 * 8 = 56
const increment_large = 8 * grid_unit_component; // 8 * 8 = 64

const animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
const animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
const animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

export const vars = {
  // grid
  grid_unit,
  grid_unit_component,
  increment,
  increment_large,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_side_padding: 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component,  // 16
  unit_icon_size: 3 * grid_unit_component,        // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component,  // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_medium: .24,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_medium: .22,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only:          599,  // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up:  600,  // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840,  // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up:          1280, 
  breakpoint_for_big_desktop_up:      1600, 
  breakpoint_for_tv_up:               1920, 

  // z-index
  z_toolbar: 100,
  z_menu: 1000,
  z_app_bar: 2000,
  z_notification: 4000,
  z_dialog: 5000,
};
