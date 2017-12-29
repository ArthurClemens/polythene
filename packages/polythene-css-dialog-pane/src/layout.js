import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

const lineHeightTitle = 24;

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutVertical,
    {
      position: "relative",
      maxHeight: "100%",
      minWidth: 56 * 5 + "px",
      maxWidth: 7 * vars.grid_unit_menu + "px",
      borderRadius: "inherit",
      margin: 0,
      
      ".pe-menu__content": {
        " .pe-dialog-pane__body": {
          padding: 0,
          border: "none"
        }
      },
      " .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header": {
        zIndex: 1
      },

      " .pe-dialog-pane__title": {
        fontSize: vars.font_size_title + "px",
        lineHeight: lineHeightTitle + "px",
        fontWeight: vars.font_weight_medium,

        "& + div": {
          marginTop: "16px"
        },
      },

      " .pe-dialog-pane__header": {
        minHeight: componentVars.header_height + "px",

        " .pe-dialog-pane__title": {
          width: "100%",
          wordBreak: "break-all",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }
      },

      " .pe-dialog-pane__header--title": {
        padding: [(componentVars.padding - 4), componentVars.padding, (componentVars.header_bottom - 4), componentVars.padding].map((v) => (v + "px")).join(" ")
      },

      " .pe-dialog-pane__body": [
        flex.selfStretch,
        {
          padding: componentVars.padding + "px",
          overflowY: "auto",
          "-webkit-overflow-scrolling": "touch",
          minHeight: "50px",
          
          // initially set max-height; will be overridden by dialog core with actual heights
          maxHeight: "calc(100vh - " + (2 * componentVars.padding) + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)",

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
          borderWidth: componentVars.border_width + "px"
        }
      },

      ".pe-dialog-pane--footer.pe-dialog-pane--border-bottom": {
        " .pe-dialog-pane__body": {
          borderBottomStyle: "solid",
          borderWidth: componentVars.border_width + "px"
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
          minHeight: componentVars.footer_height + "px",
          fontSize: 0, // remove inline block spacing
        },
      },

      " .pe-dialog-pane__actions": [
        flex.layoutHorizontal,
        flex.layoutEndJustified,
        flex.layoutWrap
      ]
    },
  ],
  ".pe-menu__content": {
    " .pe-dialog-pane__body": {
      padding: 0,
      border: "none"
    }
  },
  " .pe-dialog--full-screen": {
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
  }
}];
