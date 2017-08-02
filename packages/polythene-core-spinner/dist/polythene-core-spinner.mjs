import { filterSupportedAttributes, hide, show, unpackAttrs } from 'polythene-core';
import { mixin, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { easing } from 'polythene-utilities';

var classes = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var baseVars = {
  size_small: 3 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_fab: 7 * vars.grid_unit_component,

  raisedSize: function raisedSize(size) {
    var padding = size * 0.25;
    var paddedSize = size + padding * 2;
    return { padding: padding, paddedSize: paddedSize };
  },

  color_light_raised_background: rgba(vars.color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(vars.color_light_background)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = function sizes(size) {
  return {
    width: size + "px",
    height: size + "px"
  };
};

var raisedSize = function raisedSize(size, componentVars) {
  var _componentVars$raised = componentVars.raisedSize(size),
      padding = _componentVars$raised.padding,
      paddedSize = _componentVars$raised.paddedSize;

  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    opacity: 0,

    ".pe-spinner--visible, &.pe-spinner--permanent": {
      opacity: 1
    },

    ".pe-spinner--small": sizes(componentVars.size_small),
    ".pe-spinner--regular": sizes(componentVars.size_regular),
    ".pe-spinner--medium": sizes(componentVars.size_medium),
    ".pe-spinner--large": sizes(componentVars.size_large),
    ".pe-spinner--fab": sizes(componentVars.size_fab),

    ".pe-spinner--raised": {
      position: "relative",
      borderRadius: "50%",

      ".pe-spinner--small": raisedSize(componentVars.size_small, componentVars),
      ".pe-spinner--regular": raisedSize(componentVars.size_regular, componentVars),
      ".pe-spinner--medium": raisedSize(componentVars.size_medium, componentVars),
      ".pe-spinner--large": raisedSize(componentVars.size_large, componentVars),
      ".pe-spinner--fab": raisedSize(componentVars.size_fab, componentVars)
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-spinner--raised": {
      backgroundColor: componentVars["color_" + tint + "_raised_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, baseVars, customVars), fns);
};

styler.generateStyles([selector], baseVars, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var theme = customTheme;

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var showSpinner = function showSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  return show(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideSpinner = function hideSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  return hide(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var visible = createStream(false);
  var dom = createStream();
  return {
    dom: dom,
    visible: visible,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.instanceClass, classForSize(attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(function () {
      hideSpinner(state, attrs);
    }, 0);
  }

  return [attrs.raised && attrs.content ? h(Shadow, { key: "shadow", z: attrs.z }) : null, attrs.content];
};



var index = Object.freeze({
	classes: classes,
	vars: baseVars,
	theme: theme,
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var classes$1 = {
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

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var blue400 = "#42a5f5";
var red500 = "#f44336";
var yellow600 = "#fdd835";
var green500 = "#4caf50";

var vars$1 = {
  border_width_small: baseVars.size_small / baseVars.size_regular * 3,
  border_width_regular: 3,
  border_width_medium: baseVars.size_medium / baseVars.size_regular * 3,
  border_width_large: baseVars.size_large / baseVars.size_regular * 3,
  border_width_fab: baseVars.size_fab / baseVars.size_regular * 3,
  rotation_duration: rotation_duration,
  arc_size: arc_size,
  arc_time: arc_time,
  arc_start_degrees: arc_start_degrees,

  color_light_single: rgba(vars.color_primary),
  color_light_1: blue400,
  color_light_2: red500,
  color_light_3: yellow600,
  color_light_4: green500,

  color_dark_single: rgba(vars.color_primary),
  color_dark_1: blue400,
  color_dark_2: red500,
  color_dark_3: yellow600,
  color_dark_4: green500
};

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var OPACITY_MIN = 0;
var OPACITY_MAX = .99;
var CURVE_INFINITE = "cubic-bezier(0.4, 0.0, 0.2, 1) infinite both";

var kfRotate = function kfRotate() {
  return {
    " to": {
      transform: "rotate(360deg)"
    }
  };
};

var kfLeftSpin = function kfLeftSpin() {
  return kfSpin(1);
};
var kfRightSpin = function kfRightSpin() {
  return kfSpin(-1);
};

var kfSpin = function kfSpin(direction) {
  return {
    " from": {
      "transform": "rotate(" + direction * 130 + "deg)"
    },
    " 50%": {
      "transform": "rotate(" + direction * -5 + "deg)"
    },
    " to": {
      "transform": "rotate(" + direction * 130 + "deg)"
    }
  };
};

var kfFadeOut = function kfFadeOut() {
  return {
    " from": {
      opacity: OPACITY_MAX
    },
    " to": {
      opacity: OPACITY_MIN
    }
  };
};

var kfFillUnfillRotate = function kfFillUnfillRotate(config) {
  return {
    " 12.5%": {
      transform: "rotate(" + 0.5 * config.arc_size + "deg)"
    },
    " 25%": {
      transform: "rotate(" + 1.0 * config.arc_size + "deg)"
    },
    " 37.5%": {
      transform: "rotate(" + 1.5 * config.arc_size + "deg)"
    },
    " 50%": {
      transform: "rotate(" + 2.0 * config.arc_size + "deg)"
    },
    " 62.5%": {
      transform: "rotate(" + 2.5 * config.arc_size + "deg)"
    },
    " 75%": {
      transform: "rotate(" + 3.0 * config.arc_size + "deg)"
    },
    " 87.5%": {
      transform: "rotate(" + 3.5 * config.arc_size + "deg)"
    },
    " to": {
      transform: "rotate(" + 4.0 * config.arc_size + "deg)"
    }
  };
};

/**
 * HACK: Even though the intention is to have the current .pe-md-spinner__layer at
 * `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
 * to do proper subpixel rendering for the elements being animated. This is
 * especially visible in Chrome 39 on Ubuntu 14.04. See:
 *
 * - https://github.com/Polymer/paper-spinner/issues/9
 * - https://code.google.com/p/chromium/issues/detail?id=436255
 */
var kfLayer1FadeInOut = function kfLayer1FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MAX
    },
    " 25%": {
      opacity: OPACITY_MAX
    },
    " 26%": {
      opacity: OPACITY_MIN
    },
    " 89%": {
      opacity: OPACITY_MIN
    },
    " 90%": {
      opacity: OPACITY_MAX
    },
    " 100%": {
      opacity: OPACITY_MAX
    }
  };
};

var kfLayer2FadeInOut = function kfLayer2FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 15%": {
      opacity: OPACITY_MIN
    },
    " 25%": {
      opacity: OPACITY_MAX
    },
    " 50%": {
      opacity: OPACITY_MAX
    },
    " 51%": {
      opacity: OPACITY_MIN
    }
  };
};

var kfLayer3FadeInOut = function kfLayer3FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 40%": {
      opacity: OPACITY_MIN
    },
    " 50%": {
      opacity: OPACITY_MAX
    },
    " 75%": {
      opacity: OPACITY_MAX
    },
    " 76%": {
      opacity: OPACITY_MIN
    }
  };
};

var kfLayer4FadeInOut = function kfLayer4FadeInOut() {
  return {
    " from": {
      opacity: OPACITY_MIN
    },
    " 65%": {
      opacity: OPACITY_MIN
    },
    " 75%": {
      opacity: OPACITY_MAX
    },
    " 90%": {
      opacity: OPACITY_MAX
    },
    " 100%": {
      opacity: OPACITY_MIN
    }
  };
};

var layerAnimation = function layerAnimation(config, num) {
  return _defineProperty$2({}, "&.pe-md-spinner__layer-" + num, {
    animation: "mdSpinnerFillUnfillRotate " + 4 * config.arc_time + "s " + CURVE_INFINITE + ",  mdSpinnerLayer" + num + "FadeInOut " + 4 * config.arc_time + "s " + CURVE_INFINITE
  });
};

var layout$1 = (function (selector, componentVars) {
  return [_defineProperty$2({}, selector, {
    " .pe-md-spinner__animation": {
      animation: "mdSpinnerRotate " + componentVars.rotation_duration + "s linear infinite",
      position: "relative",
      width: "100%",
      height: "100%",

      /* The spinner does not have any contents that would have to be
      * flipped if the direction changes. Always use ltr so that the
      * style works out correctly in both cases. */
      direction: "ltr"
    },

    /**
    * Patch the gap that appear between the two adjacent div.pe-md-spinner__circle-clipper while the
    * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
    *
    * Update: the gap no longer appears on Chrome when .pe-md-spinner__layer"s opacity is 0.99,
    * but still does on Safari and IE.
    */
    " .pe-md-spinner__gap-patch": {
      position: "absolute",
      boxSizing: "border-box",
      top: 0,
      left: "45%",
      width: "10%",
      height: "100%",
      overflow: "hidden",
      borderColor: "inherit"
    },

    " .pe-md-spinner__gap-patch .pe-md-spinner__circle": {
      width: "1000%",
      left: "-450%"
    },

    " .pe-md-spinner__circle-clipper": {
      display: "inline-block",
      fontSize: 0,
      lineHeight: 0,
      position: "relative",
      width: "50%",
      height: "100%",
      overflow: "hidden",
      borderColor: "inherit"
    },

    " .pe-md-spinner__circle-clipper .pe-md-spinner__circle": {
      width: "200%"
    },

    " .pe-md-spinner__circle": [mixin.fit(), {
      animation: "none",
      boxSizing: "border-box",
      height: "100%",
      borderStyle: "solid",
      borderColor: "inherit",
      borderRadius: "50%",
      borderBottomColor: "transparent !important"
    }],

    "&": ["small", "regular", "medium", "large", "fab"].map(function (size) {
      return _defineProperty$2({}, "&.pe-spinner--" + size, {
        " .pe-md-spinner__circle": {
          borderWidth: componentVars["border_width_" + size] + "px"
        }
      });
    }),

    " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
      transform: "rotate(129deg)",
      animation: "mdSpinnerLeftSpin " + componentVars.arc_time + "s " + CURVE_INFINITE,
      borderRightColor: "transparent !important"
    },

    " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
      transform: "rotate(-129deg)",
      animation: "mdSpinnerRightSpin " + componentVars.arc_time + "s " + CURVE_INFINITE,
      left: "-100%",
      borderLeftColor: "transparent !important"
    },

    /**
    * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
    *
    * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn"t
    * guarantee that the animation will start _exactly_ after that value. So we avoid using
    * animation-delay and instead set custom keyframes for each color (as redundant as it
    * seems).
    *
    * We write out each animation in full (instead of separating animation-name,
    * animation-duration, etc.) because under the polyfill, Safari does not recognize those
    * specific properties properly, treats them as -webkit-animation, and overrides the
    * other animation rules. See https://github.com/Polymer/platform/issues/53.
    */
    " .pe-md-spinner__layer": [[1, 2, 3, 4].map(function (num) {
      return layerAnimation(componentVars, num);
    }), {
      animation: "mdSpinnerFillUnfillRotate " + 4 * componentVars.arc_time + "s " + CURVE_INFINITE,
      position: "absolute",
      width: "100%",
      height: "100%",
      whiteSpace: "nowrap"
    }],

    "@keyframes mdSpinnerRotate": kfRotate(),
    "@keyframes mdSpinnerRightSpin": kfRightSpin(),
    "@keyframes mdSpinnerLeftSpin": kfLeftSpin(),
    "@keyframes mdSpinnerFadeOut": kfFadeOut(),
    "@keyframes mdSpinnerFillUnfillRotate": kfFillUnfillRotate(componentVars),
    "@keyframes mdSpinnerLayer1FadeInOut": kfLayer1FadeInOut(),
    "@keyframes mdSpinnerLayer2FadeInOut": kfLayer2FadeInOut(),
    "@keyframes mdSpinnerLayer3FadeInOut": kfLayer3FadeInOut(),
    "@keyframes mdSpinnerLayer4FadeInOut": kfLayer4FadeInOut()
  })];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var style$1 = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_single"],

    " .pe-md-spinner__layer": {
      borderColor: "currentcolor"
    },

    ":not(.pe-spinner--single-color)": {
      " .pe-md-spinner__layer-1": {
        borderColor: componentVars["color_" + tint + "_1"]
      },
      " .pe-md-spinner__layer-2": {
        borderColor: componentVars["color_" + tint + "_2"]
      },
      " .pe-md-spinner__layer-3": {
        borderColor: componentVars["color_" + tint + "_3"]
      },
      " .pe-md-spinner__layer-4": {
        borderColor: componentVars["color_" + tint + "_4"]
      }
    }
  })];
};

