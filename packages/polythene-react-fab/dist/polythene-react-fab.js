!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-fab"),require("polythene-react-icon"),require("polythene-react-button")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-fab","polythene-react-icon","polythene-react-button"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-fab"],e["polythene-react-icon"],e["polythene-react-button"])}(this,function(e,t,n,o,r){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}var u=t.ComponentCreator(a({},n.coreFAB,{createProps:function(e,t){return n.coreFAB.createProps(e,a({},t,{Icon:o.Icon}))},createContent:function(e,t){return n.coreFAB.createContent(e,a({},t,{Icon:o.Icon}))},component:r.Button}));u.displayName="FAB",e.FAB=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-fab.js.map
