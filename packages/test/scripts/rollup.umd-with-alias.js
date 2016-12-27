/* globals __dirname */

/*
UMD with custom config
*/
import umdConfig from "../../../scripts/rollup.umd.js";
import pathmodify from "rollup-plugin-pathmodify";

umdConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-config",
        resolveTo: __dirname + "/../tests/config/config.js"
      }
    ]
  })
);

export default umdConfig;

