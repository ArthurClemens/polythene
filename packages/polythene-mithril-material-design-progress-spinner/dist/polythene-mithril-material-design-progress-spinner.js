!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-material-design-progress-spinner"),require("polythene-mithril-base-spinner")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-material-design-progress-spinner","polythene-mithril-base-spinner"],r):r((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-material-design-progress-spinner"],e["polythene-mithril-base-spinner"])}(this,function(e,r,n,i,t){"use strict";function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(r){o(e,r,n[r])})}return e}var p="pe-spinner__placeholder",l=r.ComponentCreator(s({},i.coreMaterialDesignProgressSpinner,{component:t.BaseSpinner})),a=r.ComponentCreator(n.coreConditional);a.displayName="MaterialDesignProgressSpinnerToggle";var c={view:function(e){return r.renderer(a,s({},e.attrs,{placeholderClassName:p,instance:l}))},classes:{component:"pe-md-progress-spinner",animation:"pe-md-progress-spinner__animation",circle:"pe-md-progress-spinner__circle",circleRight:"pe-md-progress-spinner__circle-right",circleLeft:"pe-md-progress-spinner__circle-left"},displayName:"MaterialDesignProgressSpinner"};e.MaterialDesignProgressSpinner=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-material-design-progress-spinner.js.map
