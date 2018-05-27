import { mixin, flex, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const getThumbSize = vars => {
  const thumbSize = Math.max(vars.thumb_size, 2 * vars.thumb_border_width);
  const barOffset = thumbSize / 2;
  const stepsOffset = barOffset - 1;
  return {
    normalThumbSize: thumbSize,
    disabledThumbSize: thumbSize - 2 * vars.thumb_border_width,
    barOffset,
    stepsOffset,
  };
};

const getBorderWidth = vars => {
  const borderWidth = vars.thumb_border_width;
  const scaledBorderWidth = Math.max(1, vars.thumb_border_width / vars.active_thumb_scale);
  return {
    normalBorderWidth: borderWidth,
    disabledBorderWidth: 1 / vars.disabled_thumb_scale * vars.thumb_border_width,
    scaledBorderWidth
  };
};

const thumb_size_thumb_border_width_disabled_thumb_scale = (selector, vars) => {
  const { normalThumbSize, disabledThumbSize } = getThumbSize(vars);
  const { normalBorderWidth, disabledBorderWidth } = getBorderWidth(vars);

  return sel(selector, {
    " .pe-slider__control:after": {
      borderWidth: normalBorderWidth + "px",
      width: normalThumbSize + "px",
      height: normalThumbSize + "px",
      left: 0,
      top: 0,
    },
    ".pe-slider--disabled .pe-slider__control:after": {
      borderWidth: disabledBorderWidth + "px",
      width: disabledThumbSize + "px",
      height: disabledThumbSize + "px",
      left: (normalThumbSize - disabledThumbSize) + "px",
      top: (normalThumbSize - disabledThumbSize) + "px",
    },
    ".pe-slider--ticks .pe-slider__control:after": {
      borderWidth: 0
    },
  });
};

const height_track_height = (selector, vars) =>
  sel(selector, {
    marginTop: ((vars.height - vars.track_height) / 2) + "px ",
  });

const track_height_bar_height = (selector, vars) =>
  sel(selector, {
    " .pe-slider__track-part": {
      margin: ((vars.track_height - vars.bar_height) / 2) + "px 0",
    }
  });

const thumb_size_thumb_touch_size = (selector, vars) => {
  const { normalThumbSize } = getThumbSize(vars);
  return sel(selector, {
    " .pe-slider__control:before": {
      left: (-vars.thumb_touch_size / 2 + normalThumbSize / 2) + "px",
      top: (-vars.thumb_touch_size / 2 + normalThumbSize / 2) + "px",
    },
  });
};

const thumb_size_active_thumb_scale = (selector, vars) => {
  const { normalThumbSize } = getThumbSize(vars);
  const { scaledBorderWidth } = getBorderWidth(vars);
  const scaledThumbDiff = (vars.active_thumb_scale - 1) * normalThumbSize / 2;
  return sel(selector, {
    ".pe-slider--active:not(.pe-slider--ticks)": {
      " .pe-slider__control": {
        borderWidth: scaledBorderWidth + "px"
      },
      // left side
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        transform: "translateX(" + (-scaledThumbDiff) + "px)"
      },
      // right side
      " .pe-slider__track-rest .pe-slider__track-bar-value": {
        transform: "translateX(" + (scaledThumbDiff) + "px)"
      }
    },
    ".pe-slider--active.pe-slider--ticks": {
      " .pe-slider__control:after": {
        borderWidth: 0
      },
    }
  });
};

const thumb_size_pin_width = (selector, vars) => {
  const { stepsOffset } = getThumbSize(vars);
  return sel(selector, {
    " .pe-slider__pin": {
      margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars.pin_width / 2 + 1) + "px",
    }
  });
};

