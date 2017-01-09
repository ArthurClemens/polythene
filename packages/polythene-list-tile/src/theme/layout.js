import { mixin, styler, flex } from "polythene-css";
import { vars } from "polythene-theme";

const paddingH = h => ({
  "padding-left": h + "px",
  "padding-right": h + "px"
});

const paddingV = (top, bottom) => ({
  "padding-top": top + "px",
  "padding-bottom": (bottom || top) + "px"
});

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-list-tile`;
  return [{
    [selector]: [
      flex.layout, {
        position: "relative",
        overflow: "hidden",

        "&.pe-list-tile--sticky": [
          mixin.sticky(2)
        ],

        " .pe-list-tile__primary, .pe-list-tile__secondary": [
          flex.layoutHorizontal,
          {
            "text-decoration": "none",
            color: "inherit",
            border: "none"
          }
        ],

        " .pe-list-tile__primary": [
          flex.flex(), {
            position: "relative",

            " .pe-list-tile__content:not(.pe-list-tile__content--front)": [
              flex.flex(),
              paddingV(componentVars.padding, componentVars.padding + 1)
            ]
          }
        ],

        " .pe-list-tile__secondary": {
          "text-align": "right",
          "font-size": componentVars.font_size_title + "px",
          position: "relative"
        },

        " .pe-list-tile__content": [
          flex.layoutVertical,
          flex.selfCenter,
          paddingH(componentVars.side_padding), {
            "&.pe-list-tile__content--front": [
              paddingV(componentVars.padding - 5), {
                width: componentVars.front_item_width + "px"
              }
            ],

            " small": {
              "font-size": componentVars.font_size_small + "px"
            }
          }
        ],

        " .pe-list-tile__content--front + .pe-list-tile__content": {
          "padding-left": 0
        },

        " .pe-list-tile__title": [
          mixin.ellipsis(1), {
            "font-size": componentVars.font_size_title + "px",
            "font-weight": vars.font_weight_normal,
            "line-height": componentVars.single_line_height + "px"
          }
        ],

        " .pe-list-tile__subtitle": [
          mixin.ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle), {
            "font-size": componentVars.font_size_subtitle + "px",
            "line-height": componentVars.line_height_subtitle + "px",

            "&.pe-list-tile__subtitle--high": [
              mixin.ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle), {
                "white-space": "normal"
              }
            ]
          }
        ],

        "&.pe-list-tile--selected, &.pe-list-tile--disabled": {
          " a": {
            "pointer-events": "none"
          }
        },

        "&.pe-list-tile--subtitle": {
          " .pe-list-tile__content": [
            paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1), {
              " .pe-list-tile__title": {
                padding: 0
              }
            }
          ]
        },

        "&.pe-list-tile--high-subtitle": {
          " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [
            flex.layoutHorizontal,
            flex.layoutStart
          ],
          " .pe-list-tile__content": [
            flex.selfStart,
            paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1), {
              " .pe-list-tile__title": {
                padding: 0
              }
            }
          ]
        },

        // List header
        "&.pe-list__header": {
          height: componentVars.single_height + "px",

          " .pe-list-tile__content": {
            "padding-top": 0,
            "padding-bottom": 0
          },
          " .pe-list-tile__title": [
            mixin.ellipsis(1, componentVars.single_height), {
              "font-size": componentVars.font_size_list_header + "px",
              "font-weight": vars.font_weight_medium,
              "line-height": componentVars.single_height + "px",
              padding: 0
            }
          ]
        },

        // Compact list

        " .pe-list--compact &, &.pe-list-tile--compact": {
          "&:not(.pe-list__header)": {
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
          " .pe-list-tile__title": mixin.ellipsis("none")
        },

        ".pe-menu__content &": {
          "&:not(.pe-list-tile--disabled)": {
            cursor: "default",

            "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
              " .pe-list-tile__title, .pe-list-tile__subtitle": [
                mixin.vendorize({
                  "user-select": "none"
                }, vars.prefixes_user_select)
              ]
            }
          }
        },

        // Non-touch

        "html.pe-no-touch .pe-list--hoverable &, \
        html.pe-no-touch .pe-list--selectable &, \
        html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
          "&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
            cursor: "pointer"
          }
        }
      }
    ]
  }];
};

export default componentVars => styler.createStyles(componentVars, createStyles);
