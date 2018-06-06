(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

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

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
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
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color_" + tint + "_title", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color_" + tint + "_title"]
      })];
    }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        backgroundColor: vars["color_" + tint + "_background"],

        "&.pe-list-tile--sticky": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_list_header", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--header": {
          color: vars["color_" + tint + "_list_header"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_subtitle", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__subtitle": {
          color: vars["color_" + tint + "_subtitle"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_secondary", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__secondary": {
          color: vars["color_" + tint + "_secondary"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_front", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__content-front": {
          color: vars["color_" + tint + "_front"]
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_text_disabled", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--disabled": {
          "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
            color: vars["color_" + tint + "_text_disabled"]
          }
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_selected_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--selected": {
          " .pe-list-tile__primary, pe-list-tile__secondary": {
            backgroundColor: vars["color_" + tint + "_selected_background"]
          }
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_highlight_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
          " .pe-list-tile__primary, pe-list-tile__secondary": {
            backgroundColor: vars["color_" + tint + "_highlight_background"]
          }
        }
      })];
    }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-list-tile--disabled)": {
          " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
            backgroundColor: vars["color_" + tint + "_focus_background"]
          }
        }
      })];
    }), _ref;
  };

  var hoverTintFns = function hoverTintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--hoverable": {
          color: vars["color_" + tint + "_hover"]
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--hoverable": {
          " .pe-list-tile__primary, .pe-list-tile__secondary": {
            backgroundColor: vars["color_" + tint + "_hover_background"]
          }
        }
      })];
    }), _defineProperty(_ref2, "color_" + tint + "_hover_front", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--hoverable": {
          " .pe-list-tile__primary .pe-list-tile__content-front": {
            color: vars["color_" + tint + "_hover_front"]
          }
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var lightTintHoverFns = hoverTintFns("light");
  var darkTintHoverFns = hoverTintFns("dark");

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (vars) {
      return { // eslint-disable-line no-unused-vars
        " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty$1({}, isRTL ? "paddingRight" : "paddingLeft", 0)
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

  var title_line_count_single_line_height = function title_line_count_single_line_height(selector, vars) {
    return polytheneCoreCss.sel(selector, {
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
      return [polytheneCoreCss.sel(selector, [alignLeft(vars), polytheneCoreCss.flex.layout, {
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

        " .pe-list-tile__primary, .pe-list-tile__secondary": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.mixin.defaultTransition("background", ".200s"), {
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
      }]), _defineProperty$1({}, polytheneCoreCss.selectorRTL(selector), alignRight(vars))];
    },
    title_line_count: function title_line_count(selector, vars) {
      return [title_line_count_single_line_height(selector, vars)];
    },
    single_line_height: function single_line_height(selector, vars) {
      return [title_line_count_single_line_height(selector, vars)];
    },
    font_size_title: function font_size_title(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        fontSize: vars.font_size_title + "px",

        " .pe-list-tile__secondary": {
          fontSize: vars.font_size_title + "px"
        }
      })];
    },
    font_weight_title: function font_weight_title(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        fontWeight: vars.font_weight_title
      })];
    },
    font_size_navigation_title: function font_size_navigation_title(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--navigation": {
          fontSize: vars.font_size_navigation_title + "px"
        }
      })];
    },
    font_weight_navigation_title: function font_weight_navigation_title(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--navigation": {
          fontWeight: vars.font_weight_navigation_title
        }
      })];
    },
    padding: function padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-list-tile--header)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars.padding, vars.padding + 1)]
        },

        " .pe-list-tile__content": {
          ".pe-list-tile__content-front": [paddingV(vars.padding - 5)]
        }
      })];
    },
    side_padding: function side_padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__content": [paddingH(vars.side_padding)]
      })];
    },
    compact_front_item_width: function compact_front_item_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__content-front": {
          ".pe-list-tile--compact-front": {
            width: vars.compact_front_item_width + "px"
          }
        }
      })];
    },
    front_item_width: function front_item_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__content-front": {
          ":not(.pe-list-tile--compact-front)": {
            width: vars.front_item_width + "px"
          }
        }
      })];
    },
    font_size_small: function font_size_small(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list-tile__content": {
          " small": {
            fontSize: vars.font_size_small + "px"
          }
        }
      })];
    },
    has_high_subtitle_padding: function has_high_subtitle_padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--high-subtitle": {
          " .pe-list-tile__content": [paddingV(vars.has_high_subtitle_padding, vars.has_high_subtitle_padding + 1)]
        }
      })];
    },
    has_subtitle_padding: function has_subtitle_padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--subtitle": {
          " .pe-list-tile__content": [paddingV(vars.has_subtitle_padding, vars.has_subtitle_padding + 1)]
        }
      })];
    },
    single_height: function single_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
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
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--header": {
          " .pe-list-tile__title": {
            fontSize: vars.font_size_list_header + "px"
          }
        }
      })];
    },
    font_weight_list_header: function font_weight_list_header(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-list-tile--header": {
          " .pe-list-tile__title": {
            fontWeight: vars.font_weight_list_header
          }
        }
      })];
    },
    compact_padding: function compact_padding(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-list--compact &, &.pe-list-tile--compact": {
          ":not(.pe-list-tile--header)": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars.compact_padding, vars.compact_padding + 1)
          }
        }
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  // SPECS
  //
  // heights:
  // single line: 48
  // single line, dense: 40
  // single line, with icon: 48
  // single line, with icon, dense: 40
  // single line, with avatar: 56
  // single line, with avatar, dense: 48
  // two-line: 72
  // two-line, dense: 60
  // three-line: 88
  // three-line, dense: 76

  var single_height = 48;
  var padding = 8;
  var single_with_icon_height = 56;

  var vars = {
    general_styles: true,

    compact_front_item_width: 64,
    compact_padding: 9,
    compact_side_padding: 1 * polytheneTheme.vars.grid_unit_component,
    font_size_list_header: 14,
    font_size_navigation_title: 14,
    font_size_small: 12,
    font_size_subtitle: 14,
    font_size_title: 16,
    font_weight_list_header: polytheneTheme.vars.font_weight_medium,
    font_weight_navigation_title: polytheneTheme.vars.font_weight_medium,
    font_weight_subtitle: polytheneTheme.vars.font_weight_normal,
    font_weight_title: polytheneTheme.vars.font_weight_normal,
    front_item_width: 72,
    has_high_subtitle_padding: 13,
    has_subtitle_padding: 15,
    high_subtitle_line_count: 2,
    line_height_subtitle: 20,
    padding: 13,
    side_padding: 2 * polytheneTheme.vars.grid_unit_component,
    single_height: single_height,
    single_line_height: single_height - 2 * padding - (2 * 5 + 1),
    single_with_icon_height: single_with_icon_height,
    single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
    subtitle_line_count: 1,
    title_line_count: 1,

    color_light_title: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_subtitle: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_info: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_tertiary),
    color_light_front: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_text_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_list_header: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_tertiary),
    color_light_secondary: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_hover: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_hover_front: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_hover_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_focus_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_selected_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_highlight_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    // background color may be set in theme; disabled by default
    // color_light_background:          "inherit",

    color_dark_title: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_subtitle: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_info: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_tertiary),
    color_dark_front: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_text_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_list_header: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_tertiary),
    color_dark_secondary: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_hover: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_hover_front: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_hover_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_selected_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_highlight_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover)
    // background color may be set in theme; disabled by default
    // color_dark_background:           "inherit",
  };

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
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-list-tile.js.map
