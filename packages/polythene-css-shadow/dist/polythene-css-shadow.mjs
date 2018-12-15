import { vars } from 'polythene-theme';
import { mixin, sel, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-shadow",
  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-"
};

const _createShadowForSelector = (which, depth) => (selector, vars$$1) => sel(selector, {
  [` .pe-shadow__${which}.pe-shadow--depth-${depth}`]: {
    boxShadow: vars$$1[`shadow_${which}_depth_${depth}`]
  }
});

const _createShadow = (selector, vars$$1, depth, which) => sel(selector, {
  [` .pe-shadow__${which}`]: {
    boxShadow: vars$$1[`shadow_${which}_depth_${depth}`]
  }
});

const shadow = (selector, vars$$1, depth) => [_createShadow(selector, vars$$1, depth, "top"), _createShadow(selector, vars$$1, depth, "bottom")];

const shadow_depth = (selector, vars$$1) => vars$$1.shadow_depth !== undefined ? shadow(selector, vars$$1, vars$$1.shadow_depth) : null;

const sharedVarFns = {
  shadow_depth
};
const varFns = Object.assign({}, {
  general_styles: (selector, vars$$1) => [sel(selector, [mixin.fit(), shadow(selector, vars$$1, 1), {
    borderRadius: "inherit",
    pointerEvents: "none",
    " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
      borderRadius: "inherit"
    }]
  }])],
  transition: (selector, vars$$1) => [sel(selector, {
    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: vars$$1.transition
      }
    }
  })],
  shadow_depth
}, [0, 1, 2, 3, 4, 5].reduce((acc, depth) => (acc[`shadow_top_depth_${depth}`] = _createShadowForSelector("top", depth), acc[`shadow_bottom_depth_${depth}`] = _createShadowForSelector("bottom", depth), acc), {}));
var layout = createLayout({
  varFns
});

const sharedVars = {
  shadow_top_depth_0: "none",
  shadow_bottom_depth_0: "none",
  shadow_top_depth_1: "none",
  shadow_bottom_depth_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
  shadow_top_depth_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_depth_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_depth_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_depth_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_depth_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)",
  // theme vars
  shadow_depth: undefined
};
var vars$1 = Object.assign({}, {
  general_styles: true,
  transition: `box-shadow ${vars.animation_duration} ease-out`
}, sharedVars);

const fns = [layout];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, getStyle, layout, vars$1 as vars, sharedVars, sharedVarFns };
