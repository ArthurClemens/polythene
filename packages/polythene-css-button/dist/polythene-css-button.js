(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-button'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-button']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreButton) { 'use strict';

  var classes = {
    base: "pe-button",
    component: "pe-button pe-text-button",
    row: "pe-button-row",
    splitButton: "pe-split-button",

    // elements    
    content: "pe-button__content",
    focus: "pe-button__focus",
    label: "pe-button__label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states    
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    focused: "pe-button--focus",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var baseLayout = (function (selector, componentVars) {
    var _ref;

    return [(_ref = {}, _defineProperty(_ref, selector, [{
      userSelect: "none",
      outline: "none",
      padding: 0,
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",

      ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        pointerEvents: "none"
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__content": {
        position: "relative",
        borderRadius: "inherit"
      },

      " .pe-button__label": [polytheneCoreCss.mixin.fontSmoothing(), {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__wash, .pe-button__focus": [polytheneCoreCss.mixin.fit(), {
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__focus": {
        opacity: 0
      },

      " .pe-button__wash": {
        zIndex: 0
      }
    }]), _defineProperty(_ref, " .pe-button-row", _defineProperty({
      margin: "0 -" + componentVars.margin_h + "px",
      // prevent inline block style to add extra space:
      fontSize: 0,
      lineHeight: 0

    }, " " + selector, {
      margin: "0 " + componentVars.margin_h + "px"
    })), _ref)];
  });

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var layout = (function (selector, componentVars) {
    var _ref;

    return [(_ref = {}, _defineProperty$1(_ref, selector, [{
      display: "inline-block",
      minWidth: componentVars.min_width + "px",
      padding: componentVars.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content, .pe-button__wash, .pe-button__focus": [polytheneCoreCss.mixin.defaultTransition("all", componentVars.animation_duration)],

      " .pe-button__content": {
        position: "relative",
        borderWidth: 0,
        padding: "0 " + componentVars.padding_h + "px",
        borderRadius: componentVars.border_radius + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },

      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc(1em + 2 * " + componentVars.padding_v + "px)",
        fontSize: componentVars.font_size + "px",
        lineHeight: componentVars.font_size + "px",
        whiteSpace: "pre",
        userSelect: "none"
      },

      " .pe-button__label": {
        fontWeight: componentVars.font_weight,
        textTransform: componentVars.text_transform,
        padding: componentVars.padding_v + "px 0"
      },

      ".pe-button--border": {
        " .pe-button__wash, .pe-button__focus, .pe-ripple": polytheneCoreCss.mixin.fit(-1),

        " .pe-button__content": {
          borderStyle: "solid",
          borderWidth: "1px"
        },
        " .pe-button__label": {
          padding: componentVars.padding_v - 1 + "px 0"
        }
      },

      ".pe-button--dropdown": {
        minWidth: "0", // IE 11 does not recognize "initial" here

        " .pe-button__dropdown": {
          width: componentVars.dropdown_icon_size + "px",
          minWidth: "calc(36px - 2 * " + componentVars.padding_h + "px)",
          position: "relative"
        },

        " .pe-svg": {
          position: "absolute",
          width: componentVars.dropdown_icon_size + "px",
          height: componentVars.dropdown_icon_size + "px",
          left: 0,
          top: "50%",
          marginTop: -componentVars.dropdown_icon_size / 2 + "px"
        },

        " .pe-button__label + .pe-button__dropdown": {
          marginLeft: "7px",
          marginRight: "calc(7px - " + componentVars.padding_h + "px)",
          minWidth: 0
        }
      }
    }]), _defineProperty$1(_ref, ".pe-split-button", _defineProperty$1({
      display: "flex"

    }, " " + selector, {
      ":not(:first-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        }
      },
      ":not(:last-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }
      },
      ":last-child": {
        " .pe-button__content": {
          borderStyle: "none none none solid",
          borderWidth: "1px"
        }
      }
    })), _ref)];
  });

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var style = function style(scopes, selector, componentVars, tint) {
    var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
    var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
    var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
    return [_defineProperty$2({}, scopes.map(function (s) {
      return s + selector;
    }).join(","), {
      "&, &:link, &:visited": {
        color: componentVars["color_" + tint + "_text"]
      },

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_background"],
        borderColor: normalBorder
      },

      ".pe-button--disabled": {
        color: componentVars["color_" + tint + "_disabled_text"],

        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_disabled_background"],
          borderColor: disabledBorder
        }
      },

      " .pe-button__focus": {
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      },

      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_active_background"],
          borderColor: activeBorder
        },
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
        }
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__dropdown": {
        color: componentVars["color_" + tint + "_icon"]
      },

      " .pe-split-button &": {
        ":last-child": {
          " .pe-button__content": {
            borderColor: componentVars["color_" + tint + "_dropdown_border"]
          }
        }
      }
    })];
  };

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
    var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
    var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
    return [_defineProperty$2({}, [].concat(scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(",")).concat(scopes.map(function (s) {
      return s + selector + ":active";
    }).join(",")), {
      ":not(.pe-button--selected):not(.pe-button--inactive)": {
        color: componentVars["color_" + tint + "_hover"] || componentVars["color_" + tint + "_text"],
        borderColor: hoverBorder,

        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_hover_background"] || componentVars["color_" + tint + "_background"]
        },

        " .pe-button__wash": {
          backgroundColor: componentVars["color_" + tint + "_wash_background"]
        },

        " .pe-button__dropdown": {
          color: componentVars["color_" + tint + "_hover_icon"] || "inherit"
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
  var baseFns = [baseLayout];
  var baseSelector = "." + classes.base;
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreButton.vars, customVars), fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreButton.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([baseSelector], polytheneCoreButton.vars, baseFns).concat(polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreButton.vars, fns));
  };

  polytheneCoreCss.styler.generateStyles([baseSelector], polytheneCoreButton.vars, baseFns);
  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreButton.vars, fns);

  exports.layout = layout;
  exports.noTouchStyle = noTouchStyle;
  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-button.js.map
