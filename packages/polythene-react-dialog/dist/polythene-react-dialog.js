!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-react-base"),require("polythene-core"),require("polythene-core-dialog"),require("polythene-react-dialog-pane"),require("polythene-react-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core","polythene-core-dialog","polythene-react-dialog-pane","polythene-react-shadow"],o):o(e.polythene={},e["polythene-react-base"],e["polythene-core"],e["polythene-core-dialog"],e["polythene-react-dialog-pane"],e["polythene-react-shadow"])}(this,function(e,o,t,a,n,r){"use strict";var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c=o.StateComponent(l({},a.coreDialogInstance,{createProps:function(e,o){return a.coreDialogInstance.createProps(e,l(o,{Shadow:r.Shadow,DialogPane:n.DialogPane}))},createContent:function(e,o){return a.coreDialogInstance.createContent(e,l(o,{Shadow:r.Shadow,DialogPane:n.DialogPane}))}}));c.displayName="DialogInstance";var i={name:"dialog",bodyShowClass:a.classes.open,defaultId:"default_dialog",holderSelector:"div."+a.classes.holder,instance:c,placeholder:"span."+a.classes.placeholder,transitions:a.transitions},s=t.Multi({options:i,renderer:o.renderer}),p=o.StateComponent(s);Object.getOwnPropertyNames(s).forEach(function(e){return p[e]=s[e]}),p.theme=a.coreDialogInstance.theme,p.displayName="Dialog",e.DialogInstance=c,e.Dialog=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-dialog.js.map