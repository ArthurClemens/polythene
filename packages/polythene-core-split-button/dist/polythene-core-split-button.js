(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-theme']));
}(this, (function (exports,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-split-button",

    // states
    separator: "pe-split-button--separator"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-split-button)

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    return _extends({}, {
      className: [classes.component, attrs.separator ? classes.separator : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs);
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var splitButton = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    color_light_border: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
  };

  exports.coreSplitButton = splitButton;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-split-button.js.map
