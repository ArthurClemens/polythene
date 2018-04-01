import { mixin, flex } from "polythene-core-css";
import { vars } from "polythene-theme";

const alignDir = isRTL => componentVars => ({
  " .pe-no-touch &": {
    " .pe-tabs__scroll-button-start": {
      [isRTL ? "right" : "left"]: 0,
      [isRTL ? "left" : "right"]: "auto",
    },
    " .pe-tabs__scroll-button-end": {
      [isRTL ? "right" : "left"]: "auto",
      [isRTL ? "left" : "right"]: 0,
    }
  },
  " .pe-tabs__row": {
    ".pe-tabs__row--indent": {
      [isRTL ? "paddingRight" : "paddingLeft"]: componentVars.tabs_indent + "px",
    },
  },
  " .pe-tabs__indicator": {
    transformOrigin: isRTL ? "right 50%" : "left 50%",
    [isRTL ? "right" : "left"]: 0,
  }
}); 

const alignLeft = alignDir(false);
const alignRight = alignDir(true);

export default (selector, componentVars) => [
  {
    [selector]: [
      alignLeft(componentVars),
      {
        userSelect: "none",
        transform: "translate3d(0,0,0)",
        "-webkit-overflow-scrolling": "touch",

        "& ::-webkit-scrollbar": {
          "display": "none"
        },

        ".pe-tabs--menu": {
          // reset sizes to fit within a small space
          " .pe-tabs__tab": {
            height: componentVars.menu_tab_height + "px",
          },
          " .pe-tabs__tab--icon": {
            height: componentVars.menu_tab_icon_label_height + "px",
          },
          " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab--icon, .pe-tabs__tab.pe-text-button": {
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
              transitionTimingFunction: "ease-in-out",
              transitionDelay: componentVars.scroll_button_fade_delay + "s",
              opacity: componentVars.scroll_button_opacity
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
          mixin.defaultTransition("color"),
          {
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
              lineHeight: vars.line_height + "em",
              borderRadius: 0,
              position: "relative",

              " .pe-button__label, .pe-icon": {
                maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
                lineHeight: componentVars.tab_label_line_height + "px",
                maxHeight: 2 * componentVars.tab_label_line_height + "px",
                overflow: "hidden",
                whiteSpace: "normal"
              },
              " .pe-button__label": [
                mixin.defaultTransition("opacity", componentVars.animation_duration),
                {
                  margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
                  padding: 0,
                  opacity: componentVars.label_opacity,
                  width: "100%" // for IE 11
                }
              ],
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
            ".pe-tabs__tab--icon": {
              "&, .pe-button__content": [
                {
                  height: componentVars.tab_icon_label_height + "px"
                },
                {
                  " .pe-button__content, .pe-icon": {
                    margin: "0 auto"
                  }
                },
                {
                  " .pe-icon": {
                    marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
                  }
                }
              ]
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
          // transformOrigin set in alignDir
          transitionProperty: "all",
          transitionTimingFunction: "ease-in-out",
          position: "absolute",
          height: componentVars.tab_indicator_height + "px",
          bottom: 0,
          // left/right set in alignDir
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

        ["@media (min-width: " + vars.breakpoint_for_tablet_landscape_up + "px)"]: {
          [selector]: {
            ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
              minWidth: componentVars.tab_min_width_tablet + "px"
            }
          }
        }
      }
    ]
  },
  {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
      alignRight(componentVars)
    ],
  }
];
