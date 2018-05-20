(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-icon",

    // states
    avatar: "pe-icon--avatar",
    large: "pe-icon--large",
    medium: "pe-icon--medium",
    regular: "pe-icon--regular",
    small: "pe-icon--small"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, polytheneCore.classForSize(classes, attrs.size), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent = function createContent(vnode, _ref2) {
    var h = _ref2.renderer,
        SVG = _ref2.SVG;

    var attrs = vnode.attrs;
    return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", { src: attrs.src }) : attrs.children || vnode.children;
  };

  var icon = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreIcon = icon;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-icon.js.map
