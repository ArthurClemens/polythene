!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-react-base-spinner"),require("polythene-core-material-design-progress-spinner"),require("cyano-react"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base-spinner","polythene-core-material-design-progress-spinner","cyano-react","polythene-core"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-react-base-spinner"],e["polythene-core-material-design-progress-spinner"],e["cyano-react"],e["polythene-core"])}(this,(function(e,r,n,t,s){"use strict";function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var c="pe-spinner__placeholder",a=t.cast(n._Spinner,{h:t.h,useState:t.useState,useRef:t.useRef,useEffect:t.useEffect,BaseSpinner:r.BaseSpinner}),l=t.cast(s._Conditional,{h:t.h,useState:t.useState,useEffect:t.useEffect});l.displayName="MaterialDesignProgressSpinnerToggle";var f=function(e){return t.h(l,o(o({},e),{},{placeholderClassName:c,instance:a}))};f.classes={component:"pe-md-progress-spinner",animation:"pe-md-progress-spinner__animation",circle:"pe-md-progress-spinner__circle",circleRight:"pe-md-progress-spinner__circle-right",circleLeft:"pe-md-progress-spinner__circle-left"},f.displayName="MaterialDesignProgressSpinner",e.MaterialDesignProgressSpinner=f,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-react-material-design-progress-spinner.js.map