var color$1 = (function (selector, componentVars) {
  return [style$1([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style$1(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns$1 = [layout$1, color$1];
var selector$1 = "." + classes$1.component;

var customTheme$1 = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector$1], _extends$3({}, vars$1, customVars), fns$1);
};

styler.generateStyles([selector$1], vars$1, fns$1);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var theme$1 = customTheme$1;

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes$1.layer, classes$1.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes$1.circleClipper, classes$1.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes$1.circle
  })), h("div", {
    key: "gap-patch",
    className: classes$1.gapPatch
  }, h("div", { className: classes$1.circle })), h("div", {
    key: "clipper-right",
    className: [classes$1.circleClipper, classes$1.circleClipperRight].join(" ")
  }, h("div", { className: classes$1.circle }))]);
};

var createProps$1 = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes$1.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));
  return _extends$2({}, attrs, {
    className: [classes$1.component, attrs.className].join(" "),
    content: state.content
  });
};



var index$1 = Object.freeze({
	classes: classes$1,
	vars: vars$1,
	theme: theme$1,
	createProps: createProps$1
});

var classes$2 = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var vars$2 = _extends$6({}, baseVars, {
  border_width_small: baseVars.size_small / baseVars.size_regular * 3,
  border_width_regular: 3,
  border_width_medium: baseVars.size_medium / baseVars.size_regular * 3,
  border_width_large: baseVars.size_large / baseVars.size_regular * 3,
  border_width_fab: baseVars.size_fab / baseVars.size_regular * 3,
  animation_duration: "1.5s",

  color_light: rgba(vars.color_primary),
  color_dark: rgba(vars.color_primary)
});

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout$2 = (function (selector, componentVars) {
  return [_defineProperty$4({}, selector, {
    position: "relative",

    " .pe-md-progress-spinner__animation": {
      animationDuration: componentVars.animationDuration,
      position: "absolute",
      width: "100%",
      height: "100%"
    },

    " .pe-md-progress-spinner__circle": {
      position: "absolute",
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      borderStyle: "solid",
      borderRadius: "50%"
    },

    " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
      transform: "rotate(0)",
      clip: "rect(0, 0, 0, 0)"
    },

    "&": ["small", "regular", "medium", "large", "fab"].map(function (size) {
      return _defineProperty$4({}, "&.pe-spinner--" + size, {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: componentVars["border_width_" + size] + "px"
        }
      });
    })
  })];
});

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$2 = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$5({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-md-progress-spinner__circle": {
      borderColor: "currentcolor"
    }
  })];
};

