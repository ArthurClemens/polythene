(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-dialog-pane",

    // elements
    actions: "pe-dialog-pane__actions",
    body: "pe-dialog-pane__body",
    content: "pe-dialog-pane__content",
    footer: "pe-dialog-pane__footer",
    header: "pe-dialog-pane__header",
    title: "pe-dialog-pane__title",

    // states
    withHeader: "pe-dialog-pane--header",
    withFooter: "pe-dialog-pane--footer",
    headerWithTitle: "pe-dialog-pane__header--title",
    footerWithButtons: "pe-dialog-pane__footer--buttons",
    footerHigh: "pe-dialog-pane__footer--high",
    borderBottom: "pe-dialog-pane--border-bottom",
    borderTop: "pe-dialog-pane--border-top",
    fullBleed: "pe-dialog-pane--body-full-bleed"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles() {
      return [{
        " .pe-dialog-pane__body": {
          borderColor: "transparent"
        }
      }];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_title_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__header .pe-dialog-pane__title": {
          color: vars["color_" + tint + "_title_text"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_body_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__body": {
          color: vars["color_" + tint + "_body_text"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_body_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
          borderTopColor: vars["color_" + tint + "_body_border"]
        },
        ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
          borderBottomColor: vars["color_" + tint + "_body_border"]
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

  var max_width_side_padding_mobile = function max_width_side_padding_mobile(selector, vars) {
    var _ref3;

    var maxWidthBreakpointMobile = vars.max_width + 2 * vars.side_padding_mobile;
    return _ref3 = {}, _defineProperty$1(_ref3, "@media (max-width: " + maxWidthBreakpointMobile + "px)", _defineProperty$1({}, selector, {
      maxWidth: "calc(100vw - " + 2 * vars.side_padding_mobile + "px)"
    })), _defineProperty$1(_ref3, "@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)", _defineProperty$1({}, selector, {
      maxWidth: vars.max_width + "px"
    })), _ref3;
  };

  var padding_header_height_footer_height = function padding_header_height_footer_height(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__body": {
        // initially set max-height; will be overridden by dialog core with actual heights
        maxHeight: "calc(100vh - " + 4 * vars.padding + "px - " + (vars.header_height + vars.footer_height) + "px)"
      }
    });
  };

  var padding_header_bottom = function padding_header_bottom(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__header--title": {
        paddingTop: vars.padding - 4 + "px",
        paddingRight: vars.padding + "px",
        paddingBottom: vars.header_bottom - 4 + "px",
        paddingLeft: vars.padding + "px"
      }
    });
  };

  var fullScreen = function fullScreen(selector) {
    return polytheneCoreCss.sel(selector, {
      padding: 0,

      " .pe-dialog-pane": {
        borderRadius: 0
      },
      " .pe-dialog-pane__content": {
        borderRadius: 0,
        maxWidth: "none",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",

        " > *": {
          flexShrink: 0
        },

        " > .pe-dialog-pane__body": {
          flexShrink: 1,
          maxHeight: "initial"
        }
      },
      " .pe-dialog-pane, .pe-dialog-pane__body": {
        height: "100vh",
        maxHeight: "100vh",
        border: "none",
        maxWidth: "initial"
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutVertical, {
        position: "relative",
        maxHeight: "100%",
        borderRadius: "inherit",
        margin: 0,

        " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
          zIndex: 1
        },

        " .pe-dialog-pane__content": {
          width: "100%"
        },

        " .pe-dialog-pane__title": {
          fontSize: polytheneTheme.vars.font_size_title + "px",
          fontWeight: polytheneTheme.vars.font_weight_medium,

          "& + div": {
            marginTop: "16px"
          }
        },

        " .pe-dialog-pane__header": {
          " .pe-dialog-pane__title": {
            width: "100%",
            wordBreak: "break-all",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },

        " .pe-dialog-pane__body": [polytheneCoreCss.flex.selfStretch, {
          overflowY: "auto",
          "-webkit-overflow-scrolling": "touch",
          minHeight: "50px",

          " p": {
            margin: 0
          },
          " p + p": {
            marginTop: "16px"
          }
        }],

        ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
          " .pe-dialog-pane__body": {
            borderTopStyle: "solid"
          }
        },

        ".pe-dialog-pane--footer": {
          ".pe-dialog-pane--border-bottom": {
            " .pe-dialog-pane__body": {
              borderBottomStyle: "solid"
            }
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
            fontSize: 0 // remove inline block spacing
          }
        },

        " .pe-dialog-pane__actions": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutEndJustified, polytheneCoreCss.flex.layoutWrap]
      }]), {
        " .pe-dialog__content.pe-menu__content": _defineProperty$1({}, " " + selector, {
          " .pe-dialog-pane__body": {
            padding: 0,
            border: "none"
          }
        })
      }, [fullScreen(" .pe-dialog--full-screen")]];
    },
    max_width: function max_width(selector, vars) {
      return [max_width_side_padding_mobile(selector, vars)];
    },
    side_padding_mobile: function side_padding_mobile(selector, vars) {
      return [max_width_side_padding_mobile(selector, vars)];
    },
    min_width: function min_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        minWidth: vars.min_width + "px"
      })];
    },
    line_height_title: function line_height_title(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__title": {
          lineHeight: vars.line_height_title + "px"
        }
      })];
    },
    header_height: function header_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__header": {
          minHeight: vars.header_height + "px"
        }
      }), padding_header_height_footer_height(selector, vars)];
    },
    padding: function padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__body": {
          padding: vars.padding + "px"
        },
        ".pe-dialog-pane--footer": {
          " .pe-dialog-pane__body": {
            paddingBottom: vars.padding - 10 + "px"
          }
        }
      }), padding_header_bottom(selector, vars), padding_header_height_footer_height(selector, vars)];
    },
    header_bottom: function header_bottom(selector, vars) {
      return [padding_header_bottom(selector, vars)];
    },
    footer_height: function footer_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-dialog-pane__footer": {
          ".pe-dialog-pane__footer--buttons": {
            minHeight: vars.footer_height + "px"
          }
        }
      }), padding_header_height_footer_height(selector, vars)];
    },
    border_width: function border_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
          " .pe-dialog-pane__body": {
            borderWidth: vars.border_width + "px"
          }
        },
        ".pe-dialog-pane--footer": {
          ".pe-dialog-pane--border-bottom": {
            " .pe-dialog-pane__body": {
              borderWidth: vars.border_width + "px"
            }
          }
        }
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    border_width: 1,
    footer_height: 52,
    header_bottom: 20,
    header_height: 60,
    line_height_title: 24,
    max_width: 7 * polytheneTheme.vars.grid_unit_menu, // 7 * 56 = 392 
    min_width: 5 * polytheneTheme.vars.grid_unit_menu, // 5 * 56 = 280
    padding: 3 * polytheneTheme.vars.grid_unit_component, // 3 * 8 = 24
    side_padding_mobile: 6 * polytheneTheme.vars.grid_unit, // 6 * 4 = 48

    color_light_title_text: "inherit",
    color_light_body_text: "inherit",
    color_light_body_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_light_background: "inherit",

    color_dark_title_text: "inherit",
    color_dark_body_text: "inherit",
    color_dark_body_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
    color_dark_background: "inherit"
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

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
  exports.fullScreen = fullScreen;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-dialog-pane.js.map
