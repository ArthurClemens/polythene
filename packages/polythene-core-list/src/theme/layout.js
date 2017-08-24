
const borderStyle = componentVars => ({
  borderStyle: "none none solid none",
  borderWidth: componentVars.border_width_bordered + "px"
});

export default (selector, componentVars) => [{
  [selector]: {
    padding: componentVars.padding + "px 0",

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0",
    },

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

    ".pe-list--borders": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(componentVars)
        }
      }
    }
  }
}];
