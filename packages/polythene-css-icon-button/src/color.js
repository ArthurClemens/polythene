// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      "&, .pe-icon-button__label": {
        color: vars["color_" + tint],
      },
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": { 
        backgroundColor: vars["color_" + tint + "_background"]
      },
    })
  ],
  ["color_" + tint + "_wash_opacity"]: (selector, vars) => [
    sel(selector, {
      opacity: vars["color_" + tint + "_wash_opacity"]
    })
  ],
  ["color_" + tint + "_focus_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_opacity"],
        }
      },
    })
  ],
  ["color_" + tint + "_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars["color_" + tint + "_disabled"]
        }
      }
    })
  ],
  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--focus": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        },
      }
    })
  ],
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_hover"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": { 
        color: vars["color_" + tint + "_hover"]
      },
    })
  ],
  ["color_" + tint + "_label_hover"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        color: vars["color_" + tint + "_label_hover"]
      },
    })
  ],
  ["color_" + tint + "_background_hover"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": { 
        backgroundColor: vars["color_" + tint + "_background_hover"]
      },
    })
  ],
  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--wash": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        },
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");

export default createColor({
  varFns: { lightTintFns, darkTintFns, lightTintHoverFns, darkTintHoverFns }
});
