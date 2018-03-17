(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-fab'), require('polythene-mithril-icon'), require('polythene-mithril-raised-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-fab', 'polythene-mithril-icon', 'polythene-mithril-raised-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-fab'],global['polythene-mithril-icon'],global['polythene-mithril-raised-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreFab,polytheneMithrilIcon,polytheneMithrilRaisedButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var FAB = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreFab.coreFAB, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreFab.coreFAB.createProps(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreFab.coreFAB.createContent(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon }));
    },
    component: polytheneMithrilRaisedButton.RaisedButton
  }));

  FAB.displayName = "FAB";

  exports.FAB = FAB;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-fab.js.map
