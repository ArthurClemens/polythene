import { styler } from 'polythene-core-css';
import { vars } from 'polythene-core-drawer';
import { vars as vars$1 } from 'polythene-theme';

var classes = {
  component: "pe-drawer",

  // states
  push: "pe-drawer--push",
  permanent: "pe-drawer--permanent",
  bordered: "pe-drawer--bordered"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: "100%",
    padding: 0,
    overflowY: "auto",

    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: componentVars.content_max_width + "px"
      }
    },

    ".pe-drawer--permanent": {
      position: "static",
      height: "auto",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog-pane__body": {
        overflow: "visible",
        maxHeight: "initial"
      }
    },

    ".pe-drawer--bordered": {
      " .pe-dialog__content": {
        borderRightWidth: "1px",
        borderRightStyle: "solid"
      }
    },

    " .pe-dialog__content": {
      position: "relative",
      height: "100%",
      borderRadius: 0,
      width: "calc(100% - " + componentVars.content_side_offset + "px)",
      maxWidth: componentVars.content_max_width + "px"
    },

    " .pe-dialog-pane": {
      minWidth: "initial"
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }), _defineProperty(_ref2, "@media (min-width: " + vars$1.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
    ".pe-drawer--push": {
      " .pe-dialog__content": {
        maxWidth: componentVars.content_max_width_large + "px"
      }
    },
    " .pe-dialog__content": {
      width: "calc(100% - " + componentVars.content_side_offset_large + "px)",
      maxWidth: componentVars.content_max_width_large + "px"
    }
  })), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-drawer--backdrop-visible .pe-drawer__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      borderColor: componentVars["color_" + tint + "_border"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
