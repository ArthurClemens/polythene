import classes from "polythene-css-classes/card";
import color from "./color";
import contentColor from "./color-content";
import layout from "./layout";
import overlayColor from "./color-overlay";
import vars from "./vars";
import { styler } from "polythene-core-css";

const selector = `.${classes.component}`;
const contentSelector = `.${classes.content}`;
const overlaySheetSelector = `.${classes.overlaySheet}`;
const overlayContentSelector = `.${classes.overlayContent}`;

const addStyle = (customSelector, customVars) => {
  styler.generateCustomStyles([customSelector, selector], vars, customVars, [layout, color]),
  styler.generateCustomStyles([customSelector, " " + overlaySheetSelector], vars, customVars, [overlayColor]),
  styler.generateCustomStyles([customSelector, " " + contentSelector], vars, customVars, [contentColor]),
  styler.generateCustomStyles([customSelector, " " + overlayContentSelector], vars, customVars, [contentColor]);
};

const getStyle = (customSelector, customVars) =>
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, [layout, color])
      .concat(styler.createCustomStyleSheets([customSelector, " " + overlaySheetSelector], vars, customVars, [overlayColor]))
      .concat(styler.createCustomStyleSheets([customSelector, " " + contentSelector], vars, customVars, [contentColor]))
      .concat(styler.createCustomStyleSheets([customSelector, " " + overlayContentSelector], vars, customVars, [contentColor]))
    : styler.createStyleSheets([selector], vars, [layout, color])
      .concat(styler.createStyleSheets([overlaySheetSelector], vars, [overlayColor]))
      .concat(styler.createStyleSheets([contentSelector], vars, [contentColor]))
      .concat(styler.createStyleSheets([overlayContentSelector], vars, [contentColor]));

styler.generateStyles([selector], vars, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars, [overlayColor]);
styler.generateStyles([contentSelector], vars, [contentColor]);
styler.generateStyles([overlayContentSelector], vars, [contentColor]);

export {
  addStyle,
  color,
  getStyle,
  layout,
  vars,
};
