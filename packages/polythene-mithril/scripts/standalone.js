export * from "../index";
export { subscribe, unsubscribe } from "polythene-core";
import { addLayoutStyles, addTypography } from "polythene-style";
import { addFastClick } from "polythene-fastclick";

addTypography();
addLayoutStyles();
addFastClick();
