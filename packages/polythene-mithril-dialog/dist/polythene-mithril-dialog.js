!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-dialog"),require("polythene-mithril-dialog-pane"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-dialog","polythene-mithril-dialog-pane","polythene-mithril-shadow"],o):o((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-dialog"],e["polythene-mithril-dialog-pane"],e["polythene-mithril-shadow"])}(this,function(e,o,t,l,a,i){"use strict";var n="pe-dialog__placeholder",r="pe-dialog__holder",p="pe-dialog--open";const h=o.StateComponent(Object.assign({},l.coreDialog,{createContent:(e,o)=>l.coreDialog.createContent(e,Object.assign(o,{Shadow:i.Shadow,Pane:a.DialogPane,createPane:l.coreDialog.createPane}))}));h.displayName="DialogInstance";const d={name:"dialog",htmlShowClass:p,defaultId:"default_dialog",holderSelector:`div.${r}`,instance:h,placeholder:`span.${n}`},c=t.Multi({options:d,renderer:o.renderer}),s=o.StateComponent(c);Object.getOwnPropertyNames(c).forEach(e=>s[e]=c[e]),s.displayName="Dialog",e.DialogInstance=h,e.Dialog=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-dialog.js.map
