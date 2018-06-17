import { sel, createColor, mixin, selectorRTL, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles() {
    return [{
      " .pe-dialog__content": {
        background: "none"
      }
    }];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog__content": {
        borderColor: vars$$1["color_" + tint + "_border"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars$$1["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHADOW_WIDTH = 15;

var alignSide = function alignSide(isRTL) {
  return function () {
    var _peDrawerFixed;

    return {
      // Bordered
      ".pe-drawer--border .pe-dialog__content": {
        borderStyle: isRTL ? "none none none solid" : "none solid none none"
      },

      // Fixed
      ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty$1(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty$1(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed),

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

var selectorAnchorEnd = function selectorAnchorEnd(selector) {
  return selector + ".pe-drawer--anchor-end";
};

var cover_content_max_width = function cover_content_max_width(selector, vars$$1, isRTL) {
  var _peDrawerCoverP, _peDrawerCoverPe;

  return sel(selector, {
    ".pe-drawer--cover .pe-dialog__content": (_peDrawerCoverP = {}, _defineProperty$1(_peDrawerCoverP, isRTL ? "right" : "left", -vars$$1.content_max_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDrawerCoverP, isRTL ? "left" : "right", "auto"), _peDrawerCoverP),
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": (_peDrawerCoverPe = {}, _defineProperty$1(_peDrawerCoverPe, isRTL ? "right" : "left", 0), _defineProperty$1(_peDrawerCoverPe, isRTL ? "left" : "right", "auto"), _peDrawerCoverPe)
  });
};

var push_permanent_content_width = function push_permanent_content_width(selector, vars$$1, isRTL) {
  var _peDrawerPushPe, _peDrawerPushPe2;

  return sel(selector, {
    ".pe-drawer--push .pe-dialog__content": (_peDrawerPushPe = {}, _defineProperty$1(_peDrawerPushPe, isRTL ? "marginRight" : "marginLeft", -vars$$1.permanent_content_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDrawerPushPe, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe),
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": (_peDrawerPushPe2 = {}, _defineProperty$1(_peDrawerPushPe2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$1(_peDrawerPushPe2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe2)
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
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
          top: 0
        }
      },

      // Push
      ".pe-drawer--push": {
        position: "static"
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
    }]), [sel(selectorRTL(selector), alignRight(vars$$1))]];
  },
  content_max_width: function content_max_width(selector, vars$$1) {
    return [sel(selector, {
      ".pe-drawer--cover": {
        " .pe-dialog__content": {
          maxWidth: vars$$1.content_max_width + "px"
        }
      }
    }), cover_content_max_width(selector, vars$$1, false), cover_content_max_width(selectorRTL(selector), vars$$1, true), cover_content_max_width(selectorAnchorEnd(selector), vars$$1, true), cover_content_max_width(selectorAnchorEnd(selectorRTL(selector)), vars$$1, false)];
  },
  permanent_content_width: function permanent_content_width(selector, vars$$1) {
    return [sel(selector, {
      ".pe-drawer--permanent:not(.pe-drawer--mini)": {
        " .pe-dialog__content": {
          width: vars$$1.permanent_content_width + "px"
        }
      },
      ".pe-drawer--push": {
        " .pe-dialog__content": {
          width: vars$$1.permanent_content_width + "px"
        }
      }
    }), push_permanent_content_width(selector, vars$$1, false), push_permanent_content_width(selectorRTL(selector), vars$$1, true), push_permanent_content_width(selectorAnchorEnd(selector), vars$$1, true), push_permanent_content_width(selectorAnchorEnd(selectorRTL(selector)), vars$$1, false)];
  },
  content_side_offset: function content_side_offset(selector, vars$$1) {
    return [sel(selector, {
      ".pe-drawer--cover": {
        " .pe-dialog__content": {
          width: "calc(100% - " + vars$$1.content_side_offset + "px)"
        }
      }
    })];
  },
  content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars$$1) {
    return [sel(selector, {
      ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
        width: vars$$1.content_width_mini_collapsed + "px"
      }
    })];
  },
  content_max_width_large: function content_max_width_large(selector, vars$$1) {
    return _defineProperty$1({}, "@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty$1({}, selector, {
      ".pe-drawer--push": {
        " .pe-dialog__content": {
          maxWidth: vars$$1.content_max_width_large + "px"
        }
      },
      " .pe-dialog__content": {
        maxWidth: vars$$1.content_max_width_large + "px"
      }
    }));
  },
  content_side_offset_large: function content_side_offset_large(selector, vars$$1) {
    return _defineProperty$1({}, "@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty$1({}, selector, {
      " .pe-dialog__content": {
        width: "calc(100% - " + vars$$1.content_side_offset_large + "px)"
      }
    }));
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  content_max_width: 5 * vars.increment, // 5 * 56
  content_max_width_large: 5 * vars.increment_large, // 5 * 64
  content_side_offset: vars.grid_unit_component * 7, // 56
  content_side_offset_large: vars.grid_unit_component * 8, // 64
  content_width_mini_collapsed: vars.increment, // 1 * 56
  permanent_content_width: 240,

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
};

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
