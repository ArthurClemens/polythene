
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface ButtonGroupVars {
  general_styles: boolean,
}

export const vars: ButtonGroupVars;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
