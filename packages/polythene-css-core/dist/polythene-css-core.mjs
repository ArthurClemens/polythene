import { styler } from 'polythene-core-css';

// @ts-check
var reset = (function () {
  return [{
    // apply a natural box layout model to all elements, but allow elements to change
    " html": {
      "box-sizing": "border-box"
    },
    " *, *:before, *:after": {
      "box-sizing": "inherit"
    },
    " *": [// remove tap highlight in mobile Safari
    {
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    }, {
      "-webkit-tap-highlight-color": "transparent" // For some Androids

    }],
    // Remove dotted link borders in Firefox
    " a, a:active, a:focus, input:active, *:focus": {
      outline: 0
    },
    // Mobile Safari: override default fading of disabled elements
    " input:disabled": {
      opacity: 1
    }
  }];
});

// @ts-check
var fns = [reset];
var selector = "";
var vars = {};
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);

var addGeneralStyleToHead = function addGeneralStyleToHead() {
  return styler.addStyle({
    identifier: "pe-core",
    selectors: [selector],
    fns: fns,
    vars: vars
  });
};

export { addGeneralStyleToHead, addStyle, getStyle, reset, vars };
