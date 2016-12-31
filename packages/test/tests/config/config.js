import { defaultVariables } from "polythene-core";

export const vars = {
  ...defaultVariables
  // more...
};

export const componentsConfig = {
  button: (config) => {
    const primaryButtonCfg = Object.assign({}, config, {
      border_radius: 0,
      text_transform: "none",
      color_light_flat_normal_background: "#673ab7",
      color_light_flat_normal_text: "#fff"
    });
    return [
      {
        // default Polythene button (keep this)
        "": config
      }, 
      {
        ".my-button--primary": primaryButtonCfg
      }
    ];
  }
};
