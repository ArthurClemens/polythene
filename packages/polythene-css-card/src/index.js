import { styler } from "polythene-core-css";
import { classes, vars } from "polythene-core-card";
import layout from "./layout";
import color from "./color";
import contentColor from "./color-content";
import overlayColor from "./color-overlay";

const selector = `.${classes.component}`;
const contentSelector = `.${classes.content}`;
const overlaySheetSelector = `.${classes.overlaySheet}`;
const overlayContentSelector = `.${classes.overlayContent}`;

export const addStyle = (customSelector, customVars) => {
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, [layout, color]),
  styler.generateStyles([customSelector, " " + overlaySheetSelector], {...vars, ...customVars}, [overlayColor]),
  styler.generateStyles([customSelector, " " + contentSelector], {...vars, ...customVars}, [contentColor]),
  styler.generateStyles([customSelector, " " + overlayContentSelector], {...vars, ...customVars}, [contentColor]);
};

export const styles = () => {
  return styler.createStyleSheets([selector], vars, [layout, color])
    .concat(styler.createStyleSheets([overlaySheetSelector], vars, [overlayColor]))
    .concat(styler.createStyleSheets([contentSelector], vars, [contentColor]))
    .concat(styler.createStyleSheets([overlayContentSelector], vars, [contentColor]));
};

export const themeStyles = (customSelector, customVars) => {
  return styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, [layout, color])
    .concat(styler.createStyleSheets([customSelector, " " + overlaySheetSelector], {...vars, ...customVars}, [overlayColor]))
    .concat(styler.createStyleSheets([customSelector, " " + contentSelector], {...vars, ...customVars}, [contentColor]))
    .concat(styler.createStyleSheets([customSelector, " " + overlayContentSelector], {...vars, ...customVars}, [contentColor]));
};

styler.generateStyles([selector], vars, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars, [overlayColor]);
styler.generateStyles([contentSelector], vars, [contentColor]);
styler.generateStyles([overlayContentSelector], vars, [contentColor]);
