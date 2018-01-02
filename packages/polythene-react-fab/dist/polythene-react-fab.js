(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-fab'), require('polythene-react-icon'), require('polythene-react-raised-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-fab', 'polythene-react-icon', 'polythene-react-raised-button'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-fab'],global['polythene-react-icon'],global['polythene-react-raised-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreFab,polytheneReactIcon,polytheneReactRaisedButton) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FAB = polytheneReactBase.StateComponent(_extends({}, polytheneCoreFab.coreFAB, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreFab.coreFAB.createProps(vnode, _extends(args, { Icon: polytheneReactIcon.Icon }));
  },
  createContent: function createContent(vnode, args) {
    return polytheneCoreFab.coreFAB.createContent(vnode, _extends(args, { Icon: polytheneReactIcon.Icon }));
  },
  component: polytheneReactRaisedButton.RaisedButton
}));

FAB.displayName = "FAB";

exports.FAB = FAB;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-fab.js.map
