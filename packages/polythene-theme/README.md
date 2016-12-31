# Theme

Create a theme by writing a new theme module that exports variables `vars` and `componentStyles`.


```javascript
import { defaultVariables } from "polythene-core";

export const vars = {
  ...defaultVariables
  // set new base color
  , color_primary: "255, 152, 0" // orange 500
};

export const componentStyles = {
  button: (vars) => {
    const themeVars = Object.assign({}, vars, {
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
        ".my-button--primary": themeVars
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
