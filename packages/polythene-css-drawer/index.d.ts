
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { ShadowVars } from "polythene-css-shadow";

export interface DrawerVars extends Partial<ShadowVars> {
  general_styles:                  boolean,
  animation_delay:                 string,
  animation_duration:              string,
  animation_timing_function:       string,
  border_radius:                   number,
  content_max_width:               number,
  content_width:                   number,
  content_width_mini_collapsed:    number,
  color_light_backdrop_background: string,
  color_dark_backdrop_background:  string,
  color_light_background:          string,
  color_dark_background:           string,
  color_light_border:              string,
  color_dark_border:               string,
  backdrop:                        boolean,
  border:                          boolean|undefined,
  cover:                           boolean,
  floating:                        boolean,
  mini:                            boolean,
  permanent:                       boolean,
  push:                            boolean,
  z_index:                         number,
}

export const vars: DrawerVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
