import { mixin, flex } from "polythene-core-css";
import { vars } from "polythene-theme";

const alignSide = isRTL => () => ({
  " .pe-card__media.pe-card__media--crop-y": {
    ".pe-card__media--origin-start": {
      backgroundPositionX: isRTL ? "right" : "left"
    },
    ".pe-card__media--origin-end": {
      backgroundPositionX: isRTL ? "left" : "right"
    }
  }
});

const alignLeft = alignSide(false);

const alignRight = alignSide(true);

export default (selector, componentVars) => [
  {
    [selector]: [
      alignLeft(componentVars),
      {
        display: "block",
        position: "relative",
        borderRadius: componentVars.border_radius + "px",

        "&, a:link, a:visited": {
          textDecoration: "none"
        },

        " .pe-card__content": {
          position: "relative",
          borderRadius: "inherit",
          overflow: "hidden",
          width: "inherit",
          height: "inherit",
        },

        " .pe-card__media": {
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          zIndex: 1, // makes rounded corners on absolute images work (without this, no rounded image)
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          ".pe-card__media--landscape": {
            paddingBottom: (100 / 16 * 9) + "%"
          },
          ".pe-card__media--square": {
            paddingBottom: "100%"
          },
          "&:last-child": {
            borderBottomLeftRadius: componentVars.border_radius + "px",
            borderBottomRightRadius: componentVars.border_radius + "px"
          },
          ".pe-card__media--crop-x": {
            width: "100%",
            height: "auto",
            display: "block",

            ".pe-card__media--origin-start": {
              backgroundPositionY: "top",
            },
            ".pe-card__media--origin-end": {
              backgroundPositionY: "bottom",
            }
          },
          ".pe-card__media--crop-y": {
            height: "100%",
            width: "auto",
            display: "block",

            ".pe-card__media--origin-start": {
              backgroundPositionX: "left", // RTL
            },
            ".pe-card__media--origin-end": {
              backgroundPositionX: "right", // RTL
            }
          },
          " img, iframe": [
            mixin.fit(),
            {
              width: "100%",
              height: "100%",
              maxWidth: "none"
            }
          ],
          " img": {
            opacity: 0, /* allows right-click on image */
          },
        },

        " .pe-card__header + .pe-card__media": {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        },

        " .pe-card__primary-media": {
          margin: "16px",
          overflow: "hidden",
          
          " .pe-card__media--small": {
            width: componentVars.image_size_small + "px"
          },
          " .pe-card__media--regular": {
            width: componentVars.image_size_regular + "px"
          },
          " .pe-card__media--medium": {
            width: componentVars.image_size_medium + "px"
          },
          " .pe-card__media--large": {
            width: componentVars.image_size_large + "px",
          },
          " .pe-card__media": {
            borderRadius: 0
          },

          " .pe-shadow + &": {
            // first child
            borderTopLeftRadius: componentVars.border_radius + "px",
            borderTopRightRadius: componentVars.border_radius + "px"
          },
        },

        " .pe-card__overlay": mixin.fit(),

        " .pe-card__media__dimmer": [
          mixin.fit(), {
            zIndex: 1,
            pointerEvents: "all"
          }
        ],

        " .pe-card__overlay__content": {
          position: "absolute",
          bottom: 0,
          top: "auto",
          right: 0,
          left: 0,
          zIndex: 2
        },

        " .pe-card__header": {
          height: componentVars.one_line_height_with_icon + "px",

          " .pe-list-tile__title": {
            fontSize: "14px",
            fontWeight: vars.font_weight_normal,
            lineHeight: "20px",
            marginTop: "2px"
          },
          " .pe-list-tile__subtitle": {
            marginTop: "-1px"
          }
        },

        " .pe-card__primary": [
          flex.layoutHorizontal, {
            position: "relative",

            "& + .pe-card__text": {
              marginTop: "-16px"
            },
            ".pe-card__primary--tight": {
              " .pe-card__title": {
                paddingBottom: (componentVars.tight_title_padding_bottom - componentVars.subtitle_line_height_padding_bottom) + "px"
              }
            }
          }
        ],
        " .pe-card__title": [
          flex.flex(), {
            padding: [componentVars.title_padding_v, componentVars.title_padding_h, (componentVars.title_padding_v - componentVars.subtitle_line_height_padding_bottom), componentVars.title_padding_h].map((v) => (v + "px")).join(" "),
            fontSize: "24px",
            lineHeight: "29px"
          }
        ],
        " .pe-card__subtitle": {
          fontSize: "14px",
          lineHeight: "24px"
        },

        " .pe-card__actions": [{
          padding: componentVars.actions_padding_v + "px" + " " + componentVars.padding_actions_h + "px",

          ".pe-card__actions--tight": {
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,

            ".pe-card__actions--vertical": {
              paddingLeft: 0,
              paddingRight: 0,
            }
          },
          ".pe-card__actions--horizontal": {
            minHeight: 36 + 2 * 8 + "px",
            height: 36 + 2 * 8 + "px", /* make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231 */
          },
          ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [
            flex.layoutHorizontal,
            flex.layoutCenter,
            {
              " .pe-button": {
                minWidth: 0
              },
            }
          ],

          ".pe-card__actions--justified": [
            flex.layoutJustified
          ],

          ".pe-card__actions--vertical": [
            flex.layoutVertical,
            {
              ":not(.pe-card__actions--tight)": {
                // vertical flex layout
                paddingTop: componentVars.actions_vertical_padding_v + "px",
                paddingBottom: componentVars.actions_vertical_padding_v + "px",
              },

              // nested
              " .pe-card__actions": [{
                marginLeft: -componentVars.padding_actions_h + "px",
                marginRight: -componentVars.padding_actions_h + "px",
                minHeight: 0,

                "&:first-child": {
                  marginTop: -componentVars.actions_vertical_padding_v + "px"
                },
                "&:last-child": {
                  marginBottom: -componentVars.actions_vertical_padding_v + "px"
                }
              }],

              " .pe-button": {
                height: "36px",
                padding: 0,
                marginTop: componentVars.actions_button_margin_v + "px",
                marginBottom: componentVars.actions_button_margin_v + "px"
              },
              " .pe-list": {
                padding: 0
              }
            }
          ]
        }],

        " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
          marginTop: "-16px"
        },

        " .pe-card__text": {
          paddingTop: componentVars.text_padding_v - componentVars.text_line_height_padding_top + "px",
          paddingRight: componentVars.text_padding_h + "px",
          paddingLeft: componentVars.text_padding_h + "px",
          paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px",
          fontSize: "14px",
          lineHeight: "24px",

          "&:last-child": {
            paddingBottom: componentVars.text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
          },
          ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
            paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
          },
          " .pe-card__actions + &": {
            marginTop: "8px"
          }
        },

        " .pe-card__text, .pe-card__primary": {
          "& + .pe-card__actions:not(:last-child)": {
            marginTop: -(componentVars.offset_small_padding_v + 3) + "px",
            // Lift up so that full button area is usable
            position: "relative", 
            zIndex: 1
          }
        }
      }
    ],
  },
  {
    // RTL
    "*[dir=rtl], .pe-rtl ": {
      [selector]: alignRight(componentVars)
    },
  }
];
