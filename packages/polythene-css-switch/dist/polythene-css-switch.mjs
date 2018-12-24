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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
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
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_off_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_off_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__thumb": {
          color: vars$$1["color_" + tint + "_thumb_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars$$1["color_" + tint + "_focus_off"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars$$1["color_" + tint + "_focus_off_opacity"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-icon": {
          color: vars$$1["color_" + tint + "_icon_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_label", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_off_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_on_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_on_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__thumb": {
          color: vars$$1["color_" + tint + "_thumb_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars$$1["color_" + tint + "_focus_on"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars$$1["color_" + tint + "_focus_on_opacity"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-icon": {
          color: vars$$1["color_" + tint + "_icon_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_label", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_on_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          backgroundColor: vars$$1["color_" + tint + "_track_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_track_disabled_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          opacity: vars$$1["color_" + tint + "_track_disabled_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_thumb_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__thumb, .pe-button__content": {
          color: vars$$1["color_" + tint + "_thumb_disabled"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_wash_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button__wash": {
          backgroundColor: vars$$1["color_" + tint + "_wash_on"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_wash_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button__wash": {
          backgroundColor: vars$$1["color_" + tint + "_wash_off"]
        }
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns,
    lightTintHoverFns: lightTintHoverFns,
    darkTintHoverFns: darkTintHoverFns
  }
});

var transition = function transition(vars$$1, properties) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars$$1.animation_duration;
  return mixin.defaultTransition(properties, duration, "ease-out");
};

var getSizeData = function getSizeData(vars$$1, size) {
  var factor = size / vars.unit_icon_size;
  var thumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2; // round to even

  var scaledTrackHeight = Math.floor(0.5 * vars$$1.track_height * factor) * 2; // round to even

  var scaledTrackWidth = Math.floor(0.5 * vars$$1.track_length * factor) * 2;
  var scaledThumbSize = Math.floor(0.5 * vars$$1.thumb_size * factor) * 2;
  var trackTop = (vars$$1.label_height * factor - scaledTrackHeight) / 2;
  var thumbPadding = vars$$1.icon_button_padding;
  var thumbMargin = (size - scaledThumbSize) / 2;
  var thumbOuterSize = size + 2 * thumbPadding;
  var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
  var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
  var thumbOffsetY = thumbOffsetMin + thumbMargin;
  var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

  return {
    factor: factor,
    scaledThumbSize: scaledThumbSize,
    scaledTrackHeight: scaledTrackHeight,
    scaledTrackWidth: scaledTrackWidth,
    size: size,
    thumbMargin: thumbMargin,
    thumbOffsetMax: thumbOffsetMax,
    thumbOffsetMin: thumbOffsetMin,
    thumbOffsetY: thumbOffsetY,
    thumbPadding: thumbPadding,
    trackTop: trackTop,
    trackVisualOffset: trackVisualOffset
  };
};

var customSize = function customSize(vars$$1, _ref) {
  var scaledThumbSize = _ref.scaledThumbSize,
      scaledTrackHeight = _ref.scaledTrackHeight,
      scaledTrackWidth = _ref.scaledTrackWidth,
      size = _ref.size,
      thumbMargin = _ref.thumbMargin,
      thumbOffsetY = _ref.thumbOffsetY,
      thumbPadding = _ref.thumbPadding,
      trackTop = _ref.trackTop,
      trackVisualOffset = _ref.trackVisualOffset;
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

var customSpacing = function customSpacing(vars$$1, _ref2, isRTL) {
  var _peControl__label, _peSwitchControl_, _peSwitchControl_2, _peSwitchControl_3;

  var factor = _ref2.factor,
      scaledTrackWidth = _ref2.scaledTrackWidth,
      thumbOffsetMax = _ref2.thumbOffsetMax,
      thumbOffsetMin = _ref2.thumbOffsetMin,
      trackVisualOffset = _ref2.trackVisualOffset;
  return {
    " .pe-control__label": (_peControl__label = {}, _defineProperty(_peControl__label, isRTL ? "paddingRight" : "paddingLeft", vars$$1.padding * factor + 8 + scaledTrackWidth + "px"), _defineProperty(_peControl__label, isRTL ? "paddingLeft" : "paddingRight", 0), _peControl__label),
    " .pe-switch-control__track": (_peSwitchControl_ = {}, _defineProperty(_peSwitchControl_, isRTL ? "right" : "left", trackVisualOffset + "px"), _defineProperty(_peSwitchControl_, isRTL ? "left" : "right", "auto"), _peSwitchControl_),
    " .pe-switch-control__thumb": (_peSwitchControl_2 = {}, _defineProperty(_peSwitchControl_2, isRTL ? "right" : "left", thumbOffsetMin + "px"), _defineProperty(_peSwitchControl_2, isRTL ? "left" : "right", "auto"), _peSwitchControl_2),
    ".pe-control--on": {
      " .pe-switch-control__thumb": (_peSwitchControl_3 = {}, _defineProperty(_peSwitchControl_3, isRTL ? "right" : "left", thumbOffsetMax + "px"), _defineProperty(_peSwitchControl_3, isRTL ? "left" : "right", "auto"), _peSwitchControl_3)
    }
  };
};

var alignSide = function alignSide(isRTL) {
  return function () {
    var _peSwitchControl_4;

    return {
      " .pe-switch-control__track": (_peSwitchControl_4 = {}, _defineProperty(_peSwitchControl_4, isRTL ? "right" : "left", 0), _defineProperty(_peSwitchControl_4, isRTL ? "left" : "right", "auto"), _peSwitchControl_4)
    };
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var createSize = function createSize(selector, vars$$1) {
  var sizeData = {
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
  }), _defineProperty({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight(), {
    ".pe-control--small": [customSpacing(vars$$1, sizeData.small, true)],
    ".pe-control--regular": [customSpacing(vars$$1, sizeData.regular, true)],
    ".pe-control--medium": [customSpacing(vars$$1, sizeData.medium, true)],
    ".pe-control--large": [customSpacing(vars$$1, sizeData.large, true)]
  }])];
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
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
    }]), _defineProperty({}, "_:-ms-fullscreen, :root ".concat(selector), {
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
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label, .pe-button__focus": transition(vars$$1, "all")
    })];
  },
  createSize: createSize
};

var withCreateSizeVar = function withCreateSizeVar(vars$$1) {
  return vars$$1.thumb_size || vars$$1.track_height || vars$$1.track_length || vars$$1.label_height || vars$$1.icon_button_padding ? _extends({}, vars$$1, {
    createSize: true
  }) : vars$$1;
};

var layout$1 = createLayout({
  varFns: varFns,
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

var fns = [layout$1, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars$3);
var getStyle = styler.createGetStyle(selector, fns, vars$3);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$3
});

export { addStyle, color, getStyle, layout$1 as layout, vars$3 as vars };
