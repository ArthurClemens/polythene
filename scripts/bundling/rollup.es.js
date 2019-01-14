/* global process */
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs";
import resolve from "rollup-plugin-node-resolve";

const env = process.env; // eslint-disable-line no-undef
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.MODULE_NAME || "polythene";

export default {
  input: env.ENTRY || "src/index.js",
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: {
    name,
    format: "es",
    file: `${env.DEST || pkg.main}.mjs`,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      configFile: "../../babel.config.js"
    }),
  ]
};
