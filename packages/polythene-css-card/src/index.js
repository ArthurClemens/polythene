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

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  styler.addStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
  });
  styler.addStyle({
    selectors: [customSelector, " " + overlaySheetSelector],
    fns: overlayColorFns,
    vars,
    customVars,
    mediaQuery,
  });
  styler.addStyle({
    selectors: [customSelector, " " + contentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
  });
  styler.addStyle({
    selectors: [customSelector, " " + overlayContentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
  }).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlaySheetSelector],
    fns: overlayColorFns,
    vars,
    customVars,
    mediaQuery,
  })).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", contentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
  })).concat(styler.getStyle({
    selectors: [customSelector, customSelector ? " " : "", overlayContentSelector],
    fns: contentColorFns,
    vars,
    customVars,
    mediaQuery,
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
  color,
  getStyle,
  layout,
  vars,
};
