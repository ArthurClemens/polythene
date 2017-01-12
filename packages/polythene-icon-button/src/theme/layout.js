
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

    " .pe-button--icon__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    "&.pe-button--compact": {
      " .pe-button--icon__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  }
}];
