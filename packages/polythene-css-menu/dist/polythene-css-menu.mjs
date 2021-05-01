import { createColor, sel, rgba, createLayout, createMarker, selectorRTL, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import { sharedVars, sharedVarFns } from 'polythene-css-shadow';

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars

};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel": {
        "background-color": vars["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-menu__backdrop": {
        "background-color": vars["color_" + tint + "_backdrop_background"]
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

var behaviorVars = {
  top_menu: false // set to true to position the menu at the top of the screen, full width

};

var themeVars = _objectSpread2(_objectSpread2({
  backdrop: undefined,
  // (Boolean) - if not set, backdrop existence is set by component option
  z: vars.z_menu
}, behaviorVars), sharedVars);
/**
 * @type {MenuVars} menuVars
 */


var menuVars = _objectSpread2({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".180s",
  animation_hide_css: "opacity: 0;",
  animation_hide_origin_effect_css: "transform: scale(0.75);",
  // set to "transform: scale(1)" to reset scaling
  animation_show_css: "opacity: 1;",
  animation_show_origin_effect_css: "transform: scale(1);",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  height: undefined,
  // (height value with unit) - if not set, height is set by component option
  min_width: 1.5,
  width_factor: vars.grid_unit_menu,
  widths: [1, 1.5, 2, 3, 4, 5, 6, 7],
  // color vars
  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),
  color_light_backdrop_background: "rgba(0, 0, 0, .1)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
}, themeVars);

/**
 * 
 * @param {boolean} isRTL 
 */

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      textAlign: isRTL ? "right" : "left"
    };
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var unifyWidth = function unifyWidth(vars, width) {
  return width < vars.min_width ? vars.min_width : width;
};

var widthClass = function widthClass(width) {
  var widthStr = width.toString().replace(".", "-");
  return "pe-menu--width-" + widthStr;
};
/**
 * 
 * @param {object} params
 * @param {object} params.vars
 * @param {number} params.width
 * @param {string} [params.value]
 */


var widthStyle = function widthStyle(_ref) {
  var vars = _ref.vars,
      width = _ref.width,
      value = _ref.value;
  var s = unifyWidth(vars, width);
  return _defineProperty({}, "." + widthClass(s), {
    " .pe-menu__panel": {
      width: value || vars.width_factor * s + "px" // We can't set maxWidth because we don't know the width of the container

    }
  });
};

var widths_min_width_width_factor = function widths_min_width_width_factor(selector, vars$1) {
  return sel(selector, [vars$1.widths.map(function (width) {
    return widthStyle({
      vars: vars$1,
      width: width
    });
  }), {
    " .pe-menu__panel": {
      minWidth: vars.grid_unit_menu * vars$1.min_width + "px"
    }
  }]);
};

var _backdrop = function backdrop(selector, vars) {
  return (// eslint-disable-line no-unused-vars
    sel(selector, {
      " .pe-menu__backdrop": {
        display: "block"
      }
    })
  );
};

var _top_menu = function top_menu(selector, vars) {
  return sel(selector, [vars.widths.map(function (width) {
    return widthStyle({
      vars: vars,
      width: width,
      value: "100vw"
    });
  }), createMarker(vars, behaviorVars), {
    " .pe-menu__panel": {
      position: "fixed",
      width: "100vw",
      top: 0,
      left: 0,
      right: 0,
      bottom: "auto",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }
  }]);
};

var _z = function z(selector, vars) {
  return sel(selector, {
    ".pe-menu--floating": {
      " .pe-menu__panel, .pe-menu__backdrop": {
        zIndex: vars.z
      }
    }
  });
};

var varFns = _objectSpread2({
  general_styles: function general_styles(selector, vars) {
    return [sel(selector, [alignLeft(), {
      position: "static",
      ".pe-menu--width-auto": {
        width: "auto"
      },
      ".pe-menu--permanent": {
        " .pe-menu__panel": {
          opacity: 1,
          position: "relative"
        }
      },
      ".pe-menu--floating": {
        " .pe-menu__panel": {
          transitionProperty: "opacity, transform"
        }
      },
      " .pe-menu__panel": {
        transitionProperty: "all",
        opacity: 0,
        position: "absolute"
      },
      " .pe-menu__backdrop": {
        display: "none",
        transitionProperty: "all",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0
      },
      ".pe-menu--backdrop": _backdrop(selector),
      ".pe-menu--visible .pe-menu__backdrop": {
        opacity: 1
      },
      ".pe-menu--top-menu": _top_menu(selector, vars),
      " .pe-menu__content": {
        overflowX: "auto",
        overflowY: "auto",
        width: "100%",
        height: "100%"
      },
      ".pe-menu--full-height": {
        height: "100%",
        " .pe-menu__panel": {
          height: "100%"
        }
      }
    }]), _defineProperty({}, selectorRTL(selector), alignRight())];
  },
  animation_delay: function animation_delay(selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDelay: vars.animation_delay
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDuration: vars.animation_duration
      }
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionTimingFunction: vars.animation_timing_function
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars) {
    return [sel(selector, {
      ".pe-menu--visible": {
        " .pe-menu__panel": vars.animation_show_css
      }
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel": vars.animation_hide_css
    })];
  },
  animation_show_origin_effect_css: function animation_show_origin_effect_css(selector, vars) {
    return [sel(selector, {
      ".pe-menu--origin.pe-menu--visible": {
        " .pe-menu__panel": vars.animation_show_origin_effect_css
      }
    })];
  },
  animation_hide_origin_effect_css: function animation_hide_origin_effect_css(selector, vars) {
    return [sel(selector, {
      ".pe-menu--origin:not(.pe-menu--visible)": {
        " .pe-menu__panel": vars.animation_hide_origin_effect_css
      }
    })];
  },
  height: function height(selector, vars) {
    return [vars.height !== undefined && sel(selector, {
      " .pe-menu__panel": {
        height: vars.height
      }
    })];
  },
  widths: function widths(selector, vars) {
    return [widths_min_width_width_factor(selector, vars)];
  },
  min_width: function min_width(selector, vars) {
    return [widths_min_width_width_factor(selector, vars)];
  },
  width_factor: function width_factor(selector, vars) {
    return [widths_min_width_width_factor(selector, vars)];
  },
  border_radius: function border_radius(selector, vars) {
    return [sel(selector, {
      " .pe-menu__panel": {
        borderRadius: vars.border_radius + "px"
      }
    })];
  },
  // Theme vars
  backdrop: function backdrop(selector, vars) {
    return [vars.backdrop && _backdrop(selector)];
  },
  top_menu: function top_menu(selector, vars) {
    return [vars.top_menu && _top_menu(selector, vars)];
  },
  z: function z(selector, vars) {
    return [vars.z && _z(selector, vars)];
  }
}, sharedVarFns);

var layout = createLayout({
  varFns: varFns
});

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, menuVars);
var getStyle = styler.createGetStyle(selector, fns, menuVars);

var addGeneralStyleToHead = function addGeneralStyleToHead() {
  return styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: menuVars
  });
};

export { addGeneralStyleToHead, addStyle, color, getStyle, layout, menuVars as vars };
