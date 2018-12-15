(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-icon-button'), require('polythene-css-selection-control'), require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-icon-button', 'polythene-css-selection-control', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-icon-button'],global['polythene-css-selection-control'],global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssIconButton,polytheneCssSelectionControl,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-switch-control",
    // elements
    knob: "pe-switch-control__knob",
    thumb: "pe-switch-control__thumb",
    track: "pe-switch-control__track"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
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
    ["color_" + tint + "_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__label": {
        color: vars["color_" + tint + "_label"]
      }
    })],
    ["color_" + tint + "_track_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_off"]
        }
      }
    })],
    ["color_" + tint + "_track_off_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_off_opacity"]
        }
      }
    })],
    ["color_" + tint + "_thumb_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__thumb": {
          color: vars["color_" + tint + "_thumb_off"]
        }
      }
    })],
    ["color_" + tint + "_focus_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_off"]
          }
        }
      }
    })],
    ["color_" + tint + "_focus_off_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_off_opacity"]
          }
        }
      }
    })],
    ["color_" + tint + "_icon_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon_off"]
        }
      }
    })],
    ["color_" + tint + "_off_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_off_label"]
        }
      }
    })],
    ["color_" + tint + "_track_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_on"]
        }
      }
    })],
    ["color_" + tint + "_track_on_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_on_opacity"]
        }
      }
    })],
    ["color_" + tint + "_thumb_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__thumb": {
          color: vars["color_" + tint + "_thumb_on"]
        }
      }
    })],
    ["color_" + tint + "_focus_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_on"]
          }
        }
      }
    })],
    ["color_" + tint + "_focus_on_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_on_opacity"]
          }
        }
      }
    })],
    ["color_" + tint + "_icon_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon_on"]
        }
      }
    })],
    ["color_" + tint + "_on_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_on_label"]
        }
      }
    })],
    ["color_" + tint + "_disabled"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_disabled"]
        }
      }
    })],
    ["color_" + tint + "_track_disabled"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_disabled"]
        }
      }
    })],
    ["color_" + tint + "_track_disabled_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_disabled_opacity"]
        }
      }
    })],
    ["color_" + tint + "_thumb_disabled"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__thumb, .pe-button__content": {
          color: vars["color_" + tint + "_thumb_disabled"]
        }
      }
    })]
  });

  const hoverTintFns = tint => ({
    ["color_" + tint + "_wash_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_on"]
        }
      }
    })],
    ["color_" + tint + "_wash_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_off"]
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  const lightTintHoverFns = hoverTintFns("light");
  const darkTintHoverFns = hoverTintFns("dark");
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns,
      lightTintHoverFns,
      darkTintHoverFns
    }
  });

  const transition = (vars, properties, duration = vars.animation_duration) => polytheneCoreCss.mixin.defaultTransition(properties, duration, "ease-out");

  const getSizeData = (vars, size) => {
    const factor = size / polytheneTheme.vars.unit_icon_size;
    const thumbSize = Math.floor(0.5 * vars.thumb_size * factor) * 2; // round to even

    const scaledTrackHeight = Math.floor(0.5 * vars.track_height * factor) * 2; // round to even

    const scaledTrackWidth = Math.floor(0.5 * vars.track_length * factor) * 2;
    const scaledThumbSize = Math.floor(0.5 * vars.thumb_size * factor) * 2;
    const trackTop = (vars.label_height * factor - scaledTrackHeight) / 2;
    const thumbPadding = vars.icon_button_padding;
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

  const customSize = (vars, {
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

  const customSpacing = (vars, {
    factor,
    scaledTrackWidth,
    thumbOffsetMax,
    thumbOffsetMin,
    trackVisualOffset
  }, isRTL) => {
    return {
      " .pe-control__label": {
        [isRTL ? "paddingRight" : "paddingLeft"]: vars.padding * factor + 8 + scaledTrackWidth + "px",
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

  const createSize = (selector, vars) => {
    const sizeData = {
      small: getSizeData(vars, polytheneTheme.vars.unit_icon_size_small),
      regular: getSizeData(vars, polytheneTheme.vars.unit_icon_size),
      medium: getSizeData(vars, polytheneTheme.vars.unit_icon_size_medium),
      large: getSizeData(vars, polytheneTheme.vars.unit_icon_size_large)
    };
    return [polytheneCoreCss.sel(selector, {
      ".pe-control--small": [customSize(vars, sizeData.small), customSpacing(vars, sizeData.small, false)],
      ".pe-control--regular": [customSize(vars, sizeData.regular), customSpacing(vars, sizeData.regular, false)],
      ".pe-control--medium": [customSize(vars, sizeData.medium), customSpacing(vars, sizeData.medium, false)],
      ".pe-control--large": [customSize(vars, sizeData.large), customSpacing(vars, sizeData.large, false)]
    }), {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight(), {
        ".pe-control--small": [customSpacing(vars, sizeData.small, true)],
        ".pe-control--regular": [customSpacing(vars, sizeData.regular, true)],
        ".pe-control--medium": [customSpacing(vars, sizeData.medium, true)],
        ".pe-control--large": [customSpacing(vars, sizeData.large, true)]
      }]
    }];
  };

  const varFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, [alignLeft(), {
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
        " .pe-switch-control__knob .pe-icon": [polytheneCoreCss.mixin.fit(), {
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
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars, "all")
    })],
    createSize
  };

  const withCreateSizeVar = vars => vars.thumb_size || vars.track_height || vars.track_length || vars.label_height || vars.icon_button_padding ? Object.assign({}, vars, {
    createSize: true
  }) : vars;

  var layout = polytheneCoreCss.createLayout({
    varFns,
    superLayout: polytheneCssSelectionControl.layout,
    varMixin: withCreateSizeVar
  });

  var vars = {
    general_styles: true,
    animation_duration: polytheneTheme.vars.animation_duration,
    hit_area_padding: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2,
    // 12
    icon_button_padding: polytheneCssIconButton.vars.padding,
    padding: polytheneTheme.vars.grid_unit_component,
    thumb_size: 20,
    track_height: 14,
    track_length: 36,
    label_height: polytheneCssSelectionControl.vars.label_height,
    color_light_thumb_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_thumb_off: "#f1f1f1",
    color_light_thumb_disabled: "#eee",
    color_light_wash_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary, polytheneTheme.vars.blend_light_background_active),
    color_light_wash_off: polytheneCssIconButton.vars.color_light_wash,
    color_light_track_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,
    // icon color may be set in theme; default "currentcolor"
    // color_light_icon_on:                   "currentcolor",
    // color_light_icon_off:                  "currentcolor",
    // color_light_focus_on and so on taken from selectionControlVars
    color_dark_thumb_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_thumb_off: "#bdbdbd",
    color_dark_thumb_disabled: "#555",
    color_dark_wash_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary, polytheneTheme.vars.blend_dark_background_active),
    color_dark_wash_off: polytheneCssIconButton.vars.color_dark_wash,
    color_dark_track_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary_faded, polytheneTheme.vars.blend_dark_text_tertiary),
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
//# sourceMappingURL=polythene-css-switch.js.map
