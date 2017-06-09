import { vars } from "polythene-theme";
import { mixin, flex } from "polythene-core-css";

const lineHeightTitle = 24;

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: vars.z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
      padding: componentVars.padding + "px 40px",

      ".pe-dialog--fullscreen": {
        padding: 0,

        " .pe-dialog__content": {
          opacity: 0,
          borderRadius: 0,
          maxWidth: "none",
          height: "100%",
          width: "100%",

          " .pe-dialog__header, .pe-dialog__footer": {
            display: "none"
          },

          " .pe-dialog__body": {
            padding: 0,
            height: "100%",
            maxHeight: "calc(100%)",
            border: "none"
          }
        }
      },

      " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
        zIndex: 1
      },

      " .pe-dialog__content": [
        flex.layoutVertical, {
          position: "relative",
          maxHeight: "100%",
          minWidth: 56 * 5 + "px",
          maxWidth: 7 * vars.grid_unit_menu + "px",
          borderRadius: componentVars.border_radius + "px",

          " > .pe-shadow": {
            zIndex: -1 // For IE10 to get click events on content
          },

          ".pe-menu__content": {
            " .pe-dialog__body": {
              padding: 0,
              border: "none"
            }
          },
          " p": {
            margin: 0
          },
          " p + p": {
            marginTop: "16px"
          }
        }
      ],

      " .pe-dialog__title": {
        fontSize: vars.font_size_title + "px",
        lineHeight: lineHeightTitle + "px",
        fontWeight: vars.font_weight_medium,

        "& + div": {
          marginTop: "16px"
        },
      },

      " .pe-dialog__header": {
        padding: [(componentVars.padding - 4), componentVars.padding, (componentVars.header_bottom - 4), componentVars.padding].map((v) => (v + "px")).join(" "),
        minHeight: componentVars.header_height + "px",

        " .pe-dialog__title": [
          mixin.ellipsis(1), {
            width: "100%"
          }
        ]
      },

      " .pe-dialog__body": [
        flex.selfStretch,
        {
          padding: componentVars.padding + "px",
          overflowY: "auto",
          "-webkit-overflow-scrolling": "touch",
          borderWidth: "1px",
          borderStyle: "solid none",
          borderColor: "transparent",
          // initially set max-height; will be overridden by dialog core with actual heights
          maxHeight: "calc(100vh - " + (2 * componentVars.padding) + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
        }
      ],
      " .pe-dialog__header + .pe-dialog__body": {
        paddingTop: 0
      },

      " .pe-dialog__footer": {
        padding: "2px 8px",
        minHeight: componentVars.footer_height + "px",
        fontSize: 0, // remove inline block spacing

        ".pe-dialog__footer--high": {
          // when buttons are stacked vertically
          paddingBottom: "8px"
        }
      },

      " .pe-dialog__actions": [
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
    }
  ],
  " body.pe-dialog--open": {
    overflow: "hidden",
    left: 0,
    "-webkit-overflow-scrolling": "touch",
    top: 0,
    width: "100%"
  }
}];
