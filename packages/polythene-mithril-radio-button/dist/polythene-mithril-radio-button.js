(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-radio-button'), require('polythene-mithril-base'), require('polythene-core-selection-control'), require('polythene-mithril-icon'), require('polythene-mithril-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-radio-button', 'polythene-mithril-base', 'polythene-core-selection-control', 'polythene-mithril-icon', 'polythene-mithril-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-radio-button'],global['polythene-mithril-base'],global['polythene-core-selection-control'],global['polythene-mithril-icon'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneCoreRadioButton,polytheneMithrilBase,polytheneCoreSelectionControl,polytheneMithrilIcon,polytheneMithrilIconButton) { 'use strict';

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

  const RadioButton = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreRadioButton.coreRadioButton, {
    component: SelectionControl
  }));
  RadioButton.displayName = "RadioButton";

  exports.RadioButton = RadioButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-radio-button.js.map
