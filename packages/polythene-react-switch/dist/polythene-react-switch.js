(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-switch'), require('polythene-react-shadow'), require('polythene-react-icon-button'), require('polythene-core-selection-control')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-switch', 'polythene-react-shadow', 'polythene-react-icon-button', 'polythene-core-selection-control'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-switch'],global['polythene-react-shadow'],global['polythene-react-icon-button'],global['polythene-core-selection-control']));
}(this, (function (exports,polytheneReactBase,polytheneCoreSwitch,polytheneReactShadow,polytheneReactIconButton,polytheneCoreSelectionControl) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ViewControl = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreSwitch.viewControl, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreSwitch.viewControl.createContent(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow, IconButton: polytheneReactIconButton.IconButton }));
    }
  }));

  ViewControl.displayName = "ViewControl";

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var SelectionControl = polytheneReactBase.StateComponent(_extends$1({}, polytheneCoreSelectionControl.coreSelectionControl, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreSelectionControl.coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
    }
  }));

  SelectionControl.displayName = "SelectionControl";

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Switch = polytheneReactBase.StateComponent(_extends$2({}, polytheneCoreSwitch.coreSwitch, {
    component: SelectionControl
  }));

  Switch.displayName = "Switch";

  exports.Switch = Switch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-switch.js.map
