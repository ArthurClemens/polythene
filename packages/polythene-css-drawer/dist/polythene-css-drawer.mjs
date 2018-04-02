import { vars } from 'polythene-theme';
import { mixin, styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-core-drawer';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHADOW_WIDTH = 15;

var alignSide = function alignSide(isRTL) {
  return function (componentVars) {
    var _peDrawerFixed, _peDrawerCoverP, _peDrawerCoverPe, _peDrawerPushPe, _peDrawerPushPe2;

    return {
      // Bordered
      ".pe-drawer--border .pe-dialog__content": {
        borderStyle: isRTL ? "none none none solid" : "none solid none none"
      },

      // Fixed
      ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed),

      // Cover
      ".pe-drawer--cover .pe-dialog__content": (_peDrawerCoverP = {}, _defineProperty(_peDrawerCoverP, isRTL ? "right" : "left", -componentVars.content_max_width - SHADOW_WIDTH + "px"), _defineProperty(_peDrawerCoverP, isRTL ? "left" : "right", "auto"), _peDrawerCoverP),
      ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": (_peDrawerCoverPe = {}, _defineProperty(_peDrawerCoverPe, isRTL ? "right" : "left", 0), _defineProperty(_peDrawerCoverPe, isRTL ? "left" : "right", "auto"), _peDrawerCoverPe),

      // Push
      ".pe-drawer--push .pe-dialog__content": (_peDrawerPushPe = {}, _defineProperty(_peDrawerPushPe, isRTL ? "marginRight" : "marginLeft", -componentVars.permanent_content_width - SHADOW_WIDTH + "px"), _defineProperty(_peDrawerPushPe, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe),
      ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": (_peDrawerPushPe2 = {}, _defineProperty(_peDrawerPushPe2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty(_peDrawerPushPe2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe2),

      // Mini
      ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
        marginLeft: 0,
        marginRight: 0
      }

    };
  };
};

var alignLeft = alignSide(false);

var alignRight = alignSide(true);

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
    opacity: 1,

    " .pe-dialog__content": [mixin.defaultTransition("all"), // animation duration is set in component options
    {
      position: "relative",
      borderRadius: 0,
      height: "100%",
      overflow: "visible"
    }],

    " .pe-dialog-pane__content": {
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    },

    " .pe-dialog-pane": {
      height: "100%",
      minWidth: 0 // IE 11 does not accept "none" or "inital" here
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    // Fixed
    ".pe-drawer--fixed": {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: vars.z_app_bar
    },

    // Permanent
    ".pe-drawer--permanent:not(.pe-drawer--mini)": {
      position: "static",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog__content": {
        width: componentVars.permanent_content_width + "px",
        overflow: "visible",
        maxHeight: "initial"
      }
    },

    // Floating
    ".pe-drawer--floating": {
      height: "auto"
    },

    // Bordered
    ".pe-drawer--border": {
      " .pe-dialog__content": {
        borderWidth: "1px"
      }
    },

    // Cover (default)
    ".pe-drawer--cover": {
      " .pe-dialog__content": {
        position: "absolute",
        width: "calc(100% - " + componentVars.content_side_offset + "px)",
        maxWidth: componentVars.content_max_width + "px",
        top: 0
      }
    },

    // Push
    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: componentVars.permanent_content_width + "px"
      }
    },

    // Mini
    ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
      width: componentVars.content_width_mini_collapsed + "px"
    },

    // Backdrop
    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    " .pe-dialog__backdrop": [mixin.defaultTransition("all"), // animation duration is set in component options
    {
      opacity: 0
    }],
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  }), _defineProperty(_ref2, "*[dir=rtl] " + selector + ".pe-drawer--anchor-end, .pe-rtl " + selector + ".pe-drawer--anchor-end, " + selector + ":not(.pe-drawer--anchor-end)", alignLeft(componentVars)), _defineProperty(_ref2, "*[dir=rtl] " + selector + ", .pe-rtl " + selector + ", " + selector + ".pe-drawer--anchor-end", [alignRight(componentVars)]), _defineProperty(_ref2, "@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
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
    " .pe-dialog__content": {
      borderColor: componentVars["color_" + tint + "_border"],
      background: "none"
    },
    " .pe-dialog-pane": {
      backgroundColor: componentVars["color_" + tint + "_background"]
    },
    " .pe-dialog__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
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
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars$1, customVars), fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, getStyle };
