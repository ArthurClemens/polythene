import { sel, createColor, flex, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_title_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars$$1["color_" + tint + "_title_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__body": {
        color: vars$$1["color_" + tint + "_body_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars$$1["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomColor: vars$$1["color_" + tint + "_body_border"]
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

var max_width_side_padding_mobile = function max_width_side_padding_mobile(selector, vars$$1) {
  var _ref3;

  var maxWidthBreakpointMobile = vars$$1.max_width + 2 * vars$$1.side_padding_mobile;
  return _ref3 = {}, _defineProperty$1(_ref3, "@media (max-width: " + maxWidthBreakpointMobile + "px)", _defineProperty$1({}, selector, {
    maxWidth: "calc(100vw - " + 2 * vars$$1.side_padding_mobile + "px)"
  })), _defineProperty$1(_ref3, "@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)", _defineProperty$1({}, selector, {
    maxWidth: vars$$1.max_width + "px"
  })), _ref3;
};

var padding_header_height_footer_height = function padding_header_height_footer_height(selector, vars$$1) {
  return sel(selector, {
    " .pe-dialog-pane__body": {
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 4 * vars$$1.padding + "px - " + (vars$$1.header_height + vars$$1.footer_height) + "px)"
    }
  });
};

var padding_header_bottom = function padding_header_bottom(selector, vars$$1) {
  return sel(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: vars$$1.padding - 4 + "px",
      paddingRight: vars$$1.padding + "px",
      paddingBottom: vars$$1.header_bottom - 4 + "px",
      paddingLeft: vars$$1.padding + "px"
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layoutVertical, {
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
        fontSize: vars.font_size_title + "px",
        fontWeight: vars.font_weight_medium,

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

      " .pe-dialog-pane__body": [flex.selfStretch, {
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

      " .pe-dialog-pane__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap]
    }]), {
      " .pe-dialog__content.pe-menu__content": _defineProperty$1({}, " " + selector, {
        " .pe-dialog-pane__body": {
          padding: 0,
          border: "none"
        }
      })
    }, {
      " .pe-dialog--full-screen": {
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
      }
    }];
  },
  max_width: function max_width(selector, vars$$1) {
    return [sel(selector, []), max_width_side_padding_mobile(selector, vars$$1)];
  },
  side_padding_mobile: function side_padding_mobile(selector, vars$$1) {
    return [sel(selector, []), max_width_side_padding_mobile(selector, vars$$1)];
  },
  min_width: function min_width(selector, vars$$1) {
    return [sel(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  line_height_title: function line_height_title(selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__title": {
        lineHeight: vars$$1.line_height_title + "px"
      }
    })];
  },
  header_height: function header_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__header": {
        minHeight: vars$$1.header_height + "px"
      }
    }), padding_header_height_footer_height(selector, vars$$1)];
  },
  padding: function padding(selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__body": {
        padding: vars$$1.padding + "px"
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          paddingBottom: vars$$1.padding - 10 + "px"
        }
      }
    }), padding_header_bottom(selector, vars$$1), padding_header_height_footer_height(selector, vars$$1)];
  },
  header_bottom: function header_bottom(selector, vars$$1) {
    return [sel(selector, {}), padding_header_bottom(selector, vars$$1)];
  },
  footer_height: function footer_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-dialog-pane__footer": {
        ".pe-dialog-pane__footer--buttons": {
          minHeight: vars$$1.footer_height + "px"
        }
      }
    }), padding_header_height_footer_height(selector, vars$$1)];
  },
  border_width: function border_width(selector, vars$$1) {
    return [sel(selector, {
      ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
        " .pe-dialog-pane__body": {
          borderWidth: vars$$1.border_width + "px"
        }
      },
      ".pe-dialog-pane--footer": {
        ".pe-dialog-pane--border-bottom": {
          " .pe-dialog-pane__body": {
            borderWidth: vars$$1.border_width + "px"
          }
        }
      }
    })];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  border_width: 1,
  footer_height: 52,
  header_bottom: 20,
  header_height: 60,
  line_height_title: 24,
  max_width: 7 * vars.grid_unit_menu, // 7 * 56 = 392 
  min_width: 5 * vars.grid_unit_menu, // 5 * 56 = 280
  padding: 3 * vars.grid_unit_component, // 3 * 8 = 24
  side_padding_mobile: 6 * vars.grid_unit, // 6 * 4 = 48

  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background: "inherit",

  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background: "inherit"
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
