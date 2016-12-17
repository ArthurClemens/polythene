import fs from "fs";
import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || {});

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  default:
    globals[ext] = ext.replace(/-/g, "_");
  }
});

export const config = {
  entry: "index.js",
  format: "umd",
  moduleName: "polythene",
  external,
  globals,
  plugins: [

    // Resolve libs in node_modules
    resolve({
      jsnext: true,
      main: true,
      skip: external
    }),

    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs({
      include: "node_modules/**"
    }),

    eslint({
      cache: true
    }),

    babel()
  ]
};
