const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, {
      position: "relative",

      " .pe-md-progress-spinner__animation": {
        position: "absolute",
        width: "100%",
        height: "100%"
      },

      " .pe-md-progress-spinner__circle": {
        position: "absolute",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "50%"
      },

      " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
        transform: "rotate(0)",
        clip: "rect(0, 0, 0, 0)"
      },
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars.animation_duration,
      },
    })
  ],
  border_width_small: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--small": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars.border_width_small + "px"
        }
      }
    })
  ],
  border_width_regular: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--regular": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars.border_width_regular + "px"
        }
      }
    })
  ],
  border_width_medium: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--medium": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars.border_width_medium + "px"
        }
      }
    })
  ],
  border_width_large: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--large": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars.border_width_large + "px"
        }
      }
    })
  ],
  border_width_fab: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--fab": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars.border_width_fab + "px"
        }
      }
    })
  ],
};

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
