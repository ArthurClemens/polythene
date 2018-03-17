(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-theme']));
}(this, (function (exports,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-ios-spinner",

    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var blade = function blade(num, h) {
    return h("div", {
      key: "blade-" + num,
      className: classes.blade
    });
  };

  var createProps = function createProps(vnode, _ref) {
    var h = _ref.renderer;

    var state = vnode.state;
    var attrs = vnode.attrs;
    state.content = state.content || h("div", {
      key: "content",
      className: classes.blades
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
      return blade(num, h);
    }));
    return _extends({}, attrs, {
      className: [classes.component, attrs.className].join(" "),
      content: state.content
    });
  };

  var spinner = /*#__PURE__*/Object.freeze({
    createProps: createProps
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    animation_duration: 1, // seconds

    color_light: rgba(polytheneTheme.vars.color_light_foreground),
    color_dark: rgba(polytheneTheme.vars.color_dark_foreground)
  };

  exports.coreIOSSpinner = spinner;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-ios-spinner.js.map
