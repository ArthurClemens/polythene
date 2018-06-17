import classes from "polythene-css-classes/tabs";
import tabColor from "./tab/color";
import tabLayout from "./tab/layout";
import tabsColor from "./tabs/color";
import tabsLayout from "./tabs/layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const tabsFns = [tabsLayout, tabsColor];
const tabFns = [tabLayout, tabColor];
const tabsSelector = `.${classes.component}`;
const tabClass = `${classes.tab} pe-text-button pe-button`;
const tabSelector = ` .${tabClass.replace(/ /g, ".")}`;

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars,
    customVars,
    mediaQuery,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars,
    customVars,
    mediaQuery,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => 
  styler.getStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars,
    customVars,
    mediaQuery,
  }).concat(styler.getStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars,
    customVars,
    mediaQuery,
  }));

styler.addStyle({
  selectors: [tabsSelector],
  fns: tabsFns,
  vars
});
styler.addStyle({
  selectors: [tabSelector],
  fns: tabFns,
  vars
});

export {
  addStyle,
  getStyle,
  tabColor,
  tabLayout,
  tabsColor,
  tabsLayout,
  vars,
};
