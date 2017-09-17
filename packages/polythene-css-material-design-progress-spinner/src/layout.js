
export default (selector, componentVars) => [{
  [selector]: {
    position: "relative",

    " .pe-md-progress-spinner__animation": {
      animationDuration: componentVars.animationDuration,
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

    "&": ["small", "regular", "medium", "large", "fab"].map(size => ({
      ["&.pe-spinner--" + size]: {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: componentVars["border_width_" + size] + "px"
        }
      }
    })),
  }
}];
