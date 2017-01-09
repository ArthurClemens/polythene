import { defaultVariables } from "polythene-core";
const rgba = defaultVariables.rgba;

const icon_unit_component = 20;

export const vars = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // new base color: orange 500
};

export const styles = {
  button: vars => {
    const primaryButtonVars = {
      ...vars,
      text_transform:         "none",
      color_light_text:       "#673ab7",
      color_dark_text:        "#fff",
      color_light_background: rgba("103, 58, 183", .2),
      color_dark_background:  rgba("103, 58, 183", .6)
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
      ...vars,
      size_small:   1 * icon_unit_component,
      size_regular: 2 * icon_unit_component,
      size_medium:  3 * icon_unit_component,
      size_large:   4 * icon_unit_component
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
