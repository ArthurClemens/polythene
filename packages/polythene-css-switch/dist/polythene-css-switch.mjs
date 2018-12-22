import { createColor, sel, createLayout, mixin, rgba, styler } from 'polythene-core-css';
import { layout, vars as vars$2 } from 'polythene-css-selection-control';
import { vars } from 'polythene-theme';
import { vars as vars$1 } from 'polythene-css-icon-button';

var classes = {
  component: "pe-switch-control",
  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

const generalFns = {
  general_styles: selector => [sel(selector, {
    ".pe-control--off": {
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-icon": {
        color: "currentcolor"
      }
    },
    ".pe-control--on": {
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-icon": {
        color: "currentcolor"
      }
    }
  })]
};

const tintFns = tint => ({
  ["color_" + tint + "_label"]: (selector, vars$$1) => [sel(selector, {
    " .pe-control__label": {
      color: vars$$1["color_" + tint + "_label"]
    }
  })],
  ["color_" + tint + "_track_off"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-switch-control__track": {
        backgroundColor: vars$$1["color_" + tint + "_track_off"]
      }
    }
  })],
  ["color_" + tint + "_track_off_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-switch-control__track": {
        opacity: vars$$1["color_" + tint + "_track_off_opacity"]
      }
    }
  })],
  ["color_" + tint + "_thumb_off"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-switch-control__thumb": {
        color: vars$$1["color_" + tint + "_thumb_off"]
      }
    }
  })],
  ["color_" + tint + "_focus_off"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_off"]
        }
      }
    }
  })],
  ["color_" + tint + "_focus_off_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_off_opacity"]
        }
      }
    }
  })],
  ["color_" + tint + "_icon_off"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-icon": {
        color: vars$$1["color_" + tint + "_icon_off"]
      }
    }
  })],
  ["color_" + tint + "_off_label"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_off_label"]
      }
    }
  })],
  ["color_" + tint + "_track_on"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-switch-control__track": {
        backgroundColor: vars$$1["color_" + tint + "_track_on"]
      }
    }
  })],
  ["color_" + tint + "_track_on_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-switch-control__track": {
        opacity: vars$$1["color_" + tint + "_track_on_opacity"]
      }
    }
  })],
  ["color_" + tint + "_thumb_on"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-switch-control__thumb": {
        color: vars$$1["color_" + tint + "_thumb_on"]
      }
    }
  })],
  ["color_" + tint + "_focus_on"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_on"]
        }
      }
    }
  })],
  ["color_" + tint + "_focus_on_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_on_opacity"]
        }
      }
    }
  })],
  ["color_" + tint + "_icon_on"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-icon": {
        color: vars$$1["color_" + tint + "_icon_on"]
      }
    }
  })],
  ["color_" + tint + "_on_label"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_on_label"]
      }
    }
  })],
  ["color_" + tint + "_disabled"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_disabled"]
      }
    }
  })],
  ["color_" + tint + "_track_disabled"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-switch-control__track": {
        backgroundColor: vars$$1["color_" + tint + "_track_disabled"]
      }
    }
  })],
  ["color_" + tint + "_track_disabled_opacity"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-switch-control__track": {
        opacity: vars$$1["color_" + tint + "_track_disabled_opacity"]
      }
    }
  })],
  ["color_" + tint + "_thumb_disabled"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-switch-control__thumb, .pe-button__content": {
        color: vars$$1["color_" + tint + "_thumb_disabled"]
      }
    }
  })]
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_wash_on"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--on": {
      " .pe-button__wash": {
        backgroundColor: vars$$1["color_" + tint + "_wash_on"]
      }
    }
  })],
  ["color_" + tint + "_wash_off"]: (selector, vars$$1) => [sel(selector, {
    ".pe-control--off": {
      " .pe-button__wash": {
        backgroundColor: vars$$1["color_" + tint + "_wash_off"]
      }
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns,
    lightTintHoverFns,
    darkTintHoverFns
  }
});

const transition = (vars$$1, properties, duration = vars$$1.animation_duration) => mixin.defaultTransition(properties, duration, "ease-out");

const getSizeData = (vars$$1, size) => {
  const factor = size / vars.unit_icon_size;
  const thumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2; // round to even

  const scaledTrackHeight = Math.floor(0.5 * vars$$1.track_height * factor) * 2; // round to even

  const scaledTrackWidth = Math.floor(0.5 * vars$$1.track_length * factor) * 2;
  const scaledThumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2;
  const trackTop = (vars$$1.label_height * factor - scaledTrackHeight) / 2;
  const thumbPadding = vars$$1.icon_button_padding;
  const thumbMargin = (size - scaledThumbSize) / 2;
  const thumbOuterSize = size + 2 * thumbPadding;
  const thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
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
    trackVisualOffset
  };
};

