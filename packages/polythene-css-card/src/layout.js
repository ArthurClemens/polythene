import { mixin, flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const alignSide = () => () => ({});
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const tight_title_padding_bottom_subtitle_line_height_padding_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-card__primary": {
      ".pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: (vars.tight_title_padding_bottom - vars.subtitle_line_height_padding_bottom) + "px"
        }
      }
    }
  });

const title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-card__title": {
      padding: [vars.title_padding_v, vars.title_padding_h, (vars.title_padding_v - vars.subtitle_line_height_padding_bottom), vars.title_padding_h].map((v) => (v + "px")).join(" "),
    },
  });

const text_padding_v_text_line_height_padding_top = (selector, vars) =>
  sel(selector, {
    " .pe-card__text": {
      paddingTop: vars.text_padding_v - vars.text_line_height_padding_top + "px",
    }
  });

const text_padding_bottom_text_line_height_padding_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-card__text": {
      "&:last-child": {
        paddingBottom: vars.text_padding_bottom - vars.text_line_height_padding_bottom + "px"
      },
    },
  });

const tight_text_padding_bottom_text_line_height_padding_bottom = (selector, vars) =>
  sel(selector, {
    " .pe-card__text": {
      paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px",

      ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px"
      },
    },
  });

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      {
        display: "block",
        position: "relative",

        "&, a:link, a:visited": {
          textDecoration: "none"
        },

        // Content

        " .pe-card__content": {
          position: "relative",
          borderRadius: "inherit",
          overflow: "hidden",
          width: "inherit",
          height: "inherit",
        },

        // Media

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
              backgroundPositionX: "left",
            },
            ".pe-card__media--origin-end": {
              backgroundPositionX: "right",
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

          " .pe-card__header + .pe-card__media": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
        },

        " .pe-card__primary-media": {
          margin: "16px",
          overflow: "hidden",

          " .pe-card__media": {
            borderRadius: 0
          },
        },
        
        // Overlay

        " .pe-card__overlay": mixin.fit(),

        // Dimmer

        " .pe-card__media__dimmer": [
          mixin.fit(),
          {
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

        // Header

        " .pe-card__header": {
          " .pe-list-tile__title": {
            fontSize: "14px",
            fontWeight: themeVars.font_weight_normal,
            lineHeight: "20px",
            marginTop: "2px",
          },
          " .pe-list-tile__subtitle": {
            marginTop: "-1px"
          }
        },

        // Primary 

        " .pe-card__primary": [
          flex.layoutHorizontal,
          {
            position: "relative",

            "& + .pe-card__text": {
              marginTop: "-16px"
            },
          }
        ],

        // Title

        " .pe-card__title": [
          flex.flex(),
          {
            fontSize: "24px",
            lineHeight: "29px"
          }
        ],

        // Subtitle

        " .pe-card__subtitle": {
          fontSize: "14px",
          lineHeight: "24px"
        },

        // Actions

        " .pe-card__actions": {
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
            height: 36 + 2 * 8 + "px", // make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231
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
              // nested
              " .pe-card__actions": [{
                minHeight: 0,
              }],

              " .pe-button": {
                height: "36px",
                padding: 0,
              },
              " .pe-list": {
                padding: 0
              }
            }
          ]
        },

        " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
          marginTop: "-16px"
        },

        // Text

        " .pe-card__text": {
          fontSize: "14px",
          lineHeight: "24px",

          " .pe-card__actions + &": {
            marginTop: "8px"
          }
        },

        " .pe-card__text, .pe-card__primary": {
          "& + .pe-card__actions:not(:last-child)": {
            // Lift up so that full button area is usable
            position: "relative", 
            zIndex: 1
          }
        }
      },
      {
        // RTL
        "*[dir=rtl], .pe-rtl ": {
          [selector]: alignRight(vars)
        },
      }
    ])
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      borderRadius: vars.border_radius + "px",

      "&:last-child": {
        borderBottomLeftRadius: vars.border_radius + "px",
        borderBottomRightRadius: vars.border_radius + "px"
      },

      " .pe-card__primary-media": {
        " .pe-shadow + &": {
          // first child
          borderTopLeftRadius: vars.border_radius + "px",
          borderTopRightRadius: vars.border_radius + "px"
        },
      }
    })
  ],
  image_size_small: (selector, vars) => [
    sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--small": {
          width: vars.image_size_small + "px"
        },
      }
    })
  ],
  image_size_regular: (selector, vars) => [
    sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--regular": {
          width: vars.image_size_regular + "px"
        },
      }
    })
  ],
  image_size_medium: (selector, vars) => [
    sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--medium": {
          width: vars.image_size_medium + "px"
        },
      }
    })
  ],
  image_size_large: (selector, vars) => [
    sel(selector, {
      " .pe-card__primary-media": {
        " .pe-card__media--large": {
          width: vars.image_size_large + "px"
        },
      }
    })
  ],
  one_line_height_with_icon: (selector, vars) => [
    sel(selector, {
      " .pe-card__header": {
        height: vars.one_line_height_with_icon + "px",
      }
    })
  ],
  tight_title_padding_bottom: (selector, vars) => [
    sel(selector, {
    }),
    tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars),
  ],
  subtitle_line_height_padding_bottom: (selector, vars) => [
    sel(selector, {
    }),
    tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars),
    title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars),
  ],
  title_padding_v: (selector, vars) => [
    sel(selector, {
    }),
    title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars),
  ],
  title_padding_h: (selector, vars) => [
    sel(selector, {
    }),
    title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars),
  ],
  actions_button_margin_h: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions.pe-card__actions--horizontal": {
        margin: `0 -${vars.actions_button_margin_h}px`,

        " .pe-button": {
          margin: `0 ${vars.actions_button_margin_h}px`,
        }
      }
    }),
  ],
  actions_padding_v: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions": {
        paddingTop: vars.actions_padding_v + "px",
        paddingBottom: vars.actions_padding_v + "px",
      }
    }),
  ],
  actions_padding_h: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions": {
        paddingRight: vars.actions_padding_h + "px",
        paddingLeft: vars.actions_padding_h + "px",
      }
    }),
  ],
  actions_button_margin_v: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions": {
        ".pe-card__actions--vertical": {
          " .pe-button": {
            marginTop: vars.actions_button_margin_v + "px",
            marginBottom: vars.actions_button_margin_v + "px"
          },
        }
      }
    }),
  ],
  actions_vertical_padding_v: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions": {
        ".pe-card__actions--vertical": {
          ":not(.pe-card__actions--tight)": {
            paddingTop: vars.actions_vertical_padding_v + "px",
            paddingBottom: vars.actions_vertical_padding_v + "px",
          },
          // nested
          " .pe-card__actions": [{
            "&:first-child": {
              marginTop: -vars.actions_vertical_padding_v + "px"
            },
            "&:last-child": {
              marginBottom: -vars.actions_vertical_padding_v + "px"
            }
          }],
        }
      }
    }),
  ],
  offset_small_padding_v: (selector, vars) => [
    sel(selector, {
      " .pe-card__text, .pe-card__primary": {
        "& + .pe-card__actions:not(:last-child)": {
          marginTop: -(vars.offset_small_padding_v + 3) + "px",
        }
      }
    })
  ],
  text_padding_h: (selector, vars) => [
    sel(selector, {
      " .pe-card__text": {
        paddingRight: vars.text_padding_h + "px",
        paddingLeft: vars.text_padding_h + "px",
      }
    }),
  ],
  text_padding_v: (selector, vars) => [
    sel(selector, {
    }),
    text_padding_v_text_line_height_padding_top(selector, vars),
  ],
  text_line_height_padding_top: (selector, vars) => [
    sel(selector, {
    }),
    text_padding_v_text_line_height_padding_top(selector, vars),
  ],
  text_padding_bottom: (selector, vars) => [
    sel(selector, {
    }),
    text_padding_bottom_text_line_height_padding_bottom(selector, vars),
  ],
  tight_text_padding_bottom: (selector, vars) => [
    sel(selector, {
    }),
    tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars),
  ],
  text_line_height_padding_bottom: (selector, vars) => [
    sel(selector, {
    }),
    text_padding_bottom_text_line_height_padding_bottom(selector, vars),
    tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars),
  ],
};

export default createLayout({ varFns });
