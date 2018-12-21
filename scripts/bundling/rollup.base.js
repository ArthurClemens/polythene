/* global process */
import fs from "fs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pathmodify from "rollup-plugin-pathmodify";

const env = process.env; // eslint-disable-line no-undef
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || {});
external.push("mithril");
const name = env.MODULE_NAME || "polythene";

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  default:
    globals[ext] = ext;
  }
});

export const createConfig = ({ includeDepencies }) => {
  const config = {
    input: env.ENTRY || "index.js",
    external: includeDepencies ? [] : external,
    output: {
      name,
      globals,
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true,
      }),

      pathmodify({
        aliases: [
          {
            id: "mithril/stream",
            resolveTo: "node_modules/mithril/stream/stream"
          },
          {
            id: "mithril",
            resolveTo: "node_modules/mithril/mithril"
          }
        ]
      }),

      // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
      commonjs(),

      babel({
        exclude: "node_modules/**"
      })
    ]
  };
  
  return config;
};