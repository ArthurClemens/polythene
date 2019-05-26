!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).polythene={})}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}n.normalize=function(e){return Array.isArray(e)?n("[",void 0,void 0,n.normalizeChildren(e),void 0,void 0):null!=e&&"object"!==t(e)?n("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},n.normalizeChildren=function(e){for(var t=[],r=0;r<e.length;r++)t[r]=n.normalize(e[r]);return t};var r=function(){var e,r=arguments[this],o=this+1;if(null==r?r={}:("object"!==t(r)||null!=r.tag||Array.isArray(r))&&(r={},o=this),arguments.length===o+1)e=arguments[o],Array.isArray(e)||(e=[e]);else for(e=[];o<arguments.length;)e.push(arguments[o++]);return n("",r.key,r,e)},o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},l={}.hasOwnProperty;function a(e){for(var t in e)if(l.call(e,t))return!1;return!0}function u(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=r.apply(1,arguments);return"string"==typeof e&&(t.children=n.normalizeChildren(t.children),"["!==e)?function(e,t){var r=t.attrs,o=n.normalizeChildren(t.children),i=l.call(r,"class"),u=i?r.class:r.className;if(t.tag=e.tag,t.attrs=null,t.children=void 0,!a(e.attrs)&&!a(r)){var f={};for(var s in r)l.call(r,s)&&(f[s]=r[s]);r=f}for(var s in e.attrs)l.call(e.attrs,s)&&"className"!==s&&!l.call(r,s)&&(r[s]=e.attrs[s]);for(var s in null==u&&null==e.attrs.className||(r.className=null!=u?null!=e.attrs.className?String(e.attrs.className)+" "+String(u):u:null!=e.attrs.className?e.attrs.className:null),i&&(r.class=null),r)if(l.call(r,s)&&"key"!==s){t.attrs=r;break}return Array.isArray(o)&&1===o.length&&null!=o[0]&&"#"===o[0].tag?t.text=o[0].children:t.children=o,t}(i[e]||function(e){for(var t,n="div",r=[],l={};t=o.exec(e);){var a=t[1],u=t[2];if(""===a&&""!==u)n=u;else if("#"===a)l.id=u;else if("."===a)r.push(u);else if("["===t[3][0]){var f=t[6];f&&(f=f.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(f):l[t[4]]=""===f?f:f||!0}}return r.length>0&&(l.className=r.join(" ")),i[e]={tag:n,attrs:l}}(e),t):(t.tag=e,t)}u.trust=function(e){return null==e&&(e=""),n("<",void 0,void 0,e,void 0,void 0)},u.fragment=function(){var e=r.apply(0,arguments);return e.tag="[",e.children=n.normalizeChildren(e.children),e};var f=function(){return u.apply(this,arguments)};if(f.m=u,f.trust=u.trust,f.fragment=u.fragment,(s=function(e){if(!(this instanceof s))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var n=this,r=[],o=[],i=f(r,!0),l=f(o,!1),a=n._instance={resolvers:r,rejectors:o},u="function"==typeof setImmediate?setImmediate:setTimeout;function f(e,i){return function f(s){var d;try{if(!i||null==s||"object"!==t(s)&&"function"!=typeof s||"function"!=typeof(d=s.then))u(function(){i||0!==e.length||console.error("Possible unhandled promise rejection:",s);for(var t=0;t<e.length;t++)e[t](s);r.length=0,o.length=0,a.state=i,a.retry=function(){f(s)}});else{if(s===n)throw new TypeError("Promise can't be resolved w/ itself");c(d.bind(s))}}catch(e){l(e)}}}function c(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(l);try{e(n(i),r)}catch(e){r(e)}}c(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,l){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&l===o.state&&o.retry()}var l=new s(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),l},s.prototype.catch=function(e){return this.then(null,e)},s.prototype.finally=function(e){return this.then(function(t){return s.resolve(e()).then(function(){return t})},function(t){return s.resolve(e()).then(function(){return s.reject(t)})})},s.resolve=function(e){return e instanceof s?e:new s(function(t){t(e)})},s.reject=function(e){return new s(function(t,n){n(e)})},s.all=function(e){return new s(function(n,r){var o=e.length,i=0,l=[];if(0===e.length)n([]);else for(var a=0;a<e.length;a++)!function(a){function u(e){i++,l[a]=e,i===o&&n(l)}null==e[a]||"object"!==t(e[a])&&"function"!=typeof e[a]||"function"!=typeof e[a].then?u(e[a]):e[a].then(u,r)}(a)})},s.race=function(e){return new s(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise?window.Promise=s:window.Promise.prototype.finally||(window.Promise.prototype.finally=s.prototype.finally);var s=window.Promise}else if("undefined"!=typeof global){void 0===global.Promise?global.Promise=s:global.Promise.prototype.finally||(global.Promise.prototype.finally=s.prototype.finally);s=global.Promise}var c=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},d=function(e,t){var n,r=0;function o(e){return function(r,o){"string"!=typeof r?(o=r,r=r.url):null==o&&(o={});var i=new t(function(t,n){e(r,o,function(e){if("function"==typeof o.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new o.type(e[n]);else e=new o.type(e);t(e)},n)});if(!0===o.background)return i;var l=0;function a(){0==--l&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.then=function(){l++;var r=n.apply(t,arguments);return r.then(a,function(e){if(a(),0===l)throw e}),e(r)},t}(i)}}function i(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}function l(e,t,n){if(null==t)return e;if(e=e.replace(/:([^\/]+)/gi,function(e,n){return null!=t[n]?t[n]:e}),n&&null!=t){var r=c(t);r&&(e+=(e.indexOf("?")<0?"?":"&")+r)}return e}return{request:o(function(t,n,r,o){var a=null!=n.method?n.method.toUpperCase():"GET",u="GET"!==a&&"TRACE"!==a&&("boolean"!=typeof n.useBody||n.useBody),f=n.data,s=!(null!=n.serialize&&n.serialize!==JSON.serialize||f instanceof e.FormData);u&&("function"==typeof n.serialize?f=n.serialize(f):f instanceof e.FormData||(f=JSON.stringify(f)));var c=new e.XMLHttpRequest,d=!1,v=c.abort;for(var h in c.abort=function(){d=!0,v.call(c)},c.open(a,l(t,n.data,!u),"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),s&&u&&!i(n,/^content-type0$/i)&&c.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||i(n,/^accept$/i)||c.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(c.withCredentials=n.withCredentials),n.timeout&&(c.timeout=n.timeout),n.responseType&&(c.responseType=n.responseType),n.headers)({}).hasOwnProperty.call(n.headers,h)&&c.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(c=n.config(c,n)||c),c.onreadystatechange=function(){if(!d&&4===c.readyState)try{var e=c.status>=200&&c.status<300||304===c.status||/^file:\/\//i.test(t),i=c.responseText;if("function"==typeof n.extract)i=n.extract(c,n),e=!0;else if("function"==typeof n.deserialize)i=n.deserialize(i);else try{i=i?JSON.parse(i):null}catch(e){throw new Error("Invalid JSON: "+i)}if(e)r(i);else{var l=new Error(c.responseText);l.code=c.status,l.response=i,o(l)}}catch(e){o(e)}},u&&null!=f?c.send(f):c.send()}),jsonp:o(function(t,n,o,i){var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,u=e.document.createElement("script");e[a]=function(t){u.parentNode.removeChild(u),o(t),delete e[a]},u.onerror=function(){u.parentNode.removeChild(u),i(new Error("JSONP request failed")),delete e[a]},t=l(t,n.data,!0),u.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),e.document.documentElement.appendChild(u)}),setCompletionCallback:function(e){n=e}}}(window,s),v=function(e){var r,o=e.document,i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function l(e){return e.attrs&&e.attrs.xmlns||i[e.tag]}function a(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function u(e){var t=e.state;try{return this.apply(t,arguments)}finally{a(e,t)}}function f(){try{return o.activeElement}catch(e){return null}}function s(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var u=t[a];null!=u&&c(e,u,o,l,i)}}function c(e,t,r,i,a){var f=t.tag;if("string"==typeof f)switch(t.state={},null!=t.attrs&&T(t.attrs,t,r),f){case"#":!function(e,t,n){t.dom=o.createTextNode(t.children),w(e,t.dom,n)}(e,t,a);break;case"<":v(e,t,i,a);break;case"[":!function(e,t,n,r,i){var l=o.createDocumentFragment();if(null!=t.children){var a=t.children;s(l,a,0,a.length,n,null,r)}t.dom=l.firstChild,t.domSize=l.childNodes.length,w(e,l,i)}(e,t,r,i,a);break;default:!function(e,t,r,i,a){var u=t.tag,f=t.attrs,c=f&&f.is,d=(i=l(t)||i)?c?o.createElementNS(i,u,{is:c}):o.createElementNS(i,u):c?o.createElement(u,{is:c}):o.createElement(u);t.dom=d,null!=f&&function(e,t,n){for(var r in t)S(e,r,null,t[r],n)}(t,f,i);if(w(e,d,a),null!=f&&null!=f.contenteditable)b(t);else if(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var v=t.children;s(d,v,0,v.length,r,null,i),"select"===t.tag&&null!=f&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&S(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,f)}}(e,t,r,i,a)}else!function(e,t,r,o,i){(function(e,t){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(T(e.state,e,t),null!=e.attrs&&T(e.attrs,e,t),e.instance=n.normalize(u.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null})(t,r),null!=t.instance?(c(e,t.instance,r,o,i),t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0):t.domSize=0}(e,t,r,i,a)}var d={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function v(e,t,n,r){var i=t.children.match(/^\s*?<(\w+)/im)||[],l=o.createElement(d[i[1]]||"div");"http://www.w3.org/2000/svg"===n?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length;for(var a,u=o.createDocumentFragment();a=l.firstChild;)u.appendChild(a);w(e,u,r)}function h(e,t,n,r,o,i){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)s(e,n,0,n.length,r,o,i);else if(null==n||0===n.length)x(t,0,t.length);else{for(var l=0,a=0,u=null,f=null;a<t.length;a++)if(null!=t[a]){u=null!=t[a].key;break}for(;l<n.length;l++)if(null!=n[l]){f=null!=n[l].key;break}if(null===f&&null==u)return;if(u!==f)x(t,a,t.length),s(e,n,l,n.length,r,o,i);else if(f){for(var d,v,h,b,S,C=t.length-1,z=n.length-1;C>=a&&z>=l;)if(h=t[C],b=n[z],null==h)C--;else if(null==b)z--;else{if(h.key!==b.key)break;h!==b&&p(e,h,b,r,o,i),null!=b.dom&&(o=b.dom),C--,z--}for(;C>=a&&z>=l;)if(d=t[a],v=n[l],null==d)a++;else if(null==v)l++;else{if(d.key!==v.key)break;a++,l++,d!==v&&p(e,d,v,r,g(t,a,o),i)}for(;C>=a&&z>=l;){if(null==d)a++;else if(null==v)l++;else if(null==h)C--;else if(null==b)z--;else{if(l===z)break;if(d.key!==b.key||h.key!==v.key)break;S=g(t,a,o),w(e,y(h),S),h!==v&&p(e,h,v,r,S,i),++l<=--z&&w(e,y(d),o),d!==b&&p(e,d,b,r,o,i),null!=b.dom&&(o=b.dom),a++,C--}h=t[C],b=n[z],d=t[a],v=n[l]}for(;C>=a&&z>=l;){if(null==h)C--;else if(null==b)z--;else{if(h.key!==b.key)break;h!==b&&p(e,h,b,r,o,i),null!=b.dom&&(o=b.dom),C--,z--}h=t[C],b=n[z]}if(l>z)x(t,a,C+1);else if(a>C)s(e,n,l,z+1,r,o,i);else{var E,A,j=o,N=z-l+1,P=new Array(N),O=0,$=0,T=2147483647,I=0;for($=0;$<N;$++)P[$]=-1;for($=z;$>=l;$--)if(null==E&&(E=m(t,a,C+1)),null!=(b=n[$])){var R=E[b.key];null!=R&&(T=R<T?R:-1,P[$-l]=R,h=t[R],t[R]=null,h!==b&&p(e,h,b,r,o,i),null!=b.dom&&(o=b.dom),I++)}if(o=j,I!==C-a+1&&x(t,a,C+1),0===I)s(e,n,l,z+1,r,o,i);else if(-1===T)for(O=(A=function(e){var t,n,r=e.slice(),o=[];o.push(0);for(var i=0,l=e.length;i<l;++i)if(-1!==e[i]){var a=o[o.length-1];if(e[a]<e[i])r[i]=a,o.push(i);else{for(t=0,n=o.length-1;t<n;){var u=(t+n)/2|0;e[o[u]]<e[i]?t=u+1:n=u}e[i]<e[o[t]]&&(t>0&&(r[i]=o[t-1]),o[t]=i)}}t=o.length,n=o[t-1];for(;t-- >0;)o[t]=n,n=r[n];return o}(P)).length-1,$=z;$>=l;$--)v=n[$],-1===P[$-l]?c(e,v,r,i,o):A[O]===$-l?O--:w(e,y(v),o),null!=v.dom&&(o=n[$].dom);else for($=z;$>=l;$--)v=n[$],-1===P[$-l]&&c(e,v,r,i,o),null!=v.dom&&(o=n[$].dom)}}else{var L=t.length<n.length?t.length:n.length;for(l=l<a?l:a;l<L;l++)(d=t[l])===(v=n[l])||null==d&&null==v||(null==d?c(e,v,r,i,g(t,l+1,o)):null==v?k(d):p(e,d,v,r,g(t,l+1,o),i));t.length>L&&x(t,l,t.length),n.length>L&&s(e,n,l,n.length,r,o,i)}}}function p(e,t,r,o,i,a){var f=t.tag;if(f===r.tag){if(r.state=t.state,r.events=t.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=u.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=u.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0}(r,t))return;if("string"==typeof f)switch(null!=r.attrs&&I(r.attrs,r,o),f){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,r);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(y(t),v(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,r,a,i);break;case"[":!function(e,t,n,r,o,i){h(e,t.children,n.children,r,o,i);var l=0,a=n.children;if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var f=a[u];null!=f&&null!=f.dom&&(null==n.dom&&(n.dom=f.dom),l+=f.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,r,o,i,a);break;default:!function(e,t,r,o){var i=t.dom=e.dom;o=l(t)||o,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)S(e,o,t&&t[o],n[o],r);var i;if(null!=t)for(var o in t)null==(i=t[o])||null!=n&&null!=n[o]||C(e,o,i,r)})(t,e.attrs,t.attrs,o),null!=t.attrs&&null!=t.attrs.contenteditable?b(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[n("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),h(i,e.children,t.children,r,null,o))}(t,r,o,a)}else!function(e,t,r,o,i,l){if(r.instance=n.normalize(u.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");I(r.state,r,o),null!=r.attrs&&I(r.attrs,r,o);null!=r.instance?(null==t.instance?c(e,r.instance,o,l,i):p(e,t.instance,r.instance,o,i,l),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=t.instance?(k(t.instance),r.dom=void 0,r.domSize=0):(r.dom=t.dom,r.domSize=t.domSize)}(e,t,r,o,i,a)}else k(t),c(e,r,o,a,i)}function m(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var i=o.key;null!=i&&(r[i]=t)}}return r}function y(e){var t=e.domSize;if(null!=t||null==e.dom){var n=o.createDocumentFragment();if(t>0){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return e.dom}function g(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function w(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function b(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function x(e,t,n){for(var r=t;r<n;r++){var o=e[r];null!=o&&k(o)}}function k(e){var t,n=1,r=0,o=e.state;"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(t=u.call(e.state.onbeforeremove,e))&&"function"==typeof t.then&&(n++,t.then(i,i)));e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(t=u.call(e.attrs.onbeforeremove,e))&&"function"==typeof t.then&&(n++,t.then(i,i)));function i(){if(++r===n&&(a(e,o),function e(t){"string"!=typeof t.tag&&"function"==typeof t.state.onremove&&u.call(t.state.onremove,t);t.attrs&&"function"==typeof t.attrs.onremove&&u.call(t.attrs.onremove,t);if("string"!=typeof t.tag)null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){for(var t=e.dom.parentNode,i=e.domSize||1;--i;)t.removeChild(e.dom.nextSibling);t.removeChild(e.dom)}}i()}function S(e,n,r,i,l){if("key"!==n&&"is"!==n&&null!=i&&!z(n)&&(r!==i||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===f()||"option"===e.tag&&e.dom.parentNode===o.activeElement}(e,n)||"object"===t(i))){if("o"===n[0]&&"n"===n[1])return $(e,n,i);if("xlink:"===n.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",n.slice(6),i);else if("style"===n)P(e.dom,r,i);else if(E(e,n,l)){if("value"===n){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+i&&e.dom===f())return;if("select"===e.tag&&null!==r&&e.dom.value===""+i)return;if("option"===e.tag&&null!==r&&e.dom.value===""+i)return}"input"===e.tag&&"type"===n?e.dom.setAttribute(n,i):e.dom[n]=i}else"boolean"==typeof i?i?e.dom.setAttribute(n,""):e.dom.removeAttribute(n):e.dom.setAttribute("className"===n?"class":n,i)}}function C(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!z(t))if("o"!==t[0]||"n"!==t[1]||z(t))if("style"===t)P(e.dom,n,null);else if(!E(e,t,r)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===f())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else $(e,t,void 0)}function z(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function E(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var A=/[A-Z]/g;function j(e){return"-"+e.toLowerCase()}function N(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(A,j)}function P(e,n,r){if(n===r);else if(null==r)e.style.cssText="";else if("object"!==t(r))e.style.cssText=r;else if(null==n||"object"!==t(n))for(var o in e.style.cssText="",r){null!=(i=r[o])&&e.style.setProperty(N(o),String(i))}else{for(var o in r){var i;null!=(i=r[o])&&(i=String(i))!==String(n[o])&&e.style.setProperty(N(o),i)}for(var o in n)null!=n[o]&&null==r[o]&&e.style.removeProperty(N(o))}}function O(){}function $(e,n,r){if(null!=e.events){if(e.events[n]===r)return;null==r||"function"!=typeof r&&"object"!==t(r)?(null!=e.events[n]&&e.dom.removeEventListener(n.slice(2),e.events,!1),e.events[n]=void 0):(null==e.events[n]&&e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r)}else null==r||"function"!=typeof r&&"object"!==t(r)||(e.events=new O,e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r)}function T(e,t,n){"function"==typeof e.oninit&&u.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(u.bind(e.oncreate,t))}function I(e,t,n){"function"==typeof e.onupdate&&n.push(u.bind(e.onupdate,t))}return O.prototype=Object.create(null),O.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),!1===e.redraw?e.redraw=void 0:"function"==typeof r&&r(),!1===t&&(e.preventDefault(),e.stopPropagation())},{render:function(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],o=f(),i=e.namespaceURI;null==e.vnodes&&(e.textContent=""),t=n.normalizeChildren(Array.isArray(t)?t:[t]),h(e,e.vnodes,t,r,null,"http://www.w3.org/1999/xhtml"===i?void 0:i),e.vnodes=t,null!=o&&f()!==o&&"function"==typeof o.focus&&o.focus();for(var l=0;l<r.length;l++)r[l]()},setRedraw:function(e){return r=e}}};var h=function(e,t){var n=v(e),r=[],o=!1;function i(e){var t=r.indexOf(e);t>-1&&r.splice(t,2)}function l(){if(o)throw new Error("Nested m.redraw.sync() call");o=!0;for(var e=1;e<r.length;e+=2)try{r[e]()}catch(e){"undefined"!=typeof console&&console.error(e)}o=!1}var a=(t||function(e){var t=null;return function(){null===t&&(t=requestAnimationFrame(function(){t=null,e()}))}})(l);return a.sync=l,n.setRedraw(a),{subscribe:function(e,t){i(e),r.push(e,t)},unsubscribe:i,redraw:a,render:n.render}}(window);d.setCompletionCallback(h.redraw);var p;f.mount=(p=h,function(e,t){if(null===t)return p.render(e,[]),void p.unsubscribe(e);if(null==t.view&&"function"!=typeof t)throw new Error("m.mount(element, component) expects a component, not a vnode");var r=function(){p.render(e,n(t))};p.subscribe(e,r),r()});var m=s,y=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),f=n;l.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var c=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10)),h=s===u.length-1;if(""===c)null==r[l=u.slice(0,s).join()]&&(r[l]=0),c=r[l]++;null==f[c]&&(f[c]=h?a:v?[]:{}),f=f[c]}}return n},g=function(e){var t,n="function"==typeof e.history.pushState,r="function"==typeof setImmediate?setImmediate:setTimeout;function o(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function i(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var l=o>-1?o:e.length,a=y(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(o>-1){var f=y(e.slice(o+1));for(var u in f)n[u]=f[u]}return e.slice(0,i)}var l={prefix:"#!",getPath:function(){switch(l.prefix.charAt(0)){case"#":return o("hash").slice(l.prefix.length);case"?":return o("search").slice(l.prefix.length)+o("hash");default:return o("pathname").slice(l.prefix.length)+o("search")+o("hash")}},setPath:function(t,r,o){var a={},u={};if(t=i(t,a,u),null!=r){for(var f in r)a[f]=r[f];t=t.replace(/:([^\/]+)/g,function(e,t){return delete a[t],r[t]})}var s=c(a);s&&(t+="?"+s);var d=c(u);if(d&&(t+="#"+d),n){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,l.prefix+t):e.history.pushState(v,h,l.prefix+t)}else e.location.href=l.prefix+t}};return l.defineRoutes=function(o,a,u){function f(){var t=l.getPath(),n={},r=i(t,n,n),f=e.history.state;if(null!=f)for(var s in f)n[s]=f[s];for(var c in o){var d=new RegExp("^"+c.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(r))return void r.replace(d,function(){for(var e=c.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),i=0;i<e.length;i++)n[e[i].replace(/:|\./g,"")]=decodeURIComponent(r[i]);a(o[c],n,t,c)})}u(t,n)}var s;n?e.onpopstate=(s=f,function(){null==t&&(t=r(function(){t=null,s()}))}):"#"===l.prefix.charAt(0)&&(e.onhashchange=f),f()},l};f.route=function(e,t){var r,o,i,l,a,u=g(e),f=function(e,f,s){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");function c(){null!=r&&t.render(e,r(n(o,i.key,i)))}var d=function(){c(),d=t.redraw};t.subscribe(e,c);var v=function(e){if(e===f)throw new Error("Could not resolve default route "+f);u.setPath(f,null,{replace:!0})};u.defineRoutes(s,function(e,t,n){var u=a=function(e,f){u===a&&(o=null==f||"function"!=typeof f.view&&"function"!=typeof f?"div":f,i=t,l=n,a=null,r=(e.render||function(e){return e}).bind(e),d())};e.view||"function"==typeof e?u({},e):e.onmatch?m.resolve(e.onmatch(t,n)).then(function(t){u(e,t)},v):u(e,"div")},v)};f.set=function(e,t,n){null!=a&&((n=n||{}).replace=!0),a=null,u.setPath(e,t,n)},f.get=function(){return l},f.prefix=function(e){u.prefix=e};var s=function(e,t){t.dom.setAttribute("href",u.prefix+t.attrs.href),t.dom.onclick=function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||2===t.which)){t.preventDefault(),t.redraw=!1;var n=this.getAttribute("href");0===n.indexOf(u.prefix)&&(n=n.slice(u.prefix.length)),f.set(n,void 0,e)}}};return f.link=function(e){return null==e.tag?s.bind(s,e):s({},e)},f.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},f}(window,h);var w=v(window);f.render=w.render,f.redraw=h.redraw,f.request=d.request,f.jsonp=d.jsonp,f.parseQueryString=y,f.buildQueryString=c,f.version="2.0.0-rc.4",f.vnode=n,f.PromisePolyfill=s;var b=f;b.displayName="mithril",e.renderer=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-base.js.map
