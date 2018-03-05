(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

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

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.compact ? classes.compact : null, attrs.fullbleed ? classes.fullbleed : null, attrs.border ? classes.border : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var renderer = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var shadow = attrs.z !== undefined ? renderer(Shadow, {
    z: attrs.z,
    animated: true,
    key: "shadow"
  }) : null;
  return [content, shadow];
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
  return _extends$1({}, polytheneCore.filterSupportedAttributes(attrs), {
    className: [classes.title, attrs.indent ? classes.indentedTitle : null, attrs.center ? classes.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
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

var padding_side = polytheneTheme.vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
var padding_side_large = polytheneTheme.vars.grid_unit_component * 3 - 12; // 24 - 12 = 12
var title_padding = 12; // icon padding
var title_after_icon_padding = polytheneTheme.vars.grid_unit_component * 9 - polytheneTheme.vars.grid_unit_component * 6 - padding_side; // 72 - 48 - 4 = 20
var height = polytheneTheme.vars.grid_unit_component * 7; // 56
var height_compact = polytheneTheme.vars.grid_unit_component * 6; // 48
var height_large = polytheneTheme.vars.grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  padding_side_large: padding_side_large,
  height: height,
  height_compact: height_compact,
  height_large: height_large,

  // title vars
  title_padding: title_padding,
  title_after_icon_padding: title_after_icon_padding,
  indent: polytheneTheme.vars.unit_indent,
  font_size: 18,
  line_height: polytheneTheme.vars.line_height,

  // color vars
  color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
  color_light_border: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
  color_light_background: rgba(polytheneTheme.vars.color_light_background),

  color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
  color_dark_border: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
  color_dark_background: rgba(polytheneTheme.vars.color_dark_background)
};

exports.coreToolbar = toolbar;
exports.coreToolbarTitle = toolbarTitle;
exports.vars = vars$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-toolbar.js.map
