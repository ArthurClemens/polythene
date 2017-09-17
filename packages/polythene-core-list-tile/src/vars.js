import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

const single_height = 48;
const padding = 8;
const single_with_icon_height = 56;

export default {
  single_height,
  single_line_height:                 single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height,      
  single_with_icon_line_height:       single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding:                            13,
  compact_padding:                    9,
  subtitle_line_count:                1,
  has_subtitle_padding:               15,
  high_subtitle_line_count:           2,
  has_high_subtitle_padding:          13,
  front_item_width:                   72,
  compact_front_item_width:           64,
  side_padding:                       2 * vars.grid_unit_component,
  compact_side_padding:               1 * vars.grid_unit_component,
  font_size_title:                    16,
  font_size_subtitle:                 14,
  line_height_subtitle:               20,
  font_size_list_header:              14,
  font_size_small:                    12,
   
  color_light_title:                  rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle:               rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_info:                   rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_text_disabled:          rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_list_header:            rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_secondary:              rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_hover_background:       rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background:       rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_selected_background:    rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_highlight_background:   rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title:                   rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle:                rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_info:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_text_disabled:           rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_list_header:             rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_secondary:               rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_hover_background:        rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_selected_background:     rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_highlight_background:    rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",
};
