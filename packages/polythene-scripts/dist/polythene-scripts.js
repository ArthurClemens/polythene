!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.polythene={})}(this,function(e){"use strict";var n=require("autoprefixer"),r=require("cssbeautify"),t=require("fs"),i=require("j2c"),o=require("postcss"),u=require("cssnano"),s=new i,c=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.reduce(function(e,n){return Object.keys(n).length?(n.forEach(function(n){var r={"@global":n},t=s.sheet(r);e+=t}),e):e},"")},f=function(e){return r(e,{indent:"  "})},a=function(e,n){return t.writeFile(e,n,"ascii",function(e){if(e)throw e})},p=function(e){var r=e.css,t=e.styles,i=e.path,s=e.autoPrefix,p=e.beautify,d=e.sourceMap,l=void 0===d||d,h=r||(t?t.reduce(function(e,n){return e+c(n)},""):""),y=i+".map",m=[];s&&m.push(n()),m.push(u({preset:"default",reduceIdents:!1}));var v=l?{to:i,map:{inline:!1}}:{};o(m).process(h,v).then(function(e){e.warnings().forEach(function(e){console.warn("[31m","Warning","[37m",e.toString())}),a(i,p?f(e.css):e.css),l&&a(y,e.map)})};e.writeCSS=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-scripts.js.map
