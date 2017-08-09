import { vars } from "polythene-theme";
import { mixin, flex } from "polythene-core-css";

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
        padding: [(componentVars.padding - 4), componentVars.padding, (componentVars.header_bottom - 4), componentVars.padding].map((v) => (v + "px")).join(" "),
        minHeight: componentVars.header_height + "px",

        " .pe-dialog-pane__title": [
          mixin.ellipsis(1), {
            width: "100%"
          }
        ]
      },

      " .pe-dialog-pane__body": [
        flex.selfStretch,
        {
          padding: componentVars.padding + "px",
          overflowY: "auto",
          "-webkit-overflow-scrolling": "touch",
          borderWidth: "1px",
          borderStyle: "solid none",
          borderColor: "transparent",
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
      " .pe-dialog-pane__header + .pe-dialog-pane__body": {
        paddingTop: 0
      },

      " .pe-dialog-pane__footer": {
        padding: "2px 8px",
        minHeight: componentVars.footer_height + "px",
        fontSize: 0, // remove inline block spacing

        ".pe-dialog-pane__footer--high": {
          // when buttons are stacked vertically
          paddingBottom: "8px"
        }
      },

      " .pe-dialog-pane__actions": [
        flex.layoutHorizontal,
        flex.layoutEndJustified,
        flex.layoutWrap, {
          margin: "0 -4px",

          " .pe-button": {
            height: "36px",
            marginTop: "6px",
            marginBottom: "6px",
            padding: 0
          }
        }
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
      padding: 0,
      height: "100vh",
      maxHeight: "100vh",
      border: "none",
      maxWidth: "initial",
    }
  }
}];
