
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface IconButtonVars {
  general_styles:                boolean,
  animation_duration:            number,
  label_font_size:               number,
  label_font_weight:             number,
  label_line_height:             number,
  label_padding_after:           number,
  label_padding_before:          number,
  label_text_transform:          string,
  label_top_margin_factor:       number,
  padding:                       number,
  padding_compact:               number,
  color_background:              string,
  color_light_background?:       string,
  color_dark_background?:        string,
  color_light_hover?:            string,
  color_dark_hover?:             string,
  color_light_label_hover?:      string,
  color_dark_label_hover?:       string,
  color_light:                   string,
  color_light_label:             string,
  color_light_disabled:          string,
  color_light_focus_opacity:     string,
  color_light_wash_background:   string,
  color_dark:                    string,
  color_dark_label:              string,
  color_dark_disabled:           string,
  color_dark_focus_opacity:      string,
  color_dark_wash_background:    string,
  color_light_background_hover?: string,
  color_dark_background_hover?:  string,
}

export const vars: IconButtonVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
