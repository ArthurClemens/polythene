import { vars as themeVars } from "polythene-theme";
import { sel, selectorRTL, createLayout } from "polythene-core-css";

const alignSide = isRTL => () => ({
  textAlign: isRTL ? "right" : "left"
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const unifyWidth = (vars, width) =>
  width < vars.min_width ? vars.min_width : width;

const widthClass = width => {
  const widthStr = width.toString().replace(".", "-");
  return "pe-menu--width-" + widthStr;
};

const widthStyle = (vars, width) => {
  const s = unifyWidth(vars, width);
  return {
    ["." + widthClass(s)]: {
      " .pe-menu__panel": {
        width: vars.width_factor * s + "px",
        // We can't set maxWidth because we don't know the width of the container
      }
    }
  };
};

const widths_min_width_width_factor = (selector, vars) =>
  sel(selector, [
    vars.widths.map(width => widthStyle(vars, width)),
    {
      " .pe-menu__panel": {
        minWidth: themeVars.grid_unit_menu * vars.min_width + "px",
      }
    }
  ]);

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      {
        position: "static",

        ".pe-menu--width-auto": {
          width: "auto"
        },

        ".pe-menu--permanent": {
          " .pe-menu__panel": {
            opacity: 1,
            position: "relative",
          }
        },

        ".pe-menu--floating": {
          " .pe-menu__panel": {
            zIndex: themeVars.z_menu,
            transitionProperty: "all",
          }
        },

        " .pe-menu__panel": {
          transitionProperty: "all",
          opacity: 0,
          position: "absolute",
        },

        " .pe-menu__backdrop": {
          transitionProperty: "all",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0,
          zIndex: themeVars.z_menu,
        },

        ".pe-menu--visible .pe-menu__backdrop": {
          opacity: 1
        },

        " .pe-menu__content": {
          overflow: "auto",
          width: "100%",
          height: "100%",
        },

        ".pe-menu--full-height": {
          height: "100%",

          " .pe-menu__panel": {
            height: "100%"
          }
        }
      }
    ]),
    {
      [selectorRTL(selector)]: alignRight(vars)
    }
  ],
  animation_delay: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDelay: vars.animation_delay,
      }
    })
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionDuration: vars.animation_duration,
      }
    })
  ],
  animation_timing_function: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel, .pe-menu__backdrop": {
        transitionTimingFunction: vars.animation_timing_function,
      }
    })
  ],
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-menu--visible": {
        " .pe-menu__panel": vars.animation_show_css
      }
    })
  ],
  animation_hide_css: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel": vars.animation_hide_css,
    })
  ],
  animation_show_origin_effect_css: (selector, vars) => [
    sel(selector, {
      ".pe-menu--origin.pe-menu--visible": {
        " .pe-menu__panel": vars.animation_show_origin_effect_css
      }
    })
  ],
  animation_hide_origin_effect_css: (selector, vars) => [
    sel(selector, {
      ".pe-menu--origin:not(.pe-menu--visible)": {
        " .pe-menu__panel": vars.animation_hide_origin_effect_css
      }
    })
  ],
  widths: (selector, vars) => [
    widths_min_width_width_factor(selector, vars)
  ],
  min_width: (selector, vars) => [
    widths_min_width_width_factor(selector, vars)
  ],
  width_factor: (selector, vars) => [
    widths_min_width_width_factor(selector, vars)
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel": {
        borderRadius: vars.border_radius + "px"
      }
    })
  ],
};

export default createLayout({ varFns });
