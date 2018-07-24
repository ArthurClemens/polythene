import { sel, createColor, mixin, flex, createLayout, selectorRTL, rgba, styler } from 'polythene-core-css';
import { textButtonColor, textButtonLayout, textButtonVars } from 'polythene-css-button';
import { vars } from 'polythene-theme';
import { vars as vars$1 } from 'polythene-css-icon-button';

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: "transparent"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_selected", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          color: vars$$1["color_" + tint + "_selected"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: vars$$1["color_" + tint + "_selected_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--selected) .pe-icon": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var tabColor = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  textButtonColor: textButtonColor
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tab_label_transition_property_animation_duration = function tab_label_transition_property_animation_duration(selector, vars$$1) {
  return sel(selector, {
    " .pe-button__content": mixin.defaultTransition(vars$$1.tab_label_transition_property, vars$$1.animation_duration)
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [flex.flex(), flex.flexIndex("none"), {
      userSelect: "none",
      "-moz-user-select": "none",
      margin: 0,
      borderRadius: 0,
      padding: 0,

      " .pe-button__content": {
        lineHeight: vars.line_height + "em",
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

      " .pe-tabs__tab-content": [flex.layoutCenterCenter, flex.layoutVertical, {
        height: "inherit"
      }],

      ".pe-tabs--autofit &": [flex.flex(), {
        minWidth: "initial",
        maxWidth: "none"
      }],

      ".pe-tabs__active--selectable &": {
        ".pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial"
        }
      }

    }])];
  },
  tab_height: function tab_height(selector, vars$$1) {
    return [sel(selector, {
      height: vars$$1.tab_height + "px",

      " .pe-button__content": {
        height: vars$$1.tab_height + "px"
      }
    })];
  },
  tab_min_width: function tab_min_width(selector, vars$$1) {
    return [sel(selector, {
      minWidth: vars$$1.tab_min_width + "px" // for smaller screens, see also media query
    })];
  },
  tab_max_width: function tab_max_width(selector, vars$$1) {
    return [sel(selector, {
      maxWidth: isNaN(vars$$1.tab_max_width) ? vars$$1.tab_max_width : vars$$1.tab_max_width + "px"
    })];
  },
  tab_min_width_tablet: function tab_min_width_tablet(selector, vars$$1) {
    return _defineProperty$1({}, "@media (min-width: " + vars.breakpoint_for_tablet_landscape_up + "px)", _defineProperty$1({}, ".pe-tabs:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable):not(.pe-tabs--compact) " + selector, {
      minWidth: vars$$1.tab_min_width_tablet + "px"
    }));
  },
  tab_icon_label_height: function tab_icon_label_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          height: vars$$1.tab_icon_label_height + "px"
        }
      }
    })];
  },
  tab_label_transition_property: function tab_label_transition_property(selector, vars$$1) {
    return [tab_label_transition_property_animation_duration(selector, vars$$1)];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [tab_label_transition_property_animation_duration(selector, vars$$1)];
  },
  tab_content_padding_v: function tab_content_padding_v(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content": {
        padding: "0 " + vars$$1.tab_content_padding_v + "px"
      }
    })];
  },
  label_max_width: function label_max_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars$$1.label_max_width + "px" // or .pe-tabs width minus 56dp
        }
      }
    })];
  },
  tab_label_line_height: function tab_label_line_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars$$1.tab_label_line_height + "px",
          maxHeight: 2 * vars$$1.tab_label_line_height + "px"
        }
      }
    })];
  },
  tab_label_vertical_offset: function tab_label_vertical_offset(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content": {
        " .pe-button__label": {
          margin: vars$$1.tab_label_vertical_offset + "px 0 0 0"
        }
      }
    })];
  },
  tab_icon_label_icon_spacing: function tab_icon_label_icon_spacing(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-icon": {
            marginBottom: vars$$1.tab_icon_label_icon_spacing + "px"
          }
        }
      }
    })];
  },
  menu_tab_height: function menu_tab_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu &": {
        // reset sizes to fit within a small space
        height: vars$$1.menu_tab_height + "px",

        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            height: vars$$1.menu_tab_height + "px"
          }
        }
      }
    })];
  },
  menu_tab_icon_label_height: function menu_tab_icon_label_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu &": {
        "&.pe-tabs__tab--icon": {
          height: vars$$1.menu_tab_icon_label_height + "px"
        }
      }
    })];
  },
  tab_menu_content_padding_v: function tab_menu_content_padding_v(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars$$1.tab_menu_content_padding_v + "px"
          }
        }
      }
    })];
  }
};

var tabLayout = createLayout({ varFns: varFns, textButtonLayout: textButtonLayout });

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns$1 = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
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
    })];
  }
};

var tintFns$1 = function tintFns(tint) {
  return _defineProperty$2({}, "color_" + tint + "_tab_indicator", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars$$1["color_" + tint + "_tab_indicator"]
      }
    })];
  });
};

var lightTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("light"));
var darkTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("dark"));

var tabsColor = createColor({
  varFns: { lightTintFns: lightTintFns$1, darkTintFns: darkTintFns$1 }
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      " .pe-tabs__indicator": _defineProperty$3({
        transformOrigin: isRTL ? "right 50%" : "left 50%"
      }, isRTL ? "right" : "left", 0)
    };
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var _tabs_indent = function _tabs_indent(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-tabs__row": {
      ".pe-tabs__row--indent": _defineProperty$3({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.tabs_indent + "px")
    }
  });
};

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
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

      " .pe-tabs__row": [flex.layoutHorizontal, {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "relative",
        whiteSpace: "nowrap",

        ".pe-tabs__row--indent": {
          margin: 0,
          overflow: "auto"
        },

        ".pe-tabs__row--centered": flex.layoutCenterJustified
      }],

      " .pe-tabs__scroll-button-offset": [flex.flex(), flex.flexIndex("none")],

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

      " .pe-toolbar--tabs .pe-toolbar__bar &": [mixin.fit(), {
        width: "auto",
        margin: 0,
        top: "auto"
      }]
    }]), _defineProperty$3({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight()])];
  },
  tabs_indent: function tabs_indent(selector, vars$$1) {
    return [_tabs_indent(selector, vars$$1, false), _tabs_indent(selectorRTL(selector), vars$$1, true)];
  },
  tab_height: function tab_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--scrollable": {
        display: "flex",
        // hide scrollbar (this approach is required for Firefox)
        "max-height": vars$$1.tab_height + "px"
      }
    })];
  },
  scrollbar_offset: function scrollbar_offset(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--scrollable": {
        " .pe-tabs__row": {
          marginBottom: -vars$$1.scrollbar_offset + "px"
        }
      }
    })];
  },
  scroll_button_size: function scroll_button_size(selector, vars$$1) {
    return [sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          width: vars$$1.scroll_button_size + "px",
          height: vars$$1.scroll_button_size + "px"
        }
      }
    })];
  },
  scroll_button_fade_duration: function scroll_button_fade_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDuration: vars$$1.scroll_button_fade_duration
          }
        }
      }
    })];
  },
  scroll_button_fade_delay: function scroll_button_fade_delay(selector, vars$$1) {
    return [sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDelay: vars$$1.scroll_button_fade_delay
          }
        }
      }
    })];
  },
  scroll_button_opacity: function scroll_button_opacity(selector, vars$$1) {
    return [sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            opacity: vars$$1.scroll_button_opacity
          }
        }
      }
    })];
  },
  tab_indicator_height: function tab_indicator_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__indicator": {
        height: vars$$1.tab_indicator_height + "px"
      }
    })];
  }
};

var tabsLayout = createLayout({ varFns: varFns$1 });

var fontSize = textButtonVars.font_size;
var tab_label_line_height = 1.1 * fontSize;
var tab_height = 48;
var scroll_button_size = tab_height;

var vars$2 = {
  general_styles: true,

  animation_duration: textButtonVars.animation_duration,
  indicator_slide_speed: 600, // px per second
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  scroll_button_fade_delay: ".25s",
  scroll_button_fade_duration: ".2s",
  scroll_button_opacity: .7,
  scroll_button_size: scroll_button_size,
  scrollbar_offset: 0,
  tab_content_padding_v: 12,
  tab_height: tab_height,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  tab_indicator_height: 2,
  tab_label_line_height: tab_label_line_height,
  tab_label_transition_property: "opacity, color, backgroundColor",
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_max_width: "initial",
  tab_menu_content_padding_v: 6,
  tab_min_width: 72,
  tab_min_width_tablet: 160,
  tabs_indent: 0,

  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_selected: rgba(vars.color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(vars.color_primary),
  color_light_icon: vars$1.color_light,

  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_selected: rgba(vars.color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(vars.color_primary),
  color_dark_icon: vars$1.color_dark

  // hover colors may be set in theme; disabled by default

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
};

var tabsFns = [tabsLayout, tabsColor];
var tabFns = [tabLayout, tabColor];
var tabsSelector = "." + classes.component;
var tabClass = classes.tab + " pe-text-button pe-button";
var tabSelector = " ." + tabClass.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && styler.addStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars: vars$2,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars: vars$2,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return styler.getStyle({
    selectors: [customSelector, tabsSelector],
    fns: tabsFns,
    vars: vars$2,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(styler.getStyle({
    selectors: [customSelector, tabSelector],
    fns: tabFns,
    vars: vars$2,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

styler.addStyle({
  selectors: [tabsSelector],
  fns: tabsFns,
  vars: vars$2
});
styler.addStyle({
  selectors: [tabSelector],
  fns: tabFns,
  vars: vars$2
});

export { addStyle, getStyle, tabColor, tabLayout, tabsColor, tabsLayout, vars$2 as vars };