var color$2 = (function (selector, componentVars) {
  return [style$2([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style$2(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns$2 = [layout$2, color$2];
var selector$2 = "." + classes$2.component;

var customTheme$2 = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector$2], _extends$5({}, vars$2, customVars), fns$2);
};

styler.generateStyles([selector$2], vars$2, fns$2);

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var theme$2 = customTheme$2;

var DEFAULT_UPDATE_DURATION = .8;

var sizeFromName = function sizeFromName() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return vars$2["size_" + size];
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
  var style = el.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes$2.animation);
  var animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  var leftCircle = stateEl.querySelector("." + classes$2.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes$2.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var handlePercentage = function handlePercentage(percentage, state, size, attrs) {
  if (!state.dom()) {
    return;
  }
  if (state.animating()) {
    return;
  }
  var previousPercentage = state.percentage();
  if (attrs.animated && previousPercentage !== percentage) {
    var animationDuration = (attrs.updateDuration || DEFAULT_UPDATE_DURATION) * 1000;
    var el = state.dom();
    var start = null;
    var step = function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var stepPercentage = 1.0 / animationDuration * progress;
      var newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, easing.easeInOutQuad(newPercentage));
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
    animate(state.dom(), size, percentage);
    state.percentage(percentage);
  }
};

var notifyState = function notifyState(state, attrs, size) {
  if (attrs.percentage !== undefined) {
    var percentage = unpackAttrs(attrs.percentage);
    handlePercentage(percentage, state, size, attrs);
  }
};

var getSize = function getSize(attrs) {
  var rawSize = sizeFromName(attrs.size);

  var _themeVars$raisedSize = vars$2.raisedSize(rawSize),
      padding = _themeVars$raisedSize.padding,
      paddedSize = _themeVars$raisedSize.paddedSize;

  return attrs.raised ? paddedSize - 2 * padding : rawSize;
};

var getInitialState$1 = function getInitialState(vnode, createStream) {
  var percentage = createStream(0);
  var dom = createStream();
  var animating = createStream(false);
  return {
    dom: dom,
    percentage: percentage,
    animating: animating
  };
};

var onMount$1 = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);
  var size = getSize(attrs);
  notifyState(state, attrs, size);
};

