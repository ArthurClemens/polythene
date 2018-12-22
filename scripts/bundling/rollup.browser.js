/* global process */
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs";
import resolve from "rollup-plugin-node-resolve";
import ignore from "rollup-plugin-ignore";

const env = process.env; // eslint-disable-line no-undef
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.MODULE_NAME || "polythene";

export default {
  input: env.ENTRY || "index.js",
  external: [
    "mitril",
    "mithril/stream"
  ],
  paths: {
    mithril: "node_modules/mithril/mithril"
  },
  output: {
    file: `${env.DEST || pkg.main}.js`,
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    // sourcemap: true,
    name
  },
  plugins: [
    ignore(["mithril"]),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    // terser()
  ]
};
