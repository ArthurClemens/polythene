(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-slider')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-slider'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-slider']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreSlider) { 'use strict';

	var Slider = polytheneMithrilBase.StateComponent(polytheneCoreSlider.coreSlider);

	Slider.displayName = "Slider";

	exports.Slider = Slider;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-slider.js.map
