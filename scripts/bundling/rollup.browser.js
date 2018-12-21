/* global process */
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs";
import pathmodify from "rollup-plugin-pathmodify";
import resolve from "rollup-plugin-node-resolve";

const env = process.env; // eslint-disable-line no-undef
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.MODULE_NAME || "polythene";

export default {
  input: env.ENTRY || "index.js",
  external: [
    "mitril",
    "mithril/stream",
    // ...Object.keys(pkg.devDependencies || {}),
    // ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: {
    file: `${env.DEST || pkg.main}.js`,
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    // sourcemap: true,
    name
  },
  plugins: [
    resolve(),
    pathmodify({
      aliases: [
        {
          id: "mithril",
          resolveTo: "node_modules/mithril/mithril"
        },
        {
          id: "mithril/stream",
          resolveTo: "node_modules/mithril/stream/stream"
        },
      ]
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
