(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-base-spinner']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreBaseSpinner) { 'use strict';

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

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var sizes = function sizes(size) {
    return {
      width: size + "px",
      height: size + "px"
    };
  };

  var raisedSize = function raisedSize(size, vars) {
    var _vars$raisedSize = vars.raisedSize(size),
        padding = _vars$raisedSize.padding,
        paddedSize = _vars$raisedSize.paddedSize;

    return {
      width: paddedSize + "px",
      height: paddedSize + "px",
      padding: padding + "px"
    };
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        transitionProperty: "all",

        ".pe-spinner--raised": {
          position: "relative",
          borderRadius: "50%"
        }
      })];
    },
    animation_show_css: function animation_show_css(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--visible, &.pe-spinner--permanent": [vars.animation_show_css]
      })];
    },
    animation_hide_css: function animation_hide_css(selector, vars) {
      return _defineProperty({}, selector, vars.animation_hide_css);
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
    size_small: function size_small(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--small": sizes(vars.size_small),

        ".pe-spinner--raised": {
          ".pe-spinner--small": raisedSize(vars.size_small, vars)
        }
      })];
    },
    size_regular: function size_regular(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--regular": sizes(vars.size_regular),

        ".pe-spinner--raised": {
          ".pe-spinner--regular": raisedSize(vars.size_regular, vars)
        }
      })];
    },
    size_medium: function size_medium(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--medium": sizes(vars.size_medium),

        ".pe-spinner--raised": {
          ".pe-spinner--medium": raisedSize(vars.size_medium, vars)
        }
      })];
    },
    size_large: function size_large(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--large": sizes(vars.size_large),

        ".pe-spinner--raised": {
          ".pe-spinner--large": raisedSize(vars.size_large, vars)
        }
      })];
    },
    size_fab: function size_fab(selector, vars) {
      return [sel(selector, {
        ".pe-spinner--fab": sizes(vars.size_fab),

        ".pe-spinner--raised": {
          ".pe-spinner--fab": raisedSize(vars.size_fab, vars)
        }
      })];
    }
  };

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
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
    return _defineProperty$1({}, "color_" + tint + "_raised_background", function (selector, vars) {
      return [sel$1(selector, {
        "&.pe-spinner--raised": {
          backgroundColor: vars["color_" + tint + "_raised_background"]
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreBaseSpinner.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreBaseSpinner.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreBaseSpinner.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreBaseSpinner.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.style = style;
  exports.layout = layout;
  exports.color = color;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-base-spinner.js.map
