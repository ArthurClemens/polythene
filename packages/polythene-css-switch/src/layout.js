// @ts-check

import { layout as superLayout } from "polythene-css-selection-control";
import { mixin, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const MIN_BUTTON_SIZE = 44;

const transition = (vars, properties, duration = vars.animation_duration) =>
  mixin.defaultTransition(properties, duration, "ease-out");

const roundToEven = num =>
  0.5 * Math.floor(num * 2);

const getSizeData = (vars, size) => {
  const factor = size / themeVars.unit_icon_size;
  const thumbSize = vars.thumb_size * factor;
  const scaledTrackHeight = vars.track_height * factor;
  const scaledTrackWidth = vars.track_length * factor;
  const scaledThumbSize = vars.thumb_size * factor;
  const thumbOuterSize = Math.max(MIN_BUTTON_SIZE, scaledThumbSize);
  const thumbPadding = Math.min(0, (thumbOuterSize - 2 * scaledThumbSize));
  const thumbOffsetMin = Math.round(-(thumbOuterSize / 2) + (thumbSize / 2));
  const thumbOffsetMax = Math.round(thumbOffsetMin + scaledTrackWidth - thumbSize);
  console.log("thumbOuterSize", thumbOuterSize, "thumbPadding", thumbPadding);
  const thumbOffsetY = (-thumbOuterSize / 2) + (scaledTrackHeight / 2);
  const trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border
  return {
    factor,
    scaledThumbSize: roundToEven(scaledThumbSize),
    scaledTrackHeight: roundToEven(scaledTrackHeight),
    scaledTrackWidth: roundToEven(scaledTrackWidth),
    size,
    thumbOffsetMax: roundToEven(thumbOffsetMax),
    thumbOffsetMin: roundToEven(thumbOffsetMin),
    thumbOffsetY: roundToEven(thumbOffsetY),
    thumbPadding: roundToEven(thumbPadding),
    trackVisualOffset,
  };
};

const customSize = (
  vars,
  {
    scaledThumbSize,
    scaledTrackHeight,
    scaledTrackWidth,
    thumbOffsetY,
    thumbPadding,
    trackVisualOffset,
  }) => {
  return {
    " .pe-control__form-label": {
      minWidth: scaledTrackWidth + "px",
    },
    " .pe-switch-control__track": {
      height: scaledTrackHeight + "px",
      width: (scaledTrackWidth - 2 * trackVisualOffset) + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px",
    },
    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
    },
    " .pe-button__content": {
      padding: thumbPadding + "px",
      width: "auto",
      height: "auto"
    }
  };
};

const customSpacing = (
  vars,
  {
    thumbOffsetMax,
    thumbOffsetMin,
    trackVisualOffset,
  },
  isRTL) => {
  return {
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

const createSize = (selector, vars) => {
  const sizeData = {
    small: getSizeData(vars, themeVars.unit_icon_size_small),
    regular: getSizeData(vars, themeVars.unit_icon_size),
    medium: getSizeData(vars, themeVars.unit_icon_size_medium),
    large: getSizeData(vars, themeVars.unit_icon_size_large),
  };
  return [
    sel(selector, {
      ".pe-control--small":   [
        customSize(vars, sizeData.small),
        customSpacing(vars, sizeData.small, false)
      ],
      ".pe-control--regular": [
        customSize(vars, sizeData.regular),
        customSpacing(vars, sizeData.regular, false)
      ],
      ".pe-control--medium": [
        customSize(vars, sizeData.medium),
        customSpacing(vars, sizeData.medium, false)
      ],
      ".pe-control--large": [
        customSize(vars, sizeData.large),
        customSpacing(vars, sizeData.large, false)
      ]
    }),
    {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
        {
          ".pe-control--small":   [
            customSpacing(vars, sizeData.small, true)
          ],
          ".pe-control--regular": [
            customSpacing(vars, sizeData.regular, true)
          ],
          ".pe-control--medium": [
            customSpacing(vars, sizeData.medium, true)
          ],
          ".pe-control--large": [
            customSpacing(vars, sizeData.large, true)
          ]
        }
      ],
    },
  ];
};

const varFns = {
  general_styles: selector => [
    sel(selector, [
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        
        " .pe-switch-control__track": {
          position: "relative"
        },

        " .pe-switch-control__thumb": {
          position: "absolute",
          zIndex: 1, // Prevents flickering of text label when toggling
          color: "inherit",

          ":focus": {
            outline: 0
          }
        },

        " .pe-switch-control__knob": {
          position: "relative",
          borderRadius: "50%",
          flexShrink: 0,
        },

        " .pe-icon-button .pe-button__content": {
          transition: "none",

          " .pe-switch-control__knob .pe-icon": [
            mixin.fit(),
            {
              width: "100%",
              height: "100%"
            }
          ],
        },
      },
    ]),
    {
      // For IE 11, to catch mouse events place checkbox element on top stretching to all sides
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
    }
  ],
  height: (selector, vars) => [
    vars.height && sel(selector, {
      height: vars.height + "px",
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars, "all")
    })
  ],
  createSize
};

const withCreateSizeVar = vars =>
  (vars.thumb_size || vars.track_height || vars.track_length || vars.icon_button_padding)
    ? Object.assign({}, vars, {
      createSize: true
    })
    : vars;

export default createLayout({
  varFns,
  superLayout,
  varMixin: withCreateSizeVar
});
