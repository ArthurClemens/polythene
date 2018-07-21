import { mixin, sel, createLayout } from "polythene-core-css";

const _createShadowForSelector = (which, depth) => (selector, vars) =>
  sel(selector, {
    [` .pe-shadow__${which}.pe-shadow--depth-${depth}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

const _createShadow = (selector, vars, depth, which) =>
  sel(selector, {
    [` .pe-shadow__${which}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

const shadow = (selector, vars, depth) => [
  _createShadow(selector, vars, depth, "top"),
  _createShadow(selector, vars, depth, "bottom")
];

const shadow_depth = (selector, vars) =>
  vars.shadow_depth !== undefined
    ? shadow(selector, vars, vars.shadow_depth)
    : null;

export const sharedVarFns = {
  shadow_depth
};

const varFns = Object.assign({},
  {
    general_styles: (selector, vars) => [
      sel(selector, [
        mixin.fit(),
        shadow(selector, vars, 1),
        {
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
    shadow_depth
  },
  [0, 1, 2, 3, 4, 5].reduce((acc, depth) => (
    acc[`shadow_top_depth_${depth}`] = _createShadowForSelector("top", depth),
    acc[`shadow_bottom_depth_${depth}`] = _createShadowForSelector("bottom", depth),
    acc
  ), {})
);

export default createLayout({ varFns });
