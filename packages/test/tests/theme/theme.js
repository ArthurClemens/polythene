import { defaultVariables } from "polythene-core";

const icon_unit_component = 20;

export const vars = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // new base color: orange 500
};

export const styles = {
  button: vars => {
    const primaryButtonVars = {
      ...vars,
      border_radius: 0,
      text_transform: "none",
      color_light_flat_normal_background: "#673ab7",
      color_light_flat_normal_text: "#fff"
    };
    return [
      {
        // default Polythene button (keep this)
        "": vars
      }, 
      {
        ".my-button--primary": primaryButtonVars
      }
    ];
  },
  icon: vars => {
    const customIconVars = {
      size_small: icon_unit_component,
      size_regular: 2 * icon_unit_component,
      size_medium: 3 * icon_unit_component,
      size_large: 4 * icon_unit_component
    };
    return [
      {
        // default Polythene icon (keep this)
        "": vars
      }, 
      {
        ".my-icon": customIconVars
      }
    ];
  }
};
