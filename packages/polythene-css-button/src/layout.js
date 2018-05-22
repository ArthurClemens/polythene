import { mixin, sel, selectorRTL, createLayout } from "polythene-core-css";

const alignSide = isRTL => () => ({
  ".pe-button--separator-start .pe-button__content": {
    borderStyle: isRTL
      ? "none solid none none"
      : "none none none solid",
  }
});
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const line_height_label_padding_v = (selector, vars) =>
  sel(selector, {
    " .pe-button__dropdown": {
      minHeight: `calc((1em * ${vars.line_height}) + 2 * ${vars.label_padding_v}px)`,
    },
  });

const outer_padding_v_label_padding_v = (selector, vars) => 
  sel(selector, {
    ".pe-button--high-label": {
      padding: 0,
      
      " .pe-button__label": {
        padding: vars.outer_padding_v + vars.label_padding_v + "px 0",
      },
    }
  });

const line_height_outer_padding_v_label_padding_v = (selector, vars) => 
  sel(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: `calc((1em * ${vars.line_height}) + 2 * ${vars.outer_padding_v + vars.label_padding_v}px)`,
      }
    },
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      alignLeft(),
      {
        display: "inline-block",
        background: "transparent",
        border: "none",

        " .pe-button__content": {
          position: "relative",
          borderWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },

        ".pe-button--border": {
          " .pe-button__wash, .pe-button__focus, .pe-ripple": mixin.fit(-1),

          " .pe-button__content": {
            borderStyle: "solid",
            borderWidth: "1px",
          },
        },

        " .pe-button__label, .pe-button__dropdown": {
          whiteSpace: "pre",
          userSelect: "none",
          "-moz-user-select": "none"
        },

        ".pe-button--dropdown": {
          minWidth: "0", // IE 11 does not recognize "initial" here

          " .pe-button__dropdown": {
            position: "relative",
          },

          " .pe-svg": {
            position: "absolute",
            left: 0,
            top: "50%",
          },

          " .pe-button__label + .pe-button__dropdown": {
            marginLeft: "7px",
            minWidth: 0,
          },
        },

        " .pe-button-group &": {
          minWidth: 0
        },
      }
    ]),
    [
      sel(selectorRTL(selector), alignRight()),
    ]
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        borderRadius: vars.border_radius + "px",
      },
      " .pe-button-group &": {
        ":not(:first-child)": {
          " .pe-button__content": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        },
        ":not(:last-child)": {
          " .pe-button__content": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }
        },
      },
    })
  ],
  border_width: (selector, vars) => [
    sel(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          borderWidth: vars.border_width + "px"
        },
      },
    })
  ],
  min_width: (selector, vars) => [
    sel(selector, {
      minWidth: vars.min_width + "px",
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-button__content, .pe-button__wash, .pe-button__focus": [
        mixin.defaultTransition("all", vars.animation_duration)
      ],
    })
  ],
  padding_h: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        padding: "0 " + vars.padding_h + "px",

        " .pe-button__dropdown": {
          minWidth: `calc(36px - 2 * ${vars.padding_h}px)`,
        },

        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: `calc(7px - ${vars.padding_h}px)`,
          },
        }
      },
    })
  ],
  padding_h_extra_wide: (selector, vars) => [
    sel(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars.padding_h_extra_wide + "px",
      },
    })
  ],
  label_padding_v: (selector, vars) => [
    sel(selector, {
      " .pe-button__label": {
        padding: vars.label_padding_v + "px 0",
      },

      ".pe-button--border": {
        " .pe-button__label": {
          padding: (vars.label_padding_v - 1) + "px 0"
        }
      },
    }),
    line_height_label_padding_v(selector, vars),
    outer_padding_v_label_padding_v(selector, vars),
    line_height_outer_padding_v_label_padding_v(selector, vars)
  ],
  font_weight: (selector, vars) => [
    sel(selector, {
      " .pe-button__label": {
        fontWeight: vars.font_weight,
      }
    })
  ],
  text_transform: (selector, vars) => [
    sel(selector, {
      " .pe-button__label": {
        textTransform: vars.text_transform,
      }
    })
  ],
  font_size: (selector, vars) => [
    sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars.font_size + "px",
      },
    })
  ],
  line_height: (selector, vars) => [
    sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars.line_height,
      },
    }),
    line_height_label_padding_v(selector, vars),
    line_height_outer_padding_v_label_padding_v(selector, vars)
  ],
  dropdown_icon_size: (selector, vars) => [
    sel(selector, {
      ".pe-button--dropdown": {
        " .pe-button__dropdown": {
          width: vars.dropdown_icon_size + "px",
          
        },
        " .pe-svg": {
          width: vars.dropdown_icon_size + "px",
          height: vars.dropdown_icon_size + "px",
          marginTop: -vars.dropdown_icon_size / 2 + "px",
        },
      },
    })
  ],
  outer_padding_v: (selector, vars) => [
    sel(selector, {
      padding: vars.outer_padding_v + "px 0",

      ".pe-button--high-label": {
        padding: 0,
      },
    }),
    outer_padding_v_label_padding_v(selector, vars),
    line_height_outer_padding_v_label_padding_v(selector, vars)
  ],
  separator_width: (selector, vars) => [
    sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars.separator_width + "px"
        }
      }
    })
  ],
  padding_h_border: (selector, vars) => [
    sel(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          padding: "0 " + vars.padding_h_border + "px",
        }
      }
    })
  ],
  letter_spacing: (selector, vars) => [
    sel(selector, {
      letterSpacing: vars.letter_spacing + "px"
    })
  ],
};

export default createLayout({ varFns });
