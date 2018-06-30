import { sel, createColor, selectorRTL, createLayout, rgba, styler } from 'polythene-core-css';
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

var _border = function _border(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-dialog__content": {
      borderWidth: "1px",
      borderStyle: isRTL ? "none none none solid" : "none solid none none"
    }
  });
};

var _border2 = function _border2(selector, vars$$1) {
  return [_border(selector, vars$$1, false), _border(selectorRTL(selector), vars$$1, true)];
};

var alignSide = function alignSide(isRTL) {
  return function (selector, vars$$1) {
    var _peDrawerFixed;

    return [{
      // Fixed
      ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty$1(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty$1(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed)
    }, _border(selector + ".pe-drawer--border", vars$$1, isRTL)];
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _backdrop = function _backdrop(selector) {
  return sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  });
};

var selectorAnchorEnd = function selectorAnchorEnd(selector) {
  return selector + ".pe-drawer--anchor-end";
};

// fn: miniSelector contains .pe-drawer--mini
var _content_width_mini_collapsed = function _content_width_mini_collapsed(miniSelector, vars$$1) {
  return sel(miniSelector, {
    ":not(.pe-dialog--visible) .pe-dialog__content": {
      width: vars$$1.content_width_mini_collapsed + "px"
    }
  });
};

// fn: coverSelector contains .pe-drawer--cover
var _cover_content_max_width = function _cover_content_max_width(coverSelector, vars$$1, isRTL) {
  var _peDialog__content, _peDialogVisible;

  return sel(coverSelector, {
    " .pe-dialog__content": (_peDialog__content = {
      maxWidth: vars$$1.content_max_width + "px"
    }, _defineProperty$1(_peDialog__content, isRTL ? "right" : "left", -vars$$1.content_max_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content, isRTL ? "left" : "right", "auto"), _peDialog__content),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible = {}, _defineProperty$1(_peDialogVisible, isRTL ? "right" : "left", 0), _defineProperty$1(_peDialogVisible, isRTL ? "left" : "right", "auto"), _peDialogVisible)
  });
};

var cover_content_max_width = function cover_content_max_width(coverSelector, vars$$1) {
  return [_cover_content_max_width(coverSelector, vars$$1, false), _cover_content_max_width(selectorRTL(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(selectorRTL(coverSelector)), vars$$1, false)];
};

// fn: selector contains .pe-drawer--permanent
var _content_width = function _content_width(selector, vars$$1) {
  return sel(selector, {
    " .pe-dialog__content": {
      width: vars$$1.content_width + "px"
    }
  });
};

// fn: pushSelector contains .pe-drawer--push
var _push_content_width = function _push_content_width(pushSelector, vars$$1, isRTL) {
  var _peDialog__content2, _peDialogVisible2;

  return sel(pushSelector, {
    " .pe-dialog__content": (_peDialog__content2 = {}, _defineProperty$1(_peDialog__content2, isRTL ? "marginRight" : "marginLeft", -vars$$1.content_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialog__content2),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible2 = {
      width: vars$$1.content_width + "px"
    }, _defineProperty$1(_peDialogVisible2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$1(_peDialogVisible2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialogVisible2)
  });
};

var push_content_width = function push_content_width(pushSelector, vars$$1) {
  return [_push_content_width(pushSelector, vars$$1, false), _push_content_width(selectorRTL(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(selectorRTL(pushSelector)), vars$$1, false)];
};

var _cover = function _cover(selector) {
  return sel(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: vars.z_drawer
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block"
      }
    }
  });
};

var _mini = function _mini(miniSelector) {
  return sel(miniSelector, {
    " .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0
    }
  });
};

var _permanent = function _permanent(permanentSelector) {
  return sel(permanentSelector, {
    position: "static",
    display: "block",
    padding: 0,
    overflow: "initial",

    " .pe-dialog__content": {
      overflow: "visible",
      maxHeight: "initial",
      marginLeft: 0,
      marginRight: 0
    }
  });
};

