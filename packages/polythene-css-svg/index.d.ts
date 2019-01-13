
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface SVGVars {
  general_styles: boolean,
  color_light:    string,
  color_dark:     string,
}

export const vars: SVGVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
