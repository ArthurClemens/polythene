(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-list-tile'), require('polythene-mithril-icon'), require('polythene-mithril-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-list-tile', 'polythene-mithril-icon', 'polythene-mithril-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-list-tile'],global['polythene-mithril-icon'],global['polythene-mithril-ripple']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreListTile,polytheneMithrilIcon,polytheneMithrilRipple) { 'use strict';

  const ListTile = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreListTile.coreListTile, {
    createProps: (vnode, args) => polytheneCoreListTile.coreListTile.createProps(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon,
      Ripple: polytheneMithrilRipple.Ripple
    })),
    createContent: (vnode, args) => polytheneCoreListTile.coreListTile.createContent(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon,
      Ripple: polytheneMithrilRipple.Ripple
    }))
  }));
  ListTile.displayName = "ListTile";

  exports.ListTile = ListTile;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-list-tile.js.map
