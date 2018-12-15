(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-checkbox'), require('polythene-react-base'), require('polythene-core-selection-control'), require('polythene-react-icon'), require('polythene-react-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-checkbox', 'polythene-react-base', 'polythene-core-selection-control', 'polythene-react-icon', 'polythene-react-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-checkbox'],global['polythene-react-base'],global['polythene-core-selection-control'],global['polythene-react-icon'],global['polythene-react-icon-button']));
}(this, (function (exports,polytheneCoreCheckbox,polytheneReactBase,polytheneCoreSelectionControl,polytheneReactIcon,polytheneReactIconButton) { 'use strict';

  const ViewControl = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreSelectionControl.viewControl, {
    createContent: (vnode, args) => polytheneCoreSelectionControl.viewControl.createContent(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon,
      IconButton: polytheneReactIconButton.IconButton
    }))
  }));
  ViewControl.displayName = "ViewControl";

  const SelectionControl = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreSelectionControl.coreSelectionControl, {
    createContent: (vnode, args) => polytheneCoreSelectionControl.coreSelectionControl.createContent(vnode, Object.assign(args, {
      ViewControl
    }))
  }));
  SelectionControl.displayName = "SelectionControl";

  const Checkbox = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreCheckbox.coreCheckbox, {
    component: SelectionControl
  }));
  Checkbox.displayName = "Checkbox";

  exports.Checkbox = Checkbox;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-checkbox.js.map
