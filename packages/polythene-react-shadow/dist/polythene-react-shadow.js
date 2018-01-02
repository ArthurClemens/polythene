(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-shadow')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-shadow'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreShadow) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreShadow.coreShadow));

Shadow.displayName = "Shadow";

exports.Shadow = Shadow;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-shadow.js.map
