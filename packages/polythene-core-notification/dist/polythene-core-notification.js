!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-utilities")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-utilities"],t):t((e=e||self).polythene={},e["polythene-core"],e["polythene-utilities"])}(this,function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o={component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multi-line",vertical:"pe-notification--vertical",visible:"pe-notification--visible"},r=function(e){e.timer&&e.timer.stop()},l=function(e,t,n){return{state:e,attrs:t,isShow:n,beforeTransition:function(){return r(e)},afterTransition:n?function(){var n=t.timeout;if(0===n);else{var i=void 0!==n?n:3;e.timer.start(function(){c(e,t)},i)}}:null,domElements:{el:e.el,containerEl:e.containerEl},showClass:o.visible}},a=function(e,n){return t.transitionComponent(l(e,n,!0))},c=function(e,n){return t.transitionComponent(l(e,n,!1))},s=Object.freeze({getElement:function(e){return e.attrs.element||"div"},getInitialState:function(e,t){var i=t(!1),o=t(!1),r=t(!1),l=t(!1);return{cleanUp:void 0,containerEl:void 0,dismissEl:void 0,el:void 0,timer:new n.Timer,paused:o,transitioning:i,visible:l,mounted:r,redrawOnUpdate:t.merge([l])}},onMount:function(e){if(e.dom){var n=e.dom,i=e.state,r=e.attrs;i.el=n;var l=i.el.querySelector(".".concat(o.title));l&&function(e){t.isServer||e.getBoundingClientRect().height>parseInt(window.getComputedStyle(e).lineHeight,10)+parseInt(window.getComputedStyle(e).paddingTop,10)+parseInt(window.getComputedStyle(e).paddingBottom,10)&&e.classList.add(o.multilineTitle)}(l),!i.containerEl&&t.isClient&&(i.containerEl=document.querySelector(r.containerSelector||r.holderSelector)),!i.containerEl&&t.isClient&&console.error("No container element found"),r.containerSelector&&i.containerEl&&i.containerEl.classList.add(o.hasContainer),r.show&&!i.visible()&&a(i,r),i.mounted(!0)}},onUnMount:function(e){return e.state.mounted(!1)},createProps:function(e,n){var r,l,a,c=n.keys,s=e.attrs;return i({},t.filterSupportedAttributes(s,{remove:["style"]}),(r={className:[o.component,s.fromMultipleClassName,"light"===s.tone?null:"pe-dark-tone",s.containerSelector?o.hasContainer:null,"vertical"===s.layout?o.vertical:o.horizontal,"dark"===s.tone?"pe-dark-tone":null,"light"===s.tone?"pe-light-tone":null,s.className||s[c.class]].join(" ")},l=c.onclick,a=function(e){return e.preventDefault()},l in r?Object.defineProperty(r,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[l]=a,r))},createContent:function(e,t){var n=t.renderer,i=e.state,r=e.attrs;return i.mounted()&&!i.transitioning()&&(r.hide&&i.visible()?c(i,r):r.show&&!i.visible()&&a(i,r)),r.pause&&!i.paused()?function(e){e.paused(!0),e.timer&&e.timer.pause()}(i):r.unpause&&i.paused()&&function(e){e.paused(!1),e.timer&&e.timer.resume()}(i),n("div",{className:o.content,style:r.style},r.content||[r.title?n("div",{className:o.title},r.title):null,r.action?n("div",{className:o.action},r.action):null])}});e.coreNotification=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-notification.js.map
