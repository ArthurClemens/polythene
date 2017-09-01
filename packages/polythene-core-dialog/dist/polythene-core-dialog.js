!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-core-menu"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-core-menu","polythene-theme"],n):n(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-core-menu"],e["polythene-theme"])}(this,function(e,n,t,o,r){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={component:"pe-dialog",placeholder:"pe-dialog__placeholder",holder:"pe-dialog__holder",content:"pe-dialog__content",fullScreen:"pe-dialog--full-screen",backdrop:"pe-dialog--backdrop",open:"pe-dialog--open",menuContent:o.classes.content},u={border_radius:r.vars.unit_block_border_radius,color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)",color_light_background:t.rgba(r.vars.color_light_background),color_dark_background:t.rgba(r.vars.color_dark_background),color_light_text:t.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_regular),color_dark_text:t.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_regular)},s=function(e,n){return[a({},e,[t.flex.layoutCenterCenter,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:r.vars.z_dialog,height:"100%",padding:n.padding+"px 40px",".pe-dialog--full-screen":{padding:0}," .pe-dialog__content":{position:"relative",borderRadius:n.border_radius+"px"}}])]},d=function(e,n,t,o){return[i({},e.map(function(e){return e+n}).join(","),{" .pe-dialog__content":{backgroundColor:t["color_"+o+"_background"],color:t["color_"+o+"_text"]},"&.pe-dialog--backdrop":{backgroundColor:t["color_"+o+"_backdrop_background"]}})]},p=function(e,n){return[d([".pe-dark-tone",".pe-dark-tone "],e,n,"dark"),d(["",".pe-light-tone",".pe-light-tone "],e,n,"light")]},h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},f=[s,p],g="."+c.component,b=function(e,n){return t.styler.generateStyles([e,g],h({},u,n),f)};t.styler.generateStyles([g],u,f);var y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_=function(e){return e.attrs.element||"div"},m=b,v=function(e,t){if(e.transitioning())return Promise.resolve();var o=e.instanceId;e.transitioning(!0);var r=t.transitions;return n.show(y({},t,r.show({el:e.el,showDuration:t.showDuration,showDelay:t.showDelay}))).then(function(){t.multipleDidShow&&t.multipleDidShow(o),e.transitioning(!1)})},k=function(e,t){if(e.transitioning())return Promise.resolve();var o=e.instanceId;e.transitioning(!0);var r=t.transitions;return n.hide(y({},t,r.hide({el:e.el,hideDuration:t.hideDuration,hideDelay:t.hideDelay}))).then(function(){t.multipleDidHide&&t.multipleDidHide(o),e.transitioning(!1)})},w=function(e,n){return{cleanUp:void 0,el:void 0,transitioning:n(!1)}},D=function(e){if(e.dom){var t=e.state,o=e.attrs;t.el=e.dom;var r=function(e){o.fullScreen||o.modal||"Escape"===e.key&&k(t,y({},o,{hideDelay:0}))};t.cleanUp=function(){return n.unsubscribe("keydown",r)},n.subscribe("keydown",r),o.showInstance&&v(t,o)}},x=function(e){return e.state.cleanUp()},j=function(e,t){var o=t.keys,r=e.state,a=e.attrs;return y({},n.filterSupportedAttributes(a,{remove:["style"]}),l({className:[c.component,a.fullScreen?c.fullScreen:null,a.backdrop?c.backdrop:null,"dark"===a.tone?"pe-dark-tone":null,"light"===a.tone?"pe-light-tone":null,a.className||a[o.class]].join(" ")},o.onclick,function(e){e.target===r.el&&(a.modal||k(r,y({},a,{hideDelay:0})))}),a.formOptions?a.formOptions:null)},O=function(e,n){var t=n.renderer,o=n.Shadow,r=n.DialogPane,a=e.state,i=e.attrs;i.hideInstance&&k(a,i);var l=i.panes&&i.panes.length?i.panes[0]:t(r,{title:i.title,header:i.header,body:i.content||i.body||i.menu,footer:i.footer,footerButtons:i.footerButtons,className:i.className,style:i.style});return t("div",{className:[c.content,i.menu?c.menuContent:null].join(" "),style:i.style},[i.fullScreen?null:t(o,{z:void 0!==i.z?i.z:3,animated:!0}),l])},S=Object.freeze({getElement:_,theme:m,getInitialState:w,onMount:D,onUnMount:x,createProps:j,createContent:O}),P={show:function(e){var n=e.el,t=e.showDuration,o=e.showDelay;return{el:n,showDuration:t||.22,showDelay:o||0,beforeShow:function(){return n.style.opacity=0},show:function(){return n.style.opacity=1}}},hide:function(e){var n=e.el,t=e.hideDuration,o=e.hideDelay;return{el:n,hideDuration:t||.22,hideDelay:o||0,hide:function(){return n.style.opacity=0}}}};e.coreDialogInstance=S,e.classes=c,e.vars=u,e.transitions=P,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-dialog.js.map