import { vars } from "polythene-theme";

export default (selector, componentVars) => [{
  [selector]: {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: "100%",
    padding: 0,
    overflowY: "auto",

    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: `${componentVars.content_max_width}px`,
      }
    },

    ".pe-drawer--permanent": {
      position: "static",
      height: "auto",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog-pane__body": {
        overflow: "visible",
        maxHeight: "initial",
      }
    },

    ".pe-drawer--bordered": {
      " .pe-dialog__content": {
        borderRightWidth: "1px",
        borderRightStyle: "solid",
      }
    },

    " .pe-dialog__content": {
      position: "relative",
      height: "100%",
      borderRadius: 0,
      width: `calc(100% - ${componentVars.content_side_offset}px)`,
      maxWidth: `${componentVars.content_max_width}px`,
    },
    
    " .pe-dialog-pane": {
      minWidth: "initial"
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  ["@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)"]: {
    [selector]: {
      ".pe-drawer--push": {
        " .pe-dialog__content": {
          maxWidth: `${componentVars.content_max_width_large}px`,
        }
      },
      " .pe-dialog__content": {
        width: `calc(100% - ${componentVars.content_side_offset_large}px)`,
        maxWidth: `${componentVars.content_max_width_large}px`,
      },
    }
  }
}];
