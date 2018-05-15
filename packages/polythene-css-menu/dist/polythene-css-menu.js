(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css'), require('polythene-core-menu')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css', 'polythene-core-menu'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css'],global['polythene-core-menu']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss,polytheneCoreMenu) { 'use strict';

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
    content: "pe-menu__content",
    placeholder: "pe-menu__placeholder",
    target: "pe-menu__target",

    // states
    permanent: "pe-menu--permanent",
    fullHeight: "pe-menu--full-height",
    floating: "pe-menu--floating",
    visible: "pe-menu--visible",
    width_auto: "pe-menu--width-auto",
    width_n: "pe-menu--width-",

    // lookup
    listTile: listTileClasses.component,
    selectedListTile: listTileClasses.selected
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function () {
      return {
        textAlign: isRTL ? "right" : "left"
      };
    };
  };

  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var unifySize = function unifySize(vars, size) {
    return size < vars.min_size ? vars.min_size : size;
  };

  var widthClass = function widthClass(size) {
    var sizeStr = size.toString().replace(".", "-");
    return "pe-menu--width-" + sizeStr;
  };

  var widthStyle = function widthStyle(vars, size) {
    var s = unifySize(vars, size);
    return _defineProperty({}, "&." + widthClass(s), {
      width: vars.size_factor * s + "px"
      // We can't set maxWidth because we don't know the size of the container
    });
  };

  var sizes_min_size_size_factor = function sizes_min_size_size_factor(selector, vars) {
    return sel(selector, [vars.sizes.map(function (size) {
      return widthStyle(vars, size);
    }), {
      minWidth: polytheneTheme.vars.grid_unit_menu * vars.min_size + "px"
    }]);
  };

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [sel(selector, [alignLeft(vars), {
        transitionProperty: "all",
        zIndex: polytheneTheme.vars.z_menu,
        opacity: 0,
        position: "absolute",

        ".pe-menu--width-auto": {
          width: "auto"
        },

        ".pe-menu--permanent": {
          position: "relative",
          opacity: 1,
          zIndex: 0
        },

        " .pe-menu__content": {
          width: "100%"
        },

        ".pe-menu--full-height": {
          height: "100%",

          " .pe-menu__content": {
            height: "100%"
          }
        }
      }]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars)])];
    },
    animation_delay: function animation_delay(selector, vars) {
      return [sel(selector, {
        transitionDelay: vars.animation_delay
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [sel(selector, {
        transitionDuration: vars.animation_duration
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [sel(selector, {
        transitionTimingFunction: vars.animation_timing_function
      })];
    },
    animation_show_css: function animation_show_css(selector, vars) {
      return [sel(selector, {
        ".pe-menu--visible": vars.animation_show_css
      })];
    },
    animation_hide_css: function animation_hide_css(selector, vars) {
      return [sel(selector, [vars.animation_hide_css])];
    },
    sizes: function sizes(selector, vars) {
      return [sizes_min_size_size_factor(selector, vars)];
    },
    min_size: function min_size(selector, vars) {
      return [sizes_min_size_size_factor(selector, vars)];
    },
    size_factor: function size_factor(selector, vars) {
      return [sizes_min_size_size_factor(selector, vars)];
    },
    border_radius: function border_radius(selector, vars) {
      return [sel(selector, {
        ".pe-menu--floating": {
          " .pe-menu__content": {
            borderRadius: vars.border_radius + "px"
          }
        }
      })];
    }
  };

  var layout = (function (selector, vars, customVars) {
    var allVars = _extends({}, vars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty$1({}, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-menu__content": {
          "background-color": vars["color_" + tint + "_background"]
        }
      })];
    });
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreMenu.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreMenu.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreMenu.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreMenu.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-menu.js.map
