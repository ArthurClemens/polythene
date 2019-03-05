import { createColor, sel, createLayout, flex, rgba, styler } from 'polythene-core-css';
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
    return [sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_title_text", function (selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars["color_" + tint + "_title_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_text", function (selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__body": {
        color: vars["color_" + tint + "_body_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_body_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomStyle: "solid",
        borderBottomColor: vars["color_" + tint + "_body_border"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

var max_width_side_padding_mobile = function max_width_side_padding_mobile(selector, vars) {
  var _ref3;

  var maxWidthBreakpointMobile = vars.max_width + 2 * vars.side_padding_mobile;
  return _ref3 = {}, _defineProperty(_ref3, "@media (max-width: " + maxWidthBreakpointMobile + "px)", _defineProperty({}, selector, {
    maxWidth: "calc(100vw - ".concat(2 * vars.side_padding_mobile, "px)")
  })), _defineProperty(_ref3, "@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)", _defineProperty({}, selector, {
    maxWidth: vars.max_width + "px"
  })), _ref3;
};

var padding_header_bottom = function padding_header_bottom(selector, vars) {
  return sel(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: vars.padding - 4 + "px",
      paddingRight: vars.padding + "px",
      paddingBottom: vars.header_bottom - 4 + "px",
      paddingLeft: vars.padding + "px"
    }
  });
};
/*
Setting an explicit max-height is needed for IE 11
*/


var header_height_footer_height_margin_vertical = function header_height_footer_height_margin_vertical(selector, vars) {
  return sel(selector, {
    " .pe-dialog-pane__body": {
      maxHeight: "calc(100vh - (".concat(vars.header_height, "px + ").concat(vars.footer_height, "px + 2 * ").concat(vars.margin_vertical, "px))")
    }
  });
};
/**
 * @param {string} selector 
 */


var fullScreen = function fullScreen(selector) {
  return sel(selector, {
    " .pe-dialog-pane": {
      borderRadius: 0
    },
    " .pe-dialog-pane__content": {
      borderRadius: 0,
      maxWidth: "none",
      height: "100vh",
      width: "100vw",
      " > *": {
        flexShrink: 0
      },
      " > .pe-dialog-pane__body": {
        flexShrink: 1,
        maxHeight: "none" // IE 11 doesn't know "initial"

      }
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "none" // IE 11 doesn't know "initial"

    }
  });
};
var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.layoutVertical, {
      position: "relative",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit",
      margin: 0,
      " .pe-dialog-pane__content": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        borderBottomLeftRadius: "inherit",
        borderBottomRightRadius: "inherit"
      },
      " .pe-dialog-pane__title": {
        fontSize: vars.font_size_title + "px",
        fontWeight: vars.font_weight_medium,
        "& + div": {
          marginTop: "16px"
        }
      },
      " .pe-dialog-pane__header, .pe-dialog-pane__content > .pe-toolbar": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        " .pe-dialog-pane__title": {
          width: "100%",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      " .pe-dialog-pane__body": [{
        overflowY: "auto",
        "-webkit-overflow-scrolling": "touch",
        " p": {
          margin: 0
        },
        " p + p": {
          marginTop: "16px"
        }
      }],
      ".pe-dialog-pane--body-full-bleed .pe-dialog-pane__body": {
        padding: 0,
        borderStyle: "none"
      },
      " .pe-dialog-pane__header--title + .pe-dialog-pane__body": {
        paddingTop: 0
      },
      " .pe-dialog-pane__footer": {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        "&, > .pe-toolbar": {
          borderBottomLeftRadius: "inherit",
          borderBottomRightRadius: "inherit"
        },
        ".pe-dialog-pane__footer--high": {
          // when buttons are stacked vertically
          paddingBottom: "8px"
        },
        ".pe-dialog-pane__footer--buttons": {
          padding: "0 8px",
          fontSize: 0 // remove inline block spacing

        }
      },
      " .pe-dialog-pane__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap, {
        alignItems: "center"
      }],
      ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
        " .pe-dialog-pane__body": {
          borderTopStyle: "solid"
        }
      },
      ".pe-dialog-pane--footer.pe-dialog-pane--border-bottom": {
        " .pe-dialog-pane__body": {
          borderBottomStyle: "solid"
        }
      }
    }]), {
      " .pe-dialog__content.pe-menu__content": _defineProperty({}, " ".concat(selector), {
        " .pe-dialog-pane__body": {
          padding: 0,
          border: "none"
        }
      })
    }];
  },
  max_width: function max_width(selector, vars) {
    return [vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)];
  },
  side_padding_mobile: function side_padding_mobile(selector, vars) {
    return [vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)];
  },
  min_width: function min_width(selector, vars) {
    return [sel(selector, {
      minWidth: vars.min_width + "px"
    })];
  },
  margin_vertical: function margin_vertical(selector, vars) {
    return [sel(selector, {
      maxHeight: "calc(100vh - 2 * ".concat(vars.margin_vertical, "px)")
    }), vars.header_height !== undefined && vars.footer_height !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
  },
  line_height_title: function line_height_title(selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__title": {
        lineHeight: vars.line_height_title + "px"
      }
    })];
  },
  header_height: function header_height(selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__header": {
        height: vars.header_height + "px"
      }
    }), vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
  },
  footer_height: function footer_height(selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__footer--buttons .pe-dialog-pane__actions": {
        minHeight: vars.footer_height + "px"
      }
    }), vars.header_height !== undefined && vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
  },
  padding: function padding(selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane__body": {
        padding: vars.padding + "px"
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          paddingBottom: vars.padding - 10 + "px"
        }
      }
    }), vars.header_bottom !== undefined && padding_header_bottom(selector, vars)];
  },
  header_bottom: function header_bottom(selector, vars) {
    return [padding_header_bottom(selector, vars)];
  },
  border_width: function border_width(selector, vars) {
    return [sel(selector, {
      ".pe-dialog-pane--header": {
        " .pe-dialog-pane__body": {
          // borderTopStyle set in color.js
          borderWidth: vars.border_width + "px"
        }
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          // borderBottomStyle set in color.js
          borderWidth: vars.border_width + "px"
        }
      }
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {DialogPaneVars} dialogPaneVars
 */

var dialogPaneVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  border_width: 1,
  footer_height: 52,
  header_bottom: 20,
  header_height: 64,
  line_height_title: 24,
  max_width: 7 * vars.grid_unit_menu,
  // 7 * 56 = 392 
  min_width: 5 * vars.grid_unit_menu,
  // 5 * 56 = 280
  padding: 3 * vars.grid_unit_component,
  // 3 * 8 = 24
  side_padding_mobile: 6 * vars.grid_unit,
  // 6 * 4 = 48
  max_height: 8 * vars.grid_unit_component,
  margin_vertical: 8 * vars.grid_unit_component,
  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background: "inherit",
  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background: "inherit"
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, dialogPaneVars);
var getStyle = styler.createGetStyle(selector, fns, dialogPaneVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: dialogPaneVars
});

export { addStyle, getStyle, color, layout, dialogPaneVars as vars, fullScreen };
