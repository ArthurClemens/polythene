
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface SnackbarVars {
  general_styles:         boolean,
  animation_hide_css:     string,
  animation_show_css:     string,
  border_radius:          number,
  max_width:              number,
  min_height:             number,
  min_width:              number,
  color_light_background: string,
  color_dark_background:  string,
}

export const vars: SnackbarVars;
export const color: StyleFn;
export const layout: StyleFn;
export const holderLayout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
