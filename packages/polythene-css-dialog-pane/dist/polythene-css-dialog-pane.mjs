import { flex, mixin, styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-dialog-pane';
import { vars as vars$1 } from 'polythene-theme';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty(_ref, selector, [flex.layoutVertical, {
    position: "relative",
    maxHeight: "100%",
    minWidth: 56 * 5 + "px",
    maxWidth: 7 * vars$1.grid_unit_menu + "px",
    borderRadius: "inherit",
    margin: 0,

    ".pe-menu__content": {
      " .pe-dialog-pane__body": {
        padding: 0,
        border: "none"
      }
    },
    " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
      zIndex: 1
    },

    " .pe-dialog-pane__title": {
      fontSize: vars$1.font_size_title + "px",
      lineHeight: lineHeightTitle + "px",
      fontWeight: vars$1.font_weight_medium,

      "& + div": {
        marginTop: "16px"
      }
    },

    " .pe-dialog-pane__header": {
      minHeight: componentVars.header_height + "px",

      " .pe-dialog-pane__title": [mixin.ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog-pane__header--title": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" ")
    },

    " .pe-dialog-pane__body": [flex.selfStretch, {
      padding: componentVars.padding + "px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",

      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)",

      " p": {
        margin: 0
      },
      " p + p": {
        marginTop: "16px"
      }
    }],

    ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
      " .pe-dialog-pane__body": {
        borderTopStyle: "solid",
        borderWidth: componentVars.border_width + "px"
      }
    },

    ".pe-dialog-pane--footer.pe-dialog-pane--border-bottom": {
      " .pe-dialog-pane__body": {
        borderBottomStyle: "solid",
        borderWidth: componentVars.border_width + "px"
      }
    },

    ".pe-dialog-pane--body-full-bleed .pe-dialog-pane__body": {
      padding: 0,
      borderStyle: "none"
    },

    " .pe-dialog-pane__header--title + .pe-dialog-pane__body": {
      paddingTop: 0
    },

    " .pe-dialog-pane__footer": {
      ".pe-dialog-pane__footer--high": {
        // when buttons are stacked vertically
        paddingBottom: "8px"
      },
      ".pe-dialog-pane__footer--buttons": {
        padding: "2px 8px",
        minHeight: componentVars.footer_height + "px",
        fontSize: 0 // remove inline block spacing
      }
    },

    " .pe-dialog-pane__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        marginTop: "6px",
        marginBottom: "6px",
        padding: 0
      }
    }]
  }]), _defineProperty(_ref, ".pe-menu__content", {
    " .pe-dialog-pane__body": {
      padding: 0,
      border: "none"
    }
  }), _defineProperty(_ref, " .pe-dialog--full-screen", {
    " .pe-dialog-pane__content": {
      borderRadius: 0,
      maxWidth: "none",
      height: "100vh",
      width: "100vw"
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "initial"
    }
  }), _ref)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {

    backgroundColor: componentVars["color_" + tint + "_background"],

    " .pe-dialog-pane__header .pe-dialog-pane__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog-pane__body": {
      color: componentVars["color_" + tint + "_body_text"],
      borderColor: "transparen" // default
    },
    ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
      borderBottomColor: componentVars["color_" + tint + "_body_border"]
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

var styles = function styles() {
  return styler.createStyleSheets([selector], vars, fns);
};

var themeStyles = function themeStyles(customSelector, customVars) {
  return styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, styles, themeStyles };
