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

    " .pe-dialog__backdrop": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: `${componentVars.content_max_width}px`,
      }
    },
  },
  ["@media (min-width: " + vars.breakpoint_for_tablet_portrait_up + "px)"]: {
    [selector]: {
      " .pe-dialog__content": {
        width: `calc(100% - ${componentVars.content_side_offset_large}px)`,
        maxWidth: `${componentVars.content_max_width_large}px`,
      },
      ".pe-drawer--push": {
        " .pe-dialog__content": {
          width: `${componentVars.content_max_width_large}px`,
        }
      },
    }
  }
}];
