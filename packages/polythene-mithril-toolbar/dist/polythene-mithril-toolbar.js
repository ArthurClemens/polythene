!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core-toolbar"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-toolbar","polythene-mithril-shadow"],o):o((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-toolbar"],e["polythene-mithril-shadow"])}(this,function(e,o,t,r){"use strict";function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(){return(l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=o.ComponentCreator(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(o){n(e,o,t[o])})}return e}({},t.coreToolbar,{createContent:function(e,o){return t.coreToolbar.createContent(e,l(o,{Shadow:r.Shadow}))}}));i.displayName="Toolbar";var a=o.ComponentCreator(t.coreToolbarTitle);a.displayName="ToolbarTitle",e.Toolbar=i,e.ToolbarTitle=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-toolbar.js.map
