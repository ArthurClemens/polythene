(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-fab'), require('polythene-react-icon'), require('polythene-react-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-fab', 'polythene-react-icon', 'polythene-react-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-fab'],global['polythene-react-icon'],global['polythene-react-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreFab,polytheneReactIcon,polytheneReactButton) { 'use strict';

  const FAB = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreFab.coreFAB, {
    createProps: (vnode, args) => polytheneCoreFab.coreFAB.createProps(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon
    })),
    createContent: (vnode, args) => polytheneCoreFab.coreFAB.createContent(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon
    })),
    component: polytheneReactButton.Button
  }));
  FAB.displayName = "FAB";

  exports.FAB = FAB;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-fab.js.map
