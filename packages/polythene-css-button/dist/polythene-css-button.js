(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
      component: "pe-text-button",
      super: "pe-button",
      row: "pe-button-row",

      // elements      
      content: "pe-button__content",
      label: "pe-button__label",
      textLabel: "pe-button__text-label",
      wash: "pe-button__wash",
      dropdown: "pe-button__dropdown",

      // states      
      border: "pe-button--border",
      contained: "pe-button--contained",
      disabled: "pe-button--disabled",
      dropdownClosed: "pe-button--dropdown-closed",
      dropdownOpen: "pe-button--dropdown-open",
      extraWide: "pe-button--extra-wide",
      hasDropdown: "pe-button--dropdown",
      highLabel: "pe-button--high-label",
      inactive: "pe-button--inactive",
      raised: "pe-button--raised",
      selected: "pe-button--selected",
      separatorAtStart: "pe-button--separator-start"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        userSelect: "none",
        "-moz-user-select": "none",
        outline: "none",
        padding: 0,
        textDecoration: "none",
        textAlign: "center",
        cursor: "pointer",

        ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
          cursor: "default",
          pointerEvents: "none"
        },

        " .pe-button__content": {
          position: "relative",
          borderRadius: "inherit"
        },

        " .pe-button__label": [polytheneCoreCss.mixin.fontSmoothing(), {
          position: "relative",
          display: "block",
          borderRadius: "inherit",
          pointerEvents: "none"
        }],

        " .pe-button__wash": [polytheneCoreCss.mixin.fit(), {
          zIndex: 0,
          borderRadius: "inherit",
          pointerEvents: "none"
        }]
      }), {
        ".pe-button-row": {
          // prevent inline block style to add extra space:
          fontSize: 0,
          lineHeight: 0
        }
      }];
    },
    row_margin_h: function row_margin_h(selector, vars) {
      return [{
        ".pe-button-row": _defineProperty({
          margin: "0 -" + vars.row_margin_h + "px"

        }, " " + selector, {
          margin: "0 " + vars.row_margin_h + "px"
        })
      }];
    }
  };

  var superLayout = polytheneCoreCss.createLayout({ varFns: varFns });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _border = function _border(selector, vars, tint) {
    return polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_border"]
        }
      }
    });
  };

  var generalFns = {
    general_styles: function general_styles() {
      return [];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty$1(_ref, "color_" + tint + "_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled)": {
          "&, &:link, &:visited": {
            color: vars["color_" + tint + "_text"]
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_disabled_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--disabled": {
          color: vars["color_" + tint + "_disabled_text"]
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled):not(.pe-button--selected)": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_active_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled)": {
          ".pe-button--selected": {
            " .pe-button__content": {
              backgroundColor: vars["color_" + tint + "_active_background"]
            }
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_disabled_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--disabled": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_disabled_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_border", function (selector, vars) {
      return [_border(selector + ".pe-button--border", vars, tint)];
    }), _defineProperty$1(_ref, "border", function border(selector, vars) {
      return [_border(selector, vars, tint)];
    }), _defineProperty$1(_ref, "color_" + tint + "_active_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--border.pe-button--selected": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_active_border"]
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_disabled_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--border.pe-button--disabled": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_disabled_border"]
          }
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_icon", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__dropdown": {
          color: vars["color_" + tint + "_icon"]
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_separator", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--separator-start": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_separator"]
          }
        }
      })];
    }), _ref;
  };

  var hoverTintFns = function hoverTintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_hover", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled):not(.pe-button--selected)": {
          color: vars["color_" + tint + "_hover"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_hover_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled):not(.pe-button--selected)": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_hover_border"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_wash_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled):not(.pe-button--selected)": {
          " .pe-button__wash": {
            backgroundColor: vars["color_" + tint + "_wash_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ":not(.pe-button--disabled):not(.pe-button--selected)": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_hover_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_hover_icon", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__dropdown": {
          color: vars["color_" + tint + "_hover_icon"]
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

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function () {
      return {
        ".pe-button--separator-start .pe-button__content": {
          borderStyle: isRTL ? "none solid none none" : "none none none solid"
        }
      };
    };
  };
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var line_height_label_padding_v = function line_height_label_padding_v(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-button__dropdown": {
        minHeight: "calc((1em * " + vars.line_height + ") + 2 * " + vars.label_padding_v + "px)"
      }
    });
  };

  var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      ".pe-button--high-label": {
        padding: 0,

        " .pe-button__label": {
          padding: vars.outer_padding_v + vars.label_padding_v + "px 0"
        }
      }
    });
  };

  var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      ".pe-button--high-label": {
        " .pe-button__label, .pe-button__dropdown": {
          minHeight: "calc((1em * " + vars.line_height + ") + 2 * " + (vars.outer_padding_v + vars.label_padding_v) + "px)"
        }
      }
    });
  };

  var border_radius_button_group = function border_radius_button_group(selector, vars, isRTL) {
    var _peButton__content, _peButton__content2;

    return polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        borderRadius: vars.border_radius + "px"
      },
      ":not(:first-child)": {
        " .pe-button__content": (_peButton__content = {}, _defineProperty$2(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty$2(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
      },
      ":not(:last-child)": {
        " .pe-button__content": (_peButton__content2 = {}, _defineProperty$2(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty$2(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
      }
    });
  };

  var _border$1 = function _border(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-button__wash, .pe-ripple": polytheneCoreCss.mixin.fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        paddingLeft: vars.padding_h_border + "px",
        paddingRight: vars.padding_h_border + "px"
      }
    });
  };

  var _border_width = function _border_width(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        borderWidth: vars.border_width + "px"
      },
      " .pe-button-group & + &": {
        marginLeft: -vars.border_width + "px"
      }
    });
  };

  var _contained = function _contained(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        paddingLeft: vars.padding_h + "px",
        paddingRight: vars.padding_h + "px"
      },
      " .pe-button__wash": {
        display: "none"
      }
    });
  };

  var varFns$1 = {
    general_styles: function general_styles(selector, vars) {
      return [polytheneCoreCss.sel(selector, [alignLeft(), {
        display: "inline-block",
        background: "transparent",
        border: "none",

        " .pe-button__content": {
          position: "relative",
          borderWidth: "1px", // default
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },

        ".pe-button--border": _border$1(selector, vars),

        " .pe-button__label, .pe-button__dropdown": {
          whiteSpace: "pre",
          userSelect: "none",
          "-moz-user-select": "none"
        },

        " .pe-button__text-label": {
          display: "inline-block",
          lineHeight: 1
        },

        ".pe-button--dropdown": {
          minWidth: "0", // IE 11 does not recognize "initial" here

          " .pe-button__dropdown": {
            position: "relative"
          },

          " .pe-svg": {
            position: "absolute",
            left: 0,
            top: "50%"
          },

          " .pe-button__label + .pe-button__dropdown": {
            marginLeft: "6px",
            minWidth: 0
          }
        },

        " .pe-button-group &": {
          minWidth: 0
        },

        " .pe-button__dropdown .pe-svg": polytheneCoreCss.mixin.defaultTransition("transform"),

        ".pe-button--dropdown-open": {
          " .pe-button__dropdown .pe-svg": {
            transform: "rotate(-180deg)"
          }
        }
      }]), [polytheneCoreCss.sel(polytheneCoreCss.selectorRTL(selector), alignRight())]];
    },
    border_radius: function border_radius(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content": {
          borderRadius: vars.border_radius + "px"
        }
      }), border_radius_button_group(".pe-button-group " + selector, vars, false), border_radius_button_group(polytheneCoreCss.selectorRTL(".pe-button-group " + selector), vars, true)];
    },
    border_width: function border_width(selector, vars) {
      return [_border_width(selector, vars)];
    },
    min_width: function min_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        minWidth: vars.min_width + "px"
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
      })];
    },
    padding_h: function padding_h(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__content": {
          padding: "0 " + vars.padding_h + "px",

          " .pe-button__dropdown": {
            minWidth: "calc(36px - 2 * " + vars.padding_h + "px)"
          },

          ".pe-button--dropdown": {
            " .pe-button__label + .pe-button__dropdown": {
              marginRight: "calc(7px - " + vars.padding_h + "px)"
            }
          }
        }
      })];
    },
    padding_h_extra_wide: function padding_h_extra_wide(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--extra-wide .pe-button__content": {
          padding: "0 " + vars.padding_h_extra_wide + "px"
        }
      })];
    },
    label_padding_v: function label_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__label": {
          padding: vars.label_padding_v + "px 0"
        },

        ".pe-button--border": {
          " .pe-button__label": {
            padding: vars.label_padding_v - 1 + "px 0"
          }
        }
      }), line_height_label_padding_v(selector, vars), outer_padding_v_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)];
    },
    font_weight: function font_weight(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__label": {
          fontWeight: vars.font_weight
        }
      })];
    },
    text_transform: function text_transform(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__label": {
          textTransform: vars.text_transform
        }
      })];
    },
    font_size: function font_size(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__label, .pe-button__dropdown": {
          fontSize: vars.font_size + "px"
        }
      })];
    },
    line_height: function line_height(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-button__label, .pe-button__dropdown": {
          lineHeight: vars.line_height
        }
      }), line_height_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)];
    },
    dropdown_icon_size: function dropdown_icon_size(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--dropdown": {
          " .pe-button__dropdown": {
            width: vars.dropdown_icon_size + "px"

          },
          " .pe-svg": {
            width: vars.dropdown_icon_size + "px",
            height: vars.dropdown_icon_size + "px",
            marginTop: -vars.dropdown_icon_size / 2 + "px"
          }
        }
      })];
    },
    outer_padding_v: function outer_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        padding: vars.outer_padding_v + "px 0",

        ".pe-button--high-label": {
          padding: 0
        }
      }), outer_padding_v_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)];
    },
    separator_width: function separator_width(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        ".pe-button--separator-start": {
          " .pe-button__content": {
            borderWidth: vars.separator_width + "px"
          }
        }
      })];
    },
    letter_spacing: function letter_spacing(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        letterSpacing: vars.letter_spacing + "px"
      })];
    },

    // Theme vars

    border: function border(selector, vars) {
      return vars.border && _border$1(selector, vars);
    },
    contained: function contained(selector, vars) {
      return vars.contained && _contained(selector, vars);
    }
  };

  var superLayout$1 = polytheneCoreCss.createLayout({ varFns: varFns$1 });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var widePadding = 4 * polytheneTheme.vars.grid_unit; // 16

  var touch_height = polytheneTheme.vars.unit_touch_height; // 48
  var height = 36;
  var border_width = 1;

  var themeVars = {
    border: false,
    contained: false
  };

  var borderVars = {
    border_width: border_width,
    padding_h_border: widePadding,

    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_medium), // only specify this variable to get all 4 states
    // color_light_hover_border:             "transparent",
    // color_light_active_border:            "transparent",
    color_light_disabled_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    //
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_medium), // only specify this variable to get all 4 states
    // color_dark_hover_border:              "transparent",
    // color_dark_active_border:             "transparent",
    color_dark_disabled_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled)
  };

  var vars = _extends$1({}, {
    general_styles: true,

    animation_duration: polytheneTheme.vars.animation_duration,
    border_radius: polytheneTheme.vars.unit_item_border_radius,
    dropdown_icon_size: 24,
    font_size: 14,
    font_weight: 500,
    label_padding_v: 11,
    letter_spacing: 0.75,
    line_height: 1,
    min_width: 8 * polytheneTheme.vars.grid_unit_component,
    outer_padding_v: (touch_height - height) / 2, // (48 - 36) / 2 = 6
    padding_h: 2 * polytheneTheme.vars.grid_unit, // 8
    padding_h_extra_wide: 6 * polytheneTheme.vars.grid_unit, // 24
    row_margin_h: polytheneTheme.vars.grid_unit,
    separator_width: border_width,
    text_transform: "uppercase",

    color_light_background: "transparent",
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),
    color_light_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_active),
    color_light_disabled_background: "transparent",
    color_light_disabled_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_separator: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),

    color_dark_background: "transparent",
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_wash_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover),
    color_dark_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_active),
    color_dark_disabled_background: "transparent",
    color_dark_disabled_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_separator: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)

    // color_light_hover:                  rgba(vars.color_light_foreground, vars.blend_light_text_primary),
    // color_light_hover_background:       "transparent",
    // color_light_hover_icon:             "inherit",
    //
    // color_dark_hover:                   rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
    // color_dark_hover_background:        "transparent",
    // color_dark_hover_icon:              "inherit",
  }, borderVars, themeVars);

  var fns = [superLayout$1, color];
  var superFns = [superLayout];
  var superSelector = "." + classes.super;
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref.mediaQuery;

    var finalVars = customVars && customVars.contained ? containedButtonVars : vars;
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [superSelector, customSelector],
      fns: superFns,
      vars: finalVars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: finalVars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
  };

  var getStyle = function getStyle() {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref2.mediaQuery;

    var finalVars = customVars && customVars.contained ? containedButtonVars : vars;
    return polytheneCoreCss.styler.getStyle({
      selectors: [superSelector, customSelector],
      fns: superFns,
      vars: finalVars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }).concat(polytheneCoreCss.styler.getStyle({
      selectors: [selector, customSelector],
      fns: fns,
      vars: finalVars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }));
  };

  polytheneCoreCss.styler.addStyle({
    selectors: [superSelector],
    fns: superFns,
    vars: vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  var color$1 = polytheneCoreCss.createColor({
    superColor: color
  });

  var layout = polytheneCoreCss.createLayout({
    superLayout: superLayout$1
  });

  var containedButtonVars = {
    general_styles: true,

    padding_h: 4 * polytheneTheme.vars.grid_unit, // 16

    color_light_background: "#fff",
    color_light_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_wash_background: "transparent",

    color_dark_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_dark),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
    color_dark_wash_background: "transparent"
  };

  var fns$1 = [layout, color$1];
  var selectors = [classes.component, classes.contained].join(" ");
  var selector$1 = "." + selectors.split(/\s/).join(".");

  var addStyle$1 = polytheneCoreCss.styler.createAddStyle(selector$1, fns$1, containedButtonVars);

  var getStyle$1 = polytheneCoreCss.styler.createGetStyle(selector$1, fns$1, containedButtonVars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector$1],
    fns: fns$1,
    vars: containedButtonVars
  });

  var addStyle$2 = function addStyle$$1(customSelector, customVars) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref.mediaQuery;

    addStyle(customSelector, customVars, { mediaQuery: mediaQuery });
  };

  var getStyle$2 = function getStyle$$1() {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref2.mediaQuery;

    return getStyle(customSelector, customVars, { mediaQuery: mediaQuery }).concat(getStyle$1(customSelector, customVars, { mediaQuery: mediaQuery }));
  };

  var textButtonVars = vars;
  var textButtonColor = color;
  var textButtonLayout = superLayout$1;

  exports.addStyle = addStyle$2;
  exports.getStyle = getStyle$2;
  exports.textButtonColor = textButtonColor;
  exports.textButtonLayout = textButtonLayout;
  exports.textButtonVars = textButtonVars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-button.js.map
