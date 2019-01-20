
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { SelectionControlVars } from "polythene-css-selection-control";

export interface CheckboxVars extends Partial<SelectionControlVars> {}

export const vars: CheckboxVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
