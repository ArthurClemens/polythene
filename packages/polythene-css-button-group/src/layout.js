
const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, {
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

      ".pe-button-group--separator": {
        " .pe-button": {
          ":not(:first-child)": {
            " .pe-button__content": {
              borderStyle: "none none none solid",
            }
          }
        }
      }
    })
  ],
  separator_width: (selector, vars) => [
    sel(selector, {
      ".pe-button-group--separator": {
        " .pe-button": {
          ":not(:first-child)": {
            " .pe-button__content": {
              borderWidth: vars.separator_width + "px"
            }
          }
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
