!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"])}(this,(function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={component:"pe-menu",panel:"pe-menu__panel",content:"pe-menu__content",placeholder:"pe-menu__placeholder",backdrop:"pe-menu__backdrop",floating:"pe-menu--floating",origin:"pe-menu--origin",permanent:"pe-menu--permanent",showBackdrop:"pe-menu--backdrop",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",isTopMenu:"pe-menu--top-menu",listTile:"pe-list-tile",selectedListTile:"pe-list-tile--selected"};e._Menu=function(e){var i=e.h,l=e.a,u=e.useReducer,s=e.useState,c=e.useEffect,p=e.useRef,f=e.getRef,d=e.Shadow,h=r(e,["h","a","useReducer","useState","useEffect","useRef","getRef","Shadow"]),g=o(u(t.transitionStateReducer,t.initialTransitionState),2)[1],m=o(s(),2),y=m[0],v=m[1],b=o(s(!!h.permanent),2)[1],w=p(),S=p(),O=function(){x(),E()},T=function(e){var t=e.isShow,r=e.hideDelay,o=void 0===r?h.hideDelay:r;return{dispatchTransitionState:g,setIsVisible:b,props:n({},h,{hideDelay:o}),isShow:t,beforeTransition:t?function(){return O()}:null,domElements:{el:w.current,showClassElement:y},showClass:a.visible}},x=function(){if(!t.isServer&&h.target){var e=w.current,r=S.current,o=document.querySelector(h.target);if(o&&e){var i=t.stylePropCompare({element:e,prop:"position",equals:"fixed"});if(i&&!h.topMenu&&!t.stylePropCompare({element:y,pseudoSelector:":before",prop:"content",contains:'"'.concat("top_menu",'"')}))return n(e.style,{}),void e.offsetHeight;var l=e.parentNode.getBoundingClientRect(),u=o.getBoundingClientRect(),s=void 0!==h.offsetH?h.offsetH:void 0!==h.offset?h.offset:0,c=void 0!==h.offsetV?h.offsetV:"79%",p=-1!==s.toString().indexOf("%")?Math.round(.01*parseFloat(s)*u.width):Math.round(parseFloat(s)),f=-1!==c.toString().indexOf("%")?Math.round(.01*parseFloat(c)*u.height):Math.round(parseFloat(c)),d=h.origin||"top",g=d.split(/\W+/).reduce((function(e,t){return e[t]=!0,e}),{}),m=r.querySelectorAll("."+a.listTile)[0];if(h.reposition){var v=r.querySelector("."+a.selectedListTile);if(m&&v){var b=m.getBoundingClientRect(),O=v.getBoundingClientRect();f=b.top-O.top}var T=(v||m).getBoundingClientRect(),x=o.getBoundingClientRect().height-T.height;f+=Math.abs(x)/2}else h.origin&&!i&&(g.top?f+=u.top-l.top:g.bottom&&(f+=u.top-l.bottom));if(h.height){var E=m?m.clientHeight:48;if("max"===h.height){var R=f,_=E;e.style.height="calc(100% - ".concat(R+_,"px)")}else{var k=/^\d+$/.test(h.height.toString())?"".concat(h.height,"px"):h.height;e.style.height=k}}var D=e.style.transitionDuration;e.style.transitionDuration="0ms",e.parentNode&&!i&&(g.right?e.style.right=u.right-l.right+p+"px":e.style.left=u.left-l.left+p+"px",g.bottom?e.style.bottom=f+"px":e.style.top=f+"px",e.style.transformOrigin=d.split(/\W+/).join(" ")),e.offsetHeight,e.style.transitionDuration=D}}},E=function(){if(!t.isServer&&h.scrollTarget){var e=document.querySelector(h.scrollTarget);e&&(S.current.scrollTop=e.offsetTop)}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.hideDelay;return t.transitionComponent(T({isShow:!1,hideDelay:n}))};c((function(){if(y){w.current=y.querySelector(".".concat(a.panel)),n(w.current.style,h.style),S.current=y.querySelector(".".concat(a.content));var e=function(e){"Escape"!==e.key&&"Esc"!==e.key||R({hideDelay:0})},r=function(e){e.target!==w.current&&R()};return h.permanent||(t.subscribe("resize",O),t.subscribe("keydown",e),setTimeout((function(){t.pointerEndDownEvent.forEach((function(e){return document.addEventListener(e,r)})),t.transitionComponent(T({isShow:!0}))}),0)),function(){h.permanent||(t.unsubscribe("resize",O),t.unsubscribe("keydown",e),t.pointerEndDownEvent.forEach((function(e){return document.removeEventListener(e,r)})))}}}),[y]);var _,k,D=h.type||"floating",j=n({},t.filterSupportedAttributes(h,{remove:["style"]}),h.testId&&{"data-test-id":h.testId},f((function(e){return e&&!y&&(v(e),h.getRef&&h.getRef(e))})),{className:[a.component,h.permanent?a.permanent:null,h.origin?a.origin:null,h.backdrop?a.showBackdrop:null,h.topMenu?a.isTopMenu:null,"floating"!==D||h.permanent?null:a.floating,h.width||h.size?(k=h.width||h.size,_=k<1.5?1.5:k,a.width_n+_.toString().replace(".","-")):null,"dark"===h.tone?"pe-dark-tone":null,"light"===h.tone?"pe-light-tone":null,h.className||h[l.class]].join(" ")}),C=void 0!==h.shadowDepth?h.shadowDepth:1,M=[i("div",{className:a.backdrop}),i("div",{className:a.panel},[i(d,{shadowDepth:C,animated:!0}),i("div",{className:a.content},h.content||h.children)])],q=[h.before].concat(M,[h.after]);return i(h.element||"div",j,q)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-menu.js.map
