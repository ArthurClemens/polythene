
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface SelectionControlVars {
  general_styles:                      boolean,
  animation_duration:                  string,
  button_size:                         number,
  label_height:                        number,
  icon_size:                           number,
  label_font_size:                     number,
  label_padding_after:                 number,
  label_padding_before:                number,
  color_light_on:                      string,
  color_light_off:                     string,
  color_light_label:                   string,
  color_light_disabled:                string,
  color_light_thumb_off_focus_opacity: number,
  color_light_thumb_on_focus_opacity:  number,
  color_light_on_icon:                 string,
  color_light_off_icon:                string,
  color_light_on_label:                string,
  color_light_off_label:               string,
  color_light_focus_on:                string,
  color_light_focus_on_opacity:        number,
  color_light_focus_off:               string,
  color_light_focus_off_opacity:       number,
  color_dark_on:                       string,
  color_dark_off:                      string,
  color_dark_label:                    string,
  color_dark_disabled:                 string,
  color_dark_thumb_off_focus_opacity:  number,
  color_dark_thumb_on_focus_opacity:   number,
  color_dark_on_icon:                  string,
  color_dark_off_icon:                 string,
  color_dark_on_label:                 string,
  color_dark_off_label:                string,
  color_dark_focus_on:                 string,
  color_dark_focus_on_opacity:         number,
  color_dark_focus_off:                string,
  color_dark_focus_off_opacity:        number,
}

export const vars: SelectionControlVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
