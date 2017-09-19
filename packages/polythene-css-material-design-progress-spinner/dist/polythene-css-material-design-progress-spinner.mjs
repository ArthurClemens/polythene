import { styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-material-design-progress-spinner';

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
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