var createProps$2 = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var size = getSize(attrs);
  notifyState(state, attrs, size);

  var content = h("div", {
    key: "content",
    className: classes$2.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    key: "left",
    className: [classes$2.circle, classes$2.circleLeft].join(" ")
  }), h("div", {
    key: "right",
    className: [classes$2.circle, classes$2.circleRight].join(" ")
  })]);

  return _extends$4({}, attrs, {
    className: [classes$2.component, attrs.className].join(" "),
    content: content
  });
};



var index$2 = Object.freeze({
	classes: classes$2,
	vars: vars$2,
	theme: theme$2,
	getInitialState: getInitialState$1,
	onMount: onMount$1,
	createProps: createProps$2
});

var classes$3 = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var vars$3 = {
  animation_duration: 1, // seconds

  color_light: rgba(vars.color_light_foreground),
  color_dark: rgba(vars.color_dark_foreground)
};

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bladeWidth = 9; // percent
var bladeHeight = 28; // percent

var kfFade = function kfFade() {
  return {
    " 0%": {
      opacity: .640
    },
    " 100%": {
      opacity: .035
    }
  };
};

var positionBlades = function positionBlades(componentVars) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
    // reverse to improve performance on iOS
    var delay = -1 / 12 * i * componentVars.animation_duration;
    var rotation = 360 - 360 / 12 * i;
    return _defineProperty$6({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
      transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
      animation: "iosSpinnerFade " + componentVars.animation_duration + "s " + delay + "s linear infinite"
    });
  });
};

