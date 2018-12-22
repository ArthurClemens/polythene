/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base";
import { terser } from "rollup-plugin-terser";

const env = process.env; // eslint-disable-line no-undef
const name = env.MODULE_NAME || "polythene";
  
const baseConfig = createConfig();
const targetConfig = Object.assign({}, baseConfig, {
  output: Object.assign(
    {},
    baseConfig.output,
    {
      name,
      format: "umd",
      file: `${env.DEST || pkg.main}.js`,
      sourcemap: true,
    }
  )
});
targetConfig.plugins.push(terser());

export default targetConfig;

