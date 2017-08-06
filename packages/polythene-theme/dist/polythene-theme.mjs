import { vars } from 'polythene-style';

// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };

var componentConfig = {};

export { vars, componentConfig };
