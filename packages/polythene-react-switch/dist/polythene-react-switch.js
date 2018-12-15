(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-selection-control'), require('polythene-react-base'), require('polythene-core-switch'), require('polythene-react-shadow'), require('polythene-react-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-selection-control', 'polythene-react-base', 'polythene-core-switch', 'polythene-react-shadow', 'polythene-react-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-selection-control'],global['polythene-react-base'],global['polythene-core-switch'],global['polythene-react-shadow'],global['polythene-react-icon-button']));
}(this, (function (exports,polytheneCoreSelectionControl,polytheneReactBase,polytheneCoreSwitch,polytheneReactShadow,polytheneReactIconButton) { 'use strict';

  const ViewControl = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreSwitch.viewControl, {
    createContent: (vnode, args) => polytheneCoreSwitch.viewControl.createContent(vnode, Object.assign(args, {
      Shadow: polytheneReactShadow.Shadow,
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

  const Switch = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreSwitch.coreSwitch, {
    component: SelectionControl
  }));
  Switch.displayName = "Switch";

  exports.Switch = Switch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-switch.js.map
