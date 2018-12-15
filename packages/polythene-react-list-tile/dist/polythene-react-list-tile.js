(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-list-tile'), require('polythene-react-icon'), require('polythene-react-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-list-tile', 'polythene-react-icon', 'polythene-react-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-list-tile'],global['polythene-react-icon'],global['polythene-react-ripple']));
}(this, (function (exports,polytheneReactBase,polytheneCoreListTile,polytheneReactIcon,polytheneReactRipple) { 'use strict';

  const ListTile = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreListTile.coreListTile, {
    createProps: (vnode, args) => polytheneCoreListTile.coreListTile.createProps(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon,
      Ripple: polytheneReactRipple.Ripple
    })),
    createContent: (vnode, args) => polytheneCoreListTile.coreListTile.createContent(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon,
      Ripple: polytheneReactRipple.Ripple
    }))
  }));
  ListTile.displayName = "ListTile";

  exports.ListTile = ListTile;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-list-tile.js.map
