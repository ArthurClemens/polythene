(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    size_small: polytheneTheme.vars.unit_icon_size_small,
    size_regular: polytheneTheme.vars.unit_icon_size,
    size_medium: polytheneTheme.vars.unit_icon_size_medium,
    size_large: polytheneTheme.vars.unit_icon_size_large,

    // avatar background is visible when image is not yet loaded
    color_light_avatar_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_dark_avatar_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),

    color_light: "currentcolor",
    color_dark: "currentcolor"
  };

  exports.coreIcon = icon;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-icon.js.map
