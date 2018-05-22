import { rgba, sel, createLayout, createColor, styler } from 'polythene-core-css';
import { vars } from 'polythene-css-base-spinner';
import { vars as vars$1 } from 'polythene-theme';
import { layout, color } from 'polythene-css-material-design-spinner';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var vars$2 = _extends({}, vars, {
  progress_animation_duration: ".8s",

  color_light: rgba(vars$1.color_primary),
  color_dark: rgba(vars$1.color_primary)
});

var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      position: "relative",

      " .pe-md-progress-spinner__animation": {
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
      }
    })];
  },
  progress_animation_duration: function progress_animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars$$1.progress_animation_duration
      }
    })];
  }
};

var layout$1 = createLayout({ varFns: varFns, superLayout: layout });

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars$$1) {
    return [sel(selector, {
      color: vars$$1["color_" + tint]
    })];
  });
};

var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

var color$1 = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: color
});

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$2, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$2, customVars, fns) : styler.createStyleSheets([selector], vars$2, fns);
};

styler.generateStyles([selector], vars$2, fns);

export { addStyle, getStyle, vars$2 as vars };
