
import { StyleObject, StyleFn, StyleFns, Scoping } from "polythene-core-css";

export interface ShadowVars {
  general_styles:          boolean,
  transition:              string,
  shadow_top_depth_0:      string,
  shadow_bottom_depth_0:   string,
  shadow_top_depth_1:      string,
  shadow_bottom_depth_1:   string,
  shadow_top_depth_2:      string,
  shadow_bottom_depth_2:   string,
  shadow_top_depth_3:      string,
  shadow_bottom_depth_3:   string,
  shadow_top_depth_4:      string,
  shadow_bottom_depth_4:   string,
  shadow_top_depth_5:      string,
  shadow_bottom_depth_5:   string,
  shadow_depth:            number|undefined,
}

export const vars: ShadowVars;
export const layout: StyleFn;
export const sharedVars: StyleObject;
export const sharedVarFns: StyleFns;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
