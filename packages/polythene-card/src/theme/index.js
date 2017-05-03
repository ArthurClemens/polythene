import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";
import color from "./color";
import contentColor from "./color-content";
import overlayColor from "./color-overlay";

const selector = `.${classes.component}`;
const contentSelector = `.${classes.content}`;
const overlaySheetSelector = `.${classes.overlaySheet}`;
const overlayContentSelector = `.${classes.overlayContent}`;

export const customTheme = (customSelector, customVars) => (
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, [layout, color]),
  styler.generateStyles([customSelector, overlaySheetSelector], {...vars, ...customVars}, [overlayColor]),
  styler.generateStyles([customSelector, contentSelector], {...vars, ...customVars}, [contentColor]),
  styler.generateStyles([customSelector, overlayContentSelector], {...vars, ...customVars}, [contentColor])
);

styler.generateStyles([selector], vars, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars, [overlayColor]);
styler.generateStyles([contentSelector], vars, [contentColor]);
styler.generateStyles([overlayContentSelector], vars, [contentColor]);
