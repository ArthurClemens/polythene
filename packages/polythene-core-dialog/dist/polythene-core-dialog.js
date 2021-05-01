!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"])}(this,(function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i={component:"pe-dialog",placeholder:"pe-dialog__placeholder",holder:"pe-dialog__holder",content:"pe-dialog__content",backdrop:"pe-dialog__backdrop",touch:"pe-dialog__touch",fullScreen:"pe-dialog--full-screen",modal:"pe-dialog--modal",open:"pe-dialog--open",visible:"pe-dialog--visible",showBackdrop:"pe-dialog--backdrop",transition:"pe-dialog--transition",menuContent:"pe-menu__content"},l=".".concat(i.component);e._Dialog=function(e){var a=e.h,l=e.a,c=e.useState,s=e.useEffect,u=e.useRef,p=e.getRef,d=e.useReducer,f=e.Pane,h=e.Shadow,y=e.openDialogsSelector,m=r(e,["h","a","useState","useEffect","useRef","getRef","useReducer","Pane","Shadow","openDialogsSelector"]),b=o(d(t.transitionStateReducer,t.initialTransitionState),2),g=b[0],S=b[1],v=o(c(),2),w=v[0],O=v[1],k=u(),_=u(),j=u(),C=(g||t.initialTransitionState).isVisible,D=(g||t.initialTransitionState).isTransitioning,P=function(e){var t=e.isShow,r=e.hideDelay,o=void 0===r?m.hideDelay:r,a=e.referrer;return{transitionState:g,dispatchTransitionState:S,instanceId:m.instanceId,props:n({},m,{hideDelay:o}),isShow:t,domElements:{el:w,contentEl:j.current,backdropEl:k.current},showClass:i.visible,transitionClass:i.transition,referrer:a}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.hideDelay,r=e.referrer;return t.transitionComponent(P({isShow:!1,hideDelay:n,referrer:r}))},N=function(){return m.modal||w&&w.classList.contains(i.modal)||t.stylePropCompare({element:w,pseudoSelector:":before",prop:"content",contains:'"'.concat("modal",'"')})};s((function(){w&&(k.current=w.querySelector(".".concat(i.backdrop)),_.current=w.querySelector(".".concat(i.touch)),j.current=w.querySelector(".".concat(i.content)))}),[w]),s((function(){if(w&&!m.inactive){var e=function e(n){if(!(m.disableEscape&&(m.fullScreen||w&&w.classList.contains(i.fullScreen)||t.stylePropCompare({element:w,pseudoSelector:":before",prop:"content",contains:'"'.concat("full_screen",'"')})||N())||"Escape"!==n.key&&"Esc"!==n.key)){var r=document.querySelectorAll(y);r[r.length-1]===w&&(E(),t.unsubscribe("keydown",e))}};return t.subscribe("keydown",e),function(){t.unsubscribe("keydown",e)}}}),[w,m.inactive]),s((function(){w&&!D&&(m.hide?C&&E():m.show&&(C||t.transitionComponent(P({isShow:!0}))))}),[w,D,C,m.hide,m.show]);var A,I,T,R=n({},t.filterSupportedAttributes(m,{remove:["style"]}),p((function(e){return e&&!w&&(O(e),m.ref&&m.ref(e))})),(A={className:[m.parentClassName||i.component,m.fromMultipleClassName,m.fullScreen?i.fullScreen:null,m.modal?i.modal:null,m.backdrop?i.showBackdrop:null,"dark"===m.tone?"pe-dark-tone":null,"light"===m.tone?"pe-light-tone":null,m.className||m[l.class]].join(" "),"data-spawn-id":m.spawnId,"data-instance-id":m.instanceId},I=l.onclick,T=function(e){e.target!==w&&e.target!==k.current&&e.target!==_.current||N()||E()},I in A?Object.defineProperty(A,I,{value:T,enumerable:!0,configurable:!0,writable:!0}):A[I]=T,A)),x=m.panesOptions&&m.panesOptions.length?a(f,m.panesOptions[0]):m.panes&&m.panes.length?m.panes[0]:function(e){var t=e.h,n=e.Pane,r=e.props;return t(n,{body:r.content||r.body||r.menu||r.children,element:r.element,borders:r.borders,className:r.className,footer:r.footer,footerButtons:r.footerButtons,formOptions:r.formOptions,fullBleed:r.fullBleed,header:r.header,style:r.style,title:r.title})}({h:a,Pane:f,props:m}),B=m.shadowDepth,q=[a("div",{className:i.backdrop}),a("div",{className:i.touch}),a("div",{className:[i.content,m.menu?i.menuContent:null].join(" ")},[m.fullScreen?null:a(h,{shadowDepth:void 0!==B?B:3,animated:!0}),m.before,x,m.after])];return a("div",R,q)},e.openDialogsSelector=l,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-dialog.js.map
