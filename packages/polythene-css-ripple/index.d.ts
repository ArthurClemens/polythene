
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface RippleVars {
  general_styles:  boolean,
  color:           string,
  color_light?:    string,
  color_dark?:     string,
}

export const vars: RippleVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
