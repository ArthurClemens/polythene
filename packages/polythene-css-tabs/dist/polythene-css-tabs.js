(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-button'), require('polythene-css-icon-button'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-button', 'polythene-css-icon-button', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-button'],global['polythene-css-icon-button'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssButton,polytheneCssIconButton,polytheneTheme,polytheneCoreCss) { 'use strict';

  var buttonClasses = {
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

  var classes = {
    component: "pe-tabs",
    // elements
    indicator: "pe-tabs__indicator",
    scrollButton: "pe-tabs__scroll-button",
    scrollButtonAtEnd: "pe-tabs__scroll-button-end",
    scrollButtonAtStart: "pe-tabs__scroll-button-start",
    tab: "pe-tab",
    tabContent: "pe-tabs__tab-content",
    tabRow: "pe-tabs__row",
    // states
    activeSelectable: "pe-tabs__active--selectable",
    isAtEnd: "pe-tabs--end",
    isAtStart: "pe-tabs--start",
    isAutofit: "pe-tabs--autofit",
    isMenu: "pe-tabs--menu",
    scrollable: "pe-tabs--scrollable",
    compactTabs: "pe-tabs--compact",
    tabHasIcon: "pe-tabs__tab--icon",
    tabRowCentered: "pe-tabs__row--centered",
    tabRowIndent: "pe-tabs__row--indent",
    // lookup
    label: buttonClasses.label
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: "transparent"
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_selected"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          color: vars["color_" + tint + "_selected"]
        }
      }
    })],
    ["color_" + tint + "_selected_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: vars["color_" + tint + "_selected_background"]
        }
      }
    })],
    ["color_" + tint + "_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-button--selected) .pe-icon": {
        color: vars["color_" + tint + "_icon"]
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var tabColor = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    },
    textButtonColor: polytheneCssButton.textButtonColor
  });

  const tab_label_transition_property_animation_duration = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-button__content": polytheneCoreCss.mixin.defaultTransition(vars.tab_label_transition_property, vars.animation_duration)
  });

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.flex(), polytheneCoreCss.flex.flexIndex("none"), {
      userSelect: "none",
      "-moz-user-select": "none",
      margin: 0,
      borderRadius: 0,
      padding: 0,
      " .pe-button__content": {
        lineHeight: polytheneTheme.vars.line_height + "em",
        borderRadius: 0,
        position: "relative",
        " .pe-button__label, .pe-icon": {
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": {
          padding: 0,
          width: "100%" // for IE 11

        },
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }
      },
      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          minWidth: 0,
          " .pe-button__content": {
            " .pe-icon": {
              marginBottom: 0
            },
            " .pe-button__content": {
              fontSize: "10px",
              lineHeight: "12px",
              textTransform: "none"
            }
          }
        }
      },
      ".pe-tabs--compact &": {
        minWidth: "initial"
      },
      " .pe-tabs__tab-content": [polytheneCoreCss.flex.layoutCenterCenter, polytheneCoreCss.flex.layoutVertical, {
        height: "inherit"
      }],
      ".pe-tabs--autofit &": [polytheneCoreCss.flex.flex(), {
        minWidth: "initial",
        maxWidth: "none"
      }],
      ".pe-tabs__active--selectable &": {
        ".pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial"
        }
      }
    }])],
    tab_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      height: vars.tab_height + "px",
      " .pe-button__content": {
        height: vars.tab_height + "px"
      }
    })],
    tab_min_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      minWidth: vars.tab_min_width + "px" // for smaller screens, see also media query

    })],
    tab_max_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      maxWidth: isNaN(vars.tab_max_width) ? vars.tab_max_width : vars.tab_max_width + "px"
    })],
    tab_min_width_tablet: (selector, vars) => ({
      ["@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_landscape_up + "px)"]: {
        [`.pe-tabs:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable):not(.pe-tabs--compact) ${selector}`]: {
          minWidth: vars.tab_min_width_tablet + "px"
        }
      }
    }),
    tab_icon_label_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          height: vars.tab_icon_label_height + "px"
        }
      }
    })],
    tab_label_transition_property: (selector, vars) => [tab_label_transition_property_animation_duration(selector, vars)],
    animation_duration: (selector, vars) => [tab_label_transition_property_animation_duration(selector, vars)],
    tab_content_padding_v: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        padding: "0 " + vars.tab_content_padding_v + "px"
      }
    })],
    label_max_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars.label_max_width + "px" // or .pe-tabs width minus 56dp

        }
      }
    })],
    tab_label_line_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars.tab_label_line_height + "px",
          maxHeight: 2 * vars.tab_label_line_height + "px"
        }
      }
    })],
    tab_label_vertical_offset: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button__content": {
        " .pe-button__label": {
          margin: vars.tab_label_vertical_offset + "px 0 0 0"
        }
      }
    })],
    tab_icon_label_icon_spacing: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-icon": {
            marginBottom: vars.tab_icon_label_icon_spacing + "px"
          }
        }
      }
    })],
    menu_tab_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs--menu &": {
        // reset sizes to fit within a small space
        height: vars.menu_tab_height + "px",
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            height: vars.menu_tab_height + "px"
          }
        }
      }
    })],
    menu_tab_icon_label_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs--menu &": {
        "&.pe-tabs__tab--icon": {
          height: vars.menu_tab_icon_label_height + "px"
        }
      }
    })],
    tab_menu_content_padding_v: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars.tab_menu_content_padding_v + "px"
          }
        }
      }
    })]
  };
  var tabLayout = polytheneCoreCss.createLayout({
    varFns,
    textButtonLayout: polytheneCssButton.textButtonLayout
  });

  const generalFns$1 = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-tabs__scroll-button": {
        color: "inherit"
      },
      " .pe-no-touch &": {
        ".pe-tabs--scrollable": {
          backgroundColor: "inherit"
        },
        " .pe-tabs__scroll-button": {
          backgroundColor: "inherit",
          " .pe-button__content": {
            backgroundColor: "inherit"
          }
        }
      }
    })]
  };

  const tintFns$1 = tint => ({
    ["color_" + tint + "_tab_indicator"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars["color_" + tint + "_tab_indicator"]
      }
    })]
  });

  const lightTintFns$1 = Object.assign({}, generalFns$1, tintFns$1("light"));
  const darkTintFns$1 = Object.assign({}, generalFns$1, tintFns$1("dark"));
  var tabsColor = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns: lightTintFns$1,
      darkTintFns: darkTintFns$1
    }
  });

  const alignSide = isRTL => () => ({
    " .pe-tabs__indicator": {
      transformOrigin: isRTL ? "right 50%" : "left 50%",
      [isRTL ? "right" : "left"]: 0
    }
  });

  const alignLeft = alignSide(false);
  const alignRight = alignSide(true);

  const tabs_indent = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-tabs__row": {
      ".pe-tabs__row--indent": {
        [isRTL ? "paddingRight" : "paddingLeft"]: vars.tabs_indent + "px"
      }
    }
  });

  const varFns$1 = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [alignLeft(), {
      userSelect: "none",
      "-moz-user-select": "none",
      transform: "translate3d(0,0,0)",
      "-webkit-overflow-scrolling": "touch",
      "& ::-webkit-scrollbar": {
        "display": "none"
      },
      ".pe-tabs--scrollable": {
        display: "flex",
        "-ms-overflow-style": "none",
        " .pe-tabs__scroll-button": {
          // default hide, show with html.pe-no-touch
          display: "none"
        },
        " .pe-tabs__tab": {
          minWidth: 0
        }
      },
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          position: "relative",
          display: "block",
          zIndex: 1,
          borderRadius: 0,
          " .pe-button__content": {
            borderRadius: 0,
            transitionProperty: "all",
            transitionTimingFunction: "ease-in-out"
          }
        },
        ".pe-tabs--start .pe-tabs__scroll-button-start": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        },
        ".pe-tabs--end .pe-tabs__scroll-button-end": {
          pointerEvents: "none",
          cursor: "default",
          opacity: 0
        }
      },
      " .pe-tabs__row": [polytheneCoreCss.flex.layoutHorizontal, {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "relative",
        whiteSpace: "nowrap",
        ".pe-tabs__row--indent": {
          margin: 0,
          overflow: "auto"
        },
        ".pe-tabs__row--centered": polytheneCoreCss.flex.layoutCenterJustified
      }],
      " .pe-tabs__scroll-button-offset": [polytheneCoreCss.flex.flex(), polytheneCoreCss.flex.flexIndex("none")],
      " .pe-tabs__indicator": {
        transform: "translate3d(0,0,0)",
        // transformOrigin set in alignSide
        transitionProperty: "all",
        transitionTimingFunction: "ease-in-out",
        position: "absolute",
        zIndex: 1,
        bottom: 0,
        // left/right set in alignSide
        width: "100%" // and transformed with js
        // background-color defined in implementation/theme css

      },
      " .pe-toolbar--tabs .pe-toolbar__bar &": [polytheneCoreCss.mixin.fit(), {
        width: "auto",
        margin: 0,
        top: "auto"
      }]
    }]), {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight()]
    }],
    tabs_indent: (selector, vars) => [tabs_indent(selector, vars, false), tabs_indent(polytheneCoreCss.selectorRTL(selector), vars, true)],
    tab_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs--scrollable": {
        display: "flex",
        // hide scrollbar (this approach is required for Firefox)
        "max-height": vars.tab_height + "px"
      }
    })],
    scrollbar_offset: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-tabs--scrollable": {
        " .pe-tabs__row": {
          marginBottom: -vars.scrollbar_offset + "px"
        }
      }
    })],
    scroll_button_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          width: vars.scroll_button_size + "px",
          height: vars.scroll_button_size + "px"
        }
      }
    })],
    scroll_button_fade_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDuration: vars.scroll_button_fade_duration
          }
        }
      }
    })],
    scroll_button_fade_delay: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDelay: vars.scroll_button_fade_delay
          }
        }
      }
    })],
    scroll_button_opacity: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            opacity: vars.scroll_button_opacity
          }
        }
      }
    })],
    tab_indicator_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-tabs__indicator": {
        height: vars.tab_indicator_height + "px"
      }
    })]
  };
  var tabsLayout = polytheneCoreCss.createLayout({
    varFns: varFns$1
  });

  const fontSize = polytheneCssButton.textButtonVars.font_size;
  const tab_label_line_height = 1.1 * fontSize;
  const tab_height = 48;
  const scroll_button_size = tab_height;
  var vars = {
    general_styles: true,
    animation_duration: polytheneCssButton.textButtonVars.animation_duration,
    indicator_slide_speed: 600,
    // px per second
    label_max_width: 264,
    menu_tab_height: 44,
    menu_tab_icon_label_height: 44,
    scroll_button_fade_delay: ".25s",
    scroll_button_fade_duration: ".2s",
    scroll_button_opacity: .7,
    scroll_button_size,
    scrollbar_offset: 0,
    tab_content_padding_v: 12,
    tab_height,
    tab_icon_label_height: 72,
    tab_icon_label_icon_spacing: 7,
    tab_indicator_height: 2,
    tab_label_line_height,
    tab_label_transition_property: "opacity, color, backgroundColor",
    tab_label_vertical_offset: tab_label_line_height - fontSize,
    tab_max_width: "initial",
    tab_menu_content_padding_v: 6,
    tab_min_width: 72,
    tab_min_width_tablet: 160,
    tabs_indent: 0,
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_light_selected: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_selected_background: "transparent",
    color_light_tab_indicator: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_icon: polytheneCssIconButton.vars.color_light,
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular),
    color_dark_selected: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_selected_background: "transparent",
    color_dark_tab_indicator: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_icon: polytheneCssIconButton.vars.color_dark // hover colors may be set in theme; disabled by default
    // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
    // color_light_hover_background:         "transparent",
    //
    // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
    // color_dark_hover_background:          "transparent",

  };

  const tabsFns = [tabsLayout, tabsColor];
  const tabFns = [tabLayout, tabColor];
  const tabsSelector = `.${classes.component}`;
  const tabClass = `${classes.tab} pe-text-button pe-button`;
  const tabSelector = ` .${tabClass.replace(/ /g, ".")}`;

  const addStyle = (customSelector, customVars, {
    mediaQuery
  } = {}) => {
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, tabsSelector],
      fns: tabsFns,
      vars,
      customVars,
      mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, tabSelector],
      fns: tabFns,
      vars,
      customVars,
      mediaQuery
    });
  };

  const getStyle = (customSelector = "", customVars, {
    mediaQuery
  } = {}) => polytheneCoreCss.styler.getStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars,
    customVars,
    mediaQuery
  }).concat(polytheneCoreCss.styler.getStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars,
    customVars,
    mediaQuery
  }));

  polytheneCoreCss.styler.addStyle({
    selectors: [tabsSelector],
    fns: tabsFns,
    vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [tabSelector],
    fns: tabFns,
    vars
  });

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.tabColor = tabColor;
  exports.tabLayout = tabLayout;
  exports.tabsColor = tabsColor;
  exports.tabsLayout = tabsLayout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-tabs.js.map
