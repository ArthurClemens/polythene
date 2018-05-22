import { sel, createLayout } from "polythene-core-css";

const sizes = size => ({
  width: size + "px",
  height: size + "px"
});

const raisedSize = (size, vars) => {
  const { padding, paddedSize } = vars.raisedSize(size);
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
        ".pe-spinner--small": raisedSize(vars.size_small, vars),
      }
    })
  ],
  size_regular: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--regular": sizes(vars.size_regular),

      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars.size_regular, vars),
      }
    })
  ],
  size_medium: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--medium": sizes(vars.size_medium),

      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars.size_medium, vars),
      }
    })
  ],
  size_large: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--large": sizes(vars.size_large),

      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars.size_large, vars),
      }
    })
  ],
  size_fab: (selector, vars) => [
    sel(selector, {
      ".pe-spinner--fab": sizes(vars.size_fab),

      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars.size_fab, vars)
      }
    })
  ],
};

export default createLayout({ varFns });
