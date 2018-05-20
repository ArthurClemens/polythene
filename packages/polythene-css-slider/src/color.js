import { sel } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-slider__control": {
        ":after": {
          borderColor: "transparent"
        }
      },
      " .pe-slider__pin": {
        backgroundColor: "currentcolor",

        ":before": {
          backgroundColor: "inherit"
        },
      },
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: "currentcolor",
        },
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          background: "currentcolor"
        },
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: "currentcolor",
        },
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control": {
          backgroundColor: "transparent"
        },
        " .pe-slider__thumb": {
          opacity: 0
        },
        ".pe-slider--ticks": {
          " .pe-slider__control:after": {
            borderColor: "transparent"
          }
        },
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon"]
        },
      }
    })
  ],
  ["color_" + tint + "_label"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__label": {
          color: vars["color_" + tint + "_label"]
        }
      },
    })
  ],
  ["color_" + tint + "_thumb_on"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_thumb_on"], // override by specifying "color"
    })
  ],
  ["color_" + tint + "_track_inactive"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__track-bar-value": {
        background: vars["color_" + tint + "_track_inactive"]
      },
      ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
        " .pe-slider__control:after": {
          borderColor: vars["color_" + tint + "_track_inactive"]
        },
      }
    })
  ],
  ["color_" + tint + "_tick"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__tick": {
        background: vars["color_" + tint + "_tick"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick": {
          backgroundColor: vars["color_" + tint + "_tick"]
        },
      },
    })
  ],
  ["color_" + tint + "_tick_value"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__tick--value": {
        background: vars["color_" + tint + "_tick_value"]
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--tick--value": {
          backgroundColor: vars["color_" + tint + "_tick_value"]
        },
      }
    })
  ],
  ["color_" + tint + "_disabled_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon": {
        color: vars["color_" + tint + "_disabled_icon"]
      },
    })
  ],
  ["color_" + tint + "_disabled_label"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__label": {
        color: vars["color_" + tint + "_disabled_label"]
      },
    })
  ],
  ["color_" + tint + "_track_active"]: (selector, vars) => [
    sel(selector, {
      ".pe-slider--active": {
        " .pe-slider__track-bar-value": {
          background: vars["color_" + tint + "_track_active"]
        },
      },
      ".pe-slider--min:not(.pe-slider--disabled)": {
        ".pe-slider--active .pe-slider__control:after": {
          borderColor: vars["color_" + tint + "_track_active"]
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_inactive"]: (selector, vars) => [
    sel(selector, {
      ".pe-slider--disabled": {
        " .pe-slider__control": {
          background: vars["color_" + tint + "_thumb_inactive"]
        }
      },
    })
  ],
  ["color_" + tint + "_thumb_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          backgroundColor: vars["color_" + tint + "_thumb_background"],
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_off_focus_opacity"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__control": {
          ":before": {
            opacity: vars["color_" + tint + "_thumb_off_focus_opacity"]
          }
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_off_focus"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
        .pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
          backgroundColor: vars["color_" + tint + "_thumb_off_focus"]
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_on_focus_opacity"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
          opacity: vars["color_" + tint + "_thumb_on_focus_opacity"]
        },
      }
    })
  ],
  ["color_" + tint + "_pin_label"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__pin:after": {
        color: vars["color_" + tint + "_pin_label"]
      }
    })
  ],
  ["color_" + tint + "_pin_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-slider__pin": {
        backgroundColor: vars["color_" + tint + "_pin_background"]
      },
    })
  ],
  ["color_" + tint + "_track_value"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-slider--disabled)": {
        " .pe-slider__track-value .pe-slider__track-bar-value": {
          backgroundColor: vars["color_" + tint + "_track_value"]
        },
      },
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const createStyle = (selector, componentVars, customVars, tint) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => {
    const varFns = tint === "light"
      ? lightTintFns
      : darkTintFns;
    return varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null;
  }).filter(s => s);
};

const style = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = scopes.map(s => s + selector).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
];
