import { mixin, flex, sel, selectorRTL, createLayout } from "polythene-core-css";

const alignSide = isRTL => vars => ({ // eslint-disable-line no-unused-vars
  " .pe-list-tile__content-front + .pe-list-tile__content": {
    [isRTL ? "paddingRight" : "paddingLeft"]: 0,
  },
}); // eslint-disable-line no-unused-vars
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const paddingH = h => ({
  "padding-left": h + "px",
  "padding-right": h + "px"
});

const paddingV = (top, bottom) => ({
  "padding-top": top + "px",
  "padding-bottom": (bottom || top) + "px"
});

const title_line_count_single_line_height = (selector, vars) =>
  sel(selector, {
    lineHeight: vars.single_line_height + "px",

    ".pe-list-tile--navigation": {
      " .pe-list-tile__title": {
        minHeight: vars.single_line_height + "px",
      }
    },

    " .pe-list-tile__title": [
      mixin.ellipsis(vars.title_line_count, vars.single_line_height, "px"),
    ]
  });

const unSelectable = selector => 
  sel(selector, {
    "&, a": {
      pointerEvents: "none"
    }
  });

const inset = (selector, vars) => 
  sel(selector, {
    margin: vars.inset_size + "px"
  });

const rounded = (selector, vars) => 
  sel(selector, {
    "&, .pe-list-tile__primary": {
      borderRadius: vars.rounded_border_radius + "px"
    }
  });

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      flex.layout,
      {
        position: "relative",

        ".pe-list-tile--navigation": {
          " .pe-list-tile__title": {
            whiteSpace: "pre-wrap",
          }
        },

        ".pe-list-tile--sticky": mixin.sticky(2),

        " .pe-list-tile__primary": {
          width: "100%"
        },

        " .pe-list-tile__primary, .pe-list-tile__secondary": [
          flex.layoutHorizontal,
          mixin.defaultTransition("background", ".200s"),
          {
            textDecoration: "none",
            color: "inherit",
            border: "none",          
          }
        ],

        ":not(.pe-list-tile--header) .pe-list-tile__primary": [
          flex.flex(),
          {
            position: "relative",

            " .pe-list-tile__content:not(.pe-list-tile__content-front)": [
              flex.flex(),
            ]
          }
        ],

        ":not(.pe-list-tile--disabled)": {
          outline: "none"
        },

        " .pe-list-tile__secondary": {
          textAlign: "right",
          position: "relative"
        },

        " .pe-list-tile__content": [
          flex.layoutVertical,
          flex.selfCenter,
          {
            width: "100%",

            ".pe-list-tile__content-front": {
              flexShrink: 0,
            },
          }
        ],

        " .pe-list-tile__title": {
          whiteSpace: "normal"
        },

        " .pe-list-tile__subtitle": [
          mixin.ellipsis(vars.subtitle_line_count, vars.line_height_subtitle, "px"),
          {
            fontSize: vars.font_size_subtitle + "px",
            fontWeight: vars.font_weight_subtitle,
            lineHeight: vars.line_height_subtitle + "px",

            ".pe-list-tile__high-subtitle": [
              mixin.ellipsis(vars.high_subtitle_line_count, vars.line_height_subtitle, "px"),
              {
                whiteSpace: "normal"
              }
            ]
          }
        ],

        ".pe-list-tile--selected, &.pe-list-tile--disabled": unSelectable(selector, vars),

        ".pe-list-tile--subtitle": {
          " .pe-list-tile__content": {
            " .pe-list-tile__title": {
              padding: 0
            }
          }
        },

        ".pe-list-tile--high-subtitle": {
          " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [
            flex.layoutHorizontal,
            flex.layoutStart
          ],
          " .pe-list-tile__content": [
            flex.selfStart,
            {
              " .pe-list-tile__title": {
                padding: 0
              }
            }
          ]
        },

        // List header
        ".pe-list-tile--header": {
          pointerEvents: "none",

          " .pe-list-tile__content": {
            paddingTop: 0,
            paddingBottom: 0
          },
          " .pe-list-tile__title": {
            padding: 0
          }
        },

        // Firefox only
        "@supports (-moz-appearance:none) and (display:contents)": {
          " .pe-list-tile__primary, .pe-list-tile__content": {
            overflow: "hidden"
          }
        },

        // Menu

        ".pe-dialog .pe-menu__content &": {
          " .pe-list-tile__content": {
            paddingLeft: "24px",
            paddingRight: "24px"
          },
          " .pe-list-tile__content-front": {
            paddingRight: 0,
            width: "64px",
            marginRight: "-7px"
          },

          " .pe-list-tile__title": mixin.ellipsis("none")
        },

        ".pe-menu__content &": {
          ":not(.pe-list-tile--disabled)": {
            cursor: "default",

            "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
              " .pe-list-tile__title, .pe-list-tile__subtitle": {
                userSelect: "none",
                "-moz-user-select": "none",
              }
            }
          }
        },

        // Non-touch

        "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
          ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
            cursor: "pointer"
          }
        }
      },
    ]),
    {
      // RTL
      [selectorRTL(selector)]: alignRight(vars)
    }
  ],
  title_line_count: (selector, vars) => [
    title_line_count_single_line_height(selector, vars)
  ],
  single_line_height: (selector, vars) => [
    title_line_count_single_line_height(selector, vars)
  ],
  font_size_title: (selector, vars) => [
    sel(selector, {
      fontSize: vars.font_size_title + "px",

      " .pe-list-tile__secondary": {
        fontSize: vars.font_size_title + "px",
      },
    })
  ],
  font_weight_title: (selector, vars) => [
    sel(selector, {
      fontWeight: vars.font_weight_title,
    })
  ],
  font_size_navigation_title: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--navigation": {
        fontSize: vars.font_size_navigation_title + "px",
      },
    })
  ],
  font_weight_navigation_title: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--navigation": {
        fontWeight: vars.font_weight_navigation_title,
      },
    })
  ],
  padding: (selector, vars) => [
    sel(selector, {
      ":not(.pe-list-tile--header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": [
          paddingV(vars.padding, vars.padding + 1)
        ]
      },

      " .pe-list-tile__content": {
        ".pe-list-tile__content-front": [
          paddingV(vars.padding - 5),
        ]
      },
    })
  ],
  side_padding: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__content": [
        paddingH(vars.side_padding)
      ]
    }),
  ],
  inset_size: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--inset": inset(selector, vars)
    }),
  ],
  rounded_border_radius: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--rounded": rounded(selector, vars)
    }),
  ],
  compact_front_item_width: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__content-front": {            
        ".pe-list-tile--compact-front": {
          width: vars.compact_front_item_width + "px"
        },
      },
    })
  ],
  front_item_width: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__content-front": {        
        ":not(.pe-list-tile--compact-front)": {
          width: vars.front_item_width + "px"
        },
      },
    })
  ],
  font_size_small: (selector, vars) => [
    sel(selector, {
      " .pe-list-tile__content": {
        " small": {
          fontSize: vars.font_size_small + "px"
        }
      },
    })
  ],
  has_high_subtitle_padding: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile__content": [
          paddingV(vars.has_high_subtitle_padding, vars.has_high_subtitle_padding + 1),
        ]
      },
    })
  ],
  has_subtitle_padding: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": [
          paddingV(vars.has_subtitle_padding, vars.has_subtitle_padding + 1),
        ]
      },
    })
  ],
  single_height: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--header": {
        height: vars.single_height + "px",

        " .pe-list-tile__title": [
          mixin.ellipsis(1, vars.single_height, "px"),
          {
            lineHeight: vars.single_height + "px",
            padding: 0
          }
        ]
      },
    })
  ],
  font_size_list_header: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontSize: vars.font_size_list_header + "px",
        }
      },
    })
  ],
  font_weight_list_header: (selector, vars) => [
    sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontWeight: vars.font_weight_list_header,
        }
      },
    })
  ],
  compact_padding: (selector, vars) => [
    sel(selector, {
      " .pe-list--compact &, &.pe-list-tile--compact": {
        ":not(.pe-list-tile--header)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars.compact_padding, vars.compact_padding + 1)
        }
      },
    })
  ],

  // Theme vars

  inset: (selector, vars) => 
    vars.inset && inset(selector, vars),
  rounded: (selector, vars) => 
    vars.rounded && rounded(selector, vars),
  selected: (selector, vars) => 
    vars.selected && unSelectable(selector, vars),
};

export default createLayout({ varFns });
