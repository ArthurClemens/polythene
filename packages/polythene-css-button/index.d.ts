
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { ShadowVars } from "polythene-css-shadow";

export interface TextButtonVars extends Partial<ShadowVars> {
  general_styles:                  boolean,        
  animation_duration:              number,
  border_radius:                   number,
  dropdown_icon_size:              number,
  font_size:                       number,
  font_weight:                     number,
  label_padding_v:                 number,
  letter_spacing:                  number,
  line_height:                     number,
  min_width:                       number,
  outer_padding_v:                 number,
  padding_h:                       number,
  padding_h_extra_wide:            number,
  row_margin_h:                    number,
  separator_width:                 number,
  text_transform:                  string,
  color_light_background:          string,
  color_light_text:                string,
  color_light_wash_background:     string,
  color_light_wash_opacity:        number,
  color_light_active_background:   string,
  color_light_disabled_background: string,
  color_light_disabled_text:       string,
  color_light_icon:                string,
  color_light_separator:           string,
  color_dark_background:           string,
  color_dark_text:                 string,
  color_dark_wash_background:      string,
  color_dark_wash_opacity:         number,
  color_dark_active_background:    string,
  color_dark_disabled_background:  string,
  color_dark_disabled_text:        string,
  color_dark_icon:                 string,
  color_dark_separator:            string,
  color_light_hover?:              string,
  color_light_hover_background?:   string,
  color_light_hover_icon?:         string,
  color_dark_hover?:               string,
  color_dark_hover_background?:    string,
  color_dark_hover_icon?:          string,
  border_width:                    number,
  color_light_border:              string,
  color_light_hover_border?:       string,
  color_light_active_border?:      string,
  color_light_disabled_border:     string,
  color_dark_border:               string,
  color_dark_hover_border?:        string,
  color_dark_active_border?:       string,
  color_dark_disabled_border:      string,
  border:                          boolean,
  contained:                       boolean,
}

export interface ContainedButtonVars extends Partial<ShadowVars> {
  general_styles:                  boolean,
  padding_h:                       number,
  color_light_background:          string,
  color_light_disabled_background: string,
  color_dark_active_background:    string,
  color_dark_background:           string,
  color_dark_disabled_background:  string,
  border:                          boolean,
  contained:                       boolean,
}

export const textButtonVars: TextButtonVars;
export const textButtonColor: StyleFn;
export const textButtonLayout: StyleFn;

export const containedButtonVars: ContainedButtonVars;
export const containedButtonColor: StyleFn;
export const containedButtonLayout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
