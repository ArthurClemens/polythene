
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

const createStyle = ({ varFns, customVarFns, superStyle, varMixin, selector, scopedSelector, componentVars, customVars }) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  const {
    general_styles, // eslint-disable-line no-unused-vars
    ...otherVars
  } = (componentVars || {});
  const baseLayout = superStyle !== undefined
    ? customVars !== undefined
      ? superStyle(selector, componentVars, customVars)
      : superStyle(selector, otherVars)
    : [];
  const fns = Object.assign(
    {},
    !!customVars && customVarFns,
    varFns
  );
  return baseLayout
    .concat(Object.keys(varMixin(currentVars))
      .map(v => (
        fns && fns[v] !== undefined 
          ? fns[v](scopedSelector, allVars)
          : null
      ))
      .filter(s => s)
    );
};

export const createLayout = ({ varFns, customVarFns, superLayout, varMixin = o => o }) => (selector, componentVars, customVars) =>
  createStyle({ varFns, customVarFns, superStyle: superLayout, varMixin, selector, scopedSelector: selector, componentVars, customVars });

export const createColorStyle = ({ selector, scopedSelector, componentVars, customVars, varFns, superColor, varMixin }) =>
  createStyle({ varFns, superStyle: superColor, varMixin, selector, scopedSelector, componentVars, customVars });

const appendPseudoClass = ({ scopes, selector, isNoTouch=false }) =>
  isNoTouch
    ? scopes.map(s => s + selector + ":hover").join(",")
    : scopes.map(s => s + selector).join(",");

const createScopedSelector = ({ scopes, selector, isNoTouch=false }) =>
  selector.split(/\s*,\s*/).map(s => (
    appendPseudoClass({ scopes, selector: s, isNoTouch })
  ));

const colorScopes = [
  {
    // has/inside dark tone
    scopes: [".pe-dark-tone", ".pe-dark-tone "],
    varFnName: "darkTintFns",
    isNoTouch: false
  },
  {
    // normal, has/inside light tone
    scopes: ["", ".pe-light-tone", ".pe-light-tone "],
    varFnName: "lightTintFns",
    isNoTouch: false
  },
  {
    // has/inside dark tone
    scopes: [".pe-no-touch .pe-dark-tone "],
    varFnName: "darkTintHoverFns",
    isNoTouch: true
  },
  {
    // normal, has/inside light tone
    scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
    varFnName: "lightTintHoverFns",
    isNoTouch: true
  },
];

export const createColor = ({ varFns={}, superColor, varMixin = o => o }) => (selector, componentVars, customVars) =>
  colorScopes.map(({ scopes, varFnName, isNoTouch }) => 
    createColorStyle({
      selector,
      scopedSelector: createScopedSelector({
        scopes,
        selector,
        isNoTouch
      }),
      componentVars,
      customVars,
      varFns: varFns[varFnName],
      superColor,
      varMixin
    })
  );
