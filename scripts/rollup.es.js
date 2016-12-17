import {pkg, config} from "./rollup.base.js";

const targetConfig = Object.assign({}, config, {
  dest: pkg["jsnext:main"],
  format: "es"
});

export default targetConfig;
