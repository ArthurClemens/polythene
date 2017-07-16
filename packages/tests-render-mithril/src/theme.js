import { vars as defaultVars } from "polythene-style";

export const vars = {
  ...defaultVars
  , color_primary: "255, 152, 0" // new base color: orange 500
};

// export const componentConfig = {
//   button: vars => {
//     const mainColor = "#e4521b";
//     const textColor = "#fff";
//     const newVars = Object.assign(
//       {},
//       vars,
//       {
//         border_radius:                        0,
//         color_light_raised_normal_background: mainColor,
//         color_light_raised_normal_text:       textColor,
//         color_dark_raised_normal_background:  mainColor,
//         color_dark_raised_normal_text:        textColor
//       }
//     );
//     return [
//         { "": vars }, // default vars for all pages
//         { ".button-custom-theme ": newVars } // custom vars for this selector
//     ];
//   }
// };
