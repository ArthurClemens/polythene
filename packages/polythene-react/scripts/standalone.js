export * from "../index";
export { subscribe, unsubscribe } from "polythene-core";
import { addTypography, addLayoutStyles } from "polythene-css";
import { addFastClick } from "polythene-fastclick";

addTypography();
addLayoutStyles();
addFastClick();
