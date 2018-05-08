import { mixin, flex } from "polythene-core-css";

const paddingH = h => ({
  "padding-left": h + "px",
  "padding-right": h + "px"
});

const paddingV = (top, bottom) => ({
  "padding-top": top + "px",
  "padding-bottom": (bottom || top) + "px"
});

export default (selector, componentVars) => [{
  [selector]: [
    flex.layout,
    {
      position: "relative",
      fontSize: componentVars.font_size_title + "px",
      fontWeight: componentVars.font_weight_title,
      lineHeight: componentVars.single_line_height + "px",

      ".pe-list-tile--navigation": {
        fontSize: componentVars.font_size_navigation_title + "px",
        fontWeight: componentVars.font_weight_navigation_title,
      },

      ".pe-list-tile--sticky": [
        mixin.sticky(2)
      ],

      " .pe-list-tile__primary": {
        width: "100%"
      },

      " .pe-list-tile__primary, .pe-list-tile__secondary": [
        flex.layoutHorizontal,
        {
          textDecoration: "none",
          color: "inherit",
          border: "none",          
        }
      ],

      ":not(.pe-list-tile--header) .pe-list-tile__primary": [
        flex.flex(), {
          position: "relative",

          " .pe-list-tile__content:not(.pe-list-tile__content-front)": [
            flex.flex(),
            paddingV(componentVars.padding, componentVars.padding + 1)
          ]
        }
      ],

      ":not(.pe-list-tile--disabled)": {
        outline: "none"
      },

      " .pe-list-tile__secondary": {
        textAlign: "right",
        fontSize: componentVars.font_size_title + "px",
        position: "relative"
      },

      " .pe-list-tile__content": [
        flex.layoutVertical,
        flex.selfCenter,
        paddingH(componentVars.side_padding),
        {
          width: "100%",

          ".pe-list-tile__content-front": [
            paddingV(componentVars.padding - 5),
            {
              flexShrink: 0,
              
              ".pe-list-tile--compact-front": {
                width: componentVars.compact_front_item_width + "px"
              },
              ":not(.pe-list-tile--compact-front)": {
                width: componentVars.front_item_width + "px"
              },
            }
          ],

          " small": {
            fontSize: componentVars.font_size_small + "px"
          }
        }
      ],

      " .pe-list-tile__content-front + .pe-list-tile__content": {
        paddingLeft: 0 // reverse for RTL - see below
      },

      " .pe-list-tile__title": [
        mixin.ellipsis(componentVars.title_line_count, componentVars.single_line_height, "px"),
        {
          whiteSpace: "normal"
        }
      ],

      " .pe-list-tile__subtitle": [
        mixin.ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle, "px"),
        {
          fontSize: componentVars.font_size_subtitle + "px",
          fontWeight: componentVars.font_weight_subtitle,
          lineHeight: componentVars.line_height_subtitle + "px",

          ".pe-list-tile__high-subtitle": [
            mixin.ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle, "px"),
            {
              whiteSpace: "normal"
            }
          ]
        }
      ],

      ".pe-list-tile--selected, &.pe-list-tile--disabled": {
        " a": {
          pointerEvents: "none"
        }
      },

      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": [
          paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1),
          {
            " .pe-list-tile__title": {
              padding: 0
            }
          }
        ]
      },

      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [
          flex.layoutHorizontal,
          flex.layoutStart
        ],
        " .pe-list-tile__content": [
          flex.selfStart,
          paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1),
          {
            " .pe-list-tile__title": {
              padding: 0
            }
          }
        ]
      },

      // List header
      ".pe-list-tile--header": {
        height: componentVars.single_height + "px",

        " .pe-list-tile__content": {
          paddingTop: 0,
          paddingBottom: 0
        },
        " .pe-list-tile__title": [
          mixin.ellipsis(1, componentVars.single_height, "px"),
          {
            fontSize: componentVars.font_size_list_header + "px",
            fontWeight: componentVars.font_weight_list_header,
            lineHeight: componentVars.single_height + "px",
            padding: 0
          }
        ]
      },

      // Compact list

      " .pe-list--compact &, &.pe-list-tile--compact": {
        ":not(.pe-list-tile--header)": {
          " .pe-list-tile__content": paddingV(componentVars.compact_padding, componentVars.compact_padding + 1)
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
  ],
  "*[dir=rtl], .pe-rtl ": {
    [selector]: {
      " .pe-list-tile__content-front + .pe-list-tile__content": [
        paddingH(componentVars.side_padding),
        {
          paddingRight: 0
        },
      ]
    }
  },
}];
