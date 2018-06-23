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
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const backdrop = selector =>
  sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1,
    }
  });

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

const cover = selector =>
  sel(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: themeVars.z_drawer,
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block",
      }
    }
  });

const mini = (selector, vars) =>
  sel(selector, {
    ".pe-drawer--push:not(.pe-dialog--visible) .pe-dialog__content": {
      width: `${vars.content_width_mini_collapsed}px`,
      marginLeft: 0,
      marginRight: 0,
    },
  });

const permanent = selector =>
  sel(selector, {
    position: "static",
    display: "block",
    padding: 0,
    overflow: "initial",

    " .pe-dialog__content": {
      overflow: "visible",
      maxHeight: "initial",
      marginLeft: 0,
      marginRight: 0,
    }
  });

const borderRadius = (selector, vars) =>
  sel(selector, {
    " .pe-dialog__content": {
      borderRadius: vars.border_radius + "px",
    }
  });

const floating = selector =>
  sel(selector, {
    height: "auto",

    " .pe-dialog__content": {
      height: "auto",
    }
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
        minWidth: 0, // IE 11 does not accept "none" or "inital" here
        padding: 0,
        opacity: 1,
        flexShrink: 0,

        " .pe-dialog__content": [
          mixin.defaultTransition("all"), // animation duration is set in component options
          {
            position: "relative",
            
            height: "100%",
            overflow: "visible",
            minWidth: 0, // IE 11 does not accept "none" or "inital" here
            flexShrink: 0,
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
          zIndex: themeVars.z_drawer,
        },

        // Permanent

        ".pe-drawer--permanent:not(.pe-drawer--mini)": permanent(selector, vars),

        // Floating
        ".pe-drawer--floating": floating(selector, vars),

        // Bordered
        ".pe-drawer--border": {
          " .pe-dialog__content": {
            borderWidth: "1px",
          },
        },

        // Cover (default)
        ".pe-drawer--cover": cover(selector),

        // Push
        ".pe-drawer--push": {
          position: "static",
        },
        
        // Backdrop
        " .pe-dialog__backdrop": {
          pointerEvents: "none",
          opacity: 0,
          display: "block",
        },
        " .pe-dialog__touch": {
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },

        ".pe-dialog--backdrop": backdrop(selector),
      }
    ]),
    [
      sel(selectorRTL(selector), alignRight(vars)),
    ]
  ],
  border_radius: (selector, vars) => [
    borderRadius(selector, vars)
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
    sel(selector, [
      mini(".pe-drawer--mini", vars)
    ])
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
  cover: (selector, vars) => [
    vars.cover && cover(selector)
  ],
  backdrop: (selector, vars) => [
    vars.backdrop && backdrop(selector)
  ],
  mini: (selector, vars) => [
    vars.mini && mini(selector, vars)
  ],
  permanent: (selector, vars) => [
    vars.permanent && permanent(selector, vars)
  ],
  floating: (selector, vars) => [
    vars.floating && floating(selector, vars)
  ],
};

export default createLayout({ varFns });
