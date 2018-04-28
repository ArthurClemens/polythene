import { vars } from "polythene-theme";

const alignSide = isRTL => () => ({
  textAlign: isRTL ? "right" : "left"
});

const alignLeft = alignSide(false);

const alignRight = alignSide(true);

const unifySize = (componentVars, size) =>
  size < componentVars.min_size ? componentVars.min_size : size;

const widthClass = size => {
  const sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

const widthStyle = (componentVars, size) => {
  const s = unifySize(componentVars, size);
  return {
    ["&." + widthClass(s)]: {
      width: componentVars.size_factor * s + "px",
      // We can't set maxWidth because we don't know the size of the container
    }
  };
};

export default (selector, componentVars) => [
  {
    [selector]: [
      alignLeft(componentVars),
      componentVars.sizes.map(size => widthStyle(componentVars, size)),
      componentVars.animation_hide_css,
      {
        transitionDelay: componentVars.animation_delay,
        transitionDuration: componentVars.animation_duration,
        transitionTimingFunction: componentVars.animation_timing_function,
        transitionProperty: "all",
        zIndex: vars.z_menu,
        opacity: 0,
        position: "absolute",
        minWidth: vars.grid_unit_menu * componentVars.min_size + "px",

        "&.pe-menu--width-auto": {
          width: "auto"
        },

        "&.pe-menu--visible": [
          componentVars.animation_show_css
        ],

        "&.pe-menu--permanent": {
          position: "relative",
          opacity: 1,
          zIndex: 0
        },

        " .pe-menu__content": {
          width: "100%",
        },

        ".pe-menu--floating": {
          " .pe-menu__content": {
            borderRadius: componentVars.border_radius + "px"
          }
        },

        ".pe-menu--full-height": {
          height: "100%",

          " .pe-menu__content": {
            height: "100%"
          }
        }
      }
    ]
  },
  {
    // RTL
    [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
      alignRight(componentVars)
    ],
  }
];
