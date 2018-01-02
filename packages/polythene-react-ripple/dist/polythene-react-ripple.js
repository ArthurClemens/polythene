(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-ripple')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-ripple'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-ripple']));
}(this, (function (exports,polytheneReactBase,polytheneCoreRipple) { 'use strict';

var Ripple = polytheneReactBase.StateComponent(polytheneCoreRipple.coreRipple);

Ripple.displayName = "Ripple";

exports.Ripple = Ripple;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-ripple.js.map
