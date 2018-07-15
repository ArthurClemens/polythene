(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-css-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-css-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-css-shadow']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCssShadow) { 'use strict';

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
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel": {
          "background-color": vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__backdrop": {
          "background-color": vars["color_" + tint + "_backdrop_background"]
        }
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var behaviorVars = {
    top_menu: false // set to true to position the menu at the top of the screen, full width
  };

  var themeVars = _extends$1({}, {
    backdrop: undefined, // (Boolean) - if not set, backdrop existence is set by component option
    z: polytheneTheme.vars.z_menu // z-depth of the menu (not the shadow depth)
  }, behaviorVars, polytheneCssShadow.sharedVars);

  var vars = _extends$1({}, {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".180s",
    animation_hide_css: "opacity: 0;",
    animation_hide_origin_effect_css: "transform: scale(0.75);", // set to "transform: scale(1)" to reset scaling
    animation_show_css: "opacity: 1;",
    animation_show_origin_effect_css: "transform: scale(1);",
    animation_timing_function: "ease-in-out",
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    height: undefined, // (height value with unit) - if not set, height is set by component option
    min_width: 1.5,
    width_factor: polytheneTheme.vars.grid_unit_menu,
    widths: [1, 1.5, 2, 3, 4, 5, 6, 7],

    // color vars

    color_light_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),

    color_light_backdrop_background: "rgba(0, 0, 0, .1)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)"

    // text colors are set by content, usually list tiles
  }, themeVars);

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function () {
      return {
        textAlign: isRTL ? "right" : "left"
      };
    };
  };

  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var unifyWidth = function unifyWidth(vars$$1, width) {
    return width < vars$$1.min_width ? vars$$1.min_width : width;
  };

  var widthClass = function widthClass(width) {
    var widthStr = width.toString().replace(".", "-");
    return "pe-menu--width-" + widthStr;
  };

  var widthStyle = function widthStyle(_ref) {
    var vars$$1 = _ref.vars,
        width = _ref.width,
        value = _ref.value;

    var s = unifyWidth(vars$$1, width);
    return _defineProperty$1({}, "." + widthClass(s), {
      " .pe-menu__panel": {
        width: value || vars$$1.width_factor * s + "px"
        // We can't set maxWidth because we don't know the width of the container
      }
    });
  };

  var widths_min_width_width_factor = function widths_min_width_width_factor(selector, vars$$1) {
    return polytheneCoreCss.sel(selector, [vars$$1.widths.map(function (width) {
      return widthStyle({ vars: vars$$1, width: width });
    }), {
      " .pe-menu__panel": {
        minWidth: polytheneTheme.vars.grid_unit_menu * vars$$1.min_width + "px"
      }
    }]);
  };

  var _backdrop = function _backdrop(selector) {
    return polytheneCoreCss.sel(selector, {
      " .pe-menu__backdrop": {
        display: "block"
      }
    });
  };

  var _top_menu = function _top_menu(selector, vars$$1) {
    return polytheneCoreCss.sel(selector, [vars$$1.widths.map(function (width) {
      return widthStyle({ vars: vars$$1, width: width, value: "100vw" });
    }), polytheneCoreCss.createMarker(vars$$1, behaviorVars), {
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

  var _z = function _z(selector, vars$$1) {
    return polytheneCoreCss.sel(selector, {
      ".pe-menu--floating": {
        " .pe-menu__panel, .pe-menu__backdrop": {
          zIndex: vars$$1.z
        }
      }
    });
  };

  var varFns = _extends$2({
    general_styles: function general_styles(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, [alignLeft(vars$$1), {
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

        ".pe-menu--top-menu": _top_menu(selector, vars$$1),

        " .pe-menu__content": {
          overflow: "auto",
          width: "100%",
          height: "100%"
        },

        ".pe-menu--full-height": {
          height: "100%",

          " .pe-menu__panel": {
            height: "100%"
          }
        }
      }]), _defineProperty$1({}, polytheneCoreCss.selectorRTL(selector), alignRight(vars$$1))];
    },
    animation_delay: function animation_delay(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel, .pe-menu__backdrop": {
          transitionDelay: vars$$1.animation_delay
        }
      })];
    },
    animation_duration: function animation_duration(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel, .pe-menu__backdrop": {
          transitionDuration: vars$$1.animation_duration
        }
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel, .pe-menu__backdrop": {
          transitionTimingFunction: vars$$1.animation_timing_function
        }
      })];
    },
    animation_show_css: function animation_show_css(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-menu--visible": {
          " .pe-menu__panel": vars$$1.animation_show_css
        }
      })];
    },
    animation_hide_css: function animation_hide_css(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel": vars$$1.animation_hide_css
      })];
    },
    animation_show_origin_effect_css: function animation_show_origin_effect_css(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-menu--origin.pe-menu--visible": {
          " .pe-menu__panel": vars$$1.animation_show_origin_effect_css
        }
      })];
    },
    animation_hide_origin_effect_css: function animation_hide_origin_effect_css(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-menu--origin:not(.pe-menu--visible)": {
          " .pe-menu__panel": vars$$1.animation_hide_origin_effect_css
        }
      })];
    },
    height: function height(selector, vars$$1) {
      return [vars$$1.height !== undefined && polytheneCoreCss.sel(selector, {
        " .pe-menu__panel": {
          height: vars$$1.height
        }
      })];
    },
    widths: function widths(selector, vars$$1) {
      return [widths_min_width_width_factor(selector, vars$$1)];
    },
    min_width: function min_width(selector, vars$$1) {
      return [widths_min_width_width_factor(selector, vars$$1)];
    },
    width_factor: function width_factor(selector, vars$$1) {
      return [widths_min_width_width_factor(selector, vars$$1)];
    },
    border_radius: function border_radius(selector, vars$$1) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-menu__panel": {
          borderRadius: vars$$1.border_radius + "px"
        }
      })];
    },
    // Theme vars
    backdrop: function backdrop(selector, vars$$1) {
      return [vars$$1.backdrop && _backdrop(selector, vars$$1)];
    },
    top_menu: function top_menu(selector, vars$$1) {
      return [vars$$1.top_menu && _top_menu(selector, vars$$1)];
    },
    z: function z(selector, vars$$1) {
      return [vars$$1.z && _z(selector, vars$$1)];
    }
  }, polytheneCssShadow.sharedVarFns);

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-menu.js.map
