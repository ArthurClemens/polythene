import fs from "fs";
import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || {});

const nameToModule = name => name.replace(/polythene-/g, "");

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  case "j2c":
    globals["j2c"] = "j2c";
    break;
  default:
    globals[ext] = nameToModule(ext);
  }
});

export default {
  entry: "index.js",
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

    babel(),

    uglify()
  ],
  targets: [{
    dest: pkg.main,
    format: "umd",
    moduleName: "test",
    sourceMap: true
  }]
};
