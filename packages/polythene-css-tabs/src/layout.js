import { mixin, flex, sel, selectorRTL } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const alignSide = isRTL => () => ({
  " .pe-tabs__indicator": {
    transformOrigin: isRTL ? "right 50%" : "left 50%",
    [isRTL ? "right" : "left"]: 0,
  }
});
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const tabs_indent = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-tabs__row": {
      ".pe-tabs__row--indent": {
        [isRTL ? "paddingRight" : "paddingLeft"]: vars.tabs_indent + "px",
      },
    },
  });

const tab_label_transition_property_animation_duration = (selector, vars) =>
  sel(selector, {
    " .pe-tabs__tab .pe-button__content":
      mixin.defaultTransition(vars.tab_label_transition_property, vars.animation_duration)
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      alignLeft(),
      {
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
            display: "none",
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
              transitionTimingFunction: "ease-in-out",
            }
          },
          ".pe-tabs--start .pe-tabs__scroll-button-start": {
            pointerEvents: "none",
            cursor: "default",
            opacity: 0,
          },
          ".pe-tabs--end .pe-tabs__scroll-button-end": {
            pointerEvents: "none",
            cursor: "default",
            opacity: 0,
          }
        },

        " .pe-tabs__row": [
          flex.layoutHorizontal,
          {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "relative",
            whiteSpace: "nowrap",

            ".pe-tabs__row--indent": {
              margin: 0,
              overflow: "auto"
            },

            ".pe-tabs__row--centered": flex.layoutCenterJustified,
          }
        ],

        " .pe-tabs__scroll-button-offset": [
          flex.flex(),
          flex.flexIndex("none")
        ],

        " .pe-tabs__tab": [
          flex.flex(),
          flex.flexIndex("none"),
          {
            userSelect: "none",
            "-moz-user-select": "none",
            margin: 0,
            borderRadius: 0,
            padding: 0,
            color: "inherit",
            

            " .pe-button__content": {
              lineHeight: themeVars.line_height + "em",
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
                },
              }
            }
          }
        ],

        ".pe-tabs--compact": {
          " .pe-tabs__tab": {
            minWidth: "initial"
          }
        },

        " .pe-tabs__tab-content": [
          flex.layoutCenterCenter,
          flex.layoutVertical, {
            height: "inherit"
          }
        ],

        ".pe-tabs--autofit .pe-tabs__tab": [
          flex.flex(),
          {
            minWidth: "initial",
            maxWidth: "none"
          }
        ],

        ".pe-tabs__active--selectable": {
          " .pe-tabs__tab.pe-button--selected": {
            cursor: "pointer",
            pointerEvents: "initial",
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

        " .pe-toolbar--tabs .pe-toolbar__bar &": [
          mixin.fit(),
          {
            width: "auto",
            margin: 0,
            top: "auto"
          }
        ],
      },
    ]),
    {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
        alignRight()
      ],
    }
  ],
  tabs_indent: (selector, vars) => [
    tabs_indent(selector, vars, false),
    tabs_indent(selectorRTL(selector), vars, true),
  ],
  tab_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--scrollable": {
        display: "flex",
        // hide scrollbar (this approach is required for Firefox)
        "max-height": vars.tab_height + "px",
      },
      " .pe-tabs__tab": {
        height: vars.tab_height + "px",

        " .pe-button__content": {
          height: vars.tab_height + "px",
        }
      },
    }),
  ],
  scrollbar_offset: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--scrollable": {
        " .pe-tabs__row": {
          marginBottom: -vars.scrollbar_offset + "px"
        },
      },
    }),
  ],
  scroll_button_size: (selector, vars) => [
    sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          width: vars.scroll_button_size + "px",
          height: vars.scroll_button_size + "px",
        }
      }
    }),
  ],
  scroll_button_fade_duration: (selector, vars) => [
    sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDuration: vars.scroll_button_fade_duration,
          }
        },
      }
    })
  ],
  scroll_button_fade_delay: (selector, vars) => [
    sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            transitionDelay: vars.scroll_button_fade_delay,
          }
        },
      }
    })
  ],
  scroll_button_opacity: (selector, vars) => [
    sel(selector, {
      " .pe-no-touch &": {
        " .pe-tabs__scroll-button": {
          " .pe-button__content": {
            opacity: vars.scroll_button_opacity
          }
        },
      }
    })
  ],
  tab_min_width: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab": {
        minWidth: vars.tab_min_width + "px", // for smaller screens, see also media query below
      }
    }),
  ],
  tab_max_width: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab": {
        maxWidth: vars.tab_max_width + "px",
      }
    }),
  ],
  tab_min_width_tablet: (selector, vars) => ({
    ["@media (min-width: " + themeVars.breakpoint_for_tablet_landscape_up + "px)"]: {
      [selector]: {
        ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable) .pe-tabs__tab": {
          minWidth: vars.tab_min_width_tablet + "px"
        }
      }
    }
  }),
  tab_indicator_height: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__indicator": {
        height: vars.tab_indicator_height + "px",
      },
    }),
  ],
  tab_icon_label_height: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab": {
        ".pe-tabs__tab--icon": {
          "&, .pe-button__content": {
            height: vars.tab_icon_label_height + "px"
          },
        }
      }
    }),
  ],
  tab_label_transition_property: (selector, vars) => [
    tab_label_transition_property_animation_duration(selector, vars)
  ],
  animation_duration: (selector, vars) => [
    tab_label_transition_property_animation_duration(selector, vars)
  ],
  tab_content_padding_v: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        padding: "0 " + vars.tab_content_padding_v + "px",
      }
    }),
  ],
  label_max_width: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars.label_max_width + "px", // or .pe-tabs width minus 56dp
        }
      }
    }),
  ],
  tab_label_line_height: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars.tab_label_line_height + "px",
          maxHeight: 2 * vars.tab_label_line_height + "px",
        }
      }
    }),
  ],
  tab_label_vertical_offset: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab .pe-button__content": {
        " .pe-button__label": {
          margin: vars.tab_label_vertical_offset + "px 0 0 0",
        },
      }
    }),
  ],
  tab_icon_label_icon_spacing: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab": {
        ".pe-tabs__tab--icon": {
          "&, .pe-button__content": {
            " .pe-icon": {
              marginBottom: vars.tab_icon_label_icon_spacing + "px"
            }
          }
        }
      }
    }),
  ],
  menu_tab_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu": {
        // reset sizes to fit within a small space
        " .pe-tabs__tab": {
          height: vars.menu_tab_height + "px",
        },
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
          " .pe-button__content": {
            height: vars.menu_tab_height + "px",
          }
        },
      },
    }),
  ],
  menu_tab_icon_label_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu": {
        " .pe-tabs__tab--icon": {
          height: vars.menu_tab_icon_label_height + "px",
        },
      },
    }),
  ],
  tab_menu_content_padding_v: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu": {
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars.tab_menu_content_padding_v + "px",
          }
        }
      },
    }),
  ],
};

export default (selector, vars, customVars) => {
  const allVars = {...vars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
