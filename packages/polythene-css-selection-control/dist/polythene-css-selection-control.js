(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-control",
    // elements
    formLabel: "pe-control__form-label",
    input: "pe-control__input",
    label: "pe-control__label",
    // states
    disabled: "pe-control--disabled",
    inactive: "pe-control--inactive",
    large: "pe-control--large",
    medium: "pe-control--medium",
    off: "pe-control--off",
    on: "pe-control--on",
    regular: "pe-control--regular",
    small: "pe-control--small",
    // control view elements
    box: "pe-control__box",
    button: "pe-control__button",
    // control view states
    buttonOff: "pe-control__button--off",
    buttonOn: "pe-control__button--on"
  };

  const generalFns = {
    general_styles: selector => [polytheneCoreCss.sel(selector, {
      " .pe-control__box": {
        " .pe-control__button": {
          color: "inherit"
        },
        " .pe-control__button--on": {
          color: "inherit"
        }
      }
    })]
  };

  const tintFns = tint => ({
    ["color_" + tint + "_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      color: vars["color_" + tint + "_on"] // override by specifying "color"

    })],
    ["color_" + tint + "_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__button--off": {
        color: vars["color_" + tint + "_off"]
      }
    })],
    ["color_" + tint + "_disabled"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--disabled": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: vars["color_" + tint + "_disabled"]
          }
        }
      }
    })],
    ["color_" + tint + "_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__label": {
        color: vars["color_" + tint + "_label"]
      }
    })],
    ["color_" + tint + "_on_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--on": {
          color: vars["color_" + tint + "_on_icon"]
        }
      }
    })],
    ["color_" + tint + "_off_icon"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--off": {
          color: vars["color_" + tint + "_off_icon"]
        }
      }
    })],
    ["color_" + tint + "_focus_on"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_on"]
        }
      }
    })],
    ["color_" + tint + "_focus_off"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_off"]
        }
      }
    })],
    ["color_" + tint + "_focus_on_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_on_opacity"]
        }
      }
    })],
    ["color_" + tint + "_focus_off_opacity"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_off_opacity"]
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
    ["color_" + tint + "_off_label"]: (selector, vars) => [polytheneCoreCss.sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_off_label"]
        }
      }
    })]
  });

  const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
  const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
  var color = polytheneCoreCss.createColor({
    varFns: {
      lightTintFns,
      darkTintFns
    }
  });

  // Returns a style function to be used by Checkbox and Radio Button

  const alignSide = isRTL => vars => ({}); // eslint-disable-line no-unused-vars


  const alignLeft = alignSide(false);
  const alignRight = alignSide(true);

  const makeSize = (vars, height, iconSize = polytheneTheme.vars.unit_icon_size) => {
    const labelSize = iconSize + vars.label_height;
    const iconOffset = (labelSize - iconSize) / 2;
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

  const activeButton = () => ({
    opacity: 1,
    zIndex: 0
  });

  const inactiveButton = () => ({
    opacity: 0,
    zIndex: -1
  });

  const button_size_icon_size = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-button.pe-control__button": {
      top: -((vars.button_size - vars.icon_size) / 2) + "px",
      [isRTL ? "right" : "left"]: -((vars.button_size - vars.icon_size) / 2) + "px",
      [isRTL ? "left" : "right"]: "auto"
    }
  });

  const label_padding_before = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-control__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: vars.label_padding_before + "px"
    }
  });

  const label_padding_after = (selector, vars, isRTL) => polytheneCoreCss.sel(selector, {
    " .pe-control__label": {
      [isRTL ? "paddingLeft" : "paddingRight"]: vars.label_padding_after + "px"
    }
  });

  const varFns = {
    general_styles: (selector, vars) => [polytheneCoreCss.sel(selector, [alignLeft(vars), {
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      " input[type=checkbox], input[type=radio]": {
        display: "none"
      },
      " .pe-control__form-label": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
        position: "relative",
        cursor: "pointer",
        margin: 0,
        color: "inherit",
        ":focus": {
          outline: 0
        }
      }],
      ".pe-control--inactive": {
        " .pe-control__form-label": {
          cursor: "default"
        }
      },
      " .pe-control__box": {
        position: "relative",
        display: "inline-block",
        boxSizing: "border-box",
        color: "inherit",
        flexShrink: 0,
        ":focus": {
          outline: 0
        }
      },
      " .pe-button.pe-control__button": {
        position: "absolute"
      },
      ".pe-control--off": {
        " .pe-control__button--on": inactiveButton(),
        " .pe-control__button--off": activeButton()
      },
      ".pe-control--on": {
        " .pe-control__button--on": activeButton(),
        " .pe-control__button--off": inactiveButton()
      },
      " .pe-control__label": {
        // padding: RTL
        alignSelf: "center"
      },
      ".pe-control--disabled": {
        " .pe-control__form-label": {
          cursor: "auto"
        },
        " .pe-control__button": {
          pointerEvents: "none"
        }
      },
      " .pe-button__content": {
        " .pe-icon": {
          position: "absolute"
        }
      }
    }, {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [alignRight(vars)]
    }])],
    label_font_size: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__form-label": {
        fontSize: vars.label_font_size + "px"
      }
    })],
    label_height: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-control__box": {
        width: vars.label_height + "px",
        height: vars.label_height + "px"
      },
      ".pe-control--small": makeSize(vars, polytheneTheme.vars.unit_icon_size_small, polytheneTheme.vars.unit_icon_size_small),
      ".pe-control--regular": makeSize(vars, vars.label_height, polytheneTheme.vars.unit_icon_size),
      ".pe-control--medium": makeSize(vars, polytheneTheme.vars.unit_icon_size_medium, polytheneTheme.vars.unit_icon_size_medium),
      ".pe-control--large": makeSize(vars, polytheneTheme.vars.unit_icon_size_large, polytheneTheme.vars.unit_icon_size_large)
    })],
    animation_duration: (selector, vars) => [polytheneCoreCss.sel(selector, {
      " .pe-button.pe-control__button": [polytheneCoreCss.mixin.defaultTransition("opacity", vars.animation_duration)],
      " .pe-control__label": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
    })],
    button_size: (selector, vars) => [polytheneCoreCss.sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(polytheneCoreCss.selectorRTL(selector), vars, true)],
    icon_size: (selector, vars) => [polytheneCoreCss.sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(polytheneCoreCss.selectorRTL(selector), vars, true)],
    label_padding_after: (selector, vars) => [polytheneCoreCss.sel(selector, {}), label_padding_after(selector, vars, false), label_padding_after(polytheneCoreCss.selectorRTL(selector), vars, true)],
    label_padding_before: (selector, vars) => [polytheneCoreCss.sel(selector, {}), label_padding_before(selector, vars, false), label_padding_before(polytheneCoreCss.selectorRTL(selector), vars, false)]
  };
  var layout = polytheneCoreCss.createLayout({
    varFns
  });

  var vars = {
    general_styles: true,
    animation_duration: polytheneTheme.vars.animation_duration,
    button_size: 6 * polytheneTheme.vars.grid_unit_component,
    icon_size: 3 * polytheneTheme.vars.grid_unit_component,
    label_font_size: 2 * polytheneTheme.vars.grid_unit_component,
    // 16
    label_height: 3 * polytheneTheme.vars.grid_unit_component,
    // 24
    label_padding_after: 0,
    label_padding_before: polytheneTheme.vars.grid_unit * 4,
    // 16
    color_light_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_off: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,
    // icon colors may be set in theme; set to "inherit" by default
    // color_light_on_icon
    // color_light_off_icon
    // label on/off colors may be set in theme; set to color_light_label by default
    // color_light_on_label
    // color_light_off_label
    color_light_focus_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground),
    color_light_focus_off_opacity: .07,
    color_dark_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    color_dark_off: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_label: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,
    // icon color may be set in theme; set to "inherit" by default
    // color_dark_on_icon
    // color_dark_off_icon
    // label on/off colors may be set in theme; set to color_dark_label by default
    // color_dark_on_label
    // color_dark_off_label
    color_dark_focus_on: polytheneCoreCss.rgba(polytheneTheme.vars.color_primary),
    // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground),
    color_dark_focus_off_opacity: .09
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
//# sourceMappingURL=polythene-css-selection-control.js.map
