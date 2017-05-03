import m from 'mithril';
import spinner, { vars } from 'polythene-spinner';
import { styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-theme';
import { easing } from 'polythene-utilities';

var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = vars$1.rgba;

var vars$2 = _extends$1({}, vars, {
  border_width_small: vars.size_small / vars.size_regular * 3,
  border_width_regular: 3,
  border_width_medium: vars.size_medium / vars.size_regular * 3,
  border_width_large: vars.size_large / vars.size_regular * 3,
  border_width_fab: vars.size_fab / vars.size_regular * 3,
  animation_duration: "1.5s",

  color_light: rgba(vars$1.color_primary),
  color_dark: rgba(vars$1.color_primary)
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
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
      return _defineProperty({}, "&.pe-spinner--" + size, {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: componentVars["border_width_" + size] + "px"
        }
      });
    })
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-md-progress-spinner__circle": {
      borderColor: "currentcolor"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$2, customVars), fns);
};

styler.generateStyles([selector], vars$2, fns);

var sizeFromType = function sizeFromType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return vars$2["size_" + type];
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

var handlePercentage = function handlePercentage(percentage, state, size) {
  var attrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (!state.el) {
    return;
  }
  state.previousPercentage = state.previousPercentage || 0;
  if (attrs.animated && state.previousPercentage !== percentage) {
    var STEP_DURATION = attrs.updateDuration * 1000;
    var start = null;
    var step = function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var stepPercentage = 1.0 / STEP_DURATION * progress;
      var newPercentage = state.previousPercentage + stepPercentage * (percentage - state.previousPercentage);
      animate(state.el, size, easing.easeInOutQuad(newPercentage));
      state.previousPercentage = newPercentage;
      if (start && progress < STEP_DURATION) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
      }
    };
    window.requestAnimationFrame(step);
  } else {
    animate(state.el, size, percentage);
    state.previousPercentage = percentage;
  }
};

var view = function view(_ref) {
  var attrs = _ref.attrs;

  var rawSize = sizeFromType(attrs.type);

  var _themeVars$raisedSize = vars$2.raisedSize(rawSize),
      padding = _themeVars$raisedSize.padding,
      paddedSize = _themeVars$raisedSize.paddedSize;

  var size = attrs.raised ? paddedSize - 2 * padding : rawSize;

  attrs.content = m("div", {
    class: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [m("div", {
    class: [classes.circle, classes.circleLeft].join(" ")
  }), m("div", {
    class: [classes.circle, classes.circleRight].join(" ")
  })]);
  attrs.instanceClass = classes.component;
  attrs.getPercentage = function (percentage, state) {
    return handlePercentage(percentage, state, size, attrs);
  };
  return m(spinner, attrs);
};

var spinner$1 = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

export { classes, vars$2 as vars };export default spinner$1;
