
export default (selector, componentVars) => [{
  [selector]: {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    verticalAlign: "middle",
    cursor: "pointer",
    position: "relative",
    fontSize: "1rem",
    borderRadius: "50%",
    border: "none",

    " .pe-icon-button__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    ".pe-icon-button--compact": {
      " .pe-icon-button__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  }
}];
