!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-list"),require("polythene-react-list-tile")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-list","polythene-react-list-tile"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-list"],e["polythene-react-list-tile"])}(this,function(e,t,r,n){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}var c=t.ComponentCreator(i({},r.coreList,{createProps:function(e,t){return r.coreList.createProps(e,i({},t,{ListTile:n.ListTile}))},createContent:function(e,t){return r.coreList.createContent(e,i({},t,{ListTile:n.ListTile}))}}));c.displayName="List",e.List=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-list.js.map
