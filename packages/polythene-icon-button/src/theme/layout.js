
export default (selector, componentVars) => [{
  [selector]: {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    "vertical-align": "middle",
    cursor: "pointer",
    position: "relative",
    "font-size": "1rem",
    "border-radius": "50%",
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
