import { sel, selectorRTL, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";
import { sharedVarFns as shadowVarFns } from "polythene-css-shadow";

const SHADOW_WIDTH = 15;

const _border = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-dialog__content": {
      borderWidth: `${vars.border ? 1 : 0}px`,
      borderStyle: isRTL ? "none none none solid" : "none solid none none"
    },
  });

const border = (selector, vars) => [
  _border(selector, vars, false),
  _border(selectorRTL(selector), vars, true),
];

const alignSide = isRTL => (selector, vars) => [
  {
    // Fixed
    ".pe-drawer--fixed": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto",
    },
  },
  _border(`${selector}.pe-drawer--border`, Object.assign(
    {},
    vars,
    { border: true }
  ), isRTL)
];

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

// fn: miniSelector contains .pe-drawer--mini
const content_width_mini_collapsed = (miniSelector, vars) => 
  sel(miniSelector, {
    ":not(.pe-dialog--visible) .pe-dialog__content": {
      width: `${vars.content_width_mini_collapsed}px`
    },
  });

// fn: coverSelector contains .pe-drawer--cover
const _cover_content_max_width = (coverSelector, vars, isRTL) =>
  sel(coverSelector, {
    " .pe-dialog__content": {
      maxWidth: `${vars.content_max_width}px`,
      [isRTL ? "right" : "left"]: `${-vars.content_max_width - SHADOW_WIDTH}px`,
      [isRTL ? "left" : "right"]: "auto",
    },
    ".pe-dialog--visible .pe-dialog__content": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto"
    },
  });

const cover_content_max_width = (coverSelector, vars) => [
  _cover_content_max_width(coverSelector, vars, false),
  _cover_content_max_width(selectorRTL(coverSelector), vars, true),
  _cover_content_max_width(selectorAnchorEnd(coverSelector), vars, true),
  _cover_content_max_width(selectorAnchorEnd(selectorRTL(coverSelector)), vars, false)
];

// fn: selector contains .pe-drawer--permanent
const content_width = (selector, vars) =>
  sel(selector, {
    " .pe-dialog__content": {
      width: `${vars.content_width}px`
    },
  });

// fn: pushSelector contains .pe-drawer--push
const _push_content_width = (pushSelector, vars, isRTL) => 
  sel(pushSelector, {
    " .pe-dialog__content": {
      [isRTL ? "marginRight" : "marginLeft"]: `${-vars.content_width - SHADOW_WIDTH}px`,
      [isRTL ? "marginLeft" : "marginRight"]: "auto",
    },
    ".pe-dialog--visible .pe-dialog__content": {
      width: `${vars.content_width}px`,
      [isRTL ? "marginRight" : "marginLeft"]: 0,
      [isRTL ? "marginLeft" : "marginRight"]: "auto"
    },
  });

const push_content_width = (pushSelector, vars) => [
  _push_content_width(pushSelector, vars, false),
  _push_content_width(selectorRTL(pushSelector), vars, true),
  _push_content_width(selectorAnchorEnd(pushSelector), vars, true),
  _push_content_width(selectorAnchorEnd(selectorRTL(pushSelector)), vars, false),
];

const cover = (selector, vars) =>
  sel(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: vars.z_index,
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block",
      }
    }
  });

const mini = miniSelector =>
  sel(miniSelector, {
    " .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0,
    },
  });

const permanent = permanentSelector =>
  sel(permanentSelector, {
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

// fn: pushSelector contains .pe-drawer--push
const push = pushSelector => 
  sel(pushSelector, {
    position: "static",
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
      alignLeft(selector, vars),
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
        transitionProperty: "all",

        ":not(.pe-dialog--transition)": {
          " .pe-dialog__content": {
            transitionDuration: "0s",
          }
        },

        " .pe-dialog__content": {
          position: "relative",
          // transitionProperty: "all",

          height: "100%",
          overflow: "visible",
          minWidth: 0, // IE 11 does not accept "none" or "inital" here
          flexShrink: 0,
        },

        " .pe-dialog-pane__content": {
          height: "100%",
          overflowY: "auto", 
          overflowX: "hidden", 
        },
        
        " .pe-dialog-pane": {
          height: "100%",
          maxHeight: "none",
          minWidth: 0 // IE 11 does not accept "none" or "inital" here
        },

        " .pe-dialog-pane__body": {
          overflow: "visible",
          maxHeight: "none",
          border: "none",
        },

        // Fixed
        ".pe-drawer--fixed": {
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: themeVars.z_drawer,
        },

        // Mini
        ".pe-drawer--mini": mini(selector, vars),

        // Permanent
        ".pe-drawer--permanent": permanent(selector, vars),

        // Floating
        ".pe-drawer--floating": floating(selector, vars),

        // Cover (default)
        ".pe-drawer--cover": cover(selector, vars),

        // Push
        ".pe-drawer--push": push(selector, vars),
        
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
      sel(selectorRTL(selector), alignRight(selector, vars)),
    ]
  ],
  animation_delay: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDelay: vars.animation_delay,
      }
    }),
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDuration: vars.animation_duration,
      }
    }),
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionTimingFunction: vars.animation_timing_function,
      }
    }),
  ],
  border_radius: (selector, vars) => [
    borderRadius(selector, vars)
  ],
  content_max_width: (selector, vars) => [
    cover_content_max_width(`${selector}.pe-drawer--cover`, vars)
  ],
  content_width: (selector, vars) => [
    content_width(selector, vars),
    content_width(`${selector}.pe-dialog--visible`, vars),
    content_width(`${selector}.pe-drawer--permanent`, vars),
    push_content_width(`${selector}.pe-drawer--push`, vars)
  ],
  content_width_mini_collapsed: (selector, vars) => [
    content_width_mini_collapsed(`${selector}.pe-drawer--mini`, vars)
  ],

  // Theme vars
  cover: (selector, vars) =>
    vars.cover && [
      cover(selector, vars),
      cover_content_max_width(selector, vars)
    ],
  backdrop: (selector, vars) => [
    vars.backdrop && backdrop(selector)
  ],
  border: (selector, vars) => [
    border(selector, vars)
  ],
  mini: (selector, vars) =>
    vars.mini && [
      mini(selector, vars),
      content_width_mini_collapsed(selector, vars)
    ],
  permanent: (selector, vars) => [
    vars.permanent && permanent(selector, vars)
  ],
  floating: (selector, vars) => [
    vars.floating && floating(selector, vars)
  ],
  push: (selector, vars) =>
    vars.push && [
      push(selector, vars),
      push_content_width(selector, vars)
    ],
  // shadow_depth:
  ...shadowVarFns
};

export default createLayout({ varFns });
