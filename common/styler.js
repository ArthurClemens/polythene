'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _j2c=require('j2c'),_j2c2=_interopRequireDefault(_j2c),_isomorphic=require('polythene/common/isomorphic'),_isomorphic2=_interopRequireDefault(_isomorphic);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var remove=function(a){if(a){var b=document.getElementById(a);b&&b.parentNode.removeChild(b)}},add=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];addToDocument.apply(void 0,[{id:a}].concat(c))},addToDocument=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];if(!_isomorphic2.default.isServer()){var e=a.id,f=a.document||window.document;remove(e);var g=f.createElement('style');e&&g.setAttribute('id',e),c.forEach(function(h){Object.keys(h).length&&h.forEach(function(i){var k=_j2c2.default.sheet({'@global':i});g.appendChild(f.createTextNode(k))})}),f.head.appendChild(g)}};exports.default={add:add,addToDocument:addToDocument,remove:remove},module.exports=exports['default'];
//# sourceMappingURL=styler.js.map