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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var generalFns = {
  general_styles: function general_styles() {
    return [{
      " .pe-dialog__content": {
        background: "none"
      }
    }];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
    return [sel(selector, {
      " .pe-dialog__content": {
        borderColor: vars["color_" + tint + "_border"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars["color_" + tint + "_backdrop_background"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

var SHADOW_WIDTH = 15;

var _border = function _border(selector, vars, isRTL) {
  return sel(selector, {
    " .pe-dialog__content": {
      borderWidth: "".concat(vars.border ? 1 : 0, "px"),
      borderStyle: isRTL ? "none none none solid" : "none solid none none"
    }
  });
};

var _border2 = function border(selector, vars) {
  return [_border(selector, vars, false), _border(selectorRTL(selector), vars, true)];
};

var alignSide = function alignSide(isRTL) {
  return function (selector, vars) {
    var _peDrawerFixed;

    return [{
      // Fixed
      ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed)
    }, _border("".concat(selector, ".pe-drawer--border"), _extends({}, vars, {
      border: true
    }), isRTL)];
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _backdrop = function backdrop(selector) {
  return sel(selector, {
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  });
};

var selectorAnchorEnd = function selectorAnchorEnd(selector) {
  return "".concat(selector, ".pe-drawer--anchor-end");
}; // fn: miniSelector contains .pe-drawer--mini


var _content_width_mini_collapsed = function content_width_mini_collapsed(miniSelector, vars) {
  return sel(miniSelector, {
    ":not(.pe-dialog--visible) .pe-dialog__content": {
      width: "".concat(vars.content_width_mini_collapsed, "px")
    }
  });
}; // fn: coverSelector contains .pe-drawer--cover


var _cover_content_max_width = function _cover_content_max_width(coverSelector, vars, isRTL) {
  var _peDialog__content, _peDialogVisible;

  return sel(coverSelector, {
    " .pe-dialog__content": (_peDialog__content = {
      maxWidth: "".concat(vars.content_max_width, "px")
    }, _defineProperty(_peDialog__content, isRTL ? "right" : "left", "".concat(-vars.content_max_width - SHADOW_WIDTH, "px")), _defineProperty(_peDialog__content, isRTL ? "left" : "right", "auto"), _peDialog__content),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible = {}, _defineProperty(_peDialogVisible, isRTL ? "right" : "left", 0), _defineProperty(_peDialogVisible, isRTL ? "left" : "right", "auto"), _peDialogVisible)
  });
};

var cover_content_max_width = function cover_content_max_width(coverSelector, vars) {
  return [_cover_content_max_width(coverSelector, vars, false), _cover_content_max_width(selectorRTL(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(selectorRTL(coverSelector)), vars, false)];
}; // fn: selector contains .pe-drawer--permanent


var _content_width = function content_width(selector, vars) {
  return sel(selector, {
    " .pe-dialog__content": {
      width: "".concat(vars.content_width, "px")
    }
  });
}; // fn: pushSelector contains .pe-drawer--push


var _push_content_width = function _push_content_width(pushSelector, vars, isRTL) {
  var _peDialog__content2, _peDialogVisible2;

  return sel(pushSelector, {
    " .pe-dialog__content": (_peDialog__content2 = {}, _defineProperty(_peDialog__content2, isRTL ? "marginRight" : "marginLeft", "".concat(-vars.content_width - SHADOW_WIDTH, "px")), _defineProperty(_peDialog__content2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialog__content2),
    ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible2 = {
      width: "".concat(vars.content_width, "px")
    }, _defineProperty(_peDialogVisible2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty(_peDialogVisible2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialogVisible2)
  });
};

var push_content_width = function push_content_width(pushSelector, vars) {
  return [_push_content_width(pushSelector, vars, false), _push_content_width(selectorRTL(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(selectorRTL(pushSelector)), vars, false)];
};

var _cover = function cover(selector, vars) {
  return sel(selector, {
    " .pe-dialog__content": {
      position: "absolute",
      top: 0,
      zIndex: vars.z_index
    },
    ".pe-dialog--visible": {
      " .pe-dialog__touch": {
        display: "block"
      }
    }
  });
};
/**
 * @param {string} miniSelector 
 * @param {object} [vars] 
 */


var _mini = function mini(miniSelector, vars) {
  return (// eslint-disable-line no-unused-vars
    sel(miniSelector, {
      " .pe-dialog__content": {
        marginLeft: 0,
        marginRight: 0
      }
    })
  );
};
/**
 * @param {string} permanentSelector 
 * @param {object} [vars] 
 */


var _permanent = function permanent(permanentSelector, vars) {
  return (// eslint-disable-line no-unused-vars
    sel(permanentSelector, {
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
    })
  );
};
/**
 * @param {string} pushSelector 
 * @param {object} [vars] 
 */
// fn: pushSelector contains .pe-drawer--push


var _push = function push(pushSelector, vars) {
  return (// eslint-disable-line no-unused-vars
    sel(pushSelector, {
      position: "static"
    })
  );
};
/**
 * @param {string} selector 
 * @param {object} [vars] 
 */


var borderRadius = function borderRadius(selector, vars) {
  return sel(selector, {
    " .pe-dialog__content": {
      borderRadius: vars.border_radius + "px"
    }
  });
};
/**
 * @param {string} selector 
 * @param {object} [vars] 
 */


var _floating = function floating(selector, vars) {
  return (// eslint-disable-line no-unused-vars
    sel(selector, {
      height: "auto",
      " .pe-dialog__content": {
        height: "auto"
      }
    })
  );
};

var varFns = _objectSpread({
  /**
   * @param {string} selector 
   * @param {object} [vars] 
   */
  general_styles: function general_styles(selector, vars$1) {
    return [sel(selector, [alignLeft(selector, vars$1), {
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
      ".pe-drawer--mini": _mini(selector, vars$1),
      // Permanent
      ".pe-drawer--permanent": _permanent(selector, vars$1),
      // Floating
      ".pe-drawer--floating": _floating(selector, vars$1),
      // Cover (default)
      ".pe-drawer--cover": _cover(selector, vars$1),
      // Push
      ".pe-drawer--push": _push(selector, vars$1),
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
      ".pe-dialog--backdrop": _backdrop(selector)
    }]), [sel(selectorRTL(selector), alignRight(selector, vars$1))]];
  },
  animation_delay: function animation_delay(selector, vars) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDelay: vars.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionDuration: vars.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars) {
    return [sel(selector, {
      "&, .pe-dialog__content, .pe-dialog__backdrop": {
        transitionTimingFunction: vars.animation_timing_function
      }
    })];
  },
  border_radius: function border_radius(selector, vars) {
    return [borderRadius(selector, vars)];
  },
  content_max_width: function content_max_width(selector, vars) {
    return [cover_content_max_width("".concat(selector, ".pe-drawer--cover"), vars)];
  },
  content_width: function content_width(selector, vars) {
    return [_content_width(selector, vars), _content_width("".concat(selector, ".pe-dialog--visible"), vars), _content_width("".concat(selector, ".pe-drawer--permanent"), vars), push_content_width("".concat(selector, ".pe-drawer--push"), vars)];
  },
  content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars) {
    return [_content_width_mini_collapsed("".concat(selector, ".pe-drawer--mini"), vars)];
  },
  // Theme vars
  cover: function cover(selector, vars) {
    return vars.cover && [_cover(selector, vars), cover_content_max_width(selector, vars)];
  },
  backdrop: function backdrop(selector, vars) {
    return [vars.backdrop && _backdrop(selector)];
  },
  border: function border(selector, vars) {
    return [_border2(selector, vars)];
  },
  mini: function mini(selector, vars) {
    return vars.mini && [_mini(selector, vars), _content_width_mini_collapsed(selector, vars)];
  },
  permanent: function permanent(selector, vars) {
    return [vars.permanent && _permanent(selector, vars)];
  },
  floating: function floating(selector, vars) {
    return [vars.floating && _floating(selector, vars)];
  },
  push: function push(selector, vars) {
    return vars.push && [_push(selector, vars), push_content_width(selector, vars)];
  }
}, sharedVarFns);

var layout = createLayout({
  varFns: varFns
});

var themeVars = _objectSpread({
  backdrop: false,
  border: undefined,
  // set to `true` or `false`
  cover: false,
  floating: false,
  mini: false,
  permanent: false,
  push: false,
  z_index: vars.z_drawer
}, sharedVars);
/**
 * @type {DrawerVars} drawerVars
 */


var drawerVars = _objectSpread({
  /**
   * Generate general styles, not defined by variables
   */
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

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component.replace(/ /g, "."));
var addStyle = styler.createAddStyle(selector, fns, drawerVars);
var getStyle = styler.createGetStyle(selector, fns, drawerVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: drawerVars
});

export { addStyle, color, getStyle, layout, drawerVars as vars };
