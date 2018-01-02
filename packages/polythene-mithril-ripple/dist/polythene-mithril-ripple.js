(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-ripple')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-ripple'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-ripple']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreRipple) { 'use strict';

var Ripple = polytheneMithrilBase.StateComponent(polytheneCoreRipple.coreRipple);

Ripple.displayName = "Ripple";

exports.Ripple = Ripple;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-ripple.js.map
