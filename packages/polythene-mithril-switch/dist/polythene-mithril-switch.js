(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-selection-control'), require('polythene-mithril-base'), require('polythene-core-switch'), require('polythene-mithril-shadow'), require('polythene-mithril-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-selection-control', 'polythene-mithril-base', 'polythene-core-switch', 'polythene-mithril-shadow', 'polythene-mithril-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-selection-control'],global['polythene-mithril-base'],global['polythene-core-switch'],global['polythene-mithril-shadow'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneCoreSelectionControl,polytheneMithrilBase,polytheneCoreSwitch,polytheneMithrilShadow,polytheneMithrilIconButton) { 'use strict';

  const ViewControl = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreSwitch.viewControl, {
    createContent: (vnode, args) => polytheneCoreSwitch.viewControl.createContent(vnode, Object.assign(args, {
      Shadow: polytheneMithrilShadow.Shadow,
      IconButton: polytheneMithrilIconButton.IconButton
    }))
  }));
  ViewControl.displayName = "ViewControl";

  const SelectionControl = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreSelectionControl.coreSelectionControl, {
    createContent: (vnode, args) => polytheneCoreSelectionControl.coreSelectionControl.createContent(vnode, Object.assign(args, {
      ViewControl
    }))
  }));
  SelectionControl.displayName = "SelectionControl";

  const Switch = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreSwitch.coreSwitch, {
    component: SelectionControl
  }));
  Switch.displayName = "Switch";

  exports.Switch = Switch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-switch.js.map
