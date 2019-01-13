// @ts-check

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

const baseFns = [layout, color];
const overlayColorFns = [overlayColor];
const contentColorFns = [contentColor];

const addStyle = (customSelector, customVars, { mediaQuery="", scope="" } = {}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + overlaySheetSelector],
    fns: overlayColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + contentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, " " + overlayContentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery="", scope="" } = {}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  }).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlaySheetSelector],
    fns: overlayColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  })).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", contentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  })).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlayContentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  }));

styler.addStyle({
  selectors: [selector],
  fns: baseFns,
  vars
});
styler.addStyle({
  selectors: [overlaySheetSelector],
  fns: overlayColorFns,
  vars
});
styler.addStyle({
  selectors: [contentSelector],
  fns: contentColorFns,
  vars
});
styler.addStyle({
  selectors: [overlayContentSelector],
  fns: contentColorFns,
  vars
});

export {
  addStyle,
  getStyle,
  color,
  layout,
  vars,
};
