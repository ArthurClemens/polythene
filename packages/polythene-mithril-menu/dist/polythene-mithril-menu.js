!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("cyano-mithril"),require("polythene-core-menu"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core","cyano-mithril","polythene-core-menu","polythene-mithril-shadow"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"],e["cyano-mithril"],e["polythene-core-menu"],e["polythene-mithril-shadow"])}(this,(function(e,t,r,n,o){"use strict";function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a="pe-menu__placeholder",l=r.cast(n._Menu,{h:r.h,a:r.a,useReducer:r.useReducer,useState:r.useState,useEffect:r.useEffect,useRef:r.useRef,getRef:r.getRef,Shadow:o.Shadow}),s=r.cast(t._Conditional,{h:r.h,useState:r.useState,useEffect:r.useEffect});s.displayName="MenuToggle";var f={view:function(e){return r.h(s,u(u({},e.attrs),{},{placeholderClassName:a,instance:l}))},displayName:"Menu"};e.Menu=f,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-mithril-menu.js.map
