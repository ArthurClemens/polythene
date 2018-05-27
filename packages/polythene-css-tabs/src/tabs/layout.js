import { mixin, flex, sel, selectorRTL, createLayout } from "polythene-core-css";

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
          " .pe-tabs__scroll-button": {
            position: "relative",
            display: "block",
            zIndex: 1,
            borderRadius: 0,

            " .pe-button__content": {
              borderRadius: 0,
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
  tab_indicator_height: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__indicator": {
        height: vars.tab_indicator_height + "px",
      },
    }),
  ],
};

export default createLayout({ varFns });
