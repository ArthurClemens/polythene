/* globals __dirname */

/*
ES2015 with custom theme
*/
import esConfig from "../../../scripts/rollup.es.js";
import pathmodify from "rollup-plugin-pathmodify";

esConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-theme",
        resolveTo: __dirname + "/../tests/theme/theme.js"
      }
    ]
  })
);

export default esConfig;

