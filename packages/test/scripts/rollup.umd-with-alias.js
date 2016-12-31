/* globals __dirname */

/*
UMD with custom theme
*/
import umdConfig from "../../../scripts/rollup.umd.js";
import pathmodify from "rollup-plugin-pathmodify";

umdConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-theme",
        resolveTo: __dirname + "/../tests/theme/theme.js"
      }
    ]
  })
);

export default umdConfig;

