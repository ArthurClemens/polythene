(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

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

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog__content": {
          borderColor: vars["color_" + tint + "_border"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog__backdrop": {
          backgroundColor: vars["color_" + tint + "_backdrop_background"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
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
        ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty$1(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty$1(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed)
      };
    };
  };

  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var _backdrop = function _backdrop(selector) {
    return polytheneCoreCss.sel(selector, {
      ".pe-dialog--visible .pe-dialog__backdrop": {
        opacity: 1
      }
    });
  };

  var selectorAnchorEnd = function selectorAnchorEnd(selector) {
    return selector + ".pe-drawer--anchor-end";
  };

  // fn: miniSelector contains .pe-drawer--mini
  var _content_width_mini_collapsed = function _content_width_mini_collapsed(miniSelector, vars) {
    return polytheneCoreCss.sel(miniSelector, {
      ":not(.pe-dialog--visible) .pe-dialog__content": {
        width: vars.content_width_mini_collapsed + "px"
      }
    });
  };

  // fn: coverSelector contains .pe-drawer--cover
  var _cover_content_max_width = function _cover_content_max_width(coverSelector, vars, isRTL) {
    var _peDialog__content, _peDialogVisible;

    return polytheneCoreCss.sel(coverSelector, {
      " .pe-dialog__content": (_peDialog__content = {
        maxWidth: vars.content_max_width + "px"
      }, _defineProperty$1(_peDialog__content, isRTL ? "right" : "left", -vars.content_max_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content, isRTL ? "left" : "right", "auto"), _peDialog__content),
      ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible = {}, _defineProperty$1(_peDialogVisible, isRTL ? "right" : "left", 0), _defineProperty$1(_peDialogVisible, isRTL ? "left" : "right", "auto"), _peDialogVisible)
    });
  };

  var cover_content_max_width = function cover_content_max_width(coverSelector, vars) {
    return [_cover_content_max_width(coverSelector, vars, false), _cover_content_max_width(polytheneCoreCss.selectorRTL(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(polytheneCoreCss.selectorRTL(coverSelector)), vars, false)];
  };

  // fn: selector contains .pe-drawer--permanent
  var _content_width = function _content_width(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        width: vars.content_width + "px"
      }
    });
  };

  // fn: pushSelector contains .pe-drawer--push
  var _push_content_width = function _push_content_width(pushSelector, vars, isRTL) {
    var _peDialog__content2, _peDialogVisible2;

    return polytheneCoreCss.sel(pushSelector, {
      " .pe-dialog__content": (_peDialog__content2 = {}, _defineProperty$1(_peDialog__content2, isRTL ? "marginRight" : "marginLeft", -vars.content_width - SHADOW_WIDTH + "px"), _defineProperty$1(_peDialog__content2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialog__content2),
      ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible2 = {
        width: vars.content_width + "px"
      }, _defineProperty$1(_peDialogVisible2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$1(_peDialogVisible2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialogVisible2)
    });
  };

  var push_content_width = function push_content_width(pushSelector, vars) {
    return [_push_content_width(pushSelector, vars, false), _push_content_width(polytheneCoreCss.selectorRTL(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(polytheneCoreCss.selectorRTL(pushSelector)), vars, false)];
  };

  // const content_side_offset = (selector, vars) =>
  //   sel(selector, {
  //     " .pe-dialog__content": {
  //       width: `calc(100% - ${vars.content_side_offset}px)`,
  //     }
  //   });

  var _cover = function _cover(selector) {
    return polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        position: "absolute",
        top: 0,
        zIndex: polytheneTheme.vars.z_drawer
      },
      ".pe-dialog--visible": {
        " .pe-dialog__touch": {
          display: "block"
        }
      }
    });
  };

  var _mini = function _mini(miniSelector) {
    return polytheneCoreCss.sel(miniSelector, {
      " .pe-dialog__content": {
        marginLeft: 0,
        marginRight: 0
      }
    });
  };

  var _permanent = function _permanent(permanentSelector) {
    return polytheneCoreCss.sel(permanentSelector, {
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
    return polytheneCoreCss.sel(pushSelector, {
      position: "static"
    });
  };

  var borderRadius = function borderRadius(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        borderRadius: vars.border_radius + "px"
      }
    });
  };

  var _floating = function _floating(selector) {
    return polytheneCoreCss.sel(selector, {
      height: "auto",

      " .pe-dialog__content": {
        height: "auto"
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [polytheneCoreCss.sel(selector, [alignLeft(vars), {
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

        " .pe-dialog__content": {
          position: "relative",
          transitionProperty: "all",

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
          zIndex: polytheneTheme.vars.z_drawer
        },

        // Mini
        ".pe-drawer--mini": _mini(selector, vars),

        // Permanent
        ".pe-drawer--permanent": _permanent(selector, vars),

        // Floating
        ".pe-drawer--floating": _floating(selector, vars),

        // Bordered
        ".pe-drawer--border": {
          " .pe-dialog__content": {
            borderWidth: "1px"
          }
        },

        // Cover (default)
        ".pe-drawer--cover": _cover(selector),

        // Push
        ".pe-drawer--push": _push(selector, vars),

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
      }]), [polytheneCoreCss.sel(polytheneCoreCss.selectorRTL(selector), alignRight(vars))]];
    },
    animation_delay: function animation_delay(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content, .pe-dialog__backdrop": {
          transitionDelay: vars.animation_delay
        }
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content, .pe-dialog__backdrop": {
          transitionDuration: vars.animation_duration
        }
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        "&, .pe-dialog__content, .pe-dialog__backdrop": {
          transitionTimingFunction: vars.animation_timing_function
        }
      })];
    },
    border_radius: function border_radius(selector, vars) {
      return [borderRadius(selector, vars)];
    },
    content_max_width: function content_max_width(selector, vars) {
      return [cover_content_max_width(selector + ".pe-drawer--cover", vars)];
    },
    content_width: function content_width(selector, vars) {
      return [_content_width(selector + ".pe-dialog--visible", vars), _content_width(selector + ".pe-drawer--permanent", vars)];
    },
    content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars) {
      return [_content_width_mini_collapsed(selector + ".pe-drawer--mini", vars)];
    },
    // content_side_offset: (selector, vars) => [
    //   content_side_offset(`${selector}.pe-drawer--cover`, vars)
    // ],
    // content_max_width_large: (selector, vars) => ({
    //   ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
    //     [selector]: {
    //       ".pe-drawer--push": {
    //         " .pe-dialog__content": {
    //           maxWidth: `${vars.content_max_width_large}px`,
    //         }
    //       },
    //       " .pe-dialog__content": {
    //         maxWidth: `${vars.content_max_width_large}px`,
    //       },
    //     }
    //   }
    // }),
    // content_side_offset_large: (selector, vars) => ({
    //   ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
    //     [selector]: {
    //       " .pe-dialog__content": {
    //         width: `calc(100% - ${vars.content_side_offset_large}px)`,
    //       },
    //     }
    //   }
    // }),
    cover: function cover(selector, vars) {
      return vars.cover && [_cover(selector, vars), cover_content_max_width(selector, vars)];
    },
    backdrop: function backdrop(selector, vars) {
      return [vars.backdrop && _backdrop(selector)];
    },
    mini: function mini(selector, vars) {
      return vars.mini && [_mini(selector, vars), _content_width_mini_collapsed(selector, vars)];
    },
    permanent: function permanent(selector, vars) {
      return [vars.permanent && _permanent(selector, vars)];
    },
    floating: function floating(selector, vars) {
      return [vars.floating && _floating(selector, vars)];
    },
    push: function push(selector, vars) {
      return vars.push && [_push(selector, vars), push_content_width(selector, vars)];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".260s",
    animation_timing_function: "ease-in-out",
    border_radius: 0,
    content_max_width: 5 * polytheneTheme.vars.increment, // 5 * 56
    // content_max_width_large:         5 * vars.increment_large,     // 5 * 64
    content_side_offset: polytheneTheme.vars.grid_unit_component * 7, // 56
    // content_side_offset_large:       vars.grid_unit_component * 8, // 64
    content_width: 240,
    content_width_mini_collapsed: polytheneTheme.vars.increment, // 1 * 56

    // theme vars

    backdrop: false,
    cover: false,
    floating: false,
    mini: false,
    permanent: false,
    push: false,

    // color vars

    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),

    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
  };

  var fns = [layout, color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-drawer.js.map
