(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-base-spinner']));
}(this, (function (exports,polytheneTheme,polytheneCoreBaseSpinner) { 'use strict';

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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var layer = function layer(num, h) {
    return h("div", {
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
    }, h("div", { className: classes.circle })), h("div", {
      key: "clipper-right",
      className: [classes.circleClipper, classes.circleClipperRight].join(" ")
    }, h("div", { className: classes.circle }))]);
  };

  var createProps = function createProps(vnode, _ref) {
    var h = _ref.renderer;

    var state = vnode.state;
    var attrs = vnode.attrs;
    state.content = state.content || h("div", {
      key: "content",
      className: classes.animation
    }, [1, 2, 3, 4].map(function (num) {
      return layer(num, h);
    }));
    return _extends({}, attrs, {
      className: [classes.component, attrs.className].join(" "),
      content: state.content
    });
  };

  var spinner = /*#__PURE__*/Object.freeze({
    createProps: createProps
  });

  /*
  Derived from https://github.com/PolymerElements/paper-spinner

  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var arc_size = 270; // degrees - amount of circle the arc takes up
  var arc_time = 1.333; // s - time it takes to expand and contract arc
  var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
  var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

  var blue400 = "#42a5f5";
  var red500 = "#f44336";
  var yellow600 = "#fdd835";
  var green500 = "#4caf50";

  var vars = {
    general_styles: true,

    arc_size: arc_size,
    arc_start_degrees: arc_start_degrees,
    arc_time: arc_time,
    border_width_fab: polytheneCoreBaseSpinner.vars.size_fab / polytheneCoreBaseSpinner.vars.size_regular * 3,
    border_width_large: polytheneCoreBaseSpinner.vars.size_large / polytheneCoreBaseSpinner.vars.size_regular * 3,
    border_width_medium: polytheneCoreBaseSpinner.vars.size_medium / polytheneCoreBaseSpinner.vars.size_regular * 3,
    border_width_regular: 3,
    border_width_small: polytheneCoreBaseSpinner.vars.size_small / polytheneCoreBaseSpinner.vars.size_regular * 3,
    rotation_duration: rotation_duration,

    color_light_single: rgba(polytheneTheme.vars.color_primary),
    color_light_1: blue400,
    color_light_2: red500,
    color_light_3: yellow600,
    color_light_4: green500,

    color_dark_single: rgba(polytheneTheme.vars.color_primary),
    color_dark_1: blue400,
    color_dark_2: red500,
    color_dark_3: yellow600,
    color_dark_4: green500
  };

  exports.coreMaterialDesignSpinner = spinner;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-material-design-spinner.js.map
