import { styler } from 'polythene-core-css';
import { vars } from 'polythene-core-split-button';

var classes = {
  component: "pe-split-button",

  // states
  separator: "pe-split-button--separator"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, [{
    display: "flex",

    " .pe-button": {
      minWidth: 0,

      ":not(:first-child)": {
        "&, .pe-button__content, .pe-button__wash, .pe-button__focus": {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        }
      },
      ":not(:last-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    ".pe-split-button--separator": {
      " .pe-button": {
        ":not(:first-child)": {
          " .pe-button__content": {
            borderStyle: "none none none solid",
            borderWidth: "1px"
          }
        }
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-button": {
      " .pe-button__content": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
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
