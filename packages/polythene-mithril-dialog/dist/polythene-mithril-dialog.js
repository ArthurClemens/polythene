!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-dialog"),require("polythene-mithril-dialog-pane"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-dialog","polythene-mithril-dialog-pane","polythene-mithril-shadow"],o):o((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-dialog"],e["polythene-mithril-dialog-pane"],e["polythene-mithril-shadow"])}(this,function(e,o,t,n,r,l){"use strict";function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){a(e,o,t[o])})}return e}var c="pe-dialog__placeholder",p="pe-dialog__holder",h="pe-dialog--open",d=o.ComponentCreator(i({},n.coreDialog,{createContent:function(e,o){return n.coreDialog.createContent(e,i({},o,{Shadow:l.Shadow,Pane:r.DialogPane,createPane:n.coreDialog.createPane}))}}));d.displayName="DialogInstance";var u={name:"dialog",htmlShowClass:h,defaultId:"default_dialog",holderSelector:"div.".concat(p),instance:d,placeholder:"span.".concat(c)},y=t.Multi({options:u,renderer:o.renderer}),f=o.ComponentCreator(y);Object.getOwnPropertyNames(y).forEach(function(e){return f[e]=y[e]}),f.displayName="Dialog",e.DialogInstance=d,e.Dialog=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-dialog.js.map
