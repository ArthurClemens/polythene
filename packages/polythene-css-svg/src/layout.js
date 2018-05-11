
const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, {
      lineHeight: 1,

      " > div, svg": {
        width: "inherit",
        height: "inherit"
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
