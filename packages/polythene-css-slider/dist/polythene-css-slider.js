(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var lightForeground = polytheneTheme.vars.color_light_foreground;
  var darkForeground = polytheneTheme.vars.color_dark_foreground;
  var activeColor = polytheneTheme.vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
  var thumb_size = 12;
  var thumb_touch_size = Math.max(40, thumb_size);
  var thumb_border_width = 2;
  var active_thumb_scale = 3 / 2;
  var disabled_thumb_scale = 1 / 2;
  var active_pin_thumb_scale = 2 / 6;
  var largestThumbSize = active_thumb_scale * thumb_size;
  var largestElement = Math.max(thumb_touch_size, largestThumbSize);
  var height = Math.max(52, largestThumbSize);
  var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
  var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

  var vars = {
    general_styles: true,

    active_pin_thumb_scale: active_pin_thumb_scale,
    active_thumb_scale: active_thumb_scale,
    animation_duration: polytheneTheme.vars.animation_duration,
    bar_height: 2,
    disabled_thumb_scale: disabled_thumb_scale,
    height: height,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    pin_font_size: 10,
    pin_height: 32,
    pin_width: 26,
    side_spacing: side_spacing,
    step_width: 2,
    thumb_border_width: thumb_border_width,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height,

    color_light_track_active: rgba(lightForeground, .38),
    color_light_track_inactive: rgba(lightForeground, .26),
    color_light_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_light_thumb_background:        undefined,
    color_light_thumb_off: rgba(lightForeground, .26),
    color_light_thumb_off_focus: rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_thumb_inactive: rgba(lightForeground, .26),
    color_light_tick: rgba(lightForeground, 1),
    color_light_tick_value: rgba(lightForeground, 1),
    color_light_icon: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_icon: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_pin_label: "#fff",
    color_light_pin_background: "currentColor",

    color_dark_track_active: rgba(darkForeground, .3),
    color_dark_track_inactive: rgba(darkForeground, .2),
    color_dark_track_value: "currentColor",
    // background color may be set in theme; disabled by default
    // color_dark_thumb_background:         undefined,
    color_dark_thumb_off: rgba(darkForeground, .2),
    color_dark_thumb_off_focus: rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_thumb_inactive: rgba(darkForeground, .2),
    color_dark_tick: rgba(darkForeground, 1),
    color_dark_tick_value: rgba(darkForeground, 1),
    color_dark_icon: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_icon: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_pin_label: "#fff",
    color_dark_pin_background: "currentColor"
  };

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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var getThumbSize = function getThumbSize(vars) {
    var thumbSize = Math.max(vars.thumb_size, 2 * vars.thumb_border_width);
    var barOffset = thumbSize / 2;
    var stepsOffset = barOffset - 1;
    return {
      normalThumbSize: thumbSize,
      disabledThumbSize: thumbSize - 2 * vars.thumb_border_width,
      barOffset: barOffset,
      stepsOffset: stepsOffset
    };
  };

  var getBorderWidth = function getBorderWidth(vars) {
    var borderWidth = vars.thumb_border_width;
    var scaledBorderWidth = Math.max(1, vars.thumb_border_width / vars.active_thumb_scale);
    return {
      normalBorderWidth: borderWidth,
      disabledBorderWidth: 1 / vars.disabled_thumb_scale * vars.thumb_border_width,
      scaledBorderWidth: scaledBorderWidth
    };
  };

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var thumb_size_thumb_border_width_disabled_thumb_scale = function thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars) {
    var _getThumbSize = getThumbSize(vars),
        normalThumbSize = _getThumbSize.normalThumbSize,
        disabledThumbSize = _getThumbSize.disabledThumbSize;

    var _getBorderWidth = getBorderWidth(vars),
        normalBorderWidth = _getBorderWidth.normalBorderWidth,
        disabledBorderWidth = _getBorderWidth.disabledBorderWidth;

    return sel(selector, {
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

  var height_track_height = function height_track_height(selector, vars) {
    return sel(selector, {
      marginTop: (vars.height - vars.track_height) / 2 + "px "
    });
  };

  var track_height_bar_height = function track_height_bar_height(selector, vars) {
    return sel(selector, {
      " .pe-slider__track-part": {
        margin: (vars.track_height - vars.bar_height) / 2 + "px 0"
      }
    });
  };

  var thumb_size_thumb_touch_size = function thumb_size_thumb_touch_size(selector, vars) {
    var _getThumbSize2 = getThumbSize(vars),
        normalThumbSize = _getThumbSize2.normalThumbSize;

    return sel(selector, {
      " .pe-slider__control:before": {
        left: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px",
        top: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px"
      }
    });
  };

  var thumb_size_active_thumb_scale = function thumb_size_active_thumb_scale(selector, vars) {
    var _getThumbSize3 = getThumbSize(vars),
        normalThumbSize = _getThumbSize3.normalThumbSize;

    var _getBorderWidth2 = getBorderWidth(vars),
        scaledBorderWidth = _getBorderWidth2.scaledBorderWidth;

    var scaledThumbDiff = (vars.active_thumb_scale - 1) * normalThumbSize / 2;
    return sel(selector, {
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

  var thumb_size_pin_width = function thumb_size_pin_width(selector, vars) {
    var _getThumbSize4 = getThumbSize(vars),
        stepsOffset = _getThumbSize4.stepsOffset;

    return sel(selector, {
      " .pe-slider__pin": {
        margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars.pin_width / 2 + 1) + "px"
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.flexGrow(1), {
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
          left: 0, // set in js
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
      }])];
    },
    thumb_size: function thumb_size(selector, vars) {
      var _getThumbSize5 = getThumbSize(vars),
          normalThumbSize = _getThumbSize5.normalThumbSize,
          barOffset = _getThumbSize5.barOffset,
          stepsOffset = _getThumbSize5.stepsOffset;

      return [sel(selector, {
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
    active_thumb_scale: function active_thumb_scale(selector, vars) {
      return [sel(selector, {
        ".pe-slider--active:not(.pe-slider--ticks)": {
          " .pe-slider__control": {
            transform: "scale(" + vars.active_thumb_scale + ")"
          }
        }
      }), thumb_size_active_thumb_scale(selector, vars)];
    },
    thumb_touch_size: function thumb_touch_size(selector, vars) {
      return [sel(selector, {
        " .pe-slider__control": {
          ":before": {
            width: vars.thumb_touch_size + "px",
            height: vars.thumb_touch_size + "px"
          }
        }
      }), thumb_size_thumb_touch_size(selector, vars)];
    },
    thumb_border_width: function thumb_border_width(selector, vars) {
      return [sel(selector, {}), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)];
    },
    disabled_thumb_scale: function disabled_thumb_scale(selector, vars) {
      return [sel(selector, {
        ".pe-slider--disabled": {
          " .pe-slider__control": {
            transform: "scale(" + vars.disabled_thumb_scale + ")"
          }
        }
      }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)];
    },
    active_pin_thumb_scale: function active_pin_thumb_scale(selector, vars) {
      return [sel(selector, {
        ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
          " .pe-slider__control": {
            transform: "scale(" + vars.active_pin_thumb_scale + ")"
          }
        }
      })];
    },
    height: function height(selector, vars) {
      return [sel(selector, {
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
      }), height_track_height(selector, vars)];
    },
    track_height: function track_height(selector, vars) {
      return [sel(selector, {
        " .pe-slider__track": {
          height: vars.track_height + "px"
        }
      }), height_track_height(selector, vars), track_height_bar_height(selector, vars)];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [sel(selector, {
        " .pe-slider__track": polytheneCoreCss.mixin.defaultTransition("transform", vars.animation_duration),
        " .pe-slider__control:before": polytheneCoreCss.mixin.defaultTransition("background-color", vars.animation_duration),
        " .pe-slider__control:after": polytheneCoreCss.mixin.defaultTransition("border", vars.animation_duration),
        " .pe-slider__thumb": polytheneCoreCss.mixin.defaultTransition("opacity", vars.animation_duration),
        " .pe-slider__track-bar-value": polytheneCoreCss.mixin.defaultTransition("transform, background-color", vars.animation_duration)
      })];
    },
    side_spacing: function side_spacing(selector, vars) {
      return [sel(selector, {
        " .pe-slider__track": {
          margin: "0 " + vars.side_spacing + "px"
        }
      })];
    },
    horizontal_layout_side_spacing: function horizontal_layout_side_spacing(selector, vars) {
      return [sel(selector, {
        " div + .pe-slider__track": {
          margin: "0 " + vars.horizontal_layout_side_spacing + "px"
        }
      })];
    },
    bar_height: function bar_height(selector, vars) {
      return [sel(selector, {
        " .pe-slider__track-part,\
        .pe-slider__track-bar-value,\
        .pe-slider__ticks,\
        .pe-slider__tick": {
          height: vars.bar_height + "px"
        }
      }), track_height_bar_height(selector, vars)];
    },
    step_width: function step_width(selector, vars) {
      return [sel(selector, {
        " .pe-slider__tick": {
          width: vars.step_width + "px"
        }
      })];
    },
    pin_width: function pin_width(selector, vars) {
      return [sel(selector, {
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
      }), thumb_size_pin_width(selector, vars)];
    },
    pin_font_size: function pin_font_size(selector, vars) {
      return [sel(selector, {
        " .pe-slider__pin::after": {
          fontSize: vars.pin_font_size + "px"
        }
      })];
    }
  };

  var layout = (function (selector, vars, customVars) {
    var allVars = _extends({}, vars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [sel$1(selector, {
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
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_icon", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          " .pe-icon": {
            color: vars["color_" + tint + "_icon"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_label", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          " .pe-slider__label": {
            color: vars["color_" + tint + "_label"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_on", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_thumb_on"] // override by specifying "color"
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_track_inactive", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__track-bar-value": {
          background: vars["color_" + tint + "_track_inactive"]
        },
        ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
          " .pe-slider__control:after": {
            borderColor: vars["color_" + tint + "_track_inactive"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_tick", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__tick": {
          background: vars["color_" + tint + "_tick"]
        },
        ".pe-slider--min:not(.pe-slider--disabled)": {
          ".pe-slider--tick": {
            backgroundColor: vars["color_" + tint + "_tick"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_tick_value", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__tick--value": {
          background: vars["color_" + tint + "_tick_value"]
        },
        ".pe-slider--min:not(.pe-slider--disabled)": {
          ".pe-slider--tick--value": {
            backgroundColor: vars["color_" + tint + "_tick_value"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_disabled_icon", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-icon": {
          color: vars["color_" + tint + "_disabled_icon"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_disabled_label", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__label": {
          color: vars["color_" + tint + "_disabled_label"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_track_active", function (selector, vars) {
      return [sel$1(selector, {
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
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_inactive", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-slider--disabled": {
          " .pe-slider__control": {
            background: vars["color_" + tint + "_thumb_inactive"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_background", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          " .pe-slider__control": {
            backgroundColor: vars["color_" + tint + "_thumb_background"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_off_focus_opacity", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          " .pe-slider__control": {
            ":before": {
              opacity: vars["color_" + tint + "_thumb_off_focus_opacity"]
            }
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_off_focus", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          ".pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
        .pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
            backgroundColor: vars["color_" + tint + "_thumb_off_focus"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_thumb_on_focus_opacity", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
            opacity: vars["color_" + tint + "_thumb_on_focus_opacity"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_pin_label", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__pin:after": {
          color: vars["color_" + tint + "_pin_label"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_pin_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-slider__pin": {
          backgroundColor: vars["color_" + tint + "_pin_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_track_value", function (selector, vars) {
      return [sel$1(selector, {
        ":not(.pe-slider--disabled)": {
          " .pe-slider__track-value .pe-slider__track-bar-value": {
            backgroundColor: vars["color_" + tint + "_track_value"]
          }
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-slider.js.map
