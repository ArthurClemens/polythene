// @ts-check

/**
 * @typedef {import("../index").RadioButtonVars} RadioButtonVars
 */

import { vars } from "polythene-theme";
import { vars as selectionControlVars } from "polythene-css-selection-control";

/**
 * @type {RadioButtonVars} radioButtonVars
 */
const radioButtonVars = {
  general_styles: true,
  button_size:    5 * vars.grid_unit_component, // 40
  icon_size:      selectionControlVars.icon_size
};

export default radioButtonVars;
