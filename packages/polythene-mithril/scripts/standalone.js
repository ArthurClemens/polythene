export * from "../index";
export { subscribe, unsubscribe } from "polythene-core";
import { addTypography } from "polythene-style";
import { addLayoutStyles } from "polythene-utilities";
import { addFastClick } from "polythene-fastclick";

addTypography();
addLayoutStyles();
addFastClick();
