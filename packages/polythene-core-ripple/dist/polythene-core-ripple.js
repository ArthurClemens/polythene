!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"],e["polythene-theme"])}(this,(function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=t.getAnimationEndEvent(),u=function(e){var r=e.e,i=e.id,o=e.el,a=e.props,u=e.classes;return new Promise((function(e){var l=document.createElement("div");l.setAttribute("class",u.mask),o.appendChild(l);var s=document.createElement("div");s.setAttribute("class",u.waves),l.appendChild(s);var p=o.getBoundingClientRect(),d=t.isTouch&&r.touches?r.touches[0].pageX:r.clientX,f=t.isTouch&&r.touches?r.touches[0].pageY:r.clientY,m=o.offsetWidth,h=o.offsetHeight,y=Math.sqrt(m*m+h*h),v=a.center?p.left+p.width/2:d,g=a.center?p.top+p.height/2:f,b=v-p.left-y/2,w=g-p.top-y/2,E=void 0!==a.startOpacity?a.startOpacity:.2,O=void 0!==a.opacityDecayVelocity?a.opacityDecayVelocity:.35,A=a.endOpacity||0,S=a.startScale||.1,_=a.endScale||2,j=a.duration?a.duration:1/O*.2,C=window.getComputedStyle(o).color,x=s.style;x.width=x.height=y+"px",x.top=w+"px",x.left=b+"px",x["animation-duration"]=x["-webkit-animation-duration"]=x["-moz-animation-duration"]=x["-o-animation-duration"]=j+"s",x.backgroundColor=C,x.opacity=E,x.animationName=i,x.animationTimingFunction=a.animationTimingFunction||n.vars.animation_curve_default;var k="@keyframes ".concat(i," {\n      0% {\n        transform:scale(").concat(S,");\n        opacity: ").concat(E,"\n      }\n      100% {\n        transform:scale(").concat(_,");\n        opacity: ").concat(A,";\n      }\n    }");!function(e,n){if(!t.isServer){var r=window.document,i=r.createElement("style");i.setAttribute("id",e),i.appendChild(r.createTextNode(n)),r.head.appendChild(i)}}(i,k);s.addEventListener(c,(function n(r){!function(e){if(!t.isServer){var n=document.getElementById(e);n&&n.parentNode&&n.parentNode.removeChild(n)}}(i),s.removeEventListener(c,n,!1),a.persistent?(x.opacity=A,x.transform="scale("+_+")"):(s.classList.remove(u.wavesAnimating),l.removeChild(s),o.removeChild(l)),e(r)}),!1),s.classList.add(u.wavesAnimating)}))},l={component:"pe-ripple",mask:"pe-ripple__mask",waves:"pe-ripple__waves",unconstrained:"pe-ripple--unconstrained",wavesAnimating:"pe-ripple__waves--animating"};e._Ripple=function(e){var n=e.h,a=e.a,c=e.getRef,s=e.useRef,p=e.useState,d=e.useEffect,f=i(e,["h","a","getRef","useRef","useState","useEffect"]),m=o(p(),2),h=m[0],y=m[1],v=s(),g=f.target||(h?h.parentElement:void 0),b=function(e){if(!(f.disabled||!h||!f.multi&&v.current>0)){f.start&&f.start(e);var t="ripple_animation_".concat((new Date).getTime());u({e:e,id:t,el:h,props:f,classes:l}).then((function(e){f.end&&f.end(e),v.current--})),v.current++}};d((function(){v.current=0}),[]),d((function(){if(g&&g.addEventListener)return t.pointerEndEvent.forEach((function(e){return g.addEventListener(e,b,!1)})),function(){t.pointerEndEvent.forEach((function(e){return g.removeEventListener(e,b,!1)}))}}),[g]);var w=r({},t.filterSupportedAttributes(f),c((function(e){return e&&!h&&y(e)})),f.testId&&{"data-test-id":f.testId},{className:[l.component,f.unconstrained?l.unconstrained:null,"dark"===f.tone?"pe-dark-tone":null,"light"===f.tone?"pe-light-tone":null,f.className||f[a.class]].join(" ")}),E=[f.before,f.after];return n(f.element||"div",w,E)},e.rippleAnimation=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-ripple.js.map
