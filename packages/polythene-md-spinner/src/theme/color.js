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

const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    color: componentVars["color_" + tint + "_single"],

    " .pe-md-spinner__layer": {
      borderColor: "currentcolor"
    },

    ":not(.pe-spinner--single-color)": {
      " .pe-md-spinner__layer-1": {
        borderColor: componentVars["color_" + tint + "_1"]
      },
      " .pe-md-spinner__layer-2": {
        borderColor: componentVars["color_" + tint + "_2"]
      },
      " .pe-md-spinner__layer-3": {
        borderColor: componentVars["color_" + tint + "_3"]
      },
      " .pe-md-spinner__layer-4": {
        borderColor: componentVars["color_" + tint + "_4"]
      }
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
