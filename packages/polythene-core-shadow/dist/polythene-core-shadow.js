(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-shadow",
    // elements
    bottomShadow: "pe-shadow__bottom",
    topShadow: "pe-shadow__top",
    // states
    animated: "pe-shadow--animated",
    depth_n: "pe-shadow--depth-"
  };

  const getElement = vnode => vnode.attrs.element || "div";
  const onMount = ({
    attrs
  }) => {
    if (attrs.z !== undefined) {
      polytheneCore.deprecation("Shadow", {
        option: "z",
        newOption: "shadowDepth"
      });
    }
  };
  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
    });
  };
  const createContent = (vnode, {
    renderer: h
  }) => {
    const attrs = vnode.attrs;
    const content = attrs.content ? attrs.content : attrs.children || vnode.children;
    const shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated

    const depthClass = shadowDepth !== undefined ? `${classes.depth_n}${Math.min(5, shadowDepth)}` : null;
    return [content, h("div", {
      key: "bottom",
      className: [classes.bottomShadow, depthClass].join(" ")
    }), h("div", {
      key: "top",
      className: [classes.topShadow, depthClass].join(" ")
    })];
  };

  var shadow = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreShadow = shadow;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-shadow.js.map
