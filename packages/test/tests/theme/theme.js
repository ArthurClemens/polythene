import { defaultVariables } from "polythene-core";

export const vars = {
  ...defaultVariables
  // set new base color
  , color_primary: "255, 152, 0" // orange 500
};

export const styles = {
  button: (vars) => {
    const primaryButtonVars = Object.assign({}, vars, {
      border_radius: 0,
      text_transform: "none",
      color_light_flat_normal_background: "#673ab7",
      color_light_flat_normal_text: "#fff"
    });
    return [
      {
        // default Polythene button (keep this)
        "": vars
      }, 
      {
        ".my-button--primary": primaryButtonVars
      }
    ];
  }
};
