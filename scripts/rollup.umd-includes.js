/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!parseInt(env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html
const moduleName = env.MODULE_NAME || "polythene";

const baseConfig = createConfig({ includeDepencies, lint: false });
const targetConfig = Object.assign({}, baseConfig, {
  dest: env.DEST || pkg.main,
  format: "umd",
  sourceMap: (env.SOURCEMAP !== undefined)
    ? !!parseInt(env.SOURCEMAP, 10)
    : true,
  moduleName,
});

targetConfig.plugins.push(uglify());
targetConfig.plugins.push(replace({
  "process.env.NODE_ENV": JSON.stringify("production")
}));

export default targetConfig;