import { filterSupportedAttributes } from 'polythene-core';
import { vars } from 'polythene-theme';

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
  return _extends({}, filterSupportedAttributes(attrs), {
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

var toolbar = /*#__PURE__*/Object.freeze({
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

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

var vars$1 = {
  general_styles: true,

  font_size: 18,
  height: vars.grid_unit_component * 7, // 56
  height_compact: vars.grid_unit_component * 6, // 48
  height_large: vars.grid_unit_component * 8, // 64
  indent: vars.unit_indent,
  line_height: vars.line_height,
  padding_side: padding_side,
  padding_side_large: vars.grid_unit_component * 3 - 12, // 24 - 12 = 12
  title_after_icon_padding: vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side, // 72 - 48 - 4 = 20
  title_padding: 12, // icon padding

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background: rgba(vars.color_light_background),

  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background: rgba(vars.color_dark_background)
};

export { toolbar as coreToolbar, toolbarTitle as coreToolbarTitle, vars$1 as vars };
