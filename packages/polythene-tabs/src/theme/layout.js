import { mixin, flex } from "polythene-css";
import { vars } from "polythene-theme";

export default (selector, componentVars) => [{
  [selector]: [
    mixin.vendorize({
      userSelect: "none"
    }, vars.prefixes_user_select),
    mixin.vendorize({
      transform: "translate3d(0,0,0)"
    }, vars.prefixes_transform),
    {
      "-webkit-overflow-scrolling": "touch",

      "& ::-webkit-scrollbar": {
        "display": "none"
      },

      ".pe-tabs--menu": {
        // reset sizes to fit within a small space
        " .pe-tabs__tab": {
          height: componentVars.menu_tab_height + "px",
        },
        " .pe-tabs__tab---icon": {
          height: componentVars.menu_tab_icon_label_height + "px",
        },
        " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon": {
          minWidth: 0,
          height: componentVars.menu_tab_icon_label_height + "px",

          " .pe-button__content": {
            padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
            height: componentVars.menu_tab_icon_label_height + "px",

            " .pe-icon": {
              marginBottom: 0
            },
            " .pe-button__label": {
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
          zIndex: 3,

          " .pe-button__content": {
            backgroundColor: "inherit"
          },
          " .pe-button__label": [
            mixin.vendorize({
              transitionProperty: componentVars.tab_label_transition_property
            }, vars.prefixes_transition),
            mixin.vendorize({
              transitionDuration: componentVars.scroll_button_fade_duration + "s"
            }, vars.prefixes_transition),
            mixin.vendorize({
              transitionTimingFunction: "ease-out"
            }, vars.prefixes_transition),
            mixin.vendorize({
              transitionDelay: componentVars.scroll_button_fade_delay + "s"
            }, vars.prefixes_transition),
            {
              opacity: componentVars.scroll_button_opacity
            }
          ]
        },
        ".pe-tabs--start .pe-tabs__scroll-button-start": {
          pointerEvents: "none",
          cursor: "default",

          " .pe-button__label": {
            opacity: 0
          }
        },
        ".pe-tabs--end .pe-tabs__scroll-button-end": {
          pointerEvents: "none",
          cursor: "default",

          " .pe-button__label": {
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

      " .pe-tabs__row": [
        flex.layoutHorizontal,
        mixin.vendorize({
          "user-select": "none"
        }, vars.prefixes_user_select),
        {
          position: "relative",
          whiteSpace: "nowrap"
        }
      ],

      " .pe-tabs__row--centered": flex.layoutCenterJustified,

      " .pe-tabs__scroll-button-offset": [
        flex.flex(),
        flex.flexIndex("none")
      ],

      " .pe-tabs__tab": [
        flex.flex(),
        flex.flexIndex("none"),
        mixin.vendorize({
          userSelect: "none"
        }, vars.prefixes_user_select),
        mixin.defaultTransition("color"),
        {
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
                opacity: componentVars.label_opacity
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
          ".pe-button--selected": {
            " .pe-button__content .pe-button__label": {
              opacity: 1
            }
          },
          ".pe-tabs__tab---icon": {
            "&, .pe-button__content": [
              {
                height: componentVars.tab_icon_label_height + "px"
              },
              {
                " .pe-button__label, .pe-icon": {
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

      ".pe-tabs__active-selectable": {
        " .pe-tabs__tab.pe-button--selected": {
          cursor: "pointer",
          pointerEvents: "initial",
        }
      },

      " .pe-tabs__indicator": [
        mixin.vendorize({
          "transform": "translate3d(0,0,0)"
        }, vars.prefixes_transform),
        mixin.vendorize({
          "transform-origin": "left 50%"
        }, vars.prefixes_transform),
        mixin.vendorize({
          "transition-property": "all"
        }, vars.prefixes_transition),
        mixin.vendorize({
          "transition-timing-function": "ease-out"
        }, vars.prefixes_transition),
        {
          position: "absolute",
          height: componentVars.tab_indicator_height + "px",
          bottom: 0,
          left: 0,
          zIndex: 3,
          width: "100%" // and transformed with js
            // background-color defined in implementation/theme css
        }
      ],

      " .pe-toolbar--tabs .pe-toolbar__bar &": [
        mixin.fit(),
        {
          width: "auto",
          margin: 0,
          top: "auto",

          " .pe-tabs__row.pe-tabs__row--indent": {
            margin: 0,
            paddingLeft: vars.unit_indent + "px",
            overflow: "auto"
          }
        }
      ],

      ["@media (min-width: " + vars.breakpoint_small_tablet_portrait + "px)"]: {
        ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
          minWidth: componentVars.tab_min_width_tablet + "px"
        }
      }
    }
  ]
}];
