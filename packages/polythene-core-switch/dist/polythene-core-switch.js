(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-switch-control",

    // elements
    knob: "pe-switch-control__knob",
    thumb: "pe-switch-control__thumb",
    track: "pe-switch-control__track"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

  // Props to be passed to a selection control

  var createProps = function createProps(vnode) {
    var attrs = vnode.attrs;
    return _extends({}, attrs, {
      selectable: attrs.selectable || function () {
        return true;
      }, // default: always selectable, regardless of the checked state
      instanceClass: classes.component,
      type: "checkbox"
    });
  };

  var _switch = /*#__PURE__*/Object.freeze({
    createProps: createProps
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var onMount = function onMount(_ref) {
    var attrs = _ref.attrs;

    if (attrs.zOn !== undefined) {
      polytheneCore.deprecation("Switch", "zOn", "shadowDepthOn");
    }
    if (attrs.zOff !== undefined) {
      polytheneCore.deprecation("Switch", "zOff", "shadowDepthOff");
    }
  };

  var createContent = function createContent(vnode, _ref2) {
    var h = _ref2.renderer,
        Shadow = _ref2.Shadow,
        IconButton = _ref2.IconButton;

    var attrs = vnode.attrs;

    var shadowDepthOff = attrs.shadowDepthOff !== undefined ? attrs.shadowDepthOff : attrs.zOff !== undefined ? attrs.zOff // deprecated
    : 1;
    var shadowDepthOn = attrs.shadowDepthOn !== undefined ? attrs.shadowDepthOn : attrs.zOn !== undefined ? attrs.zOn // deprecated
    : 2;
    var shadowDepth = attrs.checked ? shadowDepthOn : shadowDepthOff;
    var raised = attrs.raised !== undefined ? attrs.raised : true;

    return [h("div", {
      className: classes.track,
      key: "track"
    }), h(IconButton, _extends$1({}, {
      className: classes.thumb,
      key: "button",
      content: h("div", { className: classes.knob }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
        shadowDepth: shadowDepth,
        animated: true
      }) : null]),
      style: attrs.style,
      disabled: attrs.disabled,
      events: attrs.events,
      ink: attrs.ink || false,
      inactive: attrs.inactive
    }, attrs.iconButton))];
  };

  var viewControl = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createContent: createContent
  });

  exports.coreSwitch = _switch;
  exports.viewControl = viewControl;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-switch.js.map
