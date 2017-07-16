/* global process */
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
    globals[ext] = ext;
  }
});

export const createConfig = ({ includeDepencies, lint }) => {
  const config = {
    entry: process.env.ENTRY || "index.js",
    external: includeDepencies ? ["mithril", "react"] : external,
    moduleName: "polythene",
    globals,
    plugins: []
  };
  config.plugins.push(resolve({
    jsnext: true,
    main: true
  }));
  lint && config.plugins.push(eslint({
    cache: true
  }));
  config.plugins.push(commonjs({
    // namedExports: {
    //   "node_modules/react/react.js": ["Children", "Component", "PropTypes", "createElement"],
    //   "node_modules/react-dom/index.js": ["render"]
    // }
  }));
  config.plugins.push(babel());
  return config;
};
