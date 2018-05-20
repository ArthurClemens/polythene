import { vars } from 'polythene-theme';
import { vars as vars$1, noTouchStyle } from 'polythene-css-button';
import { vars as vars$2 } from 'polythene-css-icon-button';
import { mixin, flex, styler } from 'polythene-core-css';

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var fontSize = vars$1.font_size;
var tab_label_line_height = 1.1 * fontSize;
var tab_height = 48;
var scroll_button_size = tab_height;

var vars$3 = {
  general_styles: true,

  animation_duration: vars$1.animation_duration,
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

  color_light: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_selected: rgba(vars.color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(vars.color_primary),
  color_light_icon: vars$2.color_light,

  color_dark: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_selected: rgba(vars.color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(vars.color_primary),
  color_dark_icon: vars$2.color_dark

  // hover colors may be set in theme; disabled by default

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
};

var buttonClasses = {
    base: "pe-button",
    component: "pe-button pe-text-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start"
};

var classes = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tabs__tab",
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

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
};

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      " .pe-tabs__indicator": _defineProperty({
        transformOrigin: isRTL ? "right 50%" : "left 50%"
      }, isRTL ? "right" : "left", 0)
    };
  };
};

var _tabs_indent = function _tabs_indent(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-tabs__row": {
      ".pe-tabs__row--indent": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.tabs_indent + "px")
    }
  });
};

var tab_label_transition_property_animation_duration = function tab_label_transition_property_animation_duration(selector, vars$$1) {
  return sel(selector, {
    " .pe-tabs__tab .pe-button__content": mixin.defaultTransition(vars$$1.tab_label_transition_property, vars$$1.animation_duration)
  });
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
      userSelect: "none",
      "-moz-user-select": "none",
      transform: "translate3d(0,0,0)",
      "-webkit-overflow-scrolling": "touch",

      "& ::-webkit-scrollbar": {
        "display": "none"
      },

      ".pe-tabs--menu": {
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
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
        ".pe-tabs--scrollable": {
          backgroundColor: "inherit"
        },

        " .pe-tabs__scroll-button": {
          position: "relative",
          display: "block",
          backgroundColor: "inherit",
          zIndex: 1,
          borderRadius: 0,

          " .pe-button__content": {
            borderRadius: 0,
            backgroundColor: "inherit",
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

      " .pe-tabs__tab": [flex.flex(), flex.flexIndex("none"), {
        userSelect: "none",
        "-moz-user-select": "none",
        margin: 0,
        borderRadius: 0,
        padding: 0,
        color: "inherit",

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
        }
      }],

      ".pe-tabs--compact": {
        " .pe-tabs__tab": {
          minWidth: "initial"
        }
      },

      " .pe-tabs__tab-content": [flex.layoutCenterCenter, flex.layoutVertical, {
        height: "inherit"
      }],

      ".pe-tabs--autofit .pe-tabs__tab": [flex.flex(), {
        minWidth: "initial",
        maxWidth: "none"
      }],

      ".pe-tabs__active--selectable": {
        " .pe-tabs__tab.pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial"
        }
      },

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
    }]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight()])];
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
      },
      " .pe-tabs__tab": {
        height: vars$$1.tab_height + "px",

        " .pe-button__content": {
          height: vars$$1.tab_height + "px"
        }
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
  tab_min_width: function tab_min_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab": {
        minWidth: vars$$1.tab_min_width + "px" // for smaller screens, see also media query below
      }
    })];
  },
  tab_max_width: function tab_max_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab": {
        maxWidth: vars$$1.tab_max_width + "px"
      }
    })];
  },
  tab_min_width_tablet: function tab_min_width_tablet(selector, vars$$1) {
    return _defineProperty({}, "@media (min-width: " + vars.breakpoint_for_tablet_landscape_up + "px)", _defineProperty({}, selector, {
      ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable) .pe-tabs__tab": {
        minWidth: vars$$1.tab_min_width_tablet + "px"
      }
    }));
  },
  tab_indicator_height: function tab_indicator_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__indicator": {
        height: vars$$1.tab_indicator_height + "px"
      }
    })];
  },
  tab_icon_label_height: function tab_icon_label_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab": {
        ".pe-tabs__tab--icon": {
          "&, .pe-button__content": {
            height: vars$$1.tab_icon_label_height + "px"
          }
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
      " .pe-tabs__tab .pe-button__content": {
        padding: "0 " + vars$$1.tab_content_padding_v + "px"
      }
    })];
  },
  label_max_width: function label_max_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars$$1.label_max_width + "px" // or .pe-tabs width minus 56dp
        }
      }
    })];
  },
  tab_label_line_height: function tab_label_line_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars$$1.tab_label_line_height + "px",
          maxHeight: 2 * vars$$1.tab_label_line_height + "px"
        }
      }
    })];
  },
  tab_label_vertical_offset: function tab_label_vertical_offset(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label": {
          margin: vars$$1.tab_label_vertical_offset + "px 0 0 0"
        }
      }
    })];
  },
  tab_icon_label_icon_spacing: function tab_icon_label_icon_spacing(selector, vars$$1) {
    return [sel(selector, {
      " .pe-tabs__tab": {
        ".pe-tabs__tab--icon": {
          "&, .pe-button__content": {
            " .pe-icon": {
              marginBottom: vars$$1.tab_icon_label_icon_spacing + "px"
            }
          }
        }
      }
    })];
  },
  menu_tab_height: function menu_tab_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu": {
        // reset sizes to fit within a small space
        " .pe-tabs__tab": {
          height: vars$$1.menu_tab_height + "px"
        },
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
          " .pe-button__content": {
            height: vars$$1.menu_tab_height + "px"
          }
        }
      }
    })];
  },
  menu_tab_icon_label_height: function menu_tab_icon_label_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu": {
        " .pe-tabs__tab--icon": {
          height: vars$$1.menu_tab_icon_label_height + "px"
        }
      }
    })];
  },
  tab_menu_content_padding_v: function tab_menu_content_padding_v(selector, vars$$1) {
    return [sel(selector, {
      ".pe-tabs--menu": {
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars$$1.tab_menu_content_padding_v + "px"
          }
        }
      }
    })];
  }
};

var layout = (function (selector, vars$$1, customVars) {
  var allVars = _extends({}, vars$$1, customVars);
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
      " .pe-tabs__scroll-button": {
        color: "inherit"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint, function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-tabs__tab": {
        color: vars$$1["color_" + tint]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_selected", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-tabs__tab.pe-button--selected": {
        color: vars$$1["color_" + tint + "_selected"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-tabs__tab.pe-button--selected": {
        " .pe-button__content": {
          background: vars$$1["color_" + tint + "_selected_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_tab_indicator", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars$$1["color_" + tint + "_tab_indicator"]
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

var noTouchStyle$1 = function noTouchStyle$$1(scopes, selector, componentVars, customVars, tint) {
  return noTouchStyle(scopes, selector + " .pe-text-button.pe-tabs__tab", componentVars, customVars, tint);
};

var color = (function (selector, componentVars, customVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle$1(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle$1(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$3, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$3, customVars, fns) : styler.createStyleSheets([selector], vars$3, fns);
};

styler.generateStyles([selector], vars$3, fns);

export { addStyle, getStyle, vars$3 as vars };
