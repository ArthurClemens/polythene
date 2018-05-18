import { mixin, flex } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const positionBorder = (size, borderWidth, isDisabled) => {
  const thumbSize = isDisabled
    ? size - 2 * borderWidth
    : size;
  return {
    borderWidth: borderWidth + "px",
    width: thumbSize + "px",
    height: thumbSize + "px",
    left: (size - thumbSize) + "px",
    top: (size - thumbSize) + "px"
  };
};

export default (selector, vars) => {
  const thumbSize =         Math.max(vars.thumb_size, 2 * vars.thumb_border_width);
  const scaledThumbDiff =   (vars.active_thumb_scale - 1) * thumbSize / 2;
  const barOffset =         thumbSize / 2;
  const scaledBorderWidth = Math.max(1, vars.thumb_border_width / vars.active_thumb_scale);
  const thumbTouchSize =    vars.thumb_touch_size;
  const stepsOffset =       barOffset - 1;

  return [{
    [selector]: [
      flex.layoutHorizontal,
      flex.flexGrow(1),
      {
        userSelect: "none",
        "-moz-user-select": "none",
        height: vars.height + "px",
        marginTop: ((vars.height - vars.track_height) / 2) + "px ",
        alignItems: "center",
        
        " > .pe-icon": [
          flex.layoutCenter,
          {
            height: vars.height + "px"
          }
        ],

        " .pe-slider__track": [
          flex.layoutHorizontal,
          flex.flexGrow(1),
          mixin.defaultTransition("transform", vars.animation_duration),
          {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "relative",
            height: vars.track_height + "px",
            margin: "0 " + vars.side_spacing + "px",
            outline: 0
          }
        ],
        " div + .pe-slider__track": {
          margin: "0 " + vars.horizontal_layout_side_spacing + "px"
        },

        " .pe-slider__control": [
          flex.selfCenter,
          mixin.defaultTransition("transform, background", ".200s"),
          {
            transform: "scale(1)",
            userSelect: "none",
            "-moz-user-select": "none",
            width: thumbSize + "px",
            height: thumbSize + "px",
            lineHeight: 0,
            borderRadius: "50%",
            outline: 0,
            zIndex: 1,
            position: "relative",

            // touch area
            ":before": [
              mixin.defaultTransition("background-color", vars.animation_duration), {
                content: "\"\"",
                position: "absolute",
                borderRadius: "50%",
                left: (-thumbTouchSize / 2 + thumbSize / 2) + "px",
                top: (-thumbTouchSize / 2 + thumbSize / 2) + "px",
                width: thumbTouchSize + "px",
                height: thumbTouchSize + "px"
              }
            ],

            // border
            ":after": [
              mixin.defaultTransition("border", vars.animation_duration),
              positionBorder(thumbSize, vars.thumb_border_width, false), {
                content: "\"\"",
                position: "absolute",
                borderRadius: "50%",
                borderStyle: "solid"
              }
            ]
          }
        ],

        " .pe-slider__thumb": [
          mixin.defaultTransition("opacity", vars.animation_duration),
          mixin.fit(), {
            "&, .pe-icon": {
              width: "inherit",
              height: "inherit"
            }
          }
        ],

        " .pe-slider__label": {
          height: vars.height + "px",
          lineHeight: vars.height + "px",
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
            height: vars.bar_height + "px",
            margin: ((vars.track_height - vars.bar_height) / 2) + "px 0",
            overflow: "hidden" // Firefox otherwise uses 6x at 0%
          }
        ],

        " .pe-slider__track-value, .pe-slider__track-rest": flex.layoutHorizontal,

        " .pe-slider__track-bar": [
          flex.flex(), {
            position: "relative",
            overflow: "hidden"
          }
        ],
        " .pe-slider__track-bar-value": [
          flex.flex(),
          mixin.defaultTransition("transform, background-color", vars.animation_duration), {
            height: vars.bar_height + "px"
          }
        ],
        " .pe-slider__track-value .pe-slider__track-bar": {
          marginLeft: barOffset + "px"
        },
        " .pe-slider__track-rest .pe-slider__track-bar": {
          marginRight: barOffset + "px"
        },

        " .pe-slider__ticks": [
          flex.layoutJustified,
          {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "absolute",
            width: "calc(100% - " + (2 * stepsOffset) + "px)",
            height: vars.bar_height + "px",
            left: 0,
            top: ((vars.height / 2) - 1) + "px",
            margin: "0 " + stepsOffset + "px",
            pointerEvents: "none"
          }
        ],

        " .pe-slider__ticks-tick": {
          width: vars.step_width + "px",
          height: vars.bar_height + "px"
        },

        " .pe-slider__pin": [
          mixin.defaultTransition("transform", ".11s"),
          {
            transform: "translateZ(0) scale(0) translate(0, 0)",
            transformOrigin: "bottom",
            position: "absolute",
            zIndex: 1,
            width: vars.pin_width + "px",
            height: 0,
            left: 0, // set in js
            top: 0,
            margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars.pin_width / 2 + 1) + "px",
            pointerEvents: "none",

            "::before": {
              transform: "rotate(-45deg)",
              content: "\"\"",
              position: "absolute",
              top: 0,
              left: 0,
              width: vars.pin_width + "px",
              height: vars.pin_width + "px",
              borderRadius: "50% 50% 50% 0",
              backgroundColor: "inherit"
            },
            "::after": {
              content: "attr(value)",
              position: "absolute",
              top: 0,
              left: 0,
              width: vars.pin_width + "px",
              height: vars.pin_height + "px",
              textAlign: "center",
              color: "#fff",
              fontSize: vars.pin_font_size + "px",
              lineHeight: vars.pin_width + "px"
            }
          }
        ],

        ".pe-slider--active:not(.pe-slider--ticks)": {
          " .pe-slider__control": {
            transform: "scale(" + vars.active_thumb_scale + ")",
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

        ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
          " .pe-slider__pin": {
            transform: "translateZ(0) scale(1) translate(0, -24px)"
          },
          " .pe-slider__control": {
            transform: "scale(" + vars.active_pin_thumb_scale + ")"
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
            transform: "scale(" + vars.disabled_thumb_scale + ")",
            borderWidth: 0
          },
          " .pe-slider__control:after": [
            positionBorder(thumbSize, 1 / vars.disabled_thumb_scale * vars.thumb_border_width, true)
          ]
        }
      }
    ]
  }];
};
