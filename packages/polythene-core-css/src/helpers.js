
export const sel = (selector, o) => ({
  [selector]: o
});

export const selectorRTL = selector => 
  `*[dir=rtl] ${selector}, .pe-rtl ${selector}`;

export const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export const hex = value => {
  const bigint = parseInt(value.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return r + "," + g + "," + b;
};

export const createLayout = ({ varFns, superLayout }) => (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  const baseLayout = customVars !== undefined && superLayout !== undefined
    ? superLayout(selector, componentVars, customVars)
    : [];
  return baseLayout
    .concat(Object.keys(currentVars)
      .map(v => (
        varFns[v] !== undefined 
          ? varFns[v](selector, allVars)
          : null
      ))
      .filter(s => s)
    );
};

const createScopedSelector = ({ scopes, selector, isNoTouch=false }) =>
  isNoTouch
    ? []
      .concat(scopes.map(s => s + selector + ":hover").join(","))
      .concat(scopes.map(s => s + selector + ":active").join(","))
    : scopes.map(s => s + selector).join(",");

const createColorStyle = ({ scopedSelector, componentVars, customVars, varFns, superColor }) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  const baseColor = customVars !== undefined && superColor !== undefined
    ? superColor(scopedSelector, componentVars, customVars)
    : [];
  return baseColor
    .concat(Object.keys(currentVars)
      .map(v => (
        varFns[v] !== undefined 
          ? varFns[v](scopedSelector, allVars)
          : null
      ))
      .filter(s => s)
    );
};

const colorScopes = [
  {
    // has/inside dark tone
    scopes: [".pe-dark-tone", ".pe-dark-tone "],
    varFnName: "darkTintFns"
  },
  {
    // normal, has/inside light tone
    scopes: ["", ".pe-light-tone", ".pe-light-tone "],
    varFnName: "lightTintFns"
  },
  {
    // has/inside dark tone
    scopes: ["html.pe-no-touch .pe-dark-tone "],
    varFnName: "darkTintHoverFns",
    isNoTouch: true
  },
  {
    // normal, has/inside light tone
    scopes: ["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "],
    varFnName: "lightTintHoverFns",
    isNoTouch: true
  },
];

export const createColor = ({ varFns, superColor }) => (selector, componentVars, customVars) => 
  colorScopes.map(({ scopes, varFnName, isNoTouch }) => 
    varFns[varFnName] && createColorStyle({
      scopedSelector: createScopedSelector({
        scopes,
        selector,
        isNoTouch
      }),
      componentVars,
      customVars,
      varFns: varFns[varFnName],
      superColor
    })
  );
