import { flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const inset_height_line_height_input = (selector, vars) => {
  const inset_input_padding_v = (vars.inset_height - vars.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--inset": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px",
      }
    },
  });
};

const full_width_height_line_height_input = (selector, vars) => {
  const full_width_input_padding_v = (vars.full_width_height - vars.line_height_input) / 2;
  return sel(selector, {
    ".pe-search--full-width": {
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px",
      }
    }
  });
};

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.flex(),
      {
        position: "relative", // necessary when a shadow is added

        " .pe-textfield": [
          flex.flex(),
          {
            alignItems: "center",
            padding: 0,
            // prevent that neighboring icon button with ripple hides the cursor
            position: "relative",
            zIndex: 1,
        
            " .pe-textfield__input-area": {
              padding: 0,

              ":after": {
                display: "none"
              }
            },

            " .pe-textfield__input": {
              // reset
              border: "none"
            },

            " .pe-textfield__label": {
              // reset
              top: 0,
              bottom: 0
            }
          }
        ],

        " .pe-search__content": {
          "&, .pe-textfield": flex.layoutHorizontal,
          "&, .pe-textfield__input-area": {
            flexGrow: 1
          }
        },

        " .pe-search__content > *": [
          flex.layoutVertical,
          flex.selfCenter
        ],

        ".pe-search--inset": {
          "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
            padding: 0,
          },
        },
      }
    ])
  ],
  font_size_input: (selector, vars) => [
    sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars.font_size_input + "px",
        },
      }
    }),
  ],
  line_height_input: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars.line_height_input + "px"
      },
    }),
    inset_height_line_height_input(selector, vars)
  ],
  inset_border_radius: (selector, vars) => [
    sel(selector, {
      ".pe-search--inset": {
        "border-radius": vars.inset_border_radius + "px",
      }
    }),
  ],
  inset_side_padding: (selector, vars) => [
    sel(selector, {
      ".pe-search--inset": {
        padding: "0 " + vars.inset_side_padding + "px",
      }
    }),
  ],
  inset_height: (selector, vars) => [
    sel(selector, {
      ".pe-search--inset": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          padding: 0,
          height: vars.inset_height + "px"
        },
      }
    }),
    inset_height_line_height_input(selector, vars)
  ],
  full_width_height: (selector, vars) => [
    sel(selector, {
      ".pe-search--full-width": {
        "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
          height: vars.full_width_height + "px"
        },
      }
    }),
    full_width_height_line_height_input(selector, vars)
  ],
  inset_input_indent: (selector, vars) => [
    sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: vars.inset_input_indent + "px",
        }
      },
    }),
  ],
  inset_input_right_padding: (selector, vars) => [
    sel(selector, {
      ".pe-search--inset": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.inset_input_right_padding + "px"
        }
      },
    }),
  ],
  full_width_side_padding: (selector, vars) => {
    const full_width_input_indent = (themeVars.unit_indent - vars.full_width_side_padding) - themeVars.grid_unit_icon_button;
    return sel(selector, {
      ".pe-search--full-width": {
        padding: "0 " + vars.full_width_side_padding + "px",

        " .pe-textfield__input, .pe-textfield__label": {
          paddingLeft: full_width_input_indent + "px",
        }
      }
    });
  },
  full_width_border_radius: (selector, vars) => [
    sel(selector, {
      ".pe-search--full-width": {
        borderRadius: vars.full_width_border_radius + "px",
      }
    }),
  ],
  full_width_input_right_padding: (selector, vars) => [
    sel(selector, {
      ".pe-search--full-width": {
        " .pe-textfield__input, .pe-textfield__label": {
          paddingRight: vars.full_width_input_right_padding + "px"
        }
      }
    }),
  ],
};

export default createLayout({ varFns });
