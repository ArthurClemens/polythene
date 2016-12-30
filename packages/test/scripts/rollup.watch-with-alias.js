/* globals __dirname */

/*
Watch with custom config
*/
import watchConfig from "../../../scripts/rollup.watch.js";
import pathmodify from "rollup-plugin-pathmodify";

watchConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-config",
        resolveTo: __dirname + "/../tests/config/config.js"
      }
    ]
  })
);

export default watchConfig;

