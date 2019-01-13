
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface IconVars {
  general_styles:                boolean,
  size_small:                    number,
  size_regular:                  number,
  size_medium:                   number,
  size_large:                    number,
  color_light_avatar_background: string,
  color_dark_avatar_background:  string,
  color_light:                   string,
  color_dark:                    string,
}
export const vars: IconVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
