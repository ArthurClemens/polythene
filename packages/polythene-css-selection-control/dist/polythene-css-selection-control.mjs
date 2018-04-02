import { mixin, flex } from 'polythene-core-css';
import { vars } from 'polythene-theme';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (componentVars) {
    var _peButtonPeContr, _peControl__label;

    return {
      " .pe-button.pe-control__button": (_peButtonPeContr = {}, _defineProperty(_peButtonPeContr, isRTL ? "right" : "left", -((componentVars.button_size - componentVars.icon_size) / 2) + "px"), _defineProperty(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr),
      " .pe-control__label": (_peControl__label = {}, _defineProperty(_peControl__label, isRTL ? "paddingLeft" : "paddingRight", componentVars.label_padding_after + "px"), _defineProperty(_peControl__label, isRTL ? "paddingRight" : "paddingLeft", componentVars.label_padding_before + "px"), _peControl__label)
    };
  };
};

var alignLeft = alignSide(false);

var alignRight = alignSide(true);

var makeSize = function makeSize(componentVars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.unit_icon_size;

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

      " .pe-icon": [mixin.fit(iconOffset)]
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
  var _ref;

  return [_defineProperty({}, selector, [alignLeft(componentVars), (_ref = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0

  }, _defineProperty(_ref, " input[type=" + type + "]", {
    display: "none"
  }), _defineProperty(_ref, " .pe-control__form-label", [flex.layoutHorizontal, flex.layoutCenter, {
    position: "relative",
    cursor: "pointer",
    fontSize: componentVars.label_font_size + "px",
    margin: 0,
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }]), _defineProperty(_ref, ".pe-control--inactive", {
    " .pe-control__form-label": {
      cursor: "default"
    }
  }), _defineProperty(_ref, " .pe-control__box", {
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
  }), _defineProperty(_ref, " .pe-button.pe-control__button", [mixin.defaultTransition("opacity", componentVars.animation_duration), {
    position: "absolute",
    top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    zIndex: 1
  }]), _defineProperty(_ref, ".pe-control--off", {
    " .pe-control__button--on": inactiveButton(),
    " .pe-control__button--off": activeButton()
  }), _defineProperty(_ref, ".pe-control--on", {
    " .pe-control__button--on": activeButton(),
    " .pe-control__button--off": inactiveButton()
  }), _defineProperty(_ref, " .pe-control__label", [mixin.defaultTransition("all", componentVars.animation_duration), {
    // padding: RTL
    alignSelf: "center"
  }]), _defineProperty(_ref, ".pe-control--disabled", {
    " .pe-control__form-label": {
      cursor: "auto"
    },
    " .pe-control__button": {
      pointerEvents: "none"
    }
  }), _defineProperty(_ref, " .pe-button__content", {
    " .pe-icon": {
      position: "absolute"
    }
  }), _defineProperty(_ref, ".pe-control--small", makeSize(componentVars, vars.unit_icon_size_small, vars.unit_icon_size_small)), _defineProperty(_ref, ".pe-control--regular", makeSize(componentVars, componentVars.label_height, vars.unit_icon_size)), _defineProperty(_ref, ".pe-control--medium", makeSize(componentVars, vars.unit_icon_size_medium, vars.unit_icon_size_medium)), _defineProperty(_ref, ".pe-control--large", makeSize(componentVars, vars.unit_icon_size_large, vars.unit_icon_size_large)), _ref)]), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(componentVars)])];
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

export { getStyle, layout, color };
