!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-tabs"),require("polythene-mithril-icon"),require("polythene-mithril-button"),require("polythene-mithril-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-tabs","polythene-mithril-icon","polythene-mithril-button","polythene-mithril-icon-button"],t):t((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-tabs"],e["polythene-mithril-icon"],e["polythene-mithril-button"],e["polythene-mithril-icon-button"])}(this,function(e,t,o,n,r,i){"use strict";function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){l(e,t,o[t])})}return e}var u=t.ComponentCreator(a({},o.coreTab,{createProps:function(e,t){return o.coreTab.createProps(e,c(t,{Icon:n.Icon}))},component:r.Button}));u.displayName="Tab";var p=t.ComponentCreator(a({},o.coreScrollButton,{component:i.IconButton}));p.displayName="ScrollButton";var b=t.ComponentCreator(a({},o.coreTabs,{createContent:function(e,t){return o.coreTabs.createContent(e,c(t,{Tab:u,ScrollButton:p}))}}));b.displayName="Tabs",e.Tabs=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-tabs.js.map
