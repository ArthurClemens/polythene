(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-checkbox'), require('polythene-mithril-base'), require('polythene-core-selection-control'), require('polythene-mithril-icon'), require('polythene-mithril-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-checkbox', 'polythene-mithril-base', 'polythene-core-selection-control', 'polythene-mithril-icon', 'polythene-mithril-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-checkbox'],global['polythene-mithril-base'],global['polythene-core-selection-control'],global['polythene-mithril-icon'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneCoreCheckbox,polytheneMithrilBase,polytheneCoreSelectionControl,polytheneMithrilIcon,polytheneMithrilIconButton) { 'use strict';

  const ViewControl = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreSelectionControl.viewControl, {
    createContent: (vnode, args) => polytheneCoreSelectionControl.viewControl.createContent(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon,
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

  const Checkbox = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreCheckbox.coreCheckbox, {
    component: SelectionControl
  }));
  Checkbox.displayName = "Checkbox";

  exports.Checkbox = Checkbox;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-checkbox.js.map
