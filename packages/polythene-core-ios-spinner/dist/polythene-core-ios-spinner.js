(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

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

  exports.coreIOSSpinner = spinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-ios-spinner.js.map
