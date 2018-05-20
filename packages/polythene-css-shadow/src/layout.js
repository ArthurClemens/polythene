import { mixin, sel } from "polythene-core-css";

const shadowDirective = (which, num) => (selector, vars) =>
  sel(selector, {
    [` .pe-shadow__${which}.pe-shadow--z-${num}`]: {
      boxShadow: vars[`shadow_${which}_z_${num}`]
    }
  });

const varFns = Object.assign({},
  {
    general_styles: selector => [
      sel(selector, [
        mixin.fit(), {
          borderRadius: "inherit",
          pointerEvents: "none",

          " .pe-shadow__bottom, .pe-shadow__top": [
            mixin.fit(),
            {
              borderRadius: "inherit"
            }
          ],
        },
      ])
    ],
    transition: (selector, vars) => [
      sel(selector, {
        ".pe-shadow--animated": {
          " .pe-shadow__bottom, .pe-shadow__top": {
            transition: vars.transition
          }
        }
      })
    ],
  },
  [1, 2, 3, 4, 5].reduce((acc, num) => (
    acc[`shadow_top_z_${num}`] = shadowDirective("top", num),
    acc[`shadow_bottom_z_${num}`] = shadowDirective("bottom", num),
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
