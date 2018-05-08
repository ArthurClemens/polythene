
export default selector => [{
  [selector]: [{
    display: "flex",
    
    " .pe-button": {
      minWidth: 0,

      ":not(:first-child)": {
        "&, .pe-button__content, .pe-button__wash, .pe-button__focus": {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      ":not(:last-child)": {
        "&, .pe-button__wash, .pe-button__focus": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }
      },
    },

    ".pe-split-button--separator": {
      " .pe-button": {
        ":not(:first-child)": {
          " .pe-button__content": {
            borderStyle: "none none none solid",
            borderWidth: "1px"
          }
        }
      }
    }
  }]
}];