// fn: pushSelector contains .pe-drawer--push
var _push = function _push(pushSelector) {
  return sel(pushSelector, {
    position: "static"
  });
};

var borderRadius = function borderRadius(selector, vars$$1) {
  return sel(selector, {
    " .pe-dialog__content": {
      borderRadius: vars$$1.border_radius + "px"
    }
  });
};

var _floating = function _floating(selector) {
  return sel(selector, {
    height: "auto",

    " .pe-dialog__content": {
      height: "auto"
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(selector, vars$$1), {
      justifyContent: "flex-start",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      height: "100%",
      minWidth: 0, // IE 11 does not accept "none" or "inital" here
      padding: 0,
      opacity: 1,
      flexShrink: 0,
      transitionProperty: "all",

      ":not(.pe-dialog--transition)": {
        " .pe-dialog__content": {
          transitionDuration: "0s"
        }
      },

      " .pe-dialog__content": {
        position: "relative",
        // transitionProperty: "all",

        height: "100%",
        overflow: "visible",
        minWidth: 0, // IE 11 does not accept "none" or "inital" here
        flexShrink: 0
      },

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
        zIndex: vars.z_drawer
      },

      // Mini
      ".pe-drawer--mini": _mini(selector, vars$$1),

      // Permanent
      ".pe-drawer--permanent": _permanent(selector, vars$$1),

      // Floating
      ".pe-drawer--floating": _floating(selector, vars$$1),

      // Cover (default)
      ".pe-drawer--cover": _cover(selector),

      // Push
      ".pe-drawer--push": _push(selector, vars$$1),

      // Backdrop
      " .pe-dialog__backdrop": {
        pointerEvents: "none",
        opacity: 0,
        display: "block"
      },
      " .pe-dialog__touch": {
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },

      ".pe-dialog--backdrop": _backdrop(selector)
    }]), [sel(selectorRTL(selector), alignRight(selector, vars$$1))]];
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDelay: vars$$1.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDuration: vars$$1.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionTimingFunction: vars$$1.animation_timing_function
      }
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [borderRadius(selector, vars$$1)];
  },
  content_max_width: function content_max_width(selector, vars$$1) {
    return [cover_content_max_width(selector + ".pe-drawer--cover", vars$$1)];
  },
  content_width: function content_width(selector, vars$$1) {
    return [_content_width(selector, vars$$1), _content_width(selector + ".pe-dialog--visible", vars$$1), _content_width(selector + ".pe-drawer--permanent", vars$$1), push_content_width(selector + ".pe-drawer--push", vars$$1)];
  },
  content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars$$1) {
    return [_content_width_mini_collapsed(selector + ".pe-drawer--mini", vars$$1)];
  },
  cover: function cover(selector, vars$$1) {
    return vars$$1.cover && [_cover(selector, vars$$1), cover_content_max_width(selector, vars$$1)];
  },
  backdrop: function backdrop(selector, vars$$1) {
    return [vars$$1.backdrop && _backdrop(selector)];
  },
  border: function border(selector, vars$$1) {
    return [vars$$1.border && _border2(selector)];
  },
  mini: function mini(selector, vars$$1) {
    return vars$$1.mini && [_mini(selector, vars$$1), _content_width_mini_collapsed(selector, vars$$1)];
  },
  permanent: function permanent(selector, vars$$1) {
    return [vars$$1.permanent && _permanent(selector, vars$$1)];
  },
  floating: function floating(selector, vars$$1) {
    return [vars$$1.floating && _floating(selector, vars$$1)];
  },
  push: function push(selector, vars$$1) {
    return vars$$1.push && [_push(selector, vars$$1), push_content_width(selector, vars$$1)];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  animation_delay: "0s",
  animation_duration: ".260s",
  animation_timing_function: "ease-in-out",
  border_radius: 0,
  content_max_width: 5 * vars.increment, // 5 * 56
  content_width: 240,
  content_width_mini_collapsed: vars.increment, // 1 * 56

  // theme vars

  backdrop: false,
  border: false,
  cover: false,
  floating: false,
  mini: false,
  permanent: false,
  push: false,

  // color vars

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
