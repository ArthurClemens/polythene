
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface DrawerVars {
  general_styles:               boolean,
  size_mini:                    number,
  size_regular:                 number,
  color_light:                  string,
  color_light_background:       string,
  color_light_wash_background:  string,
  color_light_wash_opacity:     number,
  color_dark:                   string,
  color_dark_background:        string,
  color_dark_wash_background:   string,
  color_dark_wash_opacity:      number,
}

export const vars: DrawerVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
