!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-theme"],n):n(e.polythene={},e["polythene-theme"])}(this,function(e,n){"use strict";var t={component:"pe-ios-spinner",blades:"pe-ios-spinner__blades",blade:"pe-ios-spinner__blade"},o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=function(e,n){return n("div",{key:"blade-"+e,className:t.blade})},a=function(e,n){var a=n.renderer,s=e.state,i=e.attrs;return s.content=s.content||a("div",{key:"content",className:t.blades},[0,1,2,3,4,5,6,7,8,9,10,11].map(function(e){return r(e,a)})),o({},i,{className:[t.component,i.className].join(" "),content:s.content})},s=Object.freeze({createProps:a}),i=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},c={animation_duration:1,color_light:i(n.vars.color_light_foreground),color_dark:i(n.vars.color_dark_foreground)};e.coreIOSSpinner=s,e.classes=t,e.vars=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-ios-spinner.js.map
