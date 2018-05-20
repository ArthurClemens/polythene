(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

  var classes = {
    component: "pe-fab",

    // elements
    content: "pe-fab__content",

    // states
    mini: "pe-fab--mini"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

  // Props to be passed to a raised button, including 'content'
  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys,
        h = _ref.renderer,
        Icon = _ref.Icon;

    var attrs = vnode.attrs;
    var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
    return _extends({}, {
      content: h("div", { className: classes.content }, content),
      parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
      // defaults
      ripple: {
        center: true,
        opacityDecayVelocity: 0.24
      },
      shadow: { increase: 5 },
      ink: true,
      wash: true,
      animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
    }, attrs);
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var fab = /*#__PURE__*/Object.freeze({
    createProps: createProps,
    createContent: createContent
  });

  exports.coreFAB = fab;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-fab.js.map
