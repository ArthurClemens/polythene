import { vars } from "polythene-theme";

const rgba = vars.rgba;
const line_height_input = 20;
const input_padding_v = 7;

export default {
  vertical_spacing_top:                   6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom:                7, // 8 minus natural label height padding (1)
  input_focus_border_width:               2,
  input_focus_border_animation_duration:  vars.animation_duration,
  
  floating_label_vertical_spacing_top:    30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top:                     14,
  floating_label_animation_duration:      ".12s",

  input_padding_h:          0,
  input_padding_v,
  input_border_width:       1,
  margin_top_error_message: 6,
  font_size_input:          16,
  font_size_error:          12,
  font_size_floating_label: 12,

  line_height_input,

  dense_floating_label_vertical_spacing_top:    23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_top:                     10,
  dense_font_size_input:                        13,
  dense_font_size_floating_label:               13,
            
  full_width_input_padding_h:       20,
  full_width_input_padding_v:       18, // 20 minus natural label height padding (2)

  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  dense_full_width_font_size_input: 13,

  color_light_input_text:           rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_input_background:     "transparent", // only used to "remove" autofill color
  color_light_highlight_text:       rgba(vars.color_primary, vars.blend_light_text_primary),
  color_light_input_bottom_border:  rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_input_error_text:     rgba("221, 44, 0"),
  color_light_input_error_border:   rgba("221, 44, 0"),
  color_light_input_placeholder:    rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_label_text:           rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_disabled_label_text:  rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_readonly_label_text:  rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_help_text:            rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_required_symbol:      rgba("221, 44, 0"),
  color_light_focus_border:         rgba(vars.color_primary),
  color_light_counter_ok_border:    rgba(vars.color_primary),
 
  color_dark_input_text:            rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_input_background:      "transparent", // only used to "remove" autofill color
  color_dark_highlight_text:        rgba(vars.color_primary, vars.blend_dark_text_primary),
  color_dark_input_bottom_border:   rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_input_error_text:      rgba("222, 50, 38"),
  color_dark_input_error_border:    rgba("222, 50, 38"),
  color_dark_input_placeholder:     rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_label_text:            rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_disabled_label_text:   rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_readonly_label_text:   rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_help_text:             rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_required_symbol:       rgba("221, 44, 0"),
  color_dark_focus_border:          rgba(vars.color_primary),
  color_dark_counter_ok_border:     rgba(vars.color_primary)
};
