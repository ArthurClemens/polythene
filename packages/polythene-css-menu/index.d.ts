
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { ShadowVars } from "polythene-css-shadow";

export interface MenuVars extends Partial<ShadowVars> {
  general_styles:                   boolean,
  animation_delay:                  string,
  animation_duration:               string,
  animation_hide_css:               string,
  animation_hide_origin_effect_css: string,
  animation_show_css:               string,
  animation_show_origin_effect_css: string,
  animation_timing_function:        string,
  border_radius:                    number,
  height:                           number|undefined,
  min_width:                        number,
  width_factor:                     number,
  widths:                           Array<1|1.5|2|3|4|5|6|7>,
  color_light_background:           string,
  color_dark_background:            string,
  color_light_backdrop_background:  string,
  color_dark_backdrop_background:   string,
  backdrop:                         boolean|undefined,
  z:                                number,
  top_menu:                         boolean,
}
export const vars: MenuVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
