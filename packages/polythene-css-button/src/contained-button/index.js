// @ts-check

import classes from "polythene-css-classes/button";
import color from "./color";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const selectors = [classes.component, classes.contained].join(" ");
const selector = `.${selectors.split(/\s/).join(".")}`;

const addStyle = styler.createAddStyle(selector, fns, vars);

const getStyle = styler.createGetStyle(selector, fns, vars);

const addGeneralStyleToHead = () =>
  styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

export {
  addGeneralStyleToHead,
  addStyle,
  getStyle,
  color,
  layout,
  vars,
};
