!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-list-tile"),require("polythene-react-icon"),require("polythene-react-ripple")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-list-tile","polythene-react-icon","polythene-react-ripple"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-list-tile"],e["polythene-react-icon"],e["polythene-react-ripple"])}(this,function(e,t,r,n,o){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}var l=t.ComponentCreator(c({},r.coreListTile,{createProps:function(e,t){return r.coreListTile.createProps(e,c({},t,{Icon:n.Icon,Ripple:o.Ripple}))},createContent:function(e,t){return r.coreListTile.createContent(e,c({},t,{Icon:n.Icon,Ripple:o.Ripple}))}}));l.displayName="ListTile",e.ListTile=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-list-tile.js.map
