import { sel } from "polythene-core-css";

const sizeDirective = size => (selector, vars) =>
  sel(selector, {
    [`.pe-icon--${size}`]: {
      width:  vars[`size_${size}`] + "px",
      height: vars[`size_${size}`] + "px",
    }
  });

const varFns = Object.assign({},
  {
    general_styles: selector => [
      sel(selector, {
        display: "inline-block",
        verticalAlign: "middle",
        backgroundRepeat: "no-repeat",
        position: "relative",
        fontSize: 0,
        lineHeight: 0,

        ".pe-icon--avatar": {
          borderRadius: "50%",
        },
        
        ".pe-icon--avatar img": {
          border: "none",
          borderRadius: "50%",
          width: "inherit",
          height: "inherit"
        },

        " img": {
          height: "inherit"
        },

        " .pe-svg, .pe-svg > div": { /* React creates an additional div when wrapping an SVG */
          width: "inherit",
          height: "inherit"
        },
      })
    ],
  },
  ["small", "regular", "medium", "large"].reduce((acc, size) => (
    acc[`size_${size}`] = sizeDirective(size),
    acc
  ), {})
);

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
