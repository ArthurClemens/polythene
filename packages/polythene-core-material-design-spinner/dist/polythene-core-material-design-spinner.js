(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

  var classes = {
    component: "pe-md-spinner",
    // elements
    animation: "pe-md-spinner__animation",
    circle: "pe-md-spinner__circle",
    circleClipper: "pe-md-spinner__circle-clipper",
    circleClipperLeft: "pe-md-spinner__circle-clipper-left",
    circleClipperRight: "pe-md-spinner__circle-clipper-right",
    gapPatch: "pe-md-spinner__gap-patch",
    layer: "pe-md-spinner__layer",
    layerN: "pe-md-spinner__layer-"
  };

  const layer = (num, h) => h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes.circle
  })), h("div", {
    key: "gap-patch",
    className: classes.gapPatch
  }, h("div", {
    className: classes.circle
  })), h("div", {
    key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", {
    className: classes.circle
  }))]);

  const createProps = (vnode, {
    renderer: h
  }) => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    state.content = state.content || h("div", {
      key: "content",
      className: classes.animation
    }, [1, 2, 3, 4].map(num => layer(num, h)));
    return Object.assign({}, attrs, {
      className: [classes.component, attrs.className].join(" "),
      content: state.content
    });
  };

  var spinner = /*#__PURE__*/Object.freeze({
    createProps: createProps
  });

  exports.coreMaterialDesignSpinner = spinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-material-design-spinner.js.map
