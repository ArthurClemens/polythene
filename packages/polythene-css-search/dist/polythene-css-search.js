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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var inset_height_line_height_input = function inset_height_line_height_input(selector, vars) {
    var inset_input_padding_v = (vars.inset_height - vars.line_height_input) / 2;
    return sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: inset_input_padding_v + "px",
          paddingBottom: inset_input_padding_v + "px"
        }
      }
    });
  };

  var full_width_height_line_height_input = function full_width_height_line_height_input(selector, vars) {
    var full_width_input_padding_v = (vars.full_width_height - vars.line_height_input) / 2;
    return sel(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingTop: full_width_input_padding_v + "px",
          paddingBottom: full_width_input_padding_v + "px"
        }
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.flex.flex(), {
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
          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            padding: 0
          }
        }
      }])];
    },
    font_size_input: function font_size_input(selector, vars) {
      return [sel(selector, {
        " .pe-textfield": {
          " .pe-textfield__input, .pe-textfield__label": {
            fontSize: vars.font_size_input + "px"
          }
        }
      })];
    },
    line_height_input: function line_height_input(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input, .pe-textfield__label": {
          lineHeight: vars.line_height_input + "px"
        }
      }), inset_height_line_height_input(selector, vars)];
    },
    inset_border_radius: function inset_border_radius(selector, vars) {
      return [sel(selector, {
        ".pe-search--inset": {
          "border-radius": vars.inset_border_radius + "px"
        }
      })];
    },
    inset_side_padding: function inset_side_padding(selector, vars) {
      return [sel(selector, {
        ".pe-search--inset": {
          padding: "0 " + vars.inset_side_padding + "px"
        }
      })];
    },
    inset_height: function inset_height(selector, vars) {
      return [sel(selector, {
        ".pe-search--inset": {
          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            padding: 0,
            height: vars.inset_height + "px"
          }
        }
      }), inset_height_line_height_input(selector, vars)];
    },
    full_width_height: function full_width_height(selector, vars) {
      return [sel(selector, {
        ".pe-search--full-width": {
          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            height: vars.full_width_height + "px"
          }
        }
      }), full_width_height_line_height_input(selector, vars)];
    },
    inset_input_indent: function inset_input_indent(selector, vars) {
      return [sel(selector, {
        ".pe-search--inset": {
          " .pe-textfield__input, .pe-textfield__label": {
            paddingLeft: vars.inset_input_indent + "px"
          }
        }
      })];
    },
    inset_input_right_padding: function inset_input_right_padding(selector, vars) {
      return [sel(selector, {
        ".pe-search--inset": {
          " .pe-textfield__input, .pe-textfield__label": {
            paddingRight: vars.inset_input_right_padding + "px"
          }
        }
      })];
    },
    full_width_side_padding: function full_width_side_padding(selector, vars) {
      var full_width_input_indent = polytheneTheme.vars.unit_indent - vars.full_width_side_padding - polytheneTheme.vars.grid_unit_icon_button;
      return sel(selector, {
        ".pe-search--full-width": {
          padding: "0 " + vars.full_width_side_padding + "px",

          " .pe-textfield__input, .pe-textfield__label": {
            paddingLeft: full_width_input_indent + "px"
          }
        }
      });
    },
    full_width_border_radius: function full_width_border_radius(selector, vars) {
      return [sel(selector, {
        ".pe-search--full-width": {
          borderRadius: vars.full_width_border_radius + "px"
        }
      })];
    },
    full_width_input_right_padding: function full_width_input_right_padding(selector, vars) {
      return [sel(selector, {
        ".pe-search--full-width": {
          " .pe-textfield__input, .pe-textfield__label": {
            paddingRight: vars.full_width_input_right_padding + "px"
          }
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
      return [sel$1(selector, {
        " .pe-textfield__input-area": {
          backgroundColor: "transparent"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_label_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield": {
          " .pe-textfield__label": {
            color: vars["color_" + tint + "_label_text"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield": {
          " .pe-textfield__input": {
            color: vars["color_" + tint + "_input_text"]
          }
        }
      })];
    }), _ref2;
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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreSearch.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreSearch.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreSearch.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreSearch.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-search.js.map
