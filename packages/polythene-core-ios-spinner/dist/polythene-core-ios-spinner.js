!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={})}(this,(function(e){"use strict";function n(){return(n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function t(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r={component:"pe-ios-spinner",blades:"pe-ios-spinner__blades",blade:"pe-ios-spinner__blade"};e._Spinner=function(e){var o=e.h,i=e.BaseSpinner,s=t(e,["h","BaseSpinner"]),a=s.content||o("div",{className:r.blades},[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return function(e,n){return n("div",{className:r.blade})}(0,o)}))),l=n({},s,{className:[r.component,s.className].join(" "),content:a});return o(i,l)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-ios-spinner.js.map
