/* global process */
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
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: {
    file: `${env.DEST || pkg.main}.mjs`,
    format: "es",
    name
  },
  plugins: [
    resolve(),
    pathmodify({
      aliases: [
        {
          id: "mithril/stream",
          resolveTo: "node_modules/mithril/stream/stream.js"
        },
        {
          id: "mithril",
          resolveTo: "node_modules/mithril/mithril.js"
        },
      ]
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
  ]
};


// /* globals process */
// /*
// Build to a module that has ES2015 module syntax but otherwise only syntax features that node supports
// https://github.com/rollup/rollup/wiki/jsnext:main
// */
// import { pkg, createConfig } from "./rollup.base";

// const env = process.env; // eslint-disable-line no-undef
// const includeDepencies = !!parseInt(process.env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html

// const baseConfig = createConfig({ includeDepencies });
// const targetConfig = Object.assign({}, baseConfig, {
//   output: Object.assign(
//     {},
//     baseConfig.output,
//     {
//       file: `${env.DEST || pkg.main}.mjs`,
//       format: "es"
//     }
//   )
// });

// export default targetConfig;

