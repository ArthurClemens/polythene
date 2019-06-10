// @ts-check

import * as containedButton from "./contained-button";
import * as textButton from "./text-button";

/**
 * @param {string} customSelector 
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */
const addStyle = (customSelector, customVars, { mediaQuery="", scope="" } = {}) => {
  textButton.addStyle(customSelector, customVars, { mediaQuery, scope });
};

/**
 * @param {string} [customSelector]
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */
const getStyle = (customSelector = "", customVars, { mediaQuery="", scope="" } = {}) => 
  textButton.getStyle(customSelector, customVars, { mediaQuery, scope })
    .concat(
      containedButton.getStyle(customSelector, customVars, { mediaQuery, scope })
    );

const textButtonVars = textButton.vars;
const textButtonColor = textButton.color;
const textButtonLayout = textButton.layout;

const containedButtonVars = containedButton.vars;
const containedButtonColor = containedButton.color;
const containedButtonLayout = containedButton.layout;

const addGeneralStyleToHead = () => {
  containedButton.addGeneralStyleToHead();
  textButton.addGeneralStyleToHead();
};

export {
  addGeneralStyleToHead,
  addStyle,
  getStyle,
  containedButtonVars,
  containedButtonColor,
  containedButtonLayout,
  textButtonColor,
  textButtonLayout,
  textButtonVars,
};
