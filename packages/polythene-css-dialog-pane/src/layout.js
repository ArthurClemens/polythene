import { flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

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
        maxWidth: vars.max_width + "px",
      }
    }
  };
};

const padding_header_height_footer_height = (selector, vars) =>
  sel(selector, {
    " .pe-dialog-pane__body": {
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + (4 * vars.padding) + "px - " + (vars.header_height + vars.footer_height) + "px)",
    }
  });

const padding_header_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: (vars.padding - 4) + "px",
      paddingRight: vars.padding + "px",
      paddingBottom: (vars.header_bottom - 4) + "px",
      paddingLeft: vars.padding + "px",
    },
  });

export const fullScreen = selector =>
  sel(selector, {
    padding: 0,

    " .pe-dialog-pane": {
      borderRadius: 0,
    },
    " .pe-dialog-pane__content": {
      borderRadius: 0,
      maxWidth: "none",
      height: "100vh",
      width: "100vw",
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "initial",
    }
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutVertical,
      {
        position: "relative",
        maxHeight: "100%",
        borderRadius: "inherit",
        margin: 0,
        minWidth: "320px",
        
        " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
          zIndex: 1
        },

        " .pe-dialog-pane__content": {
          width: "100%"
        },

        " .pe-dialog-pane__title": {
          fontSize: themeVars.font_size_title + "px",
          fontWeight: themeVars.font_weight_medium,

          "& + div": {
            marginTop: "16px"
          },
        },

        " .pe-dialog-pane__header": {
          " .pe-dialog-pane__title": {
            width: "100%",
            wordBreak: "break-all",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }
        },

        " .pe-dialog-pane__body": [
          flex.selfStretch,
          {
            overflowY: "auto",
            "-webkit-overflow-scrolling": "touch",
            minHeight: "50px",

            " p": {
              margin: 0
            },
            " p + p": {
              marginTop: "16px"
            }
          }
        ],

        ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
          " .pe-dialog-pane__body": {
            borderTopStyle: "solid",
          }
        },

        ".pe-dialog-pane--footer": {
          ".pe-dialog-pane--border-bottom": {
            " .pe-dialog-pane__body": {
              borderBottomStyle: "solid",
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
            fontSize: 0, // remove inline block spacing
          },
        },

        " .pe-dialog-pane__actions": [
          flex.layoutHorizontal,
          flex.layoutEndJustified,
          flex.layoutWrap
        ],
      },
    ]),
    {
      " .pe-dialog__content.pe-menu__content": {
        [` ${selector}`]: {
          " .pe-dialog-pane__body": {
            padding: 0,
            border: "none"
          }
        }
      },
    },
    [
      fullScreen(" .pe-dialog--full-screen")
    ]
  ],
  max_width: (selector, vars) => [
    sel(selector, [
    ]),
    max_width_side_padding_mobile(selector, vars)
  ],
  side_padding_mobile: (selector, vars) => [
    sel(selector, [
    ]),
    max_width_side_padding_mobile(selector, vars)
  ],
  min_width: (selector, vars) => [
    sel(selector, {
      minWidth: vars.min_width + "px"
    }),
  ],
  line_height_title: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__title": {
        lineHeight: vars.line_height_title + "px",
      },
    }),
  ],
  header_height: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__header": {
        minHeight: vars.header_height + "px",
      },
    }),
    padding_header_height_footer_height(selector, vars),
  ],
  padding: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__body": {
        padding: vars.padding + "px",
      },
      ".pe-dialog-pane--footer": {
        " .pe-dialog-pane__body": {
          paddingBottom: (vars.padding - 10) + "px",
        },
      }
    }),
    padding_header_bottom(selector, vars),
    padding_header_height_footer_height(selector, vars),
  ],
  header_bottom: (selector, vars) => [
    sel(selector, {
    }),
    padding_header_bottom(selector, vars)
  ],
  footer_height: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__footer": {
        ".pe-dialog-pane__footer--buttons": {
          minHeight: vars.footer_height + "px",
        },
      },
    }),
    padding_header_height_footer_height(selector, vars),
  ],
  border_width: (selector, vars) => [
    sel(selector, {
      ".pe-dialog-pane--header.pe-dialog-pane--border-top": {
        " .pe-dialog-pane__body": {
          borderWidth: vars.border_width + "px"
        },
      },
      ".pe-dialog-pane--footer": {
        ".pe-dialog-pane--border-bottom": {
          " .pe-dialog-pane__body": {
            borderWidth: vars.border_width + "px"
          }
        }
      },
    }),
  ],
};

export default createLayout({ varFns });
