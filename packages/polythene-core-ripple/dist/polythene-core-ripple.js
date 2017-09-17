!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,i){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=t.getAnimationEndEvent(),r=function(e){var r=e.e,s=e.id,c=e.el,l=e.attrs,p=e.classes;return new Promise(function(e){var u=document.createElement("div");u.setAttribute("class",p.mask),c.appendChild(u);var d=document.createElement("div");d.setAttribute("class",p.waves),u.appendChild(d);var m=c.getBoundingClientRect(),v=t.isTouch&&r.touches?r.touches[0].pageX:r.clientX,f=t.isTouch&&r.touches?r.touches[0].pageY:r.clientY,h=c.offsetWidth,y=c.offsetHeight,g=Math.sqrt(h*h+y*y),b=l.center?m.left+m.width/2:v,w=l.center?m.top+m.height/2:f,E=b-m.left-g/2,_=w-m.top-g/2,k=void 0!==l.startOpacity?l.startOpacity:.2,O=void 0!==l.opacityDecayVelocity?l.opacityDecayVelocity:.35,j=l.endOpacity||0,A=l.startScale||.1,C=l.endScale||2,x=l.duration?l.duration:1/O*.2,L=window.getComputedStyle(c).color,S=d.style;S.width=S.height=g+"px",S.top=_+"px",S.left=E+"px",S["animation-duration"]=S["-webkit-animation-duration"]=S["-moz-animation-duration"]=S["-o-animation-duration"]=x+"s",S.backgroundColor=L,S.opacity=k,S.animationName=s,S.animationTimingFunction=l.animationTimingFunction||i.vars.animation_curve_default;var P=[a({},"@keyframes "+s,{" 0%":{transform:"scale("+A+")",opacity:k}," 100%":{transform:"scale("+C+")",opacity:j}})];n.styler.add(s,P);var T=function t(i){n.styler.remove(s),d.removeEventListener(o,t,!1),l.persistent?(S.opacity=j,S.transform="scale("+C+")"):(d.classList.remove(p.wavesAnimating),u.removeChild(d),c.removeChild(u)),e(i)};d.addEventListener(o,T,!1),d.classList.add(p.wavesAnimating)})},s={component:"pe-ripple",mask:"pe-ripple__mask",waves:"pe-ripple__waves",unconstrained:"pe-ripple--unconstrained",wavesAnimating:"pe-ripple__waves--animating"},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(e){return e.attrs.element||"div"},p=function(){return{animations:{},animating:!1,cleanUp:void 0}},u=function(e,n){var i=n.keys,a=e.attrs;return c({},t.filterSupportedAttributes(a),{className:[s.component,a.unconstrained?s.unconstrained:null,"dark"===a.tone?"pe-dark-tone":null,"light"===a.tone?"pe-light-tone":null,a.className||a[i.class]].join(" ")})},d=function(e){return e.animating=Object.keys(e.animations).length>0},m=function(e){if(e.dom||!t.isServer){var n=e.state,i=e.attrs,a=function(t){if(!(i.disabled||!i.multi&&n.animating)){i.start&&i.start(t);var a="ripple_animation_"+(new Date).getTime();n.animations[a]=r({e:t,id:a,el:e.dom,attrs:i,classes:s}).then(function(e){i.end&&i.end(e),delete n.animations[a],d(n)}),d(n)}},o=i.target?i.target:e.dom&&e.dom.parentElement;o.addEventListener(t.pointerEndEvent,a,!1),n.cleanUp=function(){return o.removeEventListener(t.pointerEndEvent,a,!1)}}},v=function(e){var t=e.state;return t.cleanUp&&t.cleanUp()},f=Object.freeze({getElement:l,getInitialState:p,createProps:u,onMount:m,onUnMount:v}),h={color:"inherit"};e.coreRipple=f,e.classes=s,e.vars=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-ripple.js.map
