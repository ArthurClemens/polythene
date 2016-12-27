/* globals __dirname */

/*
ES2015 with custom config
*/
import esConfig from "../../../scripts/rollup.es.js";
import pathmodify from "rollup-plugin-pathmodify";

esConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-config",
        resolveTo: __dirname + "/../tests/config/config.js"
      }
    ]
  })
);

export default esConfig;

