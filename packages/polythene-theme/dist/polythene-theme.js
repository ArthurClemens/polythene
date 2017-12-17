(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-style')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-style'], factory) :
	(factory((global.polythene = {}),global['polythene-style']));
}(this, (function (exports,polytheneStyle) { 'use strict';

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

exports.vars = polytheneStyle.vars;
exports.componentConfig = componentConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-theme.js.map
