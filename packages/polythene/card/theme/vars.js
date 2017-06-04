import { defaults } from "polythene-theme";

var rgba = defaults.rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

export default {
  image_size_small: 1 * 80,
  image_size_regular: 1.4 * 80,
  image_size_medium: 2 * 80,
  image_size_large: 3 * 80,
  border_radius: defaults.unit_block_border_radius,
  padding_h: 16,
  offset_small_padding_v: padding_v - 16,
  padding_actions_h: 8,
  title_padding_h: 16,
  title_padding_v: 24,
  tight_title_padding_bottom: 16,
  text_padding_h: 16,
  text_padding_v: 16,
  text_padding_bottom: 24,
  tight_text_padding_bottom: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_line_height_padding_bottom: 7,
  one_line_height_with_icon: 72,
  icon_element_width: 72 - 4,
  one_line_padding_v: 8,
  actions_padding_v: padding_actions_v - 6,
  actions_button_margin_v: actions_button_margin_v,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

  color_light_main_background: rgba(defaults.color_light_background),
  color_light_title_text: rgba(defaults.color_light_foreground, defaults.blend_light_text_primary),
  color_light_subtitle_text: rgba(defaults.color_light_foreground, defaults.blend_light_text_secondary),
  color_light_text: rgba(defaults.color_light_foreground, defaults.blend_light_text_regular),
  color_light_actions_border: rgba(defaults.color_light_foreground, defaults.blend_light_border_light),
  color_light_overlay_background: rgba(defaults.color_light_background, defaults.blend_light_overlay_background),

  color_dark_main_background: rgba(defaults.color_dark_background),
  color_dark_title_text: rgba(defaults.color_dark_foreground, defaults.blend_dark_text_primary),
  color_dark_subtitle_text: rgba(defaults.color_dark_foreground, defaults.blend_dark_text_secondary),
  color_dark_text: rgba(defaults.color_dark_foreground, defaults.blend_dark_text_regular),
  color_dark_actions_border: rgba(defaults.color_dark_foreground, defaults.blend_dark_border_light),
  color_dark_overlay_background: rgba(defaults.color_dark_background, defaults.blend_dark_overlay_background)
};