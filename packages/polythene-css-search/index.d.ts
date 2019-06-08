
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface SearchVars {
  general_styles:                 boolean,
  font_size_input:                number,
  full_width_border_radius:       number,
  full_width_height:              number,
  full_width_input_right_padding: number,
  full_width_side_margin:         number,
  full_width_side_padding:        number,
  inset_border_radius:            number,
  inset_height:                   number,
  inset_input_indent:             number,
  inset_input_right_padding:      number,
  inset_side_padding:             number,
  line_height_input:              number,
  color_light_label_text:         string,
  color_light_input_text:         string,
  color_light_background:         string,
  color_dark_label_text:          string,
  color_dark_input_text:          string,
  color_dark_background:          string,
}

export const vars: SearchVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
