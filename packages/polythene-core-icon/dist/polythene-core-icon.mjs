import { filterSupportedAttributes } from 'polythene-core';
import { iconClasses } from 'polythene-css-classes';
import { vars } from 'polythene-theme';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var sizeClasses = {
  small: iconClasses.small,
  regular: iconClasses.regular,
  medium: iconClasses.medium,
  large: iconClasses.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [iconClasses.component, classForSize(attrs.size), attrs.avatar ? iconClasses.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      SVG = _ref2.SVG;

  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", { src: attrs.src }) : attrs.children || vnode.children;
};

var icon = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  size_small: vars.unit_icon_size_small,
  size_regular: vars.unit_icon_size,
  size_medium: vars.unit_icon_size_medium,
  size_large: vars.unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

export { icon as coreIcon, iconClasses as classes, vars$1 as vars };
