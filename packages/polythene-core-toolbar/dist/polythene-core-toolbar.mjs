import { filterSupportedAttributes } from 'polythene-core';
import { toolbarClasses } from 'polythene-css-classes';
import { vars } from 'polythene-theme';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [toolbarClasses.component, attrs.compact ? toolbarClasses.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children;
};

var toolbar = Object.freeze({
	getElement: getElement,
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
  return _extends$1({}, filterSupportedAttributes(attrs), {
    className: [toolbarClasses.title, attrs.indent ? toolbarClasses.indentedTitle : null, attrs.center ? toolbarClasses.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$1 = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.text ? attrs.text : attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var toolbarTitle = Object.freeze({
	getElement: getElement$1,
	createProps: createProps$1,
	createContent: createContent$1
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
var title_padding = vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side; // 72 - 48 - 4
var height_mobile_portrait = vars.grid_unit_component * 7; // 56
var height_desktop = vars.grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  height: height_desktop,
  height_compact: height_mobile_portrait,

  // title vars
  title_padding: title_padding,
  indent: vars.unit_indent,
  transition_duration: vars.animation_duration,
  font_size: 18,
  line_height: vars.line_height,

  // color vars
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background)
};

export { toolbar as coreToolbar, toolbarTitle as coreToolbarTitle, toolbarClasses as classes, vars$1 as vars };
