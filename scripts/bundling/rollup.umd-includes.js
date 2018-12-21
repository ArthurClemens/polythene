/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!parseInt(env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html
const name = env.MODULE_NAME || "polythene";
const createSourceMap = env.SOURCEMAP !== undefined
  ? !!parseInt(env.SOURCEMAP, 10)
  : true;

const baseConfig = createConfig({ includeDepencies });
const targetConfig = Object.assign({}, baseConfig, {
  output: Object.assign(
    {},
    baseConfig.output,
    {
      file: `${env.DEST || pkg.main}.js`,
      format: "iife",
      sourcemap: createSourceMap,
      name
    }
  )
});

targetConfig.plugins.push(replace({
  "process.env.NODE_ENV": JSON.stringify("production")
}));
targetConfig.plugins.push(terser());

export default targetConfig;