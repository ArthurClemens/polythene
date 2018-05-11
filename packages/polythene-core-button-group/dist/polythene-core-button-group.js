(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-button-group",

    // states
    separator: "pe-button-group--separator"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-button-group)

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), // style set in content, and set by show/hide transition
    {
      className: [classes.component, attrs.separator ? classes.separator : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var buttonGroup = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    separator_width: 1,

    color_light_separator: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_separator: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
  };

  exports.coreButtonGroup = buttonGroup;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-button-group.js.map
