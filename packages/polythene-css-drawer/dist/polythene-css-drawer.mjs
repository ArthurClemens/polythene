import { createColor, sel, createLayout, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { sharedVarFns, sharedVars } from 'polythene-css-shadow';

var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

const generalFns = {
  general_styles: () => [{
    " .pe-dialog__content": {
      background: "none"
    }
  }]
};

const tintFns = tint => ({
  ["color_" + tint + "_border"]: (selector, vars$$1) => [sel(selector, {
    " .pe-dialog__content": {
      borderColor: vars$$1["color_" + tint + "_border"]
    }
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-dialog-pane": {
      backgroundColor: vars$$1["color_" + tint + "_background"]
    }
  })],
  ["color_" + tint + "_backdrop_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-dialog__backdrop": {
      backgroundColor: vars$$1["color_" + tint + "_backdrop_background"]
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  }
});

const SHADOW_WIDTH = 15;

const _border = (selector, vars$$1, isRTL) => sel(selector, {
  " .pe-dialog__content": {
    borderWidth: `${vars$$1.border ? 1 : 0}px`,
    borderStyle: isRTL ? "none none none solid" : "none solid none none"
  }
});

const border = (selector, vars$$1) => [_border(selector, vars$$1, false), _border(selectorRTL(selector), vars$$1, true)];

const alignSide = isRTL => (selector, vars$$1) => [{
  // Fixed
  ".pe-drawer--fixed": {
    [isRTL ? "right" : "left"]: 0,
    [isRTL ? "left" : "right"]: "auto"
  }
}, _border(`${selector}.pe-drawer--border`, Object.assign({}, vars$$1, {
  border: true
}), isRTL)];

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const backdrop = selector => sel(selector, {
  ".pe-dialog--visible .pe-dialog__backdrop": {
    opacity: 1
  }
});

const selectorAnchorEnd = selector => `${selector}.pe-drawer--anchor-end`; // fn: miniSelector contains .pe-drawer--mini


const content_width_mini_collapsed = (miniSelector, vars$$1) => sel(miniSelector, {
  ":not(.pe-dialog--visible) .pe-dialog__content": {
    width: `${vars$$1.content_width_mini_collapsed}px`
  }
}); // fn: coverSelector contains .pe-drawer--cover


const _cover_content_max_width = (coverSelector, vars$$1, isRTL) => sel(coverSelector, {
  " .pe-dialog__content": {
    maxWidth: `${vars$$1.content_max_width}px`,
    [isRTL ? "right" : "left"]: `${-vars$$1.content_max_width - SHADOW_WIDTH}px`,
    [isRTL ? "left" : "right"]: "auto"
  },
  ".pe-dialog--visible .pe-dialog__content": {
    [isRTL ? "right" : "left"]: 0,
    [isRTL ? "left" : "right"]: "auto"
  }
});

const cover_content_max_width = (coverSelector, vars$$1) => [_cover_content_max_width(coverSelector, vars$$1, false), _cover_content_max_width(selectorRTL(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars$$1, true), _cover_content_max_width(selectorAnchorEnd(selectorRTL(coverSelector)), vars$$1, false)]; // fn: selector contains .pe-drawer--permanent


const content_width = (selector, vars$$1) => sel(selector, {
  " .pe-dialog__content": {
    width: `${vars$$1.content_width}px`
  }
}); // fn: pushSelector contains .pe-drawer--push


const _push_content_width = (pushSelector, vars$$1, isRTL) => sel(pushSelector, {
  " .pe-dialog__content": {
    [isRTL ? "marginRight" : "marginLeft"]: `${-vars$$1.content_width - SHADOW_WIDTH}px`,
    [isRTL ? "marginLeft" : "marginRight"]: "auto"
  },
  ".pe-dialog--visible .pe-dialog__content": {
    width: `${vars$$1.content_width}px`,
    [isRTL ? "marginRight" : "marginLeft"]: 0,
    [isRTL ? "marginLeft" : "marginRight"]: "auto"
  }
});

const push_content_width = (pushSelector, vars$$1) => [_push_content_width(pushSelector, vars$$1, false), _push_content_width(selectorRTL(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(pushSelector), vars$$1, true), _push_content_width(selectorAnchorEnd(selectorRTL(pushSelector)), vars$$1, false)];

const cover = selector => sel(selector, {
  " .pe-dialog__content": {
    position: "absolute",
    top: 0,
    zIndex: vars.z_drawer
  },
  ".pe-dialog--visible": {
    " .pe-dialog__touch": {
      display: "block"
    }
  }
});

const mini = miniSelector => sel(miniSelector, {
  " .pe-dialog__content": {
    marginLeft: 0,
    marginRight: 0
  }
});

const permanent = permanentSelector => sel(permanentSelector, {
  position: "static",
  display: "block",
  padding: 0,
  overflow: "initial",
  " .pe-dialog__content": {
    overflow: "visible",
    maxHeight: "initial",
    marginLeft: 0,
    marginRight: 0
  }
}); // fn: pushSelector contains .pe-drawer--push


const push = pushSelector => sel(pushSelector, {
  position: "static"
});

const borderRadius = (selector, vars$$1) => sel(selector, {
  " .pe-dialog__content": {
    borderRadius: vars$$1.border_radius + "px"
  }
});

const floating = selector => sel(selector, {
  height: "auto",
  " .pe-dialog__content": {
    height: "auto"
  }
});

const varFns = {
  general_styles: (selector, vars$$1) => [sel(selector, [alignLeft(selector, vars$$1), {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: "100%",
    minWidth: 0,
    // IE 11 does not accept "none" or "inital" here
    padding: 0,
    opacity: 1,
    flexShrink: 0,
    transitionProperty: "all",
    ":not(.pe-dialog--transition)": {
      " .pe-dialog__content": {
        transitionDuration: "0s"
      }
    },
    " .pe-dialog__content": {
      position: "relative",
      // transitionProperty: "all",
      height: "100%",
      overflow: "visible",
      minWidth: 0,
      // IE 11 does not accept "none" or "inital" here
      flexShrink: 0
    },
    " .pe-dialog-pane__content": {
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    },
    " .pe-dialog-pane": {
      height: "100%",
      maxHeight: "none",
      minWidth: 0 // IE 11 does not accept "none" or "inital" here

    },
    " .pe-dialog-pane__body": {
      overflow: "visible",
      maxHeight: "none",
      border: "none"
    },
    // Fixed
    ".pe-drawer--fixed": {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: vars.z_drawer
    },
    // Mini
    ".pe-drawer--mini": mini(selector, vars$$1),
    // Permanent
    ".pe-drawer--permanent": permanent(selector, vars$$1),
    // Floating
    ".pe-drawer--floating": floating(selector, vars$$1),
    // Cover (default)
    ".pe-drawer--cover": cover(selector),
    // Push
    ".pe-drawer--push": push(selector, vars$$1),
    // Backdrop
    " .pe-dialog__backdrop": {
      pointerEvents: "none",
      opacity: 0,
      display: "block"
    },
    " .pe-dialog__touch": {
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    ".pe-dialog--backdrop": backdrop(selector)
  }]), [sel(selectorRTL(selector), alignRight(selector, vars$$1))]],
  animation_delay: (selector, vars$$1) => [sel(selector, {
    "&, .pe-dialog__content, .pe-dialog__backdrop": {
      transitionDelay: vars$$1.animation_delay
    }
  })],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    "&, .pe-dialog__content, .pe-dialog__backdrop": {
      transitionDuration: vars$$1.animation_duration
    }
  })],
  animation_timing_function: (selector, vars$$1) => [sel(selector, {
    "&, .pe-dialog__content, .pe-dialog__backdrop": {
      transitionTimingFunction: vars$$1.animation_timing_function
    }
  })],
  border_radius: (selector, vars$$1) => [borderRadius(selector, vars$$1)],
  content_max_width: (selector, vars$$1) => [cover_content_max_width(`${selector}.pe-drawer--cover`, vars$$1)],
  content_width: (selector, vars$$1) => [content_width(selector, vars$$1), content_width(`${selector}.pe-dialog--visible`, vars$$1), content_width(`${selector}.pe-drawer--permanent`, vars$$1), push_content_width(`${selector}.pe-drawer--push`, vars$$1)],
  content_width_mini_collapsed: (selector, vars$$1) => [content_width_mini_collapsed(`${selector}.pe-drawer--mini`, vars$$1)],
  // Theme vars
  cover: (selector, vars$$1) => vars$$1.cover && [cover(selector, vars$$1), cover_content_max_width(selector, vars$$1)],
  backdrop: (selector, vars$$1) => [vars$$1.backdrop && backdrop(selector)],
  border: (selector, vars$$1) => [border(selector, vars$$1)],
  mini: (selector, vars$$1) => vars$$1.mini && [mini(selector, vars$$1), content_width_mini_collapsed(selector, vars$$1)],
  permanent: (selector, vars$$1) => [vars$$1.permanent && permanent(selector, vars$$1)],
  floating: (selector, vars$$1) => [vars$$1.floating && floating(selector, vars$$1)],
  push: (selector, vars$$1) => vars$$1.push && [push(selector, vars$$1), push_content_width(selector, vars$$1)],
  // shadow_depth:
  ...sharedVarFns
};
var layout = createLayout({
  varFns
});

const themeVars = Object.assign({}, {
  backdrop: false,
  border: undefined,
  // set to `true` or `false`
  cover: false,
  floating: false,
  mini: false,
  permanent: false,
  push: false
}, sharedVars);
var vars$1 = Object.assign({}, {
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".260s",
  animation_timing_function: "ease-in-out",
  border_radius: 0,
  content_max_width: 5 * vars.increment,
  // 5 * 56
  content_width: 240,
  content_width_mini_collapsed: vars.increment,
  // 1 * 56
  // color vars
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",
  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
}, themeVars);

const fns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
