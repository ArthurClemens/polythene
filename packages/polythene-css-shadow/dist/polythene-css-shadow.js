!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-shadow"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-shadow"])}(this,function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r=function(e){return{boxShadow:e}},s=function(e,o){return[n({},e,[t.mixin.fit(),{borderRadius:"inherit",pointerEvents:"none"," .pe-shadow__bottom, .pe-shadow__top":[t.mixin.fit(),{borderRadius:"inherit"}],".pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":{transition:o.transition}}},[1,2,3,4,5].map(function(e){var t;return t={},n(t," .pe-shadow__top.pe-shadow--z-"+e,r(o["shadow-top-z-"+e])),n(t," .pe-shadow__bottom.pe-shadow--z-"+e,r(o["shadow-bottom-z-"+e])),t})])]},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=[s],p="."+o.classes.component,c=function(e,n){return t.styler.generateStyles([e,p],a({},o.vars,n),i)},d=function(){return t.styler.createStyleSheets([p],o.vars,i)},u=function(e,n){return t.styler.createStyleSheets([e,p],a({},o.vars,n),i)};t.styler.generateStyles([p],o.vars,i),e.addStyle=c,e.styles=d,e.themeStyles=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-shadow.js.map