var layout$3 = (function (selector, componentVars) {
  return [_defineProperty$6({}, selector, {
    " .pe-ios-spinner__blades": [positionBlades(componentVars), {
      transform: "translate3d(0,0,0)",
      position: "relative",
      width: "100%",
      height: "100%"
    }],

    " .pe-ios-spinner__blade": {
      position: "absolute",
      width: bladeWidth + "%",
      height: bladeHeight + "%",
      left: (100 - bladeWidth) / 2 + "%",
      top: (100 - bladeHeight) / 2 + "%",
      opacity: 0,
      borderRadius: "50px"
    },

    "@keyframes iosSpinnerFade": kfFade()
  })];
});

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$3 = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$7({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-ios-spinner__blade": {
      background: "currentcolor"
    }
  })];
};

var color$3 = (function (selector, componentVars) {
  return [style$3([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style$3(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns$3 = [layout$3, color$3];
var selector$3 = "." + classes$3.component;

var customTheme$3 = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector$3], _extends$8({}, vars$3, customVars), fns$3);
};

styler.generateStyles([selector$3], vars$3, fns$3);

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var theme$3 = customTheme$3;

var blade = function blade(num, h) {
  return h("div", {
    key: "blade-" + num,
    className: classes$3.blade
  });
};

var createProps$3 = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes$3.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));
  return _extends$7({}, attrs, {
    className: [classes$3.component, attrs.className].join(" "),
    content: state.content
  });
};



var index$3 = Object.freeze({
	classes: classes$3,
	vars: vars$3,
	theme: theme$3,
	createProps: createProps$3
});

export { index as coreBaseSpinner, index$1 as coreMaterialDesignSpinner, index$2 as coreMaterialDesignProgressSpinner, index$3 as coreiOSSpinner };
