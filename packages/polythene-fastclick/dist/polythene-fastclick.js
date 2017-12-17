(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('fastclick'), require('polythene-core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'fastclick', 'polythene-core'], factory) :
	(factory((global.polythene = {}),global.fastclick,global['polythene-core']));
}(this, (function (exports,FastClick,polytheneCore) { 'use strict';

FastClick = FastClick && FastClick.hasOwnProperty('default') ? FastClick['default'] : FastClick;

var layer = polytheneCore.isClient ? document.scrollingElement : { body: {} };

var addFastClick = function addFastClick() {
  if (polytheneCore.isTouch && polytheneCore.isClient) {
    new FastClick(layer);
  }
};

exports.addFastClick = addFastClick;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-fastclick.js.map
