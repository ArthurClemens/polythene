(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-svg"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var onMount = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    // Prevent that SVG gets keyboard focus
    var elem = vnode.dom.querySelector("svg");
    if (elem) {
      elem.setAttribute("focusable", "false");
    }
  };

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode) {
    var attrs = vnode.attrs;
    return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
  };

  var svg = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  var vars = {
    general_styles: true,

    color_light: "currentcolor",
    color_dark: "currentcolor"
  };

  exports.coreSVG = svg;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-svg.js.map
