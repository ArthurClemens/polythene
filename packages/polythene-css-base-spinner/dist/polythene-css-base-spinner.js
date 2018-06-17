(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-spinner",

    // elements
    animation: "pe-spinner__animation",
    placeholder: "pe-spinner__placeholder",

    // states
    animated: "pe-spinner--animated",
    fab: "pe-spinner--fab",
    large: "pe-spinner--large",
    medium: "pe-spinner--medium",
    permanent: "pe-spinner--permanent",
    raised: "pe-spinner--raised",
    regular: "pe-spinner--regular",
    singleColor: "pe-spinner--single-color",
    small: "pe-spinner--small",
    visible: "pe-spinner--visible"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty({}, "color_" + tint + "_raised_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--raised": {
          backgroundColor: vars["color_" + tint + "_raised_background"]
        }
      })];
    });
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sizes = function sizes(size) {
    return {
      width: size + "px",
      height: size + "px"
    };
  };

  var raisedSize = function raisedSize(size) {
    var padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues
    var paddedSize = size + padding * 2;
    return {
      width: paddedSize + "px",
      height: paddedSize + "px",
      padding: padding + "px"
    };
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        transitionProperty: "all",

        ".pe-spinner--raised": {
          position: "relative",
          borderRadius: "50%"
        }
      })];
    },
    animation_show_css: function animation_show_css(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--visible, &.pe-spinner--permanent": [vars.animation_show_css]
      })];
    },
    animation_hide_css: function animation_hide_css(selector, vars) {
      return _defineProperty$1({}, selector, vars.animation_hide_css);
    },
    animation_delay: function animation_delay(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionDelay: vars.animation_delay
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionDuration: vars.animation_duration
      })];
    },
    animation_timing_function: function animation_timing_function(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        transitionTimingFunction: vars.animation_timing_function
      })];
    },
    size_small: function size_small(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--small": sizes(vars.size_small),

        ".pe-spinner--raised": {
          ".pe-spinner--small": raisedSize(vars.size_small)
        }
      })];
    },
    size_regular: function size_regular(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--regular": sizes(vars.size_regular),

        ".pe-spinner--raised": {
          ".pe-spinner--regular": raisedSize(vars.size_regular)
        }
      })];
    },
    size_medium: function size_medium(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--medium": sizes(vars.size_medium),

        ".pe-spinner--raised": {
          ".pe-spinner--medium": raisedSize(vars.size_medium)
        }
      })];
    },
    size_large: function size_large(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--large": sizes(vars.size_large),

        ".pe-spinner--raised": {
          ".pe-spinner--large": raisedSize(vars.size_large)
        }
      })];
    },
    size_fab: function size_fab(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-spinner--fab": sizes(vars.size_fab),

        ".pe-spinner--raised": {
          ".pe-spinner--fab": raisedSize(vars.size_fab)
        }
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".220s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    size_fab: 7 * polytheneTheme.vars.grid_unit_component,
    size_large: 6 * polytheneTheme.vars.grid_unit_component,
    size_medium: 5 * polytheneTheme.vars.grid_unit_component,
    size_regular: 4 * polytheneTheme.vars.grid_unit_component,
    size_small: 3 * polytheneTheme.vars.grid_unit_component,

    color_light_raised_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_dark_raised_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background) // also use light background with dark tone
  };

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
//# sourceMappingURL=polythene-css-base-spinner.js.map
