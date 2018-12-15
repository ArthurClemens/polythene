(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

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

  const generalFns = {
    general_styles: () => [{
      " .pe-dialog-pane__body": {
        borderColor: "transparent"
      }
    }]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"]
    })],
    ["color_" + tint + "_title_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars["color_" + tint + "_title_text"]
      }
    })],
    ["color_" + tint + "_body_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__body": {
        color: vars["color_" + tint + "_body_text"]
      }
    })],
    ["color_" + tint + "_body_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomStyle: "solid",
        borderBottomColor: vars["color_" + tint + "_body_border"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const max_width_side_padding_mobile = (selector, vars) => {
    const maxWidthBreakpointMobile = vars.max_width + 2 * vars.side_padding_mobile;
    return {
      ["@media (max-width: " + maxWidthBreakpointMobile + "px)"]: {
        [selector]: {
          maxWidth: `calc(100vw - ${2 * vars.side_padding_mobile}px)`
        }
      },
      ["@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)"]: {
        [selector]: {
          maxWidth: vars.max_width + "px"
        }
      }
    };
  };

  const padding_header_bottom = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: vars.padding - 4 + "px",
      paddingRight: vars.padding + "px",
      paddingBottom: vars.header_bottom - 4 + "px",
      paddingLeft: vars.padding + "px"
    }
  });
  /*
  Setting an explicit max-height is needed for IE 11
  */


  const header_height_footer_height_margin_vertical = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-dialog-pane__body": {
      maxHeight: `calc(100vh - (${vars.header_height}px + ${vars.footer_height}px + 2 * ${vars.margin_vertical}px))`
    }
  });

  const fullScreen = selector => polytheneCoreCss.sel(selector, {
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
  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutVertical, {
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
        fontSize: polytheneTheme.vars.font_size_title + "px",
        fontWeight: polytheneTheme.vars.font_weight_medium,
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
      " .pe-dialog-pane__actions": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutEndJustified, polytheneCoreCss.flex.layoutWrap],
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
      " .pe-dialog__content.pe-menu__content": {
        [` ${selector}`]: {
          " .pe-dialog-pane__body": {
            padding: 0,
            border: "none"
          }
        }
      }
    }],
    max_width: (selector, vars) => [max_width_side_padding_mobile(selector, vars)],
    side_padding_mobile: (selector, vars) => [max_width_side_padding_mobile(selector, vars)],
    min_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      minWidth: vars.min_width + "px"
    })],
    margin_vertical: (selector, vars) => [polytheneCoreCss.sel(selector, {
      maxHeight: `calc(100vh - 2 * ${vars.margin_vertical}px)`
    }), header_height_footer_height_margin_vertical(selector, vars)],
    line_height_title: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__title": {
        lineHeight: vars.line_height_title + "px"
      }
    })],
    header_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__header, .pe-dialog-pane__content > .pe-toolbar": {
        minHeight: vars.header_height + "px"
      }
    }), header_height_footer_height_margin_vertical(selector, vars)],
    footer_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__footer": {
        minHeight: vars.footer_height + "px"
      }
    }), header_height_footer_height_margin_vertical(selector, vars)],
    padding: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane__body": {
        padding: vars.padding + "px"
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          paddingBottom: vars.padding - 10 + "px"
        }
      }
    }), padding_header_bottom(selector, vars)],
    header_bottom: (selector, vars) => [padding_header_bottom(selector, vars)],
    border_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
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
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    border_width: 1,
    footer_height: 52,
    header_bottom: 20,
    header_height: 64,
    line_height_title: 24,
    max_width: 7 * polytheneTheme.vars.grid_unit_menu,
    // 7 * 56 = 392 
    min_width: 5 * polytheneTheme.vars.grid_unit_menu,
    // 5 * 56 = 280
    padding: 3 * polytheneTheme.vars.grid_unit_component,
    // 3 * 8 = 24
    side_padding_mobile: 6 * polytheneTheme.vars.grid_unit,
    // 6 * 4 = 48
    max_height: 8 * polytheneTheme.vars.grid_unit_component,
    margin_vertical: 8 * polytheneTheme.vars.grid_unit_component,
    color_light_title_text: "inherit",
    color_light_body_text: "inherit",
    color_light_body_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_light_background: "inherit",
    color_dark_title_text: "inherit",
    color_dark_body_text: "inherit",
    color_dark_body_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
    color_dark_background: "inherit"
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
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
