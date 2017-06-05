// theme override

import { defaultVariables } from 'polythene-core';

export const appConfig = {
  ...defaultVariables
  , color_primary: '33, 150, 245' // new base color: orange 500
};

export const componentConfig = {
  button: vars => {
    const mainColor = '#e4521b';
    const textColor = '#fff';
    const newVars = Object.assign(
      {},
      vars,
      {
        border_radius:                        0,
        color_light_raised_normal_background: mainColor,
        color_light_raised_normal_text:       textColor,
        color_dark_raised_normal_background:  mainColor,
        color_dark_raised_normal_text:        textColor
      }
    );
    return [
        { '': vars }, // default vars for all pages
        { '.example-custom-theme ': newVars } // custom vars for this selector
    ];
  }
};