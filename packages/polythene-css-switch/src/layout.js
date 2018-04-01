import { layout as selectionControlLayout } from "polythene-css-selection-control";
import { vars } from "polythene-theme";
import { mixin } from "polythene-core-css";

const transition = (componentVars, properties, duration = componentVars.animation_duration) => [
  mixin.defaultTransition(properties, duration, "ease-out")
];

const getSizeData = (componentVars, size) => {
  const factor = size / vars.unit_icon_size;
  const thumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2; // round to even
  const scaledTrackHeight = Math.floor(0.5 * componentVars.track_height * factor) * 2; // round to even
  const scaledTrackWidth = Math.floor(0.5 * componentVars.track_length * factor) * 2;
  const scaledThumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2;
  const trackTop = ((componentVars.label_height * factor - scaledTrackHeight) / 2);
  const thumbPadding = componentVars.icon_button_padding;
  const thumbMargin = (size - scaledThumbSize) / 2;
  const thumbOuterSize = size + 2 * thumbPadding;
  const thumbOffsetMin = -(thumbOuterSize / 2) + (thumbSize / 2);
  const thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
  const thumbOffsetY = thumbOffsetMin + thumbMargin;
  const trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border
  return {
    factor,
    scaledThumbSize,
    scaledTrackHeight,
    scaledTrackWidth,
    size,
    thumbMargin,
    thumbOffsetMax,
    thumbOffsetMin,
    thumbOffsetY,
    thumbPadding,
    trackTop,
    trackVisualOffset,
  };
};

const customSize = (
  componentVars,
  {
    scaledThumbSize,
    scaledTrackHeight,
    scaledTrackWidth,
    size,
    thumbMargin,
    thumbOffsetY,
    thumbPadding,
    trackTop,
    trackVisualOffset,
  }) => {
  return {
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px",
    },
    " .pe-switch-control__track": {
      height: scaledTrackHeight + "px",
      width: (scaledTrackWidth - 2 * trackVisualOffset) + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px",
    },
    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
      margin: thumbMargin + "px"
    },
    " .pe-button__content": {
      padding: thumbPadding + "px"
    }
  };
};

const customSpacing = (
  componentVars,
  {
    factor,
    scaledTrackWidth,
    thumbOffsetMax,
    thumbOffsetMin,
    trackVisualOffset,
  },
  isRTL) => {
  return {
    " .pe-control__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: (componentVars.padding * factor + 8 + scaledTrackWidth) + "px",
      [isRTL ? "paddingLeft" : "paddingRight"]: 0
    },
    " .pe-switch-control__track": {
      [isRTL ? "right" : "left"]: trackVisualOffset + "px",
      [isRTL ? "left" : "right"]: "auto"
    },
    " .pe-switch-control__thumb": {
      [isRTL ? "right" : "left"]: thumbOffsetMin + "px",
      [isRTL ? "left" : "right"]: "auto"
    },
    ".pe-control--on": {
      " .pe-switch-control__thumb": {
        [isRTL ? "right" : "left"]: thumbOffsetMax + "px",
        [isRTL ? "left" : "right"]: "auto"
      }
    }
  };
};

const alignRight = () => ({
  " .pe-switch-control__track": {
    right: 0,
    left: "auto"
  }
});

const alignLeft = () => ({
  " .pe-switch-control__track": {
    left: 0,
    right: "auto"
  }
});

export default (selector, componentVars) => {
  const sizeData = {
    small: getSizeData(componentVars, vars.unit_icon_size_small),
    regular: getSizeData(componentVars, vars.unit_icon_size),
    medium: getSizeData(componentVars, vars.unit_icon_size_medium),
    large: getSizeData(componentVars, vars.unit_icon_size_large),
  };
  return selectionControlLayout(selector, componentVars, "checkbox")
    .concat(
      [{
        [selector]: [
          alignLeft(),
          {
            " .pe-switch-control__track": [
              transition(componentVars, "all"),
              {
                position: "absolute",
              }
            ],

            " .pe-switch-control__thumb": [
              transition(componentVars, "all"),
              {
                position: "absolute",
                zIndex: 1, // Prevents flickering of text label when toggling
                color: "inherit",

                ":focus": {
                  outline: 0
                }
              }
            ],

            " .pe-control__label": [
              transition(componentVars, "all"),
            ],

            " .pe-switch-control__knob": {
              position: "relative",
              borderRadius: "50%"
            },

            " .pe-button__content": {
              transition: "none",

              " .pe-switch-control__knob .pe-icon": [
                mixin.fit(),
                {
                  width: "100%",
                  height: "100%"
                }
              ],
            },

            " .pe-button__focus": [
              transition(componentVars, "all")
            ],

            ".pe-control--small":   [
              customSize(componentVars, sizeData.small),
              customSpacing(componentVars, sizeData.small, false)
            ],
            ".pe-control--regular": [
              customSize(componentVars, sizeData.regular),
              customSpacing(componentVars, sizeData.regular, false)
            ],
            ".pe-control--medium": [
              customSize(componentVars, sizeData.medium),
              customSpacing(componentVars, sizeData.medium, false)
            ],
            ".pe-control--large": [
              customSize(componentVars, sizeData.large),
              customSpacing(componentVars, sizeData.large, false)
            ]
          }
        ]
      },
      {
        // RTL
        [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
          alignRight(),
          {
            ".pe-control--small":   [
              customSpacing(componentVars, sizeData.small, true)
            ],
            ".pe-control--regular": [
              customSpacing(componentVars, sizeData.regular, true)
            ],
            ".pe-control--medium": [
              customSpacing(componentVars, sizeData.medium, true)
            ],
            ".pe-control--large": [
              customSpacing(componentVars, sizeData.large, true)
            ]
          }
        ],
      },
      {
        // For IE11, to catch mouse events place checkbox element on top stretching to all sides
        [`_:-ms-fullscreen, :root ${selector}`]: {
          " input": {
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: "block",
            opacity: 0,
            cursor: "pointer"
          },
          " label": {
            cursor: "auto"
          }
        }
      }]
    );
};

