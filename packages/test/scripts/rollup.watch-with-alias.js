/* globals __dirname */

/*
Watch with custom theme
*/
import watchConfig from "../../../scripts/rollup.watch.js";
import pathmodify from "rollup-plugin-pathmodify";

watchConfig.plugins.unshift(
  pathmodify({
    aliases: [
      {
        id: "polythene-theme",
        resolveTo: __dirname + "/../tests/theme/theme.js"
      }
    ]
  })
);

export default watchConfig;

