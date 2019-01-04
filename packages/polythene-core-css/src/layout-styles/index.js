// @ts-check

import styler from "../styler";
import flex from "./flex-classes";
import commonStyle from "./common-classes";

/**
 * @typedef {{[selector:string] : object}} Style
 * 

/**
 * @type {Array<Style>} layoutStyles
 */
export const layoutStyles = [flex, commonStyle];

/**
 * @returns {void}
 */
export const addLayoutStyles = () => 
  styler.add("pe-layout", flex, commonStyle);
