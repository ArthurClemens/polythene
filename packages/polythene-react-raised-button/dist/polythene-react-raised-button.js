(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-button'), require('polythene-core'), require('polythene-react-base')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-button', 'polythene-core', 'polythene-react-base'], factory) :
  (factory((global.polythene = {}),global['polythene-react-button'],global['polythene-core'],global['polythene-react-base']));
}(this, (function (exports,polytheneReactButton,polytheneCore,polytheneReactBase) { 'use strict';

  const RaisedButton = polytheneReactBase.ViewComponent({
    onMount: () => {
      polytheneCore.deprecation("RaisedButton", {
        newComponent: "Button",
        newOption: "raised: true"
      });
    },
    view: vnode => polytheneReactBase.renderer(polytheneReactButton.Button, Object.assign({}, {
      raised: true
    }, vnode.attrs), vnode.children)
  });
  RaisedButton.displayName = "RaisedButton";

  exports.RaisedButton = RaisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-raised-button.js.map
