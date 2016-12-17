import {pkg, config} from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";

const targetConfig = Object.assign({}, config, {
  dest: pkg.main,
  format: "umd",
  sourceMap: true
});

targetConfig.plugins.push(uglify());

export default targetConfig;
