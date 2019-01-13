
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface ListVars {
  general_styles:          boolean,
  border_width_bordered:   number,
  border_width_stacked:    number,
  padding:                 number,
  padding_compact:         number,
  color_light_border:      string,
  color_dark_border:       string,
  color_light_background?: string,
  color_dark_background?:  string,
}

export const vars: ListVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
