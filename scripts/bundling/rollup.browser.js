/* global process */
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs";
import pathmodify from "rollup-plugin-pathmodify";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";

const env = process.env;
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const name = env.MODULE_NAME || "polythene";
const includes = (env.INCLUDES || "").split(/\s*,\s*/);

const external = [
  "mithril",
  "react",
  "react-dom"
].filter(e => includes.indexOf(e) === -1);

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  case "react":
    globals["react"] = "React";
    break;
  case "react-dom":
    globals["react-dom"] = "ReactDOM";
    break;
  default:
    globals[ext] = ext;
  }
});

export default {
  input: env.ENTRY || "src/index.js",
  external,
  output: {
    name,
    globals,
    format: "umd",
    file: `${env.DEST || pkg.main}.js`,
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // Make sure that Mithril is included only once (if passed in INCLUDES env variable)
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
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/react/index.js": ["Children", "Component", "PropTypes", "createElement", "createFactory"],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    babel({
      exclude: "node_modules/**",
      configFile: "../../babel.config.js"
    }),
    terser()
  ]
};
