(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-shadow",

    // elements
    bottomShadow: "pe-shadow__bottom",
    topShadow: "pe-shadow__top",

    // states
    animated: "pe-shadow--animated",
    depth_n: "pe-shadow--depth-"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var onMount = function onMount(_ref) {
    var attrs = _ref.attrs;

    if (attrs.z !== undefined) {
      polytheneCore.deprecation("Shadow", { option: "z", newOption: "shadowDepth" });
    }
  };

  var createProps = function createProps(vnode, _ref2) {
    var k = _ref2.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref3) {
    var h = _ref3.renderer;

    var attrs = vnode.attrs;
    var content = attrs.content ? attrs.content : attrs.children || vnode.children;
    var shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated
    var depthClass = shadowDepth !== undefined ? "" + classes.depth_n + Math.min(5, shadowDepth) : null;
    return [content, h("div", {
      key: "bottom",
      className: [classes.bottomShadow, depthClass].join(" ")
    }), h("div", {
      key: "top",
      className: [classes.topShadow, depthClass].join(" ")
    })];
  };

  var shadow = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreShadow = shadow;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-shadow.js.map
