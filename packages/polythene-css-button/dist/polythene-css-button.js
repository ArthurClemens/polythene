(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-css-shadow'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-css-shadow', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-css-shadow'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCssShadow,polytheneCoreCss) { 'use strict';

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

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
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
    }],
    row_margin_h: (selector, vars) => [{
      ".pe-button-row": {
        margin: `0 -${vars.row_margin_h}px`,
        [` ${selector}`]: {
          margin: `0 ${vars.row_margin_h}px`
        }
      }
    }]
  };
  var superLayout = polytheneCoreCss.createLayout({
    varFns
  });

  const border = (selector, vars, tint) => polytheneCoreCss.sel(selector, {
    ":not(.pe-button--disabled)": {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_border"]
      }
    }
  });

  const generalFns = {
    general_styles: () => []
  };

  const tintFns = tint => ({
    // Text
    ["color_" + tint + "_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        }
      }
    })],
    ["color_" + tint + "_disabled_text"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"]
      }
    })],
    // Background
    ["color_" + tint + "_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      }
    })],
    ["color_" + tint + "_active_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled)": {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_active_background"]
          }
        }
      }
    })],
    ["color_" + tint + "_disabled_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"]
        }
      }
    })],
    // Borders
    ["color_" + tint + "_border"]: (selector, vars) => [border(`${selector}.pe-button--border`, vars, tint)],
    border: (selector, vars) => [border(selector, vars, tint)],
    ["color_" + tint + "_active_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"]
        }
      }
    })],
    ["color_" + tint + "_disabled_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"]
        }
      }
    })],
    // Icon
    ["color_" + tint + "_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      }
    })],
    // Separator
    ["color_" + tint + "_separator"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })]
  });

  const hoverTintFns = tint => ({
    ["color_" + tint + "_hover"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        color: vars["color_" + tint + "_hover"]
      }
    })],
    ["color_" + tint + "_hover_border"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_hover_border"]
        }
      }
    })],
    ["color_" + tint + "_wash_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        }
      }
    })],
    ["color_" + tint + "_hover_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        }
      }
    })],
    ["color_" + tint + "_hover_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  const lightTintHoverFns = hoverTintFns("light");
  const darkTintHoverFns = hoverTintFns("dark");
  var superColor = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns,
      lightTintHoverFns,
      darkTintHoverFns
    }
  });

  const alignSide = isRTL => () => ({
    ".pe-button--separator-start .pe-button__content": {
      borderStyle: isRTL ? "none solid none none" : "none none none solid"
    }
  });

  const alignLeft = alignSide(false);
  const alignRight = alignSide(true);

  const line_height_label_padding_v = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-button__dropdown": {
      minHeight: `calc((1em * ${vars.line_height}) + 2 * ${vars.label_padding_v}px)`
    }
  });

  const outer_padding_v_label_padding_v = (selector, vars) => polytheneCoreCss.sel(selector, {
    ".pe-button--high-label": {
      padding: 0,
      " .pe-button__label": {
        padding: vars.outer_padding_v + vars.label_padding_v + "px 0"
      }
    }
  });

  const line_height_outer_padding_v_label_padding_v = (selector, vars) => polytheneCoreCss.sel(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: `calc((1em * ${vars.line_height}) + 2 * ${vars.outer_padding_v + vars.label_padding_v}px)`
      }
    }
  });

  const border_radius_button_group = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-button__content": {
      borderRadius: vars.border_radius + "px"
    },
    ":not(:first-child)": {
      " .pe-button__content": {
        [isRTL ? "borderTopRightRadius" : "borderTopLeftRadius"]: 0,
        [isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: 0
      }
    },
    ":not(:last-child)": {
      " .pe-button__content": {
        [isRTL ? "borderTopLeftRadius" : "borderTopRightRadius"]: 0,
        [isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius"]: 0
      }
    }
  });

  const border$1 = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-button__wash, .pe-ripple": polytheneCoreCss.mixin.fit(-1),
    " .pe-button__content": {
      borderStyle: "solid",
      paddingLeft: vars.padding_h_border + "px",
      paddingRight: vars.padding_h_border + "px"
    }
  });

  const border_width = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-button__content": {
      borderWidth: vars.border_width + "px"
    },
    " .pe-button-group & + &": {
      marginLeft: -vars.border_width + "px"
    }
  });

  const contained = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-button__content": {
      paddingLeft: vars.padding_h + "px",
      paddingRight: vars.padding_h + "px"
    },
    " .pe-button__wash": {
      display: "none"
    }
  });

  const varFns$1 = {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, [alignLeft(), {
      display: "inline-block",
      background: "transparent",
      border: "none",
      " .pe-button__content": {
        position: "relative",
        borderWidth: "1px",
        // default
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      ".pe-button--border": border$1(selector, vars),
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
        minWidth: "0",
        // IE 11 does not recognize "initial" here
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
    }]), [polytheneCoreCss.sel(polytheneCoreCss.selectorRTL(selector), alignRight())]],
    border_radius: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        borderRadius: vars.border_radius + "px"
      }
    }), border_radius_button_group(`.pe-button-group ${selector}`, vars, false), border_radius_button_group(polytheneCoreCss.selectorRTL(`.pe-button-group ${selector}`), vars, true)],
    border_width: (selector, vars) => [border_width(selector, vars)],
    min_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      minWidth: vars.min_width + "px"
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
    })],
    padding_h: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        padding: "0 " + vars.padding_h + "px",
        " .pe-button__dropdown": {
          minWidth: `calc(36px - 2 * ${vars.padding_h}px)`
        },
        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: `calc(7px - ${vars.padding_h}px)`
          }
        }
      }
    })],
    padding_h_extra_wide: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars.padding_h_extra_wide + "px"
      }
    })],
    label_padding_v: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__label": {
        padding: vars.label_padding_v + "px 0"
      },
      ".pe-button--border": {
        " .pe-button__label": {
          padding: vars.label_padding_v - 1 + "px 0"
        }
      }
    }), line_height_label_padding_v(selector, vars), outer_padding_v_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)],
    font_weight: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__label": {
        fontWeight: vars.font_weight
      }
    })],
    text_transform: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__label": {
        textTransform: vars.text_transform
      }
    })],
    font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars.font_size + "px"
      }
    })],
    line_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars.line_height
      }
    }), line_height_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)],
    dropdown_icon_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
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
    })],
    outer_padding_v: (selector, vars) => [polytheneCoreCss.sel(selector, {
      padding: vars.outer_padding_v + "px 0",
      ".pe-button--high-label": {
        padding: 0
      }
    }), outer_padding_v_label_padding_v(selector, vars), line_height_outer_padding_v_label_padding_v(selector, vars)],
    separator_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars.separator_width + "px"
        }
      }
    })],
    letter_spacing: (selector, vars) => [polytheneCoreCss.sel(selector, {
      letterSpacing: vars.letter_spacing + "px"
    })],
    // Theme vars
    border: (selector, vars) => vars.border && border$1(selector, vars),
    contained: (selector, vars) => vars.contained && contained(selector, vars),
    // shadow_depth:
    ...polytheneCssShadow.sharedVarFns
  };
  var superLayout$1 = polytheneCoreCss.createLayout({
    varFns: varFns$1
  });

  const themeVars = Object.assign({}, {
    border: false,
    contained: true
  }, polytheneCssShadow.sharedVars);
  var containedButtonVars = Object.assign({}, {
    general_styles: true,
    padding_h: 4 * polytheneTheme.vars.grid_unit,
    // 16
    color_light_background: "#fff",
    color_light_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_wash_background: "transparent",
    color_dark_active_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_dark),
    color_dark_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_disabled_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_disabled),
    color_dark_wash_background: "transparent"
  }, themeVars);

  const touch_height = polytheneTheme.vars.unit_touch_height; // 48

  const height = 36;
  const border_width$1 = 1;
  const themeVars$1 = Object.assign({}, {
    border: false,
    contained: false
  }, polytheneCssShadow.sharedVars);
  const borderVars = {
    border_width: border_width$1,
    padding_h_border: containedButtonVars.padding_h,
    color_light_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_medium),
    // only specify this variable to get all 4 states
    // color_light_hover_border:             "transparent",
    // color_light_active_border:            "transparent",
    color_light_disabled_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    //
    color_dark_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_medium),
    // only specify this variable to get all 4 states
    // color_dark_hover_border:              "transparent",
    // color_dark_active_border:             "transparent",
    color_dark_disabled_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled)
  };
  var vars = Object.assign({}, {
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
    outer_padding_v: (touch_height - height) / 2,
    // (48 - 36) / 2 = 6
    padding_h: 2 * polytheneTheme.vars.grid_unit,
    // 8
    padding_h_extra_wide: 6 * polytheneTheme.vars.grid_unit,
    // 24
    row_margin_h: polytheneTheme.vars.grid_unit,
    separator_width: border_width$1,
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
    color_dark_separator: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light) // color_light_hover:                  rgba(vars.color_light_foreground, vars.blend_light_text_primary),
    // color_light_hover_background:       "transparent",
    // color_light_hover_icon:             "inherit",
    //
    // color_dark_hover:                   rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
    // color_dark_hover_background:        "transparent",
    // color_dark_hover_icon:              "inherit",

  }, borderVars, themeVars$1);

  const fns = [superLayout$1, superColor];
  const superFns = [superLayout];
  const superSelector = `.${classes.super}`;
  const selector = `.${classes.component}`;

  const addStyle = (customSelector, customVars, {
    mediaQuery
  } = {}) => {
    const finalVars = customVars && customVars.contained ? containedButtonVars : vars;
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [superSelector, customSelector],
      fns: superFns,
      vars: finalVars,
      customVars,
      mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [selector, customSelector],
      fns,
      vars: finalVars,
      customVars,
      mediaQuery
    });
  };

  const getStyle = (customSelector = "", customVars, {
    mediaQuery
  } = {}) => {
    const finalVars = customVars && customVars.contained ? containedButtonVars : vars;
    return polytheneCoreCss.styler.getStyle({
      selectors: [superSelector, customSelector],
      fns: superFns,
      vars: finalVars,
      customVars,
      mediaQuery
    }).concat(polytheneCoreCss.styler.getStyle({
      selectors: [selector, customSelector],
      fns,
      vars: finalVars,
      customVars,
      mediaQuery
    }));
  };

  polytheneCoreCss.styler.addStyle({
    selectors: [superSelector],
    fns: superFns,
    vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  var color = polytheneCoreCss.createColor({
    superColor
  });

  var layout = polytheneCoreCss.createLayout({
    superLayout: superLayout$1
  });

  const fns$1 = [layout, color];
  const selectors = [classes.component, classes.contained].join(" ");
  const selector$1 = `.${selectors.split(/\s/).join(".")}`;
  const addStyle$1 = polytheneCoreCss.styler.createAddStyle(selector$1, fns$1, containedButtonVars);
  const getStyle$1 = polytheneCoreCss.styler.createGetStyle(selector$1, fns$1, containedButtonVars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector$1],
    fns: fns$1,
    vars: containedButtonVars
  });

  const addStyle$2 = (customSelector, customVars, {
    mediaQuery
  } = {}) => {
    addStyle(customSelector, customVars, {
      mediaQuery
    });
  };

  const getStyle$2 = (customSelector = "", customVars, {
    mediaQuery
  } = {}) => getStyle(customSelector, customVars, {
    mediaQuery
  }).concat(getStyle$1(customSelector, customVars, {
    mediaQuery
  }));

  const textButtonVars = vars;
  const textButtonColor = superColor;
  const textButtonLayout = superLayout$1;

  exports.addStyle = addStyle$2;
  exports.getStyle = getStyle$2;
  exports.textButtonColor = textButtonColor;
  exports.textButtonLayout = textButtonLayout;
  exports.textButtonVars = textButtonVars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-button.js.map
