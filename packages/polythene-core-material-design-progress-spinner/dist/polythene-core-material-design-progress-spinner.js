(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-utilities'), require('polythene-theme'), require('polythene-core-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-utilities', 'polythene-theme', 'polythene-core-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-utilities'],global['polythene-theme'],global['polythene-core-base-spinner']));
}(this, (function (exports,polytheneCore,polytheneUtilities,polytheneTheme,polytheneCoreBaseSpinner) { 'use strict';

  var classes = {
    component: "pe-md-progress-spinner",

    // elements
    animation: "pe-md-progress-spinner__animation",
    circle: "pe-md-progress-spinner__circle",
    circleRight: "pe-md-progress-spinner__circle-right",
    circleLeft: "pe-md-progress-spinner__circle-left"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var percentageValue = function percentageValue(min, max) {
    var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return min + (max - min) * percentage;
  };

  var rotateCircle = function rotateCircle(el, min, max, percentage) {
    var style = el.style;
    style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
  };

  var animate = function animate(stateEl, size, percentage) {
    var animationEl = stateEl.querySelector("." + classes.animation);
    var animationElStyle = animationEl.style;
    if (percentage < 0.5) {
      animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
    } else {
      animationElStyle.clip = "rect(auto, auto, auto, auto)";
    }
    var leftCircle = stateEl.querySelector("." + classes.circleLeft);
    var rightCircle = stateEl.querySelector("." + classes.circleRight);
    leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
    rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
    rotateCircle(leftCircle, 0, 360, percentage);
  };

  var updateWithPercentage = function updateWithPercentage(_ref) {
    var state = _ref.state,
        attrs = _ref.attrs,
        size = _ref.size;

    if (!state.dom) {
      return;
    }
    if (state.animating()) {
      return;
    }
    if (attrs.percentage === undefined) {
      return;
    }
    var percentage = polytheneCore.unpackAttrs(attrs.percentage);
    var previousPercentage = state.percentage();
    var easingFn = attrs.animated ? polytheneUtilities.easing.easeInOutQuad : function (v) {
      return v;
    };
    if (attrs.animated && previousPercentage !== percentage) {
      var el = state.dom;
      var animationDuration = attrs.updateDuration !== undefined ? attrs.updateDuration * 1000 : polytheneCore.styleDurationToMs(polytheneCore.getStyle({ element: el.querySelector("." + classes.animation), prop: "animation-duration" }));
      var start = null;
      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var stepPercentage = 1.0 / animationDuration * progress;
        var newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
        animate(el, size, easingFn(newPercentage));
        if (start && progress < animationDuration) {
          window.requestAnimationFrame(step);
        } else {
          start = null;
          state.percentage(percentage);
          state.animating(false);
        }
      };
      state.animating(true);
      window.requestAnimationFrame(step);
    } else {
      animate(state.dom, size, easingFn(percentage));
      state.percentage(percentage);
    }
  };

  var getSize = function getSize(element) {
    return Math.round(element ? parseFloat(polytheneCore.getStyle({ element: element, prop: "height" })) - 2 * parseFloat(polytheneCore.getStyle({ element: element, prop: "padding" })) : 0);
  };

  var getInitialState = function getInitialState(vnode, createStream) {
    var percentage = createStream(0);
    var animating = createStream(false);
    return {
      animating: animating,
      dom: undefined,
      percentage: percentage,
      redrawOnUpdate: createStream.merge([animating])
    };
  };

  var onMount = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    var state = vnode.state;
    var attrs = vnode.attrs;
    state.dom = vnode.dom;
    var size = getSize(state.dom);
    updateWithPercentage({ state: state, attrs: attrs, size: size });
  };

  var createProps = function createProps(vnode, _ref2) {
    var h = _ref2.renderer;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var size = getSize(state.dom);
    updateWithPercentage({ state: state, attrs: attrs, size: size });

    var content = h("div", {
      key: "content",
      className: classes.animation,
      style: {
        width: size + "px",
        height: size + "px"
      }
    }, [h("div", {
      key: "left",
      className: [classes.circle, classes.circleLeft].join(" ")
    }), h("div", {
      key: "right",
      className: [classes.circle, classes.circleRight].join(" ")
    })]);

    return _extends({}, attrs, {
      className: [classes.component, attrs.className].join(" "),
      content: content
    });
  };

  var spinner = /*#__PURE__*/Object.freeze({
    getInitialState: getInitialState,
    onMount: onMount,
    createProps: createProps
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = _extends$1({}, polytheneCoreBaseSpinner.vars, {
    progress_animation_duration: ".8s",

    color_light: rgba(polytheneTheme.vars.color_primary),
    color_dark: rgba(polytheneTheme.vars.color_primary)
  });

  exports.coreMaterialDesignProgressSpinner = spinner;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-material-design-progress-spinner.js.map
