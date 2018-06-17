import { mixin, flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";
import { layout as superLayout } from "polythene-css-button";

const tab_label_transition_property_animation_duration = (selector, vars) =>
  sel(selector, {
    " .pe-button__content":
      mixin.defaultTransition(vars.tab_label_transition_property, vars.animation_duration)
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.flex(),
      flex.flexIndex("none"),
      {
        userSelect: "none",
        "-moz-user-select": "none",
        margin: 0,
        borderRadius: 0,
        padding: 0,

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
        },

        ".pe-tabs--menu &": {
          "&, &.pe-tabs__tab--icon, &.pe-text-button": {
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
        

        ".pe-tabs--compact &": {
          minWidth: "initial"
        },

        " .pe-tabs__tab-content": [
          flex.layoutCenterCenter,
          flex.layoutVertical, {
            height: "inherit"
          }
        ],

        ".pe-tabs--autofit &": [
          flex.flex(),
          {
            minWidth: "initial",
            maxWidth: "none"
          }
        ],

        ".pe-tabs__active--selectable &": {
          ".pe-button--selected": {
            cursor: "pointer",
            pointerEvents: "initial",
          }
        },

      },
    ]),
  ],
  tab_height: (selector, vars) => [
    sel(selector, {
      height: vars.tab_height + "px",

      " .pe-button__content": {
        height: vars.tab_height + "px",
      }
    }),
  ],
  tab_min_width: (selector, vars) => [
    sel(selector, {
      minWidth: vars.tab_min_width + "px", // for smaller screens, see also media query
    }),
  ],
  tab_max_width: (selector, vars) => [
    sel(selector, {
      maxWidth: isNaN(vars.tab_max_width)
        ? vars.tab_max_width
        : vars.tab_max_width + "px",
    }),
  ],
  tab_min_width_tablet: (selector, vars) => ({
    ["@media (min-width: " + themeVars.breakpoint_for_tablet_landscape_up + "px)"]: {
      [`.pe-tabs:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable):not(.pe-tabs--compact) ${selector}`]: {
        minWidth: vars.tab_min_width_tablet + "px"
      }
    }
  }),
  tab_icon_label_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          height: vars.tab_icon_label_height + "px"
        },
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
      " .pe-button__content": {
        padding: "0 " + vars.tab_content_padding_v + "px",
      }
    }),
  ],
  label_max_width: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          maxWidth: vars.label_max_width + "px", // or .pe-tabs width minus 56dp
        }
      }
    }),
  ],
  tab_label_line_height: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        " .pe-button__label, .pe-icon": {
          lineHeight: vars.tab_label_line_height + "px",
          maxHeight: 2 * vars.tab_label_line_height + "px",
        }
      }
    }),
  ],
  tab_label_vertical_offset: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        " .pe-button__label": {
          margin: vars.tab_label_vertical_offset + "px 0 0 0",
        },
      }
    }),
  ],
  tab_icon_label_icon_spacing: (selector, vars) => [
    sel(selector, {
      ".pe-tabs__tab--icon": {
        "&, .pe-button__content": {
          " .pe-icon": {
            marginBottom: vars.tab_icon_label_icon_spacing + "px"
          }
        }
      }
    }),
  ],
  menu_tab_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu &": {
        // reset sizes to fit within a small space
        height: vars.menu_tab_height + "px",

        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            height: vars.menu_tab_height + "px",
          }
        },
      },
    }),
  ],
  menu_tab_icon_label_height: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu &": {
        "&.pe-tabs__tab--icon": {
          height: vars.menu_tab_icon_label_height + "px",
        },
      },
    }),
  ],
  tab_menu_content_padding_v: (selector, vars) => [
    sel(selector, {
      ".pe-tabs--menu &": {
        "&, &.pe-tabs__tab--icon, &.pe-text-button": {
          " .pe-button__content": {
            padding: "0 " + vars.tab_menu_content_padding_v + "px",
          }
        }
      },
    }),
  ],
};

export default createLayout({ varFns, superLayout });
