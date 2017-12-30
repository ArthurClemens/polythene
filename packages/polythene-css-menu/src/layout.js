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
      width: componentVars.size_factor * s + "px"
    }
  };
};

export default (selector, componentVars) => [{
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

      "&.pe-menu--width-auto": {
        width: "auto"
      },

      "&.pe-menu--visible": {
        opacity: 1
      },

      "&.pe-menu--permanent": {
        position: "relative",
        opacity: 1,
        zIndex: 0
      },

      " .pe-menu__content": {
        width: "100%",
        borderRadius: componentVars.border_radius + "px"
      }
    }
  ],
}];
