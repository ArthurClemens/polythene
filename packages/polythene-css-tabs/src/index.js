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

const addStyle = (customSelector, customVars) => (
  styler.generateCustomStyles([customSelector, tabsSelector], vars, customVars, tabsFns),
  styler.generateCustomStyles([customSelector, tabSelector], vars, customVars, tabFns)
);

const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, tabsSelector], vars, customVars, tabsFns)
      .concat(styler.createCustomStyleSheets([customSelector, tabSelector], vars, customVars, tabFns))
    : styler.createStyleSheets([tabsSelector], vars, tabsFns)
      .concat(styler.createStyleSheets([tabSelector], vars, tabFns));

styler.generateStyles([tabsSelector], vars, tabsFns);
styler.generateStyles([tabSelector], vars, tabFns);

export {
  addStyle,
  getStyle,
  tabColor,
  tabLayout,
  tabsColor,
  tabsLayout,
  vars,
};
