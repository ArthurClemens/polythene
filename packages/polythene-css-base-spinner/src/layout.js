// @ts-check

import { sel, createLayout } from "polythene-core-css";

const sizes = size => ({
  width: size + "px",
  height: size + "px"
});

const raisedSize = size => {
  const padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues
  const paddedSize = size + padding * 2;
  return {
    width:   paddedSize + "px",
    height:  paddedSize + "px",
    padding: padding    + "px"
  };
};

const varFns = {
  general_styles: selector => [
    sel(selector, {
      transitionProperty: "all",

      ".pe-spinner--raised": {
        position: "relative",
        borderRadius: "50%",
      }
    })
  ],
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--visible, &.pe-spinner--permanent": [
        vars.animation_show_css,
      ],
    })
  ],
  animation_hide_css: (selector, vars) => ({
    [selector]: vars.animation_hide_css
  }),
  animation_delay: (selector, vars) => [
    sel(selector, {
      transitionDelay: vars.animation_delay,
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      transitionDuration: vars.animation_duration,
    })
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      transitionTimingFunction: vars.animation_timing_function,
    })
  ],
  size_small: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--small": sizes(vars.size_small),

      ".pe-spinner--raised": {
        ".pe-spinner--small": raisedSize(vars.size_small),
      }
    })
  ],
  size_regular: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--regular": sizes(vars.size_regular),

      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars.size_regular),
      }
    })
  ],
  size_medium: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--medium": sizes(vars.size_medium),

      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars.size_medium),
      }
    })
  ],
  size_large: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--large": sizes(vars.size_large),

      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars.size_large),
      }
    })
  ],
  size_fab: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--fab": sizes(vars.size_fab),

      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars.size_fab)
      }
    })
  ],
};

export default createLayout({ varFns });
