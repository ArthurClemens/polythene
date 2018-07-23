
import * as containedButton from "./contained-button";
import * as textButton from "./text-button";

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  textButton.addStyle(customSelector, customVars, { mediaQuery });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => 
  textButton.getStyle(customSelector, customVars, { mediaQuery })
    .concat(
      containedButton.getStyle(customSelector, customVars, { mediaQuery })
    );

const textButtonVars = textButton.vars;
const textButtonColor = textButton.color;
const textButtonLayout = textButton.layout;

export {
  addStyle,
  getStyle,
  textButtonColor,
  textButtonLayout,
  textButtonVars,
};
