(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {

    // Toolbar

    component: "pe-toolbar",

    // states
    compact: "pe-toolbar--compact",
    appBar: "pe-toolbar--app-bar",

    // Toolbar title

    // elements
    title: "pe-toolbar__title",

    // states
    centeredTitle: "pe-toolbar__title--center",
    indentedTitle: "pe-toolbar__title--indent",
    fullbleed: "pe-toolbar--fullbleed",
    border: "pe-toolbar--border"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var onMount = function onMount(_ref) {
    var attrs = _ref.attrs;

    if (attrs.z !== undefined) {
      polytheneCore.deprecation("Toolbar", "z", "shadowDepth");
    }
  };

  var createProps = function createProps(vnode, _ref2) {
    var k = _ref2.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.compact ? classes.compact : null, attrs.fullbleed ? classes.fullbleed : null, attrs.border ? classes.border : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent = function createContent(vnode, _ref3) {
    var renderer = _ref3.renderer,
        Shadow = _ref3.Shadow;

    var attrs = vnode.attrs;
    var content = attrs.content ? attrs.content : attrs.children || vnode.children;
    var shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated
    var shadow = shadowDepth !== undefined ? renderer(Shadow, {
      shadowDepth: shadowDepth,
      animated: true,
      key: "shadow"
    }) : null;
    return [content, shadow];
  };

  var toolbar = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var getElement$1 = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var createProps$1 = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    return _extends$1({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.title, attrs.indent ? classes.indentedTitle : null, attrs.center ? classes.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };

  var createContent$1 = function createContent(vnode) {
    var attrs = vnode.attrs;
    return attrs.text ? attrs.text : attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
  };

  var toolbarTitle = /*#__PURE__*/Object.freeze({
    getElement: getElement$1,
    createProps: createProps$1,
    createContent: createContent$1
  });

  exports.coreToolbar = toolbar;
  exports.coreToolbarTitle = toolbarTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-toolbar.js.map
