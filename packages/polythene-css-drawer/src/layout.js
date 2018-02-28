import { vars } from "polythene-theme";
import { mixin } from "polythene-core-css";

const SHADOW_WIDTH = 15;

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
    opacity: 1,

    " .pe-dialog__content": [
      mixin.defaultTransition("all"), // animation duration is set in component options
      {
        position: "relative",
        borderRadius: 0,
        height: "100%",
        overflow: "visible"
      }
    ],

    " .pe-dialog-pane__content": {
      height: "100%",
      overflowY: "auto", 
      overflowX: "hidden", 
    },
    
    " .pe-dialog-pane": {
      height: "100%",
      minWidth: 0 // IE 11 does not accept "none" or "inital" here
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    // Fixed
    ".pe-drawer--fixed": {
      position: "fixed",
      top: 0,
      left: 0, // reverse for RTL - see below
      right: "auto",
      width: "100%",
      zIndex: vars.z_app_bar,
    },

    // Permanent
    ".pe-drawer--permanent:not(.pe-drawer--mini)": {
      position: "static",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog__content": {
        width: `${componentVars.permanent_content_width}px`,
        overflow: "visible",
        maxHeight: "initial",
      }
    },

    // Floating
    ".pe-drawer--floating": {
      height: "auto"
    },

    // Bordered
    ".pe-drawer--bordered": {
      " .pe-dialog__content": {
        borderWidth: "1px",
        borderStyle: "none solid none none" // reverse for RTL - see below
      },
    },

    // Cover (default)
    ".pe-drawer--cover": {
      " .pe-dialog__content": {
        position: "absolute",
        width: `calc(100% - ${componentVars.content_side_offset}px)`,
        maxWidth: `${componentVars.content_max_width}px`,
        top: 0,
        left: `${-componentVars.content_max_width - SHADOW_WIDTH}px`, // reverse for RTL - see below
        right: "auto",
      }
    },
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": {
      left: 0, // reverse for RTL - see below
      right: "auto"
    },

    // Push
    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: `${componentVars.permanent_content_width}px`,
        marginLeft: `${-componentVars.permanent_content_width - SHADOW_WIDTH}px`, // reverse for RTL - see below
        marginRight: "auto",
      }
    },
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": {
      marginLeft: 0, // reverse for RTL - see below
      marginRight: "auto"
    },
    
    // Mini
    ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
      width: `${componentVars.content_width_mini_collapsed}px`,
      marginLeft: 0,
      marginRight: 0,
    },

    // Backdrop
    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    " .pe-dialog__backdrop": [
      mixin.defaultTransition("all"), // animation duration is set in component options
      {
        opacity: 0 
      }
    ],
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  },

  // RTL

  [`*[dir=rtl] ${selector}, .pe-rtl ${selector}, ${selector}.pe-drawer--anchor-right`]: {
    ".pe-drawer--bordered .pe-dialog__content": {
      borderStyle: "none none none solid"
    },

    // Fixed
    ".pe-drawer--fixed": {
      left: "auto",
      right: 0,
    },

    // Cover
    ".pe-drawer--cover": {
      " .pe-dialog__content": {
        right: `${-componentVars.content_max_width - SHADOW_WIDTH}px`,
        left: "auto",
      }
    },
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": {
      right: 0,
      left: "auto"
    },

    // Push
    ".pe-drawer--push": {
      " .pe-dialog__content": {
        marginRight: `${-componentVars.permanent_content_width - SHADOW_WIDTH}px`,
        marginLeft: "auto",
      }
    },
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": {
      marginRight: 0,
      marginLeft: "auto"
    },

    // Mini
    ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  // Media queries

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
