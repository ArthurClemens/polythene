
import { StyleObject, StyleFn, StyleFns, Scoping } from "polythene-core-css";

export interface NotificationVars {
  general_styles:            boolean,
  animation_delay:           string,
  animation_duration:        string,
  animation_hide_css:        string,
  animation_show_css:        string,
  animation_timing_function: string,
  border_radius:             number,
  font_size:                 number,
  line_height:               number,
  min_height:                number,
  side_padding:              number,
  title_multi_padding_v:     number,
  title_padding_h:           number,
  title_single_padding_v:    number,
  width:                     number,
  color_light_background:    string,
  color_light_text:          string,
  color_dark_background:     string,
  color_dark_text:           string,
}

export const vars: NotificationVars;
export const color: StyleFn;
export const layout: StyleFn;
export const customLayoutFns: StyleFns;
export const holderLayout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
