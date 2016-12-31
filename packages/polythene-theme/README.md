# Theme


```javascript
import { vars as defaultVars } from "polythene-config";
export const appConfig = Object.assign({}, 
  defaultVars,
  {
    //...
  }
);

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
```

## Rollup: pathmodify

Rollup Build script:

/*
UMD with custom config
*/
import umdConfig from "../../../scripts/rollup.umd.js";
import pathmodify from "rollup-plugin-pathmodify";

umdConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-config”,
        // assuming this script in /scripts and app config in root:
        resolveTo: __dirname + "/../app-config.js"
      }
    ]
  })
);

export default umdConfig;