const varFns = {
  general_styles: selector => [
    sel(selector, [
      flex.layoutHorizontal,
      flex.flexGrow(1),
      {
        userSelect: "none",
        "-moz-user-select": "none",
        alignItems: "center",
        
        " > .pe-icon": flex.layoutCenter,

        " .pe-slider__track": [
          flex.layoutHorizontal,
          flex.flexGrow(1),
          {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "relative",              
            outline: 0
          }
        ],

        " .pe-slider__control": [
          flex.selfCenter,
          mixin.defaultTransition("transform, background", ".200s"),
          {
            transform: "scale(1)",
            userSelect: "none",
            "-moz-user-select": "none",
            lineHeight: 0,
            borderRadius: "50%",
            outline: 0,
            zIndex: 1,
            position: "relative",

            // touch area
            ":before": {
              content: "\"\"",
              position: "absolute",
              borderRadius: "50%",
            },

            // border
            ":after": {
              content: "\"\"",
              position: "absolute",
              borderRadius: "50%",
              borderStyle: "solid"
            }
          }
        ],

        " .pe-slider__thumb": [
          mixin.fit(),
          {
            "&, .pe-icon": {
              width: "inherit",
              height: "inherit"
            }
          }
        ],

        " .pe-slider__label": {
          minWidth: themeVars.unit_icon_size + "px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: themeVars.font_weight_medium
        },

        " .pe-slider__track-part": [
          flex.flex(),
          {
            userSelect: "none",
            "-moz-user-select": "none",
            overflow: "hidden" // Firefox otherwise uses 6x at 0%
          }
        ],

        " .pe-slider__track-value, .pe-slider__track-rest": flex.layoutHorizontal,

        " .pe-slider__track-bar": [
          flex.flex(),
          {
            position: "relative",
            overflow: "hidden"
          }
        ],
        " .pe-slider__track-bar-value": flex.flex(),

        " .pe-slider__ticks": [
          flex.layoutJustified,
          {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "absolute",
            left: 0,
            pointerEvents: "none"
          }
        ],

        " .pe-slider__pin": [
          mixin.defaultTransition("transform", ".11s"),
          {
            transform: "translateZ(0) scale(0) translate(0, 0)",
            transformOrigin: "bottom",
            position: "absolute",
            zIndex: 1,
            height: 0,
            left: 0, // set in js
            top: 0,
            pointerEvents: "none",

            "&::before, &::after": {
              position: "absolute",
              top: 0,
              left: 0,
            },

            "::before": {
              transform: "rotate(-45deg)",
              content: "\"\"",
              borderRadius: "50% 50% 50% 0",
            },
            "::after": {
              content: "attr(value)",
              textAlign: "center",
            }
          }
        ],

        

        ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
          " .pe-slider__pin": {
            transform: "translateZ(0) scale(1) translate(0, -24px)"
          },
        },

        ":not(.pe-slider--disabled)": {
          " .pe-slider__control": {
            cursor: "pointer"
          },
          ".pe-slider--track": {
            " .pe-slider__track": {
              cursor: "pointer"
            }
          }
        },

        ".pe-slider--disabled": {
          " .pe-slider__control": {
            borderWidth: 0
          },
        }
      }
    ])
  ],
  thumb_size: (selector, vars) => {
    const { normalThumbSize, barOffset, stepsOffset } = getThumbSize(vars);
    return [
      sel(selector, {
        " .pe-slider__control": {
          width: normalThumbSize + "px",
          height: normalThumbSize + "px",
        },
        " .pe-slider__track-value .pe-slider__track-bar": {
          marginLeft: barOffset + "px"
        },
        " .pe-slider__track-rest .pe-slider__track-bar": {
          marginRight: barOffset + "px"
        },
        " .pe-slider__ticks": {
          width: "calc(100% - " + (2 * stepsOffset) + "px)",
          margin: "0 " + stepsOffset + "px",
        }
      }),
      thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars),
      thumb_size_thumb_touch_size(selector, vars),
      thumb_size_active_thumb_scale(selector, vars),
      thumb_size_pin_width(selector, vars),
    ];
  },
  active_thumb_scale: (selector, vars) => [
    sel(selector, {
      ".pe-slider--active:not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          transform: "scale(" + vars.active_thumb_scale + ")",
        },
      }
    }),
    thumb_size_active_thumb_scale(selector, vars),
  ],
  thumb_touch_size: (selector, vars) => [
    sel(selector, {
      " .pe-slider__control": {
        ":before": {
          width: vars.thumb_touch_size + "px",
          height: vars.thumb_touch_size + "px"
        },
      }
    }),
    thumb_size_thumb_touch_size(selector, vars),
  ],
  thumb_border_width: (selector, vars) => [
    sel(selector, {
    }),
    thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)
  ],
  disabled_thumb_scale: (selector, vars) => [
    sel(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          transform: "scale(" + vars.disabled_thumb_scale + ")",
        },
      }
    }),
    thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)
  ],
  active_pin_thumb_scale: (selector, vars) => [
    sel(selector, {
      ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
        " .pe-slider__control": {
          transform: "scale(" + vars.active_pin_thumb_scale + ")"
        }
      },
    })
  ],
  height: (selector, vars) => [
    sel(selector, {
      height: vars.height + "px",

      " > .pe-icon": {
        height: vars.height + "px"
      },
      " .pe-slider__label": {
        height: vars.height + "px",
        lineHeight: vars.height + "px",
      },
      " .pe-slider__ticks": {
        top: ((vars.height / 2) - 1) + "px",
      },
    }),
    height_track_height(selector, vars)
  ],
  track_height: (selector, vars) => [
    sel(selector, {
      " .pe-slider__track": {
        height: vars.track_height + "px",
      }
    }),
    height_track_height(selector, vars),
    track_height_bar_height(selector, vars),
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-slider__track": mixin.defaultTransition("transform", vars.animation_duration),
      " .pe-slider__control:before": mixin.defaultTransition("background-color", vars.animation_duration),
      " .pe-slider__control:after": mixin.defaultTransition("border", vars.animation_duration),
      " .pe-slider__thumb": mixin.defaultTransition("opacity", vars.animation_duration),
      " .pe-slider__track-bar-value": mixin.defaultTransition("transform, background-color", vars.animation_duration),
    })
  ],
  side_spacing: (selector, vars) => [
    sel(selector, {
      " .pe-slider__track": {
        margin: "0 " + vars.side_spacing + "px",
      },
    })
  ],
  horizontal_layout_side_spacing: (selector, vars) => [
    sel(selector, {
      " div + .pe-slider__track": {
        margin: "0 " + vars.horizontal_layout_side_spacing + "px"
      },
    })
  ],
  bar_height: (selector, vars) => [
    sel(selector, {
      " .pe-slider__track-part,\
        .pe-slider__track-bar-value,\
        .pe-slider__ticks,\
        .pe-slider__tick": {
        height: vars.bar_height + "px",
      },
    }),
    track_height_bar_height(selector, vars)
  ],
  step_width: (selector, vars) => [
    sel(selector, {
      " .pe-slider__tick": {
        width: vars.step_width + "px",
      },
    })
  ],
  pin_width: (selector, vars) => [
    sel(selector, {
      " .pe-slider__pin": {
        width: vars.pin_width + "px",

        "::before": {
          width: vars.pin_width + "px",
          height: vars.pin_width + "px",
        },
        "::after": {
          width: vars.pin_width + "px",
          height: vars.pin_height + "px",
          lineHeight: vars.pin_width + "px"
        }
      }
    }),
    thumb_size_pin_width(selector, vars)
  ],
  pin_font_size: (selector, vars) => [
    sel(selector, {
      " .pe-slider__pin::after": {
        fontSize: vars.pin_font_size + "px",
      }
    })
  ],
};

export default createLayout({
  varFns,
});
