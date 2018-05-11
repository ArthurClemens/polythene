import { style as baseStyle } from "polythene-css-base-spinner";

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-md-spinner__layer": {
        borderColor: "currentcolor"
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_single"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_single"],
    })
  ],
  ["color_" + tint + "_1"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-1": {
          borderColor: vars["color_" + tint + "_1"]
        },
      }
    })
  ],
  ["color_" + tint + "_2"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-2": {
          borderColor: vars["color_" + tint + "_2"]
        },
      }
    })
  ],
  ["color_" + tint + "_3"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-3": {
          borderColor: vars["color_" + tint + "_3"]
        },
      }
    })
  ],
  ["color_" + tint + "_4"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-spinner--single-color)": {
        " .pe-md-spinner__layer-4": {
          borderColor: vars["color_" + tint + "_4"]
        },
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const createStyle = (selector, componentVars, customVars, tint) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => {
    const varFns = tint === "light"
      ? lightTintFns
      : darkTintFns;
    return varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null;
  }).filter(s => s);
};

const style = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = scopes.map(s => s + selector).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

export default (selector, componentVars, customVars) => [
  baseStyle([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  baseStyle(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
];
