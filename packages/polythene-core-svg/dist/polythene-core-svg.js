!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t(e.polythene={},e["polythene-core"])}(this,function(e,t){"use strict";var n={component:"pe-svg"},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){return e.attrs.element||"div"},c=function(e,o){var c=o.keys,l=e.attrs;return r({},t.filterSupportedAttributes(l),{className:[n.component,"dark"===l.tone?"pe-dark-tone":null,"light"===l.tone?"pe-light-tone":null,l.className||l[c.class]].join(" ")})},l=function(e){var t=e.attrs;return t.content?t.content:t.children||e.children||t},s=Object.freeze({getElement:o,createProps:c,createContent:l}),a={color_light:"currentcolor",color_dark:"currentcolor"};e.coreSVG=s,e.classes=n,e.vars=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-svg.js.map
