import { sel } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-icon": {
          color: "currentcolor"
        },
      },
      ".pe-control--on": {
        " .pe-switch-control__knob": {
          backgroundColor: "currentcolor"
        },
        " .pe-icon": {
          color: "currentcolor"
        },
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_label"]: (selector, vars) => [
    sel(selector, {
      " .pe-control__label": {
        color: vars["color_" + tint + "_label"]
      },
    })
  ],
  ["color_" + tint + "_track_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_off"]
        },
      }
    })
  ],
  ["color_" + tint + "_track_off_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_off_opacity"],
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-switch-control__thumb": {
          color: vars["color_" + tint + "_thumb_off"]
        },
      }
    })
  ],
  ["color_" + tint + "_focus_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_off"]
          }
        },
      }
    })
  ],
  ["color_" + tint + "_focus_off_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_off_opacity"],
          }
        },
      }
    })
  ],
  ["color_" + tint + "_icon_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon_off"]
        },
      }
    })
  ],
  ["color_" + tint + "_off_label"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_off_label"]
        },
      }
    })
  ],

  ["color_" + tint + "_track_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_on"]
        },
      }
    })
  ],
  ["color_" + tint + "_track_on_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_on_opacity"],
        },
      }
    })
  ],
  ["color_" + tint + "_thumb_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-switch-control__thumb": {
          color: vars["color_" + tint + "_thumb_on"]
        },
      }
    })
  ],
  ["color_" + tint + "_focus_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_on"]
          }
        },
      }
    })
  ],
  ["color_" + tint + "_focus_on_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_on_opacity"],
          }
        },
      }
    })
  ],
  ["color_" + tint + "_icon_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-icon": {
          color: vars["color_" + tint + "_icon_on"]
        },
      }
    })
  ],
  ["color_" + tint + "_on_label"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_on_label"]
        },
      }
    })
  ],

  ["color_" + tint + "_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_disabled"]
        },
      },
    })
  ],
  ["color_" + tint + "_track_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          backgroundColor: vars["color_" + tint + "_track_disabled"]
        },
      },
    })
  ],
  ["color_" + tint + "_track_disabled_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__track": {
          opacity: vars["color_" + tint + "_track_disabled_opacity"],
        },
      },
    })
  ],
  ["color_" + tint + "_thumb_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
        " .pe-switch-control__thumb, .pe-button__content": {
          color: vars["color_" + tint + "_thumb_disabled"]
        },
      },
    })
  ],
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_wash_on"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--on": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_on"]
        }
      },
    })
  ],
  ["color_" + tint + "_wash_off"]: (selector, vars) => [
    sel(selector, {
      ".pe-control--off": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_off"]
        }
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");

const createStyle = (selector, componentVars, customVars, tint, hover) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => {
    const varFns = tint === "light"
      ? hover
        ? lightTintHoverFns
        : lightTintFns
      : hover
        ? darkTintHoverFns
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

export const noTouchStyle = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = []
    .concat(scopes.map(s => s + selector + ":hover").join(","))
    .concat(scopes.map(s => s + selector + ":active").join(","));
  return createStyle(selectors, componentVars, customVars, tint, true);
};

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
];
