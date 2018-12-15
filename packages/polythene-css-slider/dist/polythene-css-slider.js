(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-slider",
    // elements
    control: "pe-slider__control",
    label: "pe-slider__label",
    pin: "pe-slider__pin",
    thumb: "pe-slider__thumb",
    tick: "pe-slider__tick",
    ticks: "pe-slider__ticks",
    track: "pe-slider__track",
    trackBar: "pe-slider__track-bar",
    trackBarValue: "pe-slider__track-bar-value",
    trackPart: "pe-slider__track-part",
    trackPartRest: "pe-slider__track-rest",
    trackPartValue: "pe-slider__track-value",
    // states
    hasFocus: "pe-slider--focus",
    hasPin: "pe-slider--pin",
    hasTicks: "pe-slider--ticks",
    hasTrack: "pe-slider--track",
    isActive: "pe-slider--active",
    isAtMin: "pe-slider--min",
    isDisabled: "pe-slider--disabled",
    tickValue: "pe-slider__tick--value"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-slider__control": {
        ":after": {
          borderColor: "transparent"
        }
      },
      " .pe-slider__pin": {
        backgroundColor: "currentcolor",
        ":before": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: "currentcolor"
        },
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          background: "currentcolor"
        },
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: "currentcolor"
        }
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          backgroundColor: "transparent"
        },
        " .pe-slider__thumb": {
          opacity: 0
        },
        ".pe-slider--ticks": {
          " .pe-slider__control:after": {
            borderColor: "transparent"
          }
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon"]
        }
      }
    })],
    ["color_" + tint + "_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__label": {
          color: vars["color_" + tint + "_label"]
        }
      }
    })],
    ["color_" + tint + "_thumb_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint + "_thumb_on"] // override by specifying "color"

    })],
    ["color_" + tint + "_track_inactive"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__track-bar-value": {
        background: vars["color_" + tint + "_track_inactive"]
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control:after": {
          borderColor: vars["color_" + tint + "_track_inactive"]
        }
      }
    })],
    ["color_" + tint + "_tick"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__tick": {
        background: vars["color_" + tint + "_tick"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick": {
          backgroundColor: vars["color_" + tint + "_tick"]
        }
      }
    })],
    ["color_" + tint + "_tick_value"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__tick--value": {
        background: vars["color_" + tint + "_tick_value"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick--value": {
          backgroundColor: vars["color_" + tint + "_tick_value"]
        }
      }
    })],
    ["color_" + tint + "_disabled_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-icon": {
        color: vars["color_" + tint + "_disabled_icon"]
      }
    })],
    ["color_" + tint + "_disabled_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__label": {
        color: vars["color_" + tint + "_disabled_label"]
      }
    })],
    ["color_" + tint + "_track_active"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-slider--active": {
        " .pe-slider__track-bar-value": {
          background: vars["color_" + tint + "_track_active"]
        }
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--active .pe-slider__control:after": {
          borderColor: vars["color_" + tint + "_track_active"]
        }
      }
    })],
    ["color_" + tint + "_thumb_inactive"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          background: vars["color_" + tint + "_thumb_inactive"]
        }
      }
    })],
    ["color_" + tint + "_thumb_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: vars["color_" + tint + "_thumb_background"]
        }
      }
    })],
    ["color_" + tint + "_thumb_off_focus_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          ":before": {
            opacity: vars["color_" + tint + "_thumb_off_focus_opacity"]
          }
        }
      }
    })],
    ["color_" + tint + "_thumb_off_focus"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
        .pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: vars["color_" + tint + "_thumb_off_focus"]
        }
      }
    })],
    ["color_" + tint + "_thumb_on_focus_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          opacity: vars["color_" + tint + "_thumb_on_focus_opacity"]
        }
      }
    })],
    ["color_" + tint + "_pin_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__pin:after": {
        color: vars["color_" + tint + "_pin_label"]
      }
    })],
    ["color_" + tint + "_pin_background"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__pin": {
        backgroundColor: vars["color_" + tint + "_pin_background"]
      }
    })],
    ["color_" + tint + "_track_value"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          backgroundColor: vars["color_" + tint + "_track_value"]
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  const getThumbSize = vars => {
    const thumbSize = Math.max(vars.thumb_size, 2 * vars.thumb_border_width);
    const barOffset = thumbSize / 2;
    const stepsOffset = barOffset - 1;
    return {
      normalThumbSize: thumbSize,
      disabledThumbSize: thumbSize - 2 * vars.thumb_border_width,
      barOffset,
      stepsOffset
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
    const {
      normalThumbSize,
      disabledThumbSize
    } = getThumbSize(vars);
    const {
      normalBorderWidth,
      disabledBorderWidth
    } = getBorderWidth(vars);
    return polytheneCoreCss.sel(selector, {
      " .pe-slider__control:after": {
        borderWidth: normalBorderWidth + "px",
        width: normalThumbSize + "px",
        height: normalThumbSize + "px",
        left: 0,
        top: 0
      },
      ".pe-slider--disabled .pe-slider__control:after": {
        borderWidth: disabledBorderWidth + "px",
        width: disabledThumbSize + "px",
        height: disabledThumbSize + "px",
        left: normalThumbSize - disabledThumbSize + "px",
        top: normalThumbSize - disabledThumbSize + "px"
      },
      ".pe-slider--ticks .pe-slider__control:after": {
        borderWidth: 0
      }
    });
  };

  const height_track_height = (selector, vars) => polytheneCoreCss.sel(selector, {
    marginTop: (vars.height - vars.track_height) / 2 + "px "
  });

  const track_height_bar_height = (selector, vars) => polytheneCoreCss.sel(selector, {
    " .pe-slider__track-part": {
      margin: (vars.track_height - vars.bar_height) / 2 + "px 0"
    }
  });

  const thumb_size_thumb_touch_size = (selector, vars) => {
    const {
      normalThumbSize
    } = getThumbSize(vars);
    return polytheneCoreCss.sel(selector, {
      " .pe-slider__control:before": {
        left: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px",
        top: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px"
      }
    });
  };

  const thumb_size_active_thumb_scale = (selector, vars) => {
    const {
      normalThumbSize
    } = getThumbSize(vars);
    const {
      scaledBorderWidth
    } = getBorderWidth(vars);
    const scaledThumbDiff = (vars.active_thumb_scale - 1) * normalThumbSize / 2;
    return polytheneCoreCss.sel(selector, {
      ".pe-slider--active:not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          borderWidth: scaledBorderWidth + "px"
        },
        // left side
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          transform: "translateX(" + -scaledThumbDiff + "px)"
        },
        // right side
        " .pe-slider__track-rest .pe-slider__track-bar-value": {
          transform: "translateX(" + scaledThumbDiff + "px)"
        }
      },
      ".pe-slider--active.pe-slider--ticks": {
        " .pe-slider__control:after": {
          borderWidth: 0
        }
      }
    });
  };

  const thumb_size_pin_width = (selector, vars) => {
    const {
      stepsOffset
    } = getThumbSize(vars);
    return polytheneCoreCss.sel(selector, {
      " .pe-slider__pin": {
        margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars.pin_width / 2 + 1) + "px"
      }
    });
  };

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.flexGrow(1), {
      userSelect: "none",
      "-moz-user-select": "none",
      alignItems: "center",
      " > .pe-icon": polytheneCoreCss.flex.layoutCenter,
      " .pe-slider__track": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.flexGrow(1), {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "relative",
        outline: 0
      }],
      " .pe-slider__control": [polytheneCoreCss.flex.selfCenter, polytheneCoreCss.mixin.defaultTransition("transform, background", ".200s"), {
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
          borderRadius: "50%"
        },
        // border
        ":after": {
          content: "\"\"",
          position: "absolute",
          borderRadius: "50%",
          borderStyle: "solid"
        }
      }],
      " .pe-slider__thumb": [polytheneCoreCss.mixin.fit(), {
        "&, .pe-icon": {
          width: "inherit",
          height: "inherit"
        }
      }],
      " .pe-slider__label": {
        minWidth: polytheneTheme.vars.unit_icon_size + "px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: polytheneTheme.vars.font_weight_medium
      },
      " .pe-slider__track-part": [polytheneCoreCss.flex.flex(), {
        userSelect: "none",
        "-moz-user-select": "none",
        overflow: "hidden" // Firefox otherwise uses 6x at 0%

      }],
      " .pe-slider__track-value, .pe-slider__track-rest": polytheneCoreCss.flex.layoutHorizontal,
      " .pe-slider__track-bar": [polytheneCoreCss.flex.flex(), {
        position: "relative",
        overflow: "hidden"
      }],
      " .pe-slider__track-bar-value": polytheneCoreCss.flex.flex(),
      " .pe-slider__ticks": [polytheneCoreCss.flex.layoutJustified, {
        userSelect: "none",
        "-moz-user-select": "none",
        position: "absolute",
        left: 0,
        pointerEvents: "none"
      }],
      " .pe-slider__pin": [polytheneCoreCss.mixin.defaultTransition("transform", ".11s"), {
        transform: "translateZ(0) scale(0) translate(0, 0)",
        transformOrigin: "bottom",
        position: "absolute",
        zIndex: 1,
        height: 0,
        left: 0,
        // set in js
        top: 0,
        pointerEvents: "none",
        "&::before, &::after": {
          position: "absolute",
          top: 0,
          left: 0
        },
        "::before": {
          transform: "rotate(-45deg)",
          content: "\"\"",
          borderRadius: "50% 50% 50% 0"
        },
        "::after": {
          content: "attr(value)",
          textAlign: "center"
        }
      }],
      ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
        " .pe-slider__pin": {
          transform: "translateZ(0) scale(1) translate(0, -24px)"
        }
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
        }
      }
    }])],
    thumb_size: (selector, vars) => {
      const {
        normalThumbSize,
        barOffset,
        stepsOffset
      } = getThumbSize(vars);
      return [polytheneCoreCss.sel(selector, {
        " .pe-slider__control": {
          width: normalThumbSize + "px",
          height: normalThumbSize + "px"
        },
        " .pe-slider__track-value .pe-slider__track-bar": {
          marginLeft: barOffset + "px"
        },
        " .pe-slider__track-rest .pe-slider__track-bar": {
          marginRight: barOffset + "px"
        },
        " .pe-slider__ticks": {
          width: "calc(100% - " + 2 * stepsOffset + "px)",
          margin: "0 " + stepsOffset + "px"
        }
      }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars), thumb_size_thumb_touch_size(selector, vars), thumb_size_active_thumb_scale(selector, vars), thumb_size_pin_width(selector, vars)];
    },
    active_thumb_scale: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-slider--active:not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          transform: "scale(" + vars.active_thumb_scale + ")"
        }
      }
    }), thumb_size_active_thumb_scale(selector, vars)],
    thumb_touch_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__control": {
        ":before": {
          width: vars.thumb_touch_size + "px",
          height: vars.thumb_touch_size + "px"
        }
      }
    }), thumb_size_thumb_touch_size(selector, vars)],
    thumb_border_width: (selector, vars) => [polytheneCoreCss.sel(selector, {}), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)],
    disabled_thumb_scale: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          transform: "scale(" + vars.disabled_thumb_scale + ")"
        }
      }
    }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)],
    active_pin_thumb_scale: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
        " .pe-slider__control": {
          transform: "scale(" + vars.active_pin_thumb_scale + ")"
        }
      }
    })],
    height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      height: vars.height + "px",
      " > .pe-icon": {
        height: vars.height + "px"
      },
      " .pe-slider__label": {
        height: vars.height + "px",
        lineHeight: vars.height + "px"
      },
      " .pe-slider__ticks": {
        top: vars.height / 2 - 1 + "px"
      }
    }), height_track_height(selector, vars)],
    track_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__track": {
        height: vars.track_height + "px"
      }
    }), height_track_height(selector, vars), track_height_bar_height(selector, vars)],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__track": polytheneCoreCss.mixin.defaultTransition("transform", vars.animation_duration),
      " .pe-slider__control:before": polytheneCoreCss.mixin.defaultTransition("background-color", vars.animation_duration),
      " .pe-slider__control:after": polytheneCoreCss.mixin.defaultTransition("border", vars.animation_duration),
      " .pe-slider__thumb": polytheneCoreCss.mixin.defaultTransition("opacity", vars.animation_duration),
      " .pe-slider__track-bar-value": polytheneCoreCss.mixin.defaultTransition("transform, background-color", vars.animation_duration)
    })],
    side_spacing: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__track": {
        margin: "0 " + vars.side_spacing + "px"
      }
    })],
    horizontal_layout_side_spacing: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " div + .pe-slider__track": {
        margin: "0 " + vars.horizontal_layout_side_spacing + "px"
      }
    })],
    bar_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__track-part,\
        .pe-slider__track-bar-value,\
        .pe-slider__ticks,\
        .pe-slider__tick": {
        height: vars.bar_height + "px"
      }
    }), track_height_bar_height(selector, vars)],
    step_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__tick": {
        width: vars.step_width + "px"
      }
    })],
    pin_width: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__pin": {
        width: vars.pin_width + "px",
        "::before": {
          width: vars.pin_width + "px",
          height: vars.pin_width + "px"
        },
        "::after": {
          width: vars.pin_width + "px",
          height: vars.pin_height + "px",
          lineHeight: vars.pin_width + "px"
        }
      }
    }), thumb_size_pin_width(selector, vars)],
    pin_font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-slider__pin::after": {
        fontSize: vars.pin_font_size + "px"
      }
    })]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  const lightForeground = polytheneTheme.vars.color_light_foreground;
  const darkForeground = polytheneTheme.vars.color_dark_foreground;
  const activeColor = polytheneTheme.vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

  const thumb_size = 12;
  const thumb_touch_size = Math.max(40, thumb_size);
  const thumb_border_width = 2;
  const active_thumb_scale = 3 / 2;
  const disabled_thumb_scale = 1 / 2;
  const active_pin_thumb_scale = 2 / 6;
  const largestThumbSize = active_thumb_scale * thumb_size;
  const largestElement = Math.max(thumb_touch_size, largestThumbSize);
  const height = Math.max(52, largestThumbSize);
  const side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
  const horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

  var vars = {
    general_styles: true,
    active_pin_thumb_scale,
    active_thumb_scale,
    animation_duration: polytheneTheme.vars.animation_duration,
    bar_height: 2,
    disabled_thumb_scale,
    height,
    horizontal_layout_side_spacing,
    pin_font_size: 10,
    pin_height: 32,
    pin_width: 26,
    side_spacing,
    step_width: 2,
    thumb_border_width,
    thumb_size,
    thumb_touch_size,
    track_height: height,
    color_light_track_active: polytheneCoreCss.rgba(lightForeground, .38),
    color_light_track_inactive: polytheneCoreCss.rgba(lightForeground, .26),
    color_light_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_light_thumb_background:        undefined,
    color_light_thumb_off: polytheneCoreCss.rgba(lightForeground, .26),
    color_light_thumb_off_focus: polytheneCoreCss.rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: polytheneCoreCss.rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_thumb_inactive: polytheneCoreCss.rgba(lightForeground, .26),
    color_light_tick: polytheneCoreCss.rgba(lightForeground, 1),
    color_light_tick_value: polytheneCoreCss.rgba(lightForeground, 1),
    color_light_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_pin_label: "#fff",
    color_light_pin_background: "currentColor",
    color_dark_track_active: polytheneCoreCss.rgba(darkForeground, .3),
    color_dark_track_inactive: polytheneCoreCss.rgba(darkForeground, .2),
    color_dark_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_dark_thumb_background:         undefined,
    color_dark_thumb_off: polytheneCoreCss.rgba(darkForeground, .2),
    color_dark_thumb_off_focus: polytheneCoreCss.rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: polytheneCoreCss.rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_thumb_inactive: polytheneCoreCss.rgba(darkForeground, .2),
    color_dark_tick: polytheneCoreCss.rgba(darkForeground, 1),
    color_dark_tick_value: polytheneCoreCss.rgba(darkForeground, 1),
    color_dark_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_icon: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_pin_label: "#fff",
    color_dark_pin_background: "currentColor"
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-slider.js.map
