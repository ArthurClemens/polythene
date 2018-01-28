import { vars } from "polythene-theme";

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
      componentVars.sizes.map((size) =>
        widthStyle(componentVars, size)
      ),
      {
        transitionTimingFunction: "ease-out",
        transitionProperty: "all",
        zIndex: vars.z_menu,
        opacity: 0,
        position: "absolute",
        minWidth: vars.grid_unit_menu * componentVars.min_size + "px",

        ".pe-menu--width-auto": {
          width: "auto"
        },

        ".pe-menu--permanent": {
          position: "relative",
          opacity: 1,
          zIndex: 0
        },

        ".pe-menu--floating": {
          " .pe-menu__content": {
            borderRadius: componentVars.border_radius + "px"
          }
        },

        " .pe-menu__content": {
          width: "100%"
        },
      }
    ],
  },
  {
    ".pe-menu__backdrop": {
      transitionTimingFunction: "ease-out",
      transitionProperty: "opacity",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%", /* performs better (without glitching) than right: 0, bottom: 0 */
      height: "100%",
      opacity: 0,
    },
  }
];
