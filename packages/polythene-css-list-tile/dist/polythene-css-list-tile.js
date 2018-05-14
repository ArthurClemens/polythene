(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-list-tile')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-list-tile'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-list-tile']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreListTile) { 'use strict';

  var classes = {
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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (vars) {
      return { // eslint-disable-line no-unused-vars
        " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", 0)
      };
    };
  }; // eslint-disable-line no-unused-vars
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var paddingH = function paddingH(h) {
    return {
      "padding-left": h + "px",
      "padding-right": h + "px"
    };
  };

  var paddingV = function paddingV(top, bottom) {
    return {
      "padding-top": top + "px",
      "padding-bottom": (bottom || top) + "px"
    };
  };

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var selectorRTL = function selectorRTL(selector) {
    return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
  };

  var title_line_count_single_line_height = function title_line_count_single_line_height(selector, vars) {
    return sel(selector, {
      lineHeight: vars.single_line_height + "px",

      ".pe-list-tile--navigation": {
        " .pe-list-tile__title": {
          minHeight: vars.single_line_height + "px"
        }
      },

      " .pe-list-tile__title": [polytheneCoreCss.mixin.ellipsis(vars.title_line_count, vars.single_line_height, "px")]
    });
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [sel(selector, [alignLeft(vars), polytheneCoreCss.flex.layout, {
        position: "relative",

        ".pe-list-tile--navigation": {
          " .pe-list-tile__title": {
            whiteSpace: "pre-wrap"
          }
        },

        ".pe-list-tile--sticky": polytheneCoreCss.mixin.sticky(2),

        " .pe-list-tile__primary": {
          width: "100%"
        },

        " .pe-list-tile__primary, .pe-list-tile__secondary": [polytheneCoreCss.flex.layoutHorizontal, {
          textDecoration: "none",
          color: "inherit",
          border: "none"
        }],

        ":not(.pe-list-tile--header) .pe-list-tile__primary": [polytheneCoreCss.flex.flex(), {
          position: "relative",

          " .pe-list-tile__content:not(.pe-list-tile__content-front)": [polytheneCoreCss.flex.flex()]
        }],

        ":not(.pe-list-tile--disabled)": {
          outline: "none"
        },

        " .pe-list-tile__secondary": {
          textAlign: "right",
          position: "relative"
        },

        " .pe-list-tile__content": [polytheneCoreCss.flex.layoutVertical, polytheneCoreCss.flex.selfCenter, {
          width: "100%",

          ".pe-list-tile__content-front": {
            flexShrink: 0
          }
        }],

        " .pe-list-tile__title": {
          whiteSpace: "normal"
        },

        " .pe-list-tile__subtitle": [polytheneCoreCss.mixin.ellipsis(vars.subtitle_line_count, vars.line_height_subtitle, "px"), {
          fontSize: vars.font_size_subtitle + "px",
          fontWeight: vars.font_weight_subtitle,
          lineHeight: vars.line_height_subtitle + "px",

          ".pe-list-tile__high-subtitle": [polytheneCoreCss.mixin.ellipsis(vars.high_subtitle_line_count, vars.line_height_subtitle, "px"), {
            whiteSpace: "normal"
          }]
        }],

        ".pe-list-tile--selected, &.pe-list-tile--disabled": {
          "&, a": {
            pointerEvents: "none"
          }
        },

        ".pe-list-tile--subtitle": {
          " .pe-list-tile__content": {
            " .pe-list-tile__title": {
              padding: 0
            }
          }
        },

        ".pe-list-tile--high-subtitle": {
          " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutStart],
          " .pe-list-tile__content": [polytheneCoreCss.flex.selfStart, {
            " .pe-list-tile__title": {
              padding: 0
            }
          }]
        },

        // List header
        ".pe-list-tile--header": {
          pointerEvents: "none",

          " .pe-list-tile__content": {
            paddingTop: 0,
            paddingBottom: 0
          },
          " .pe-list-tile__title": {
            padding: 0
          }
        },

        // Firefox only
        "@supports (-moz-appearance:none) and (display:contents)": {
          " .pe-list-tile__primary, .pe-list-tile__content": {
            overflow: "hidden"
          }
        },

        // Menu

        ".pe-dialog .pe-menu__content &": {
          " .pe-list-tile__content": {
            paddingLeft: "24px",
            paddingRight: "24px"
          },
          " .pe-list-tile__content-front": {
            paddingRight: 0,
            width: "64px",
            marginRight: "-7px"
          },

          " .pe-list-tile__title": polytheneCoreCss.mixin.ellipsis("none")
        },

        ".pe-menu__content &": {
          ":not(.pe-list-tile--disabled)": {
            cursor: "default",

            "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
              " .pe-list-tile__title, .pe-list-tile__subtitle": {
                userSelect: "none",
                "-moz-user-select": "none"
              }
            }
          }
        },

        // Non-touch

        "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
          ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
            cursor: "pointer"
          }
        }
      }]), _defineProperty({}, selectorRTL(selector), alignRight(vars))];
    },
    title_line_count: function title_line_count(selector, vars) {
      return [title_line_count_single_line_height(selector, vars)];
    },
    single_line_height: function single_line_height(selector, vars) {
      return [title_line_count_single_line_height(selector, vars)];
    },
    font_size_title: function font_size_title(selector, vars) {
      return [sel(selector, {
        fontSize: vars.font_size_title + "px",

        " .pe-list-tile__secondary": {
          fontSize: vars.font_size_title + "px"
        }
      })];
    },
    font_weight_title: function font_weight_title(selector, vars) {
      return [sel(selector, {
        fontWeight: vars.font_weight_title
      })];
    },
    font_size_navigation_title: function font_size_navigation_title(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--navigation": {
          fontSize: vars.font_size_navigation_title + "px"
        }
      })];
    },
    font_weight_navigation_title: function font_weight_navigation_title(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--navigation": {
          fontWeight: vars.font_weight_navigation_title
        }
      })];
    },
    padding: function padding(selector, vars) {
      return [sel(selector, {
        ":not(.pe-list-tile--header) .pe-list-tile__primary": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars.padding, vars.padding + 1)]
        },

        " .pe-list-tile__content": {
          ".pe-list-tile__content-front": [paddingV(vars.padding - 5)]
        }
      })];
    },
    side_padding: function side_padding(selector, vars) {
      return [sel(selector, {
        " .pe-list-tile__content": [paddingH(vars.side_padding)]
      })];
    },
    compact_front_item_width: function compact_front_item_width(selector, vars) {
      return [sel(selector, {
        " .pe-list-tile__content-front": {
          ".pe-list-tile--compact-front": {
            width: vars.compact_front_item_width + "px"
          }
        }
      })];
    },
    front_item_width: function front_item_width(selector, vars) {
      return [sel(selector, {
        " .pe-list-tile__content-front": {
          ":not(.pe-list-tile--compact-front)": {
            width: vars.front_item_width + "px"
          }
        }
      })];
    },
    font_size_small: function font_size_small(selector, vars) {
      return [sel(selector, {
        " .pe-list-tile__content": {
          " small": {
            fontSize: vars.font_size_small + "px"
          }
        }
      })];
    },
    has_high_subtitle_padding: function has_high_subtitle_padding(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--high-subtitle": {
          " .pe-list-tile__content": [paddingV(vars.has_high_subtitle_padding, vars.has_high_subtitle_padding + 1)]
        }
      })];
    },
    has_subtitle_padding: function has_subtitle_padding(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--subtitle": {
          " .pe-list-tile__content": [paddingV(vars.has_subtitle_padding, vars.has_subtitle_padding + 1)]
        }
      })];
    },
    single_height: function single_height(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--header": {
          height: vars.single_height + "px",

          " .pe-list-tile__title": [polytheneCoreCss.mixin.ellipsis(1, vars.single_height, "px"), {
            lineHeight: vars.single_height + "px",
            padding: 0
          }]
        }
      })];
    },
    font_size_list_header: function font_size_list_header(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--header": {
          " .pe-list-tile__title": {
            fontSize: vars.font_size_list_header + "px"
          }
        }
      })];
    },
    font_weight_list_header: function font_weight_list_header(selector, vars) {
      return [sel(selector, {
        ".pe-list-tile--header": {
          " .pe-list-tile__title": {
            fontWeight: vars.font_weight_list_header
          }
        }
      })];
    },
    compact_padding: function compact_padding(selector, vars) {
      return [sel(selector, {
        " .pe-list--compact &, &.pe-list-tile--compact": {
          ":not(.pe-list-tile--header)": {
            " .pe-list-tile__content": paddingV(vars.compact_padding, vars.compact_padding + 1)
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
        ".pe-list-tile--header": {
          " .pe-list-tile__primary, pe-list-tile__secondary": {
            backgroundColor: "inherit"
          }
        },
        ":not(.pe-list-tile--disabled)": {
          " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
            outline: "none",
            backgroundColor: "inherit"
          }
        },
        "&.pe-list-tile--sticky": {
          backgroundColor: "inherit"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_title", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_title"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        backgroundColor: vars["color_" + tint + "_background"],

        "&.pe-list-tile--sticky": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_list_header", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-list-tile--header": {
          color: vars["color_" + tint + "_list_header"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_subtitle", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-list-tile__subtitle": {
          color: vars["color_" + tint + "_subtitle"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_secondary", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-list-tile__secondary": {
          color: vars["color_" + tint + "_secondary"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_front", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-list-tile__content-front": {
          color: vars["color_" + tint + "_front"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_text_disabled", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-list-tile--disabled": {
          "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
            color: vars["color_" + tint + "_text_disabled"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_selected_background", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-list-tile--selected": {
          " .pe-list-tile__primary, pe-list-tile__secondary": {
            backgroundColor: vars["color_" + tint + "_selected_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_highlight_background", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
          " .pe-list-tile__primary, pe-list-tile__secondary": {
            backgroundColor: vars["color_" + tint + "_highlight_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_background", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-list-tile--disabled)": {
          " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
        }
      })];
    }), _ref2;
  };

  var hoverTintFns = function hoverTintFns(tint) {
    var _ref3;

    return _ref3 = {}, _defineProperty$1(_ref3, "color_" + tint + "_hover", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_hover"]
      })];
    }), _defineProperty$1(_ref3, "color_" + tint + "_hover_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-list-tile__primary, .pe-list-tile__secondary": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        }
      })];
    }), _defineProperty$1(_ref3, "color_" + tint + "_hover_front", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-list-tile__primary .pe-list-tile__content-front": {
          color: vars["color_" + tint + "_hover_front"]
        }
      })];
    }), _ref3;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var lightTintHoverFns = hoverTintFns("light");
  var darkTintHoverFns = hoverTintFns("dark");

  var createStyle = function createStyle(selector, componentVars, customVars, tint, hover) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? hover ? lightTintHoverFns : lightTintFns : hover ? darkTintHoverFns : darkTintFns;
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

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, customVars, tint) {
    var selectors = [].concat(scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(",")).concat(scopes.map(function (s) {
      return s + selector + ":active";
    }).join(","));
    return createStyle(selectors, componentVars, customVars, tint, true);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone

    noTouchStyle(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "], selector, componentVars, customVars, "dark"), // has/inside dark tone

    noTouchStyle(["html.pe-no-touch .pe-list-tile--hoverable", "html.pe-no-touch .pe-list-tile--hoverable ", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreListTile.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreListTile.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreListTile.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreListTile.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-list-tile.js.map
