!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-shadow"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"],e["polythene-core-shadow"])}(this,(function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var o,r,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d={component:"pe-text-button",super:"pe-button",row:"pe-button-row",content:"pe-button__content",label:"pe-button__label",textLabel:"pe-button__text-label",wash:"pe-button__wash",washColor:"pe-button__wash-color",dropdown:"pe-button__dropdown",border:"pe-button--border",contained:"pe-button--contained",disabled:"pe-button--disabled",dropdownClosed:"pe-button--dropdown-closed",dropdownOpen:"pe-button--dropdown-open",extraWide:"pe-button--extra-wide",hasDropdown:"pe-button--dropdown",highLabel:"pe-button--high-label",inactive:"pe-button--inactive",raised:"pe-button--raised",selected:"pe-button--selected",separatorAtStart:"pe-button--separator-start",hasHover:"pe-button--has-hover"},p="pe-with-active-shadow";e._Button=function(e){var o,c=e.h,b=e.a,f=e.getRef,y=e.useState;e.useEffect,e.useRef;var h=e.Ripple,v=e.Shadow,m=e.Icon,w=u(e,["h","a","getRef","useState","useEffect","useRef","Ripple","Shadow","Icon"]),g=w.events||{},O=s(y(),2),j=O[0],S=O[1],x=s(y(w.inactive),2),_=x[0],k=x[1],E=w.disabled,P=w.inactive||_,D=g[b.onclick]||function(){},A=g[b.onkeyup]||D,N=w.raised?void 0!==w.shadowDepth?w.shadowDepth:1:0,C=!1!==w.animateOnTap,I=!E&&!w.selected&&(w.raised?w.wash:!1!==w.wash),L=function e(t){j.blur(),j.removeEventListener("mouseleave",e)},R=i({},t.filterSupportedAttributes(w,{add:[b.formaction,"type"],remove:["style"]}),f((function(e){e&&!j&&(S(e),w.getRef&&w.getRef(e))})),w.testId&&{"data-test-id":w.testId},{className:[d.super,w.parentClassName||d.component,w.contained?d.contained:null,w.raised?d.contained:null,w.raised?d.raised:null,w.raised&&C?p:null,w.raised&&C?n.getDepthClass(N+1):null,I?d.hasHover:null,w.selected?d.selected:null,w.highLabel?d.highLabel:null,w.extraWide?d.extraWide:null,E?d.disabled:null,P?d.inactive:null,w.separatorAtStart?d.separatorAtStart:null,w.border||w.borders?d.border:null,w.dropdown?d.hasDropdown:null,w.dropdown?w.dropdown.open?d.dropdownOpen:d.dropdownClosed:null,"dark"===w.tone?"pe-dark-tone":null,"light"===w.tone?"pe-light-tone":null,w.className||w[b.class]].join(" ")},P?null:r(r(l({},b.tabindex,E||P?-1:w[b.tabindex]||0),g),{},(l(o={},b.onmousedown,(function(e){return j&&j.addEventListener&&j.addEventListener("mouseleave",L),w.events&&w.events[b.onmousedown]&&w.events[b.onmousedown](e)})),l(o,b.onclick,(function(e){return document.activeElement===j&&document.activeElement.blur(),void 0!==w.inactivate&&(k(!0),setTimeout((function(){return k(!1)}),1e3*w.inactivate)),D(e)})),l(o,b.onkeyup,(function(e){13===e.keyCode&&document.activeElement===j&&(document.activeElement.blur(),A&&A(e)),w.events&&w.events[b.onkeyup]&&w.events[b.onkeyup](e)})),o)),w.url,E?{disabled:!0}:null),T=void 0!==w.ink&&!1===w.ink,W=w.content?w.content:void 0!==w.label?"object"===a(w.label)?w.label:c("div",{className:d.label},c("div",{className:d.textLabel,style:w.textStyle},w.label)):w.children,q=c("div",{className:d.content,style:w.style},[c(v,{shadowDepth:void 0!==N?N:0,animated:!0}),E||T?null:c(h,i({},{target:j},w.ripple)),c("div",{className:d.wash},c("div",{className:d.washColor})),W,w.dropdown?c(m,{className:d.dropdown,svg:{content:c.trust(t.iconDropdownDown)}}):null]);return c(w.element||"a",R,[w.before,q,w.after])},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-button.js.map
