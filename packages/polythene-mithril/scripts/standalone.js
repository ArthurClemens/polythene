export * from "../index";
export { subscribe, unsubscribe } from "polythene-core";
import { addLayoutStyles } from "polythene-utilities";
import { addTypography, addRoboto } from "polythene-style";
import { addFastClick } from "polythene-fastclick";

addTypography();
addRoboto();
addLayoutStyles();
addFastClick();
