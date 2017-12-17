(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-shadow')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-shadow'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreShadow) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreShadow.coreShadow));

Shadow.displayName = "Shadow";

exports.Shadow = Shadow;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-shadow.js.map
