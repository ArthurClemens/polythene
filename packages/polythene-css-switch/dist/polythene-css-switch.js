(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-theme'), require('polythene-core-css'), require('polythene-core-switch')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-theme', 'polythene-core-css', 'polythene-core-switch'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-theme'],global['polythene-core-css'],global['polythene-core-switch']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneTheme,polytheneCoreCss,polytheneCoreSwitch) { 'use strict';

  var classes = {
    component: "pe-switch-control",

    // elements
    knob: "pe-switch-control__knob",
    thumb: "pe-switch-control__thumb",
    track: "pe-switch-control__track"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var transition = function transition(componentVars, properties) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : componentVars.animation_duration;
    return [polytheneCoreCss.mixin.defaultTransition(properties, duration, "ease-out")];
  };

  var getSizeData = function getSizeData(componentVars, size) {
    var factor = size / polytheneTheme.vars.unit_icon_size;
    var thumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2; // round to even
    var scaledTrackHeight = Math.floor(0.5 * componentVars.track_height * factor) * 2; // round to even
    var scaledTrackWidth = Math.floor(0.5 * componentVars.track_length * factor) * 2;
    var scaledThumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2;
    var trackTop = (componentVars.label_height * factor - scaledTrackHeight) / 2;
    var thumbPadding = componentVars.icon_button_padding;
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

  var customSize = function customSize(componentVars, _ref) {
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

  var customSpacing = function customSpacing(componentVars, _ref2, isRTL) {
    var _peControl__label, _peSwitchControl_, _peSwitchControl_2, _peSwitchControl_3;

    var factor = _ref2.factor,
        scaledTrackWidth = _ref2.scaledTrackWidth,
        thumbOffsetMax = _ref2.thumbOffsetMax,
        thumbOffsetMin = _ref2.thumbOffsetMin,
        trackVisualOffset = _ref2.trackVisualOffset;

    return {
      " .pe-control__label": (_peControl__label = {}, _defineProperty(_peControl__label, isRTL ? "paddingRight" : "paddingLeft", componentVars.padding * factor + 8 + scaledTrackWidth + "px"), _defineProperty(_peControl__label, isRTL ? "paddingLeft" : "paddingRight", 0), _peControl__label),
      " .pe-switch-control__track": (_peSwitchControl_ = {}, _defineProperty(_peSwitchControl_, isRTL ? "right" : "left", trackVisualOffset + "px"), _defineProperty(_peSwitchControl_, isRTL ? "left" : "right", "auto"), _peSwitchControl_),
      " .pe-switch-control__thumb": (_peSwitchControl_2 = {}, _defineProperty(_peSwitchControl_2, isRTL ? "right" : "left", thumbOffsetMin + "px"), _defineProperty(_peSwitchControl_2, isRTL ? "left" : "right", "auto"), _peSwitchControl_2),
      ".pe-control--on": {
        " .pe-switch-control__thumb": (_peSwitchControl_3 = {}, _defineProperty(_peSwitchControl_3, isRTL ? "right" : "left", thumbOffsetMax + "px"), _defineProperty(_peSwitchControl_3, isRTL ? "left" : "right", "auto"), _peSwitchControl_3)
      }
    };
  };

  var alignRight = function alignRight() {
    return {
      " .pe-switch-control__track": {
        right: 0,
        left: "auto"
      }
    };
  };

  var alignLeft = function alignLeft() {
    return {
      " .pe-switch-control__track": {
        left: 0,
        right: "auto"
      }
    };
  };

  var layout = (function (selector, componentVars) {
    var sizeData = {
      small: getSizeData(componentVars, polytheneTheme.vars.unit_icon_size_small),
      regular: getSizeData(componentVars, polytheneTheme.vars.unit_icon_size),
      medium: getSizeData(componentVars, polytheneTheme.vars.unit_icon_size_medium),
      large: getSizeData(componentVars, polytheneTheme.vars.unit_icon_size_large)
    };
    return polytheneCssSelectionControl.layout(selector, componentVars, "checkbox").concat([_defineProperty({}, selector, [alignLeft(), {
      " .pe-switch-control__track": [transition(componentVars, "all"), {
        position: "absolute"
      }],

      " .pe-switch-control__thumb": [transition(componentVars, "all"), {
        position: "absolute",
        zIndex: 1, // Prevents flickering of text label when toggling
        color: "inherit",

        ":focus": {
          outline: 0
        }
      }],

      " .pe-control__label": [transition(componentVars, "all")],

      " .pe-switch-control__knob": {
        position: "relative",
        borderRadius: "50%"
      },

      " .pe-button__content": {
        transition: "none",

        " .pe-switch-control__knob .pe-icon": [polytheneCoreCss.mixin.fit(), {
          width: "100%",
          height: "100%"
        }]
      },

      " .pe-button__focus": [transition(componentVars, "all")],

      ".pe-control--small": [customSize(componentVars, sizeData.small), customSpacing(componentVars, sizeData.small, false)],
      ".pe-control--regular": [customSize(componentVars, sizeData.regular), customSpacing(componentVars, sizeData.regular, false)],
      ".pe-control--medium": [customSize(componentVars, sizeData.medium), customSpacing(componentVars, sizeData.medium, false)],
      ".pe-control--large": [customSize(componentVars, sizeData.large), customSpacing(componentVars, sizeData.large, false)]
    }]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(), {
      ".pe-control--small": [customSpacing(componentVars, sizeData.small, true)],
      ".pe-control--regular": [customSpacing(componentVars, sizeData.regular, true)],
      ".pe-control--medium": [customSpacing(componentVars, sizeData.medium, true)],
      ".pe-control--large": [customSpacing(componentVars, sizeData.large, true)]
    }]), _defineProperty({}, "_:-ms-fullscreen, :root " + selector, {
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
    })]);
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {

      " .pe-control__label": {
        color: componentVars["color_" + tint + "_label"]
      },

      ".pe-control--off": {
        " .pe-switch-control__track": {
          opacity: componentVars["color_" + tint + "_track_off_opacity"],
          backgroundColor: componentVars["color_" + tint + "_track_off"]
        },
        " .pe-switch-control__thumb": {
          color: componentVars["color_" + tint + "_thumb_off"]
        },
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: componentVars["color_" + tint + "_focus_off_opacity"],
            backgroundColor: componentVars["color_" + tint + "_focus_off"]
          }
        },
        " .pe-icon": {
          color: componentVars["color_" + tint + "_icon_off"] || "currentcolor"
        },
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_off_label"]
        }
      },

      ".pe-control--on": {
        " .pe-switch-control__track": {
          opacity: componentVars["color_" + tint + "_track_on_opacity"],
          backgroundColor: componentVars["color_" + tint + "_track_on"]
        },
        " .pe-switch-control__thumb": {
          color: componentVars["color_" + tint + "_thumb_on"]
        },
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: componentVars["color_" + tint + "_focus_on_opacity"],
            backgroundColor: componentVars["color_" + tint + "_focus_on"]
          }
        },
        " .pe-icon": {
          color: componentVars["color_" + tint + "_icon_on"] || "currentcolor"
        },
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_on_label"]
        }
      },

      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_disabled"]
        },
        " .pe-switch-control__track": {
          opacity: componentVars["color_" + tint + "_track_disabled_opacity"],
          backgroundColor: componentVars["color_" + tint + "_track_disabled"]
        },
        " .pe-switch-control__thumb": {
          color: componentVars["color_" + tint + "_thumb_disabled"]
        }
      }
    })];
  };

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(","), {
      ".pe-control--on": {
        " .pe-button__wash": {
          backgroundColor: componentVars["color_" + tint + "_wash_on"]
        }
      },
      ".pe-control--off": {
        " .pe-button__wash": {
          backgroundColor: componentVars["color_" + tint + "_wash_off"]
        }
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
    noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
    noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreSwitch.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreSwitch.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreSwitch.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreSwitch.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-switch.js.map
