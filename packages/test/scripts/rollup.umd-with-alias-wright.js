/* globals process */

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
        resolveTo: process.cwd() + "/tests/config/config.js"
      }
    ]
  })
);

delete umdConfig.dest;
delete umdConfig.sourceMap;

export default umdConfig;

