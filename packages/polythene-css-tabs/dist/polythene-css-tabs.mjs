import { flex, mixin, styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-tabs';
import { vars as vars$1 } from 'polythene-theme';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    userSelect: "none",
    transform: "translate3d(0,0,0)",
    "-webkit-overflow-scrolling": "touch",

    "& ::-webkit-scrollbar": {
      "display": "none"
    },

    ".pe-tabs--menu": {
      // reset sizes to fit within a small space
      " .pe-tabs__tab": {
        height: componentVars.menu_tab_height + "px"
      },
      " .pe-tabs__tab---icon": {
        height: componentVars.menu_tab_icon_label_height + "px"
      },
      " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button": {
        minWidth: 0,
        height: componentVars.menu_tab_icon_label_height + "px",

        " .pe-button__content": {
          padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
          height: componentVars.menu_tab_height + "px",

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
      // hide scrollbar (this approach is required for Firefox)
      "max-height": componentVars.tab_height + "px",
      "-ms-overflow-style": "none",

      " .pe-tabs__scroll-button": {
        // default hide, show with html.pe-no-touch
        display: "none"
      },

      " .pe-tabs__row": {
        marginBottom: -componentVars.scrollbar_offset + "px"
      }
    },

    " .pe-no-touch &": {
      ".pe-tabs--scrollable": {
        backgroundColor: "inherit"
      },

      " .pe-tabs__scroll-button": {
        position: "absolute",
        display: "block",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        borderRadius: 0,

        " .pe-button__content": {
          borderRadius: 0,
          backgroundColor: "inherit",
          transitionProperty: componentVars.tab_label_transition_property,
          transitionDuration: componentVars.scroll_button_fade_duration + "s",
          transitionTimingFunction: "ease-out",
          transitionDelay: componentVars.scroll_button_fade_delay + "s",
          opacity: componentVars.scroll_button_opacity
        }
      },
      ".pe-tabs--start .pe-tabs__scroll-button-start": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },
      ".pe-tabs--end .pe-tabs__scroll-button-end": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },

      " .pe-tabs__scroll-button-start": {
        left: 0
      },
      " .pe-tabs__scroll-button-end": {
        right: 0
      }
    },

    " .pe-tabs__row": [flex.layoutHorizontal, {
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",

      ".pe-tabs__row--indent": {
        margin: 0,
        paddingLeft: componentVars.tabs_indent + "px",
        overflow: "auto"
      },

      ".pe-tabs__row--centered": flex.layoutCenterJustified
    }],

    " .pe-tabs__scroll-button-offset": [flex.flex(), flex.flexIndex("none")],

    " .pe-tabs__tab": [flex.flex(), flex.flexIndex("none"), mixin.defaultTransition("color"), {
      userSelect: "none",
      margin: 0,
      borderRadius: 0,
      height: componentVars.tab_height + "px",
      padding: 0,
      color: "inherit",
      minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
      maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

      ".pe-text-button .pe-button__content": {
        padding: "0 " + componentVars.tab_content_padding_v + "px",
        height: componentVars.tab_height + "px",
        lineHeight: vars$1.line_height + "em",
        borderRadius: 0,

        " .pe-button__label, .pe-icon": {
          maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
          lineHeight: componentVars.tab_label_line_height + "px",
          maxHeight: 2 * componentVars.tab_label_line_height + "px",
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": [mixin.defaultTransition("opacity", componentVars.animation_duration), {
          margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
          padding: 0,
          opacity: componentVars.label_opacity
        }],
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-button--selected .pe-button__content": {
        " .pe-button__label": {
          opacity: 1
        }
      },
      ".pe-tabs__tab---icon": {
        "&, .pe-button__content": [{
          height: componentVars.tab_icon_label_height + "px"
        }, {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }, {
          " .pe-icon": {
            marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
          }
        }]
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
      transformOrigin: "left 50%",
      transitionProperty: "all",
      transitionTimingFunction: "ease-out",
      position: "absolute",
      height: componentVars.tab_indicator_height + "px",
      bottom: 0,
      left: 0,
      width: "100%" // and transformed with js
      // background-color defined in implementation/theme css
    },

    " .pe-toolbar--tabs .pe-toolbar__bar &": [mixin.fit(), {
      width: "auto",
      margin: 0,
      top: "auto"
    }]

    // ["@media (min-width: " + vars.breakpoint_small_tablet_portrait + "px)"]: {
    //   ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
    //     minWidth: componentVars.tab_min_width_tablet + "px"
    //   }
    // }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
    },
    " .pe-tabs__scroll-button": {
      color: "inherit"
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
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
