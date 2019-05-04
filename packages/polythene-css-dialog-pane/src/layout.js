// @ts-check

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

const padding_header_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-dialog-pane__header--title": {
      paddingTop: (vars.padding - 4) + "px",
      paddingRight: vars.padding + "px",
      paddingBottom: (vars.header_bottom - 4) + "px",
      paddingLeft: vars.padding + "px",
    },
  });

/*
Setting an explicit max-height is needed for IE 11
*/
const header_height_footer_height_margin_vertical = (selector, vars) =>
  sel(selector, {
    " .pe-dialog-pane__body": {
      maxHeight: `calc(100vh - (${vars.header_height}px + ${vars.footer_height}px + 2 * ${vars.margin_vertical}px))`
    }
  });

/**
 * @param {string} selector 
 */
export const fullScreen = selector =>
  sel(selector, {
    " .pe-dialog-pane": {
      borderRadius: 0,
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
        flexShrink: 1 ,
        maxHeight: "none", // IE 11 doesn't know "initial"
      }
    },
    " .pe-dialog-pane, .pe-dialog-pane__body": {
      height: "100vh",
      maxHeight: "100vh",
      borderTopStyle: "none",
      maxWidth: "none", // IE 11 doesn't know "initial"
    }
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutVertical,
      {
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
          borderBottomRightRadius: "inherit",
        },

        " .pe-dialog-pane__title": {
          fontSize: themeVars.font_size_title + "px",
          fontWeight: themeVars.font_weight_medium,

          "& + div": {
            marginTop: "16px"
          },
        },

        " .pe-dialog-pane__header, .pe-dialog-pane__content > .pe-toolbar": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",

          " .pe-dialog-pane__title": {
            width: "100%",
            wordBreak: "break-all",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }
        },

        " .pe-dialog-pane__body": [
          {
            overflowY: "auto",
            "-webkit-overflow-scrolling": "touch",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",

            " p": {
              margin: 0
            },
            " p + p": {
              marginTop: "16px"
            }
          }
        ],

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
            borderBottomRightRadius: "inherit",
          },

          ".pe-dialog-pane__footer--high": {
            // when buttons are stacked vertically
            paddingBottom: "8px"
          },
          ".pe-dialog-pane__footer--buttons": {
            padding: "0 8px",
            fontSize: 0, // remove inline block spacing
          },
        },

        " .pe-dialog-pane__actions": [
          flex.layoutHorizontal,
          flex.layoutEndJustified,
          flex.layoutWrap,
          {
            alignItems: "center"
          }
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
  ],
  max_width: (selector, vars) => [
    vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)
  ],
  side_padding_mobile: (selector, vars) => [
    vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)
  ],
  min_width: (selector, vars) => [
    sel(selector, {
      minWidth: vars.min_width + "px"
    }),
  ],
  margin_vertical: (selector, vars) => [
    sel(selector, {
      maxHeight: `calc(100vh - 2 * ${vars.margin_vertical}px)`
    }),
    vars.header_height !== undefined && vars.footer_height !== undefined && header_height_footer_height_margin_vertical(selector, vars)
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
        height: vars.header_height + "px",
      },
    }),
    vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)
  ],
  footer_height: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__footer--buttons .pe-dialog-pane__actions": {
        minHeight: vars.footer_height + "px",
      },
    }),
    vars.header_height !== undefined && vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)
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
    vars.header_bottom !== undefined && padding_header_bottom(selector, vars),
  ],
  header_bottom: (selector, vars) => [
    padding_header_bottom(selector, vars)
  ],
  border_width: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__body": {
        borderWidth: vars.border_width + "px"
      },
    }),
  ],
};

export default createLayout({ varFns });
