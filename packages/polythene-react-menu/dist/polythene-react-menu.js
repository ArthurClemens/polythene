!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-react-base"),require("polythene-core"),require("polythene-core-menu"),require("polythene-react-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core","polythene-core-menu","polythene-react-shadow"],n):n((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core"],e["polythene-core-menu"],e["polythene-react-shadow"])}(this,function(e,n,t,o,r){"use strict";function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}var u="pe-menu__placeholder",l=n.ComponentCreator(a({},o.coreMenu,{createContent:function(e,n){return o.coreMenu.createContent(e,a({},n,{Shadow:r.Shadow}))}})),p=n.ComponentCreator(t.coreConditional);p.displayName="MenuToggle";var i=function(e){return n.renderer(p,a({},e,{placeholderClassName:u,instance:l}))};i.displayName="Menu",e.Menu=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-menu.js.map
