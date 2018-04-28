import { noTouchStyle as buttonNoTouchStyle } from "polythene-css-button";

const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    " .pe-tabs__tab": {
      color: componentVars["color_" + tint],
    },

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
    },
    " .pe-tabs__scroll-button": {
      color: "inherit"
    }
  }
}];

export const noTouchStyle = (scopes, selector, componentVars, tint) => buttonNoTouchStyle(scopes, selector + " .pe-text-button.pe-tabs__tab", componentVars, tint);

// export const noTouchStyle = (scopes, selector, componentVars, tint) => {
//   return [{
//     [[].concat(scopes.map(s => s + selector + ":hover").join(",")).concat(scopes.map(s => s + selector + ":active").join(","))]: {
//       ":not(.pe-button--selected):not(.pe-button--inactive)": {
//         color: componentVars["color_" + tint + "_hover"] || componentVars["color_" + tint + "_text"],
//         borderColor: hoverBorder,

//         " .pe-button__content": {
//           backgroundColor: componentVars["color_" + tint + "_hover_background"] || componentVars["color_" + tint + "_background"]
//         },

//         " .pe-button__wash": {
//           backgroundColor: componentVars["color_" + tint + "_wash_background"],
//         }
//       }
//     }
//   }];
// };

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light"),
];
