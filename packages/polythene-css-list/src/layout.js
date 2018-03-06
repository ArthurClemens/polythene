
const borderStyle = componentVars => ({
  borderStyle: "none none solid none",
  borderWidth: componentVars.border_width_bordered + "px"
});

export default (selector, componentVars) => [{
  [selector]: {
    
    ".pe-list--padding": {
      padding: componentVars.padding + "px 0",
    },
    ".pe-list--padding-top": {
      paddingTop: componentVars.padding + "px",
    },
    ".pe-list--padding-bottom": {
      paddingBottom: componentVars.padding + "px",
    },

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

    ".pe-list--border": {
      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-border": {
      borderTop: "none",

      " .pe-list-tile": {
        ":not(.pe-list-tile--header):not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(componentVars)
        }
      }
    }
  }
}];
