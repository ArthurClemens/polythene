import { defaultVariables } from 'polythene-core';

// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example customization in custom config file:
//
// import { defaultVariables as vars } from "polythene-core";
//
// export default Object.assign({}, vars, {
//     // this site"s base colors
//     color_primary: "255, 152, 0", // orange 500
//     color_primary_active: "251, 140, 0", // orange 600
//     color_primary_dark: "245, 124, 0", // orange 700
//     color_primary_faded: "255, 183, 77", // orange 300
//     color_primary_foreground: "255, 255, 255"
// });

// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export default {
//   button: (config) => {
//     const mainColor = "#e4521b";
//     const textColor = "#fff";
//     const configTestCfg = Object.assign({}, config, {
//       border_radius: 0,
//       color_light_raised_normal_background: mainColor,
//       color_light_raised_normal_text: textColor,
//       color_dark_raised_normal_background: mainColor,
//       color_dark_raised_normal_text: textColor
//     });
//     return [{
//         "": config
//       }, // all pages
//       {
//         ".module-custom-theme": configTestCfg
//       } // only this page
//     ];
//   }
// };

var components = {};

export { defaultVariables as vars, components as componentsConfig };
