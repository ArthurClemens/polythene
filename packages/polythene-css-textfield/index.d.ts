
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface TextfieldVars {
  general_styles:                               boolean,
  dense_floating_label_top:                     number,
  dense_floating_label_vertical_spacing_bottom: number,
  dense_floating_label_vertical_spacing_top:    number,
  dense_font_size_floating_label:               number,
  dense_font_size_input:                        number,
  dense_full_width_font_size_input:             number,
  dense_full_width_input_padding_h:             number,
  dense_full_width_input_padding_v:             number,
  floating_label_animation_duration:            string,
  floating_label_top:                           number,
  floating_label_vertical_spacing_bottom:       number,
  floating_label_vertical_spacing_top:          number,
  font_size_error:                              number,
  font_size_floating_label:                     number,
  font_size_input:                              number,
  full_width_input_padding_h:                   number,
  full_width_input_padding_v:                   number,
  input_border_width:                           number,
  input_focus_border_animation_duration:        number,
  input_focus_border_width:                     number,
  input_padding_h:                              number,
  input_padding_v:                              number,
  line_height_input:                            number,
  margin_top_error_message:                     number,
  vertical_spacing_bottom:                      number,
  vertical_spacing_top:                         number,
  color_light_input_text:                       string,
  color_light_input_background:                 string,
  color_light_highlight_text:                   string,
  color_light_input_bottom_border:              string,
  color_light_input_error_text:                 string,
  color_light_input_error_border:               string,
  color_light_input_placeholder:                string,
  color_light_label_text:                       string,
  color_light_disabled_label_text:              string,
  color_light_readonly_label_text:              string,
  color_light_help_text:                        string,
  color_light_required_symbol:                  string,
  color_light_focus_border:                     string,
  color_light_counter_ok_border:                string,
  color_dark_input_text:                        string,
  color_dark_input_background:                  string,
  color_dark_highlight_text:                    string,
  color_dark_input_bottom_border:               string,
  color_dark_input_error_text:                  string,
  color_dark_input_error_border:                string,
  color_dark_input_placeholder:                 string,
  color_dark_label_text:                        string,
  color_dark_disabled_label_text:               string,
  color_dark_readonly_label_text:               string,
  color_dark_help_text:                         string,
  color_dark_required_symbol:                   string,
  color_dark_focus_border:                      string,
  color_dark_counter_ok_border:                 string,
}

export const vars: TextfieldVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
