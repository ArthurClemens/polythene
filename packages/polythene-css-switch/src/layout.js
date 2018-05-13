import { layout as selectionControlLayout } from "polythene-css-selection-control";
import { vars as defaultVars } from "polythene-theme";
import { mixin } from "polythene-core-css";

const transition = (vars, properties, duration = vars.animation_duration) =>
  mixin.defaultTransition(properties, duration, "ease-out");

const getSizeData = (vars, size) => {
  const factor = size / defaultVars.unit_icon_size;
  const thumbSize = Math.floor(0.5 * vars.thumb_size * factor) * 2; // round to even
  const scaledTrackHeight = Math.floor(0.5 * vars.track_height * factor) * 2; // round to even
  const scaledTrackWidth = Math.floor(0.5 * vars.track_length * factor) * 2;
  const scaledThumbSize = Math.floor(0.5 * vars.thumb_size * factor) * 2;
  const trackTop = ((vars.label_height * factor - scaledTrackHeight) / 2);
  const thumbPadding = vars.icon_button_padding;
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
  vars,
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
  vars,
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
      [isRTL ? "paddingRight" : "paddingLeft"]: (vars.padding * factor + 8 + scaledTrackWidth) + "px",
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

const alignSide = isRTL => () => ({
  " .pe-switch-control__track": {
    [isRTL ? "right" : "left"]: 0,
    [isRTL ? "left" : "right"]: "auto"
  }
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const sel = (selector, o) => ({
  [selector]: o
});

const createSize = (selector, vars) => {
  const sizeData = {
    small: getSizeData(vars, defaultVars.unit_icon_size_small),
    regular: getSizeData(vars, defaultVars.unit_icon_size),
    medium: getSizeData(vars, defaultVars.unit_icon_size_medium),
    large: getSizeData(vars, defaultVars.unit_icon_size_large),
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
        alignRight(),
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
      alignLeft(),
      {
        " .pe-switch-control__track": [
          {
            position: "absolute",
          }
        ],

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
          borderRadius: "50%"
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
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars, "all")
    })
  ],
  createSize
};

const withCreateSizeVar = vars =>
  (vars.thumb_size || vars.track_height || vars.track_length || vars.label_height || vars.icon_button_padding)
    ? Object.assign({}, vars, {
      createSize: true
    })
    : vars;

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = withCreateSizeVar(customVars
    ? customVars
    : allVars);
  return selectionControlLayout(selector, componentVars, customVars, "checkbox")
    .concat(Object.keys(currentVars).map(v => (
      varFns[v] !== undefined 
        ? varFns[v](selector, allVars)
        : null
    )).filter(s => s));
};
