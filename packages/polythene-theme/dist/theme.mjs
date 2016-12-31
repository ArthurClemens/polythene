import { defaultVariables } from 'polythene-core';

// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the README.

// Example customization in custom config file:
//
// import { defaultVariables } from "polythene-core";
//
// export const vars = {
//   ...defaultVariables
//   // set new base color
//   , color_primary: "255, 152, 0" // orange 500
// };

// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export default {
//   button: (vars) => {
//     const mainColor = "#e4521b";
//     const textColor = "#fff";
//     const themeVars = Object.assign({}, vars, {
//       border_radius: 0,
//       color_light_raised_normal_background: mainColor,
//       color_light_raised_normal_text: textColor,
//       color_dark_raised_normal_background: mainColor,
//       color_dark_raised_normal_text: textColor
//     });
//     return [{
//         "": vars
//       }, // all pages
//       {
//         ".module-custom-theme": themeVars
//       } // only this page
//     ];
//   }
// };

var styles = {};

export { defaultVariables as vars, styles };
