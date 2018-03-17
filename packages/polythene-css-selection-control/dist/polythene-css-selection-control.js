(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var makeSize = function makeSize(componentVars, height) {
    var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : polytheneTheme.vars.unit_icon_size;

    var labelSize = iconSize + componentVars.label_height;
    var iconOffset = (labelSize - iconSize) / 2;
    return {
      " .pe-control__form-label": {
        height: height + "px"
      },
      " .pe-control__box": {
        width: iconSize + "px",
        height: iconSize + "px"
      },
      " .pe-button__content": {
        width: labelSize + "px",
        height: labelSize + "px",

        " .pe-icon": [polytheneCoreCss.mixin.fit(iconOffset)]
      }
    };
  };

  var activeButton = function activeButton() {
    return {
      opacity: 1,
      zIndex: 1
    };
  };

  var inactiveButton = function inactiveButton() {
    return {
      opacity: 0,
      zIndex: 0
    };
  };

  var layout = (function (selector, componentVars, type) {
    var _selector;

    return [_defineProperty({}, selector, (_selector = {
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      padding: 0

    }, _defineProperty(_selector, " input[type=" + type + "]", {
      display: "none"
    }), _defineProperty(_selector, " .pe-control__form-label", [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
      position: "relative",
      cursor: "pointer",
      fontSize: componentVars.label_font_size + "px",
      margin: 0,
      color: "inherit",

      ":focus": {
        outline: 0
      }
    }]), _defineProperty(_selector, ".pe-control--inactive", {
      " .pe-control__form-label": {
        cursor: "default"
      }
    }), _defineProperty(_selector, " .pe-control__box", {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      width: componentVars.label_height + "px",
      height: componentVars.label_height + "px",
      color: "inherit",
      flexShrink: 0,

      ":focus": {
        outline: 0
      }
    }), _defineProperty(_selector, " .pe-button.pe-control__button", [polytheneCoreCss.mixin.defaultTransition("opacity", componentVars.animation_duration), {
      position: "absolute",
      left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
      top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
      zIndex: 1
    }]), _defineProperty(_selector, ".pe-control--off", {
      " .pe-control__button--on": inactiveButton(),
      " .pe-control__button--off": activeButton()
    }), _defineProperty(_selector, ".pe-control--on", {
      " .pe-control__button--on": activeButton(),
      " .pe-control__button--off": inactiveButton()
    }), _defineProperty(_selector, " .pe-control__label", [polytheneCoreCss.mixin.defaultTransition("all", componentVars.animation_duration), {
      paddingLeft: componentVars.label_padding_before + "px",
      paddingRight: componentVars.label_padding_after + "px",
      alignSelf: "center"
    }]), _defineProperty(_selector, ".pe-control--disabled", {
      " .pe-control__form-label": {
        cursor: "auto"
      },
      " .pe-control__button": {
        pointerEvents: "none"
      }
    }), _defineProperty(_selector, " .pe-button__content", {
      " .pe-icon": {
        position: "absolute"
      }
    }), _defineProperty(_selector, ".pe-control--small", makeSize(componentVars, polytheneTheme.vars.unit_icon_size_small, polytheneTheme.vars.unit_icon_size_small)), _defineProperty(_selector, ".pe-control--regular", makeSize(componentVars, componentVars.label_height, polytheneTheme.vars.unit_icon_size)), _defineProperty(_selector, ".pe-control--medium", makeSize(componentVars, polytheneTheme.vars.unit_icon_size_medium, polytheneTheme.vars.unit_icon_size_medium)), _defineProperty(_selector, ".pe-control--large", makeSize(componentVars, polytheneTheme.vars.unit_icon_size_large, polytheneTheme.vars.unit_icon_size_large)), _selector))];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    return [_defineProperty$1({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      color: componentVars["color_" + tint + "_on"], // override by specifying "color"

      " .pe-control__label": {
        color: componentVars["color_" + tint + "_label"]
      },
      " .pe-control__box": {
        " .pe-control__button": {
          color: "inherit",

          " .pe-control__button--on": {
            color: componentVars["color_" + tint + "_on_icon"] || "inherit"
          },

          " .pe-control__button--off": {
            color: componentVars["color_" + tint + "_off_icon"] || componentVars["color_" + tint + "_off"]
          }
        }
      },
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_off_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_off"]
        },
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_off_label"] || componentVars["color_" + tint + "_label"]
        }
      },
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_on_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_on"]
        },
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_on_label"] || componentVars["color_" + tint + "_label"]
        }
      },

      ".pe-control--disabled": {
        " .pe-control__label": {
          color: componentVars["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: componentVars["color_" + tint + "_disabled"]
          }
        }
      }
    })];
  };

  var color = (function (selector, componentVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
  });

  var getStyle = function getStyle() {
    return null;
  };

  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.color = color;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-selection-control.js.map
