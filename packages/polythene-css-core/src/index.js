// @ts-check

import reset from "./reset";
import { styler } from "polythene-core-css";

const fns = [reset];
const selector = "";
const vars = {};

const addStyle = styler.createAddStyle(selector, fns, vars);

const getStyle = styler.createGetStyle(selector, fns, vars);

const addGeneralStyleToHead = () =>
  styler.addStyle({
    identifier: "pe-core",
    selectors: [selector],
    fns,
    vars
  });

export {
  addGeneralStyleToHead,
  addStyle,
  getStyle,
  reset,
  vars,
};
