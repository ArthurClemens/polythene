(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-svg']));
}(this, (function (exports,polytheneReactBase,polytheneCoreSvg) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var SVG = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreSvg.coreSVG));

  SVG.displayName = "SVG";

  exports.SVG = SVG;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-svg.js.map
