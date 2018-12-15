(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-css-shadow'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-css-shadow', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-css-shadow'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCssShadow,polytheneCoreCss) { 'use strict';

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
    ["color_" + tint + "_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog__content": {
        borderColor: vars["color_" + tint + "_border"]
      }
    })],
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })],
    ["color_" + tint + "_backdrop_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars["color_" + tint + "_backdrop_background"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const SHADOW_WIDTH = 15;

  const _border = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-dialog__content": {
      borderWidth: `${vars.border ? 1 : 0}px`,
      borderStyle: isRTL ? "none none none solid" : "none solid none none"
    }
  });

  const border = (selector, vars) => [_border(selector, vars, false), _border(polytheneCoreCss.selectorRTL(selector), vars, true)];

  const alignSide = isRTL => (selector, vars) => [{
    // Fixed
    ".pe-drawer--fixed": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto"
    }
  }, _border(`${selector}.pe-drawer--border`, Object.assign({}, vars, {
    border: true
  }), isRTL)];

  const alignLeft = alignSide(false);
  const alignRight = alignSide(true);

  const backdrop = selector => polytheneCoreCss.sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  });

  const selectorAnchorEnd = selector => `${selector}.pe-drawer--anchor-end`; // fn: miniSelector contains .pe-drawer--mini


  const content_width_mini_collapsed = (miniSelector, vars) => polytheneCoreCss.sel(miniSelector, {
    ":not(.pe-dialog--visible) .pe-dialog__content": {
      width: `${vars.content_width_mini_collapsed}px`
    }
  }); // fn: coverSelector contains .pe-drawer--cover


  const _cover_content_max_width = (coverSelector, vars, isRTL) => polytheneCoreCss.sel(coverSelector, {
    " .pe-dialog__content": {
      maxWidth: `${vars.content_max_width}px`,
      [isRTL ? "right" : "left"]: `${-vars.content_max_width - SHADOW_WIDTH}px`,
      [isRTL ? "left" : "right"]: "auto"
    },
    ".pe-dialog--visible .pe-dialog__content": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto"
    }
  });

  const cover_content_max_width = (coverSelector, vars) => [_cover_content_max_width(coverSelector, vars, false), _cover_content_max_width(polytheneCoreCss.selectorRTL(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(polytheneCoreCss.selectorRTL(coverSelector)), vars, false)]; // fn: selector contains .pe-drawer--permanent


  const content_width = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-dialog__content": {
      width: `${vars.content_width}px`
    }
  }); // fn: pushSelector contains .pe-drawer--push


  const _push_content_width = (pushSelector, vars, isRTL) => polytheneCoreCss.sel(pushSelector, {
    " .pe-dialog__content": {
      [isRTL ? "marginRight" : "marginLeft"]: `${-vars.content_width - SHADOW_WIDTH}px`,
      [isRTL ? "marginLeft" : "marginRight"]: "auto"
    },
    ".pe-dialog--visible .pe-dialog__content": {
      width: `${vars.content_width}px`,
      [isRTL ? "marginRight" : "marginLeft"]: 0,
      [isRTL ? "marginLeft" : "marginRight"]: "auto"
    }
  });

  const push_content_width = (pushSelector, vars) => [_push_content_width(pushSelector, vars, false), _push_content_width(polytheneCoreCss.selectorRTL(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(polytheneCoreCss.selectorRTL(pushSelector)), vars, false)];

  const cover = selector => polytheneCoreCss.sel(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: polytheneTheme.vars.z_drawer
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block"
      }
    }
  });

  const mini = miniSelector => polytheneCoreCss.sel(miniSelector, {
    " .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0
    }
  });

  const permanent = permanentSelector => polytheneCoreCss.sel(permanentSelector, {
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


  const push = pushSelector => polytheneCoreCss.sel(pushSelector, {
    position: "static"
  });

  const borderRadius = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-dialog__content": {
      borderRadius: vars.border_radius + "px"
    }
  });

  const floating = selector => polytheneCoreCss.sel(selector, {
    height: "auto",
    " .pe-dialog__content": {
      height: "auto"
    }
  });

  const varFns = {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, [alignLeft(selector, vars), {
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
        zIndex: polytheneTheme.vars.z_drawer
      },
      // Mini
      ".pe-drawer--mini": mini(selector, vars),
      // Permanent
      ".pe-drawer--permanent": permanent(selector, vars),
      // Floating
      ".pe-drawer--floating": floating(selector, vars),
      // Cover (default)
      ".pe-drawer--cover": cover(selector),
      // Push
      ".pe-drawer--push": push(selector, vars),
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
    }]), [polytheneCoreCss.sel(polytheneCoreCss.selectorRTL(selector), alignRight(selector, vars))]],
    animation_delay: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDelay: vars.animation_delay
      }
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDuration: vars.animation_duration
      }
    })],
    animation_timing_function: (selector, vars) => [polytheneCoreCss.sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionTimingFunction: vars.animation_timing_function
      }
    })],
    border_radius: (selector, vars) => [borderRadius(selector, vars)],
    content_max_width: (selector, vars) => [cover_content_max_width(`${selector}.pe-drawer--cover`, vars)],
    content_width: (selector, vars) => [content_width(selector, vars), content_width(`${selector}.pe-dialog--visible`, vars), content_width(`${selector}.pe-drawer--permanent`, vars), push_content_width(`${selector}.pe-drawer--push`, vars)],
    content_width_mini_collapsed: (selector, vars) => [content_width_mini_collapsed(`${selector}.pe-drawer--mini`, vars)],
    // Theme vars
    cover: (selector, vars) => vars.cover && [cover(selector, vars), cover_content_max_width(selector, vars)],
    backdrop: (selector, vars) => [vars.backdrop && backdrop(selector)],
    border: (selector, vars) => [border(selector, vars)],
    mini: (selector, vars) => vars.mini && [mini(selector, vars), content_width_mini_collapsed(selector, vars)],
    permanent: (selector, vars) => [vars.permanent && permanent(selector, vars)],
    floating: (selector, vars) => [vars.floating && floating(selector, vars)],
    push: (selector, vars) => vars.push && [push(selector, vars), push_content_width(selector, vars)],
    // shadow_depth:
    ...polytheneCssShadow.sharedVarFns
  };
  var layout = polytheneCoreCss.createLayout({
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
  }, polytheneCssShadow.sharedVars);
  var vars = Object.assign({}, {
    general_styles: true,
    animation_delay: "0s",
    animation_duration: ".260s",
    animation_timing_function: "ease-in-out",
    border_radius: 0,
    content_max_width: 5 * polytheneTheme.vars.increment,
    // 5 * 56
    content_width: 240,
    content_width_mini_collapsed: polytheneTheme.vars.increment,
    // 1 * 56
    // color vars
    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",
    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),
    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
  }, themeVars);

  const fns = [layout, color];
  const selector = `.${classes.component.replace(/ /g, ".")}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-drawer.js.map
