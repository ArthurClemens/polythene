(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

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

  var createContent = function createContent(vnode, _ref) {
    var h = _ref.renderer,
        Shadow = _ref.Shadow,
        IconButton = _ref.IconButton;

    var attrs = vnode.attrs;

    var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
    var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
    var z = attrs.checked ? zOn : zOff;
    var raised = attrs.raised !== undefined ? attrs.raised : true;

    return [h("div", {
      className: classes.track,
      key: "track"
    }), h(IconButton, _extends$1({}, {
      className: classes.thumb,
      key: "button",
      content: h("div", { className: classes.knob }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
        z: z,
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
    createContent: createContent
  });

  exports.coreSwitch = _switch;
  exports.viewControl = viewControl;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-switch.js.map