const customSize = (vars$$1, {
  scaledThumbSize,
  scaledTrackHeight,
  scaledTrackWidth,
  size,
  thumbMargin,
  thumbOffsetY,
  thumbPadding,
  trackTop,
  trackVisualOffset
}) => {
  return {
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px"
    },
    " .pe-switch-control__track": {
      height: scaledTrackHeight + "px",
      width: scaledTrackWidth - 2 * trackVisualOffset + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px"
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

const customSpacing = (vars$$1, {
  factor,
  scaledTrackWidth,
  thumbOffsetMax,
  thumbOffsetMin,
  trackVisualOffset
}, isRTL) => {
  return {
    " .pe-control__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: vars$$1.padding * factor + 8 + scaledTrackWidth + "px",
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

const createSize = (selector, vars$$1) => {
  const sizeData = {
    small: getSizeData(vars$$1, vars.unit_icon_size_small),
    regular: getSizeData(vars$$1, vars.unit_icon_size),
    medium: getSizeData(vars$$1, vars.unit_icon_size_medium),
    large: getSizeData(vars$$1, vars.unit_icon_size_large)
  };
  return [sel(selector, {
    ".pe-control--small": [customSize(vars$$1, sizeData.small), customSpacing(vars$$1, sizeData.small, false)],
    ".pe-control--regular": [customSize(vars$$1, sizeData.regular), customSpacing(vars$$1, sizeData.regular, false)],
    ".pe-control--medium": [customSize(vars$$1, sizeData.medium), customSpacing(vars$$1, sizeData.medium, false)],
    ".pe-control--large": [customSize(vars$$1, sizeData.large), customSpacing(vars$$1, sizeData.large, false)]
  }), {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight(), {
      ".pe-control--small": [customSpacing(vars$$1, sizeData.small, true)],
      ".pe-control--regular": [customSpacing(vars$$1, sizeData.regular, true)],
      ".pe-control--medium": [customSpacing(vars$$1, sizeData.medium, true)],
      ".pe-control--large": [customSpacing(vars$$1, sizeData.large, true)]
    }]
  }];
};

const varFns = {
  general_styles: selector => [sel(selector, [alignLeft(), {
    " .pe-switch-control__track": [{
      position: "absolute"
    }],
    " .pe-switch-control__thumb": {
      position: "absolute",
      zIndex: 1,
      // Prevents flickering of text label when toggling
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
      " .pe-switch-control__knob .pe-icon": [mixin.fit(), {
        width: "100%",
        height: "100%"
      }]
    }
  }]), {
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
  }],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars$$1, "all")
  })],
  createSize
};

const withCreateSizeVar = vars$$1 => vars$$1.thumb_size || vars$$1.track_height || vars$$1.track_length || vars$$1.label_height || vars$$1.icon_button_padding ? Object.assign({}, vars$$1, {
  createSize: true
}) : vars$$1;

var layout$1 = createLayout({
  varFns,
  superLayout: layout,
  varMixin: withCreateSizeVar
});

var vars$3 = {
  general_styles: true,
  animation_duration: vars.animation_duration,
  hit_area_padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2,
  // 12
  icon_button_padding: vars$1.padding,
  padding: vars.grid_unit_component,
  thumb_size: 20,
  track_height: 14,
  track_length: 36,
  label_height: vars$2.label_height,
  color_light_thumb_on: rgba(vars.color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#eee",
  color_light_wash_on: rgba(vars.color_primary, vars.blend_light_background_active),
  color_light_wash_off: vars$1.color_light_wash,
  color_light_track_on: rgba(vars.color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,
  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",
  // color_light_focus_on and so on taken from selectionControlVars
  color_dark_thumb_on: rgba(vars.color_primary),
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",
  color_dark_wash_on: rgba(vars.color_primary, vars.blend_dark_background_active),
  color_dark_wash_off: vars$1.color_dark_wash,
  color_dark_track_on: rgba(vars.color_primary_faded, vars.blend_dark_text_tertiary),
  // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3 // icon color may be set in theme; default "currentcolor"
  // color_dark_icon_on:                    "currentcolor"
  // color_dark_icon_off:                   "currentcolor"
  // color_dark_focus_on and so on taken from selectionControlVars

};

const fns = [layout$1, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$3);
const getStyle = styler.createGetStyle(selector, fns, vars$3);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$3
});

export { addStyle, color, getStyle, layout$1 as layout, vars$3 as vars };
