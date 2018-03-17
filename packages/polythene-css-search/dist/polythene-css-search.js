(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-core-search')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-core-search'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-core-search']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCoreSearch) { 'use strict';

  var classes = {
    component: "pe-search",

    // elements
    content: "pe-search__content",

    // states
    searchFullWidth: "pe-search--full-width",
    searchInset: "pe-search--inset"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var layout = (function (selector, componentVars) {
    var inset_input_padding_v = (componentVars.inset_height - componentVars.line_height_input) / 2;
    var full_width_input_padding_v = (componentVars.full_width_height - componentVars.line_height_input) / 2;
    var full_width_input_indent = polytheneTheme.vars.unit_indent - componentVars.full_width_side_padding - polytheneTheme.vars.grid_unit_icon_button;

    return [_defineProperty({}, selector, [polytheneCoreCss.flex.flex(), {
      position: "relative", // necessary when a shadow is added

      " .pe-textfield": [polytheneCoreCss.flex.flex(), {
        alignItems: "center",
        padding: 0,
        // prevent that neighboring icon button with ripple hides the cursor
        position: "relative",
        zIndex: 1,

        " .pe-textfield__input-area": {
          padding: 0,

          ":after": {
            display: "none"
          }
        },

        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: componentVars.font_size_input + "px",
          lineHeight: componentVars.line_height_input + "px"
        },

        " .pe-textfield__input": {
          // reset
          border: "none"
        },

        " .pe-textfield__label": {
          // reset
          top: 0,
          bottom: 0
        }
      }],

      " .pe-search__content": {
        "&, .pe-textfield": polytheneCoreCss.flex.layoutHorizontal,
        "&, .pe-textfield__input-area": {
          flexGrow: 1
        }
      },

      " .pe-search__content > *": [polytheneCoreCss.flex.layoutVertical, polytheneCoreCss.flex.selfCenter],

      ".pe-search--inset": {
        "border-radius": componentVars.inset_border_radius + "px",
        padding: "0 " + componentVars.inset_side_padding + "px",

        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0,
          height: componentVars.inset_height + "px"
        },
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: inset_input_padding_v + "px",
          paddingBottom: inset_input_padding_v + "px",
          paddingLeft: componentVars.inset_input_indent + "px",
          paddingRight: componentVars.inset_input_right_padding + "px"
        }
      },

      ".pe-search--full-width": {
        borderRadius: componentVars.full_width_border_radius + "px",
        padding: "0 " + componentVars.full_width_side_padding + "px",

        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          height: componentVars.full_width_height + "px"
        },
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: full_width_input_padding_v + "px",
          paddingBottom: full_width_input_padding_v + "px",
          paddingLeft: full_width_input_indent + "px",
          paddingRight: componentVars.full_width_input_right_padding + "px"
        }
      }
    }])];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      backgroundColor: componentVars["color_" + tint + "_background"],

      " .pe-textfield": {
        " .pe-textfield__label": {
          color: componentVars["color_" + tint + "_label_text"]
        },
        " .pe-textfield__input": {
          color: componentVars["color_" + tint + "_input_text"]
        },
        " .pe-textfield__input-area": {
          backgroundColor: "transparent"
        }
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreSearch.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreSearch.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreSearch.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreSearch.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-search.js.map
