import { mixin, sel, selectorRTL, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const SHADOW_WIDTH = 15;

const alignSide = isRTL => () => ({
  // Bordered
  ".pe-drawer--border .pe-dialog__content": {
    borderStyle: isRTL ? "none none none solid" : "none solid none none"
  },

  // Fixed
  ".pe-drawer--fixed": {
    [isRTL ? "right" : "left"]: 0,
    [isRTL ? "left" : "right"]: "auto",
  },

  // Mini
  ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
    marginLeft: 0,
    marginRight: 0,
  },
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const selectorAnchorEnd = selector =>
  `${selector}.pe-drawer--anchor-end`;

const cover_content_max_width = (selector, vars, isRTL) =>
  sel(selector, {
    ".pe-drawer--cover .pe-dialog__content": {
      [isRTL ? "right" : "left"]: `${-vars.content_max_width - SHADOW_WIDTH}px`,
      [isRTL ? "left" : "right"]: "auto",
    },
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto"
    },
  });

const push_permanent_content_width = (selector, vars, isRTL) =>
  sel(selector, {
    ".pe-drawer--push .pe-dialog__content": {
      [isRTL ? "marginRight" : "marginLeft"]: `${-vars.permanent_content_width - SHADOW_WIDTH}px`,
      [isRTL ? "marginLeft" : "marginRight"]: "auto",
    },
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": {
      [isRTL ? "marginRight" : "marginLeft"]: 0,
      [isRTL ? "marginLeft" : "marginRight"]: "auto"
    },
  });

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      {
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
          width: "100%",
          zIndex: themeVars.z_app_bar,
        },

        // Permanent
        ".pe-drawer--permanent:not(.pe-drawer--mini)": {
          position: "static",
          display: "block",
          padding: 0,
          overflow: "initial",

          " .pe-dialog__content": {
            overflow: "visible",
            maxHeight: "initial",
          }
        },

        // Floating
        ".pe-drawer--floating": {
          height: "auto"
        },

        // Bordered
        ".pe-drawer--border": {
          " .pe-dialog__content": {
            borderWidth: "1px",
          },
        },

        // Cover (default)
        ".pe-drawer--cover": {
          " .pe-dialog__content": {
            position: "absolute",
            top: 0,
          }
        },

        // Push
        ".pe-drawer--push": {
          position: "static",
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
      }
    ]),
    [
      sel(selectorRTL(selector), alignRight(vars)),
    ]
  ],
  content_max_width: (selector, vars) => [
    sel(selector, {
      ".pe-drawer--cover": {
        " .pe-dialog__content": {
          maxWidth: `${vars.content_max_width}px`,
        }
      },
    }),
    cover_content_max_width(selector, vars, false),
    cover_content_max_width(selectorRTL(selector), vars, true),
    cover_content_max_width(selectorAnchorEnd(selector), vars, true),
    cover_content_max_width(selectorAnchorEnd(selectorRTL(selector)), vars, false),
  ],
  permanent_content_width: (selector, vars) => [
    sel(selector, {
      ".pe-drawer--permanent:not(.pe-drawer--mini)": {
        " .pe-dialog__content": {
          width: `${vars.permanent_content_width}px`,
        }
      },
      ".pe-drawer--push": {
        " .pe-dialog__content": {
          width: `${vars.permanent_content_width}px`,
        }
      },
    }),
    push_permanent_content_width(selector, vars, false),
    push_permanent_content_width(selectorRTL(selector), vars, true),
    push_permanent_content_width(selectorAnchorEnd(selector), vars, true),
    push_permanent_content_width(selectorAnchorEnd(selectorRTL(selector)), vars, false),
  ],
  content_side_offset: (selector, vars) => [
    sel(selector, {
      ".pe-drawer--cover": {
        " .pe-dialog__content": {
          width: `calc(100% - ${vars.content_side_offset}px)`,
        }
      },
    })
  ],
  content_width_mini_collapsed: (selector, vars) => [
    sel(selector, {
      ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
        width: `${vars.content_width_mini_collapsed}px`,
      },
    })
  ],
  content_max_width_large: (selector, vars) => ({
    ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
      [selector]: {
        ".pe-drawer--push": {
          " .pe-dialog__content": {
            maxWidth: `${vars.content_max_width_large}px`,
          }
        },
        " .pe-dialog__content": {
          maxWidth: `${vars.content_max_width_large}px`,
        },
      }
    }
  }),
  content_side_offset_large: (selector, vars) => ({
    ["@media (min-width: " + themeVars.breakpoint_for_tablet_portrait_up + "px)"]: {
      [selector]: {
        " .pe-dialog__content": {
          width: `calc(100% - ${vars.content_side_offset_large}px)`,
        },
      }
    }
  }),
};

export default createLayout({ varFns });
