!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-notification")):"function"==typeof define&&define.amd?define(["exports","polythene-core-notification"],t):t((e=e||self).polythene={},e["polythene-core-notification"])}(this,function(e,t){"use strict";var n={show:({containerEl:e,el:t,duration:n,delay:o})=>({el:e,duration:n||.4,delay:o||0,before:()=>{t.style.display="block";const n=t.getBoundingClientRect().height;e.style.transform=`translate3d(0, ${n}px, 0)`},transition:()=>e.style.transform="translate3d(0, 0px, 0)"}),hide:({containerEl:e,el:t,duration:n,delay:o})=>({el:e,duration:n||.4,delay:o||0,transition:()=>{const n=t.getBoundingClientRect().height;e.style.transform=`translate3d(0, ${n}px, 0)`},after:()=>{t.style.display="none",e.style.transitionDuration="0ms",e.style.transform="translate3d(0, 0px, 0)"}})};e.coreSnackbarInstance=t.coreNotificationInstance,e.transitions=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-snackbar.js.map
