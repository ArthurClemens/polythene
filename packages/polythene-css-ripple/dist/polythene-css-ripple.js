!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-core-ripple")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-ripple"],r):r(e.polythene={},e["polythene-core-css"],e["polythene-core-ripple"])}(this,function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(e){return[n({},e,[r.mixin.fit(),{color:"inherit",borderRadius:"inherit",pointerEvents:"none",":not(.pe-ripple--unconstrained)":{borderRadius:"inherit"," .pe-ripple__mask":{overflow:"hidden",borderRadius:"inherit"}}," .pe-ripple__mask":[r.mixin.fit(),{transform:"translate3d(0,0,0)"}]," .pe-ripple__waves":{outline:"1px solid transparent",position:"absolute",borderRadius:"50%",pointerEvents:"none",display:"none"}," .pe-ripple__waves--animating":{display:"block"}}])]},l=function(e,r,t,n){return[o({},e.map(function(e){return e+r}).join(","),{color:t["color_"+n]||t.color||"inherit"})]},p=function(e,r){return[l([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),l(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=[i,p],u="."+t.classes.component,c=function(e,n){return r.styler.generateStyles([e,u],s({},t.vars,n),a)},d=function(){return r.styler.createStyleSheets([u],t.vars,a)},f=function(e,n){return r.styler.createStyleSheets([e,u],s({},t.vars,n),a)};r.styler.generateStyles([u],t.vars,a),e.addStyle=c,e.styles=d,e.themeStyles=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-ripple.js.map
