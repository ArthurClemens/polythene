
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { ShadowVars } from "polythene-css-shadow";

export interface DialogVars extends Partial<ShadowVars> {
  general_styles:                  boolean,
  animation_delay:                 string,
  animation_duration:              string,
  animation_hide_css:              string,
  animation_show_css:              string,
  animation_timing_function:       string,
  border_radius:                   number,
  position:                        string,
  color_light_backdrop_background: string,
  color_dark_backdrop_background:  string,
  color_light_background:          string,
  color_dark_background:           string,
  color_light_text:                string,
  color_dark_text:                 string,
  backdrop:                        boolean,
  z_index:                         number,
  full_screen:                     boolean,
  modal:                           boolean,
}

export const vars: DialogVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
