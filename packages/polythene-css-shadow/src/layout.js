// @ts-check

import { mixin, sel, createLayout } from "polythene-core-css";

const _createShadowForSelector = (which, depth) => (selector, vars) =>
  [
    _createRegularShadowForSelector(which, depth, selector, vars),
    _createActiveShadowForSelector(which, depth, selector, vars)
  ];

const _createRegularShadowForSelector = (which, depth, selector, vars) =>
  sel(selector, {
    [`.pe-shadow--depth-${depth} .pe-shadow__${which}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

const _createActiveShadowForSelector = (which, depth, selector, vars) => {
  if (depth === 5) {
    return [];
  }
  const hoverDepth = depth + 1;
  const hoverSelector = `.pe-with-active-shadow.pe-shadow--depth-${hoverDepth}`;
  return [
    sel(`${hoverSelector}:focus ${selector}, ${hoverSelector}:active ${selector}`, {
      [` .pe-shadow__${which}`]: {
        boxShadow: vars[`shadow_${which}_depth_${hoverDepth}`], 
      }
    })
  ];
};

const _createActiveShadowTransition = (selector, vars) =>
  sel(`.pe-with-active-shadow ${selector}`, {
    " .pe-shadow__bottom, .pe-shadow__top": {
      transition: vars.transition
    }
  });

/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth 
 * @param {"top"|"bottom"} which 
 */
const _createShadow = (selector, vars, depth, which) =>
  sel(selector, {
    [` .pe-shadow__${which}`]: {
      boxShadow: vars[`shadow_${which}_depth_${depth}`]
    }
  });

/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth
 * @returns {object}
 */
const shadow = (selector, vars, depth) => [
  _createShadow(selector, vars, depth, "top"),
  _createShadow(selector, vars, depth, "bottom")
];

/**
 * @param {string} selector 
 * @param {object} vars 
 * @returns {object}
 */
const shadow_depth = (selector, vars) =>
  vars.shadow_depth !== undefined
    ? shadow(selector, vars, vars.shadow_depth)
    : null;

const transition = (selector, vars) => [
  sel(selector, {
    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: vars.transition
      }
    }
  }),
  _createActiveShadowTransition(selector, vars)
];

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
    transition,
    shadow_depth
  },
  [0, 1, 2, 3, 4, 5].reduce((acc, depth) => (
    acc[`shadow_top_depth_${depth}`] = _createShadowForSelector("top", depth),
    acc[`shadow_bottom_depth_${depth}`] = _createShadowForSelector("bottom", depth),
    acc
  ), {}),
);

export default createLayout({ varFns });
