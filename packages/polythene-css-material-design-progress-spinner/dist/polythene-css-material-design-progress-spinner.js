(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-css-base-spinner'), require('polythene-css-material-design-spinner'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-css-base-spinner', 'polythene-css-material-design-spinner', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-css-base-spinner'],global['polythene-css-material-design-spinner'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCssBaseSpinner,polytheneCssMaterialDesignSpinner,polytheneCoreCss) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = _extends({}, polytheneCssBaseSpinner.vars, {
    progress_animation_duration: ".8s",

    color_light: rgba(polytheneTheme.vars.color_primary),
    color_dark: rgba(polytheneTheme.vars.color_primary)
  });

  var classes = {
    component: "pe-md-progress-spinner",

    // elements
    animation: "pe-md-progress-spinner__animation",
    circle: "pe-md-progress-spinner__circle",
    circleRight: "pe-md-progress-spinner__circle-right",
    circleLeft: "pe-md-progress-spinner__circle-left"
  };

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        position: "relative",

        " .pe-md-progress-spinner__animation": {
          position: "absolute",
          width: "100%",
          height: "100%"
        },

        " .pe-md-progress-spinner__circle": {
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          borderStyle: "solid",
          borderRadius: "50%"
        },

        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          transform: "rotate(0)",
          clip: "rect(0, 0, 0, 0)"
        }
      })];
    },
    progress_animation_duration: function progress_animation_duration(selector, vars) {
      return [sel(selector, {
        " .pe-md-progress-spinner__animation": {
          animationDuration: vars.progress_animation_duration
        }
      })];
    }
  };

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return polytheneCssMaterialDesignSpinner.layout(selector, componentVars, customVars).concat(Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    }));
  });

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [sel$1(selector, {
        " .pe-md-progress-spinner__circle": {
          borderColor: "currentcolor"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty$1({}, "color_" + tint, function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint]
      })];
    });
  };

  var lightTintFns = _extends$2({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$2({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$2({}, componentVars, customVars);
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
    return polytheneCssMaterialDesignSpinner.color(selector, componentVars, customVars).concat([style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")] // normal, has/inside light tone
    );
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-material-design-progress-spinner.js.map
