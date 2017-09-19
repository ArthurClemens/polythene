import { styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-list';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {

    ".pe-list--padding": {
      padding: componentVars.padding + "px 0"
    },

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

    ".pe-list--borders": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var _scopes$map$join;

  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), (_scopes$map$join = {
    backgroundColor: componentVars["color_" + tint + "_background"]

  }, _defineProperty$1(_scopes$map$join, "& + .pe-list", {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }), _defineProperty$1(_scopes$map$join, ".pe-list--borders", {
    " .pe-list-tile": {
      ":not(:last-child)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _defineProperty$1(_scopes$map$join, ".pe-list--indented-borders", {
    " .pe-list-tile": {
      " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
        borderColor: componentVars["color_" + tint + "_border"]
      }
    }
  }), _scopes$map$join))];
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
