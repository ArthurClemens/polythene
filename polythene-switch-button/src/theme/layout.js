import { layout as selectionControlLayout } from "polythene-core-selection-control";
import { vars } from "polythene-theme";
import { mixin } from "polythene-core-css";

const transition = (componentVars, properties, duration = componentVars.animation_duration) => [
  mixin.defaultTransition(properties, duration, "ease-out")
];

const customSize = (componentVars, size) => {
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
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px",
    },
    " .pe-control__label": {
      paddingLeft: (componentVars.padding * factor + 8 + scaledTrackWidth) + "px"
    },
    " .pe-switch-control__track": {
      left: trackVisualOffset + "px",
      height: scaledTrackHeight + "px",
      width: (scaledTrackWidth - 2 * trackVisualOffset) + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px",
      left: thumbOffsetMin + "px"
    },

    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
      margin: thumbMargin + "px"
    },

    " .pe-button__content": {
      padding: thumbPadding + "px"
    },

    ".pe-control--on": {
      " .pe-switch-control__thumb": {
        left: thumbOffsetMax + "px"
      }
    }
  };
};

export default (selector, componentVars) =>
  selectionControlLayout(selector, componentVars, "checkbox").concat(
    [{
      [selector]: {
        " .pe-switch-control__track": [
          transition(componentVars, "background, opacity"),
          {
            position: "absolute",
            left: 0
          }
        ],

        " .pe-switch-control__thumb": [
          transition(componentVars, "left, color"),
          {
            position: "absolute",
            zIndex: 1, // Prevents flickering of text label when toggling
            color: "inherit",

            ":focus": {
              outline: 0
            }
          }
        ],

        " .pe-switch-control__knob": {
          position: "relative",
          borderRadius: "50%"
        },

        " .pe-button__content .pe-switch-control__knob .pe-icon": [
          mixin.fit(),
          transition(componentVars, "color"),
          {
            width: "100%",
            height: "100%"
          }
        ],

        " .pe-button__focus": [
          transition(componentVars, "all")
        ],

        ".pe-control--small":   customSize(componentVars, vars.unit_icon_size_small),
        ".pe-control--regular": customSize(componentVars, vars.unit_icon_size),
        ".pe-control--medium":  customSize(componentVars, vars.unit_icon_size_medium),
        ".pe-control--large":   customSize(componentVars, vars.unit_icon_size_large)
      }
    }]
  );

