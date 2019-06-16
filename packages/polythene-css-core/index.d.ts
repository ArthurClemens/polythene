import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export function addRoboto(): void;

export function addTypography(): void;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
