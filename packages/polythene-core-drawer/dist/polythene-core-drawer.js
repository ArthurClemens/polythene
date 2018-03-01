(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-theme']));
}(this, (function (exports,polytheneTheme) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  bordered: "pe-drawer--bordered",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Props to be passed to a dialog
var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  var isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return _extends({}, attrs, {
    anchored: true,
    fullBleed: true,
    parentClassName: [attrs.className, classes.component, isCover ? classes.cover : null, attrs.push ? classes.push : null, attrs.permanent ? classes.permanent : null, attrs.bordered ? classes.bordered : null, attrs.mini ? classes.mini : null, attrs.floating ? classes.floating : null, attrs.fixed ? classes.fixed : null, attrs.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: attrs.permanent && !attrs.mini,
    z: attrs.z !== undefined ? attrs.z : 1
  });
};

var createContent = function createContent() {
  return null;
};

var drawer = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var content_side_offset = polytheneTheme.vars.grid_unit_component * 7; // 56
var content_side_offset_large = polytheneTheme.vars.grid_unit_component * 8; // 64
var permanent_content_width = 240;
var content_max_width = 5 * polytheneTheme.vars.increment;
var content_max_width_large = 5 * polytheneTheme.vars.increment_large;

var vars$1 = {
  content_side_offset: content_side_offset,
  content_side_offset_large: content_side_offset_large,
  permanent_content_width: permanent_content_width,
  content_max_width: content_max_width,
  content_max_width_large: content_max_width_large,

  content_width_mini_collapsed: 56,

  color_light_background: rgba(polytheneTheme.vars.color_light_background),
  color_dark_background: rgba(polytheneTheme.vars.color_dark_background),

  color_light_border: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
  color_dark_border: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
};

exports.coreDrawer = drawer;
exports.vars = vars$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-drawer.js.map
