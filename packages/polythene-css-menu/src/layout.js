import { vars as themeVars } from "polythene-theme";

const alignSide = isRTL => () => ({
  textAlign: isRTL ? "right" : "left"
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const unifySize = (vars, size) =>
  size < vars.min_size ? vars.min_size : size;

const widthClass = size => {
  const sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

const widthStyle = (vars, size) => {
  const s = unifySize(vars, size);
  return {
    ["&." + widthClass(s)]: {
      width: vars.size_factor * s + "px",
      // We can't set maxWidth because we don't know the size of the container
    }
  };
};

const sizes_min_size_size_factor = (selector, vars) =>
  sel(selector, [
    vars.sizes.map(size => widthStyle(vars, size)),
    {
      minWidth: themeVars.grid_unit_menu * vars.min_size + "px",
    }
  ]);

const sel = (selector, o) => ({
  [selector]: o
});

const selectorRTL = selector => 
  `*[dir=rtl] ${selector}, .pe-rtl ${selector}`;

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      {
        transitionProperty: "all",
        zIndex: themeVars.z_menu,
        opacity: 0,
        position: "absolute",
        
        ".pe-menu--width-auto": {
          width: "auto"
        },

        ".pe-menu--permanent": {
          position: "relative",
          opacity: 1,
          zIndex: 0
        },

        " .pe-menu__content": {
          width: "100%",
        },

        ".pe-menu--full-height": {
          height: "100%",

          " .pe-menu__content": {
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
  animation_show_css: (selector, vars) => [
    sel(selector, {
      ".pe-menu--visible": vars.animation_show_css
    })
  ],
  animation_hide_css: (selector, vars) => [
    sel(selector, [
      vars.animation_hide_css,
    ])
  ],
  sizes: (selector, vars) => [
    sizes_min_size_size_factor(selector, vars)
  ],
  min_size: (selector, vars) => [
    sizes_min_size_size_factor(selector, vars)
  ],
  size_factor: (selector, vars) => [
    sizes_min_size_size_factor(selector, vars)
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      ".pe-menu--floating": {
        " .pe-menu__content": {
          borderRadius: vars.border_radius + "px"
        }
      },
    })
  ],
};

export default (selector, vars, customVars) => {
  const allVars = {...vars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
