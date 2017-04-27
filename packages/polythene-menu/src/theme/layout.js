import { vars } from "polythene-theme";
import { mixin } from "polythene-css";

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
      "max-width": "100%"
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
      transitionProperty: "opacity",
      zIndex: vars.z_menu,
      opacity: 0,
      position: "absolute",
      width: "100%",
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

      ["@media (max-width: " + vars.unit_screen_size_large + "px)"]: {
        "max-width": componentVars.max_size_small_screen * vars.grid_unit_menu + "px"
      }
    }
  ],
  // In menu and in dialog:
  " .pe-menu__content": {
    " .pe-list-tile__title": [
      mixin.ellipsis("none")
    ]
  },
}];
