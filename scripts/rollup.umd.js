/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base";
import uglify from "rollup-plugin-uglify";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!parseInt(env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html
const name = env.MODULE_NAME || "polythene";

const baseConfig = createConfig({ includeDepencies, lint: true });
const targetConfig = Object.assign({}, baseConfig, {
  output: {
    file: env.DEST || pkg.main,
    format: "umd",
  },
  sourcemap: true,
  name
});

targetConfig.plugins.push(uglify());

export default targetConfig;

