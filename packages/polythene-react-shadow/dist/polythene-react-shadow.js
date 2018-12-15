(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreShadow) { 'use strict';

  const Shadow = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreShadow.coreShadow));
  Shadow.displayName = "Shadow";

  exports.Shadow = Shadow;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-shadow.js.map
