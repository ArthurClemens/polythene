/* globals process */
const fs = require("fs");
const path = require("path");

const env = process.env; // eslint-disable-line no-undef
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const entry = env.ENTRY || "./index.js";
const context = process.cwd();
const dependencies = Object.keys(pkg.dependencies || {});

const externals = {};
dependencies.forEach(dep => {
  switch (dep) {
  case "mithril":
    externals["mithril"] = {
      umd: "mithril",
      root: "m"
    };
    break;
  default:
    externals[`"${dep}"`] = `"${dep}"`;
  }
});

module.exports = {
  
  context,
  
  entry,

  output: {
    path: path.resolve(context, "./dist")
  },

  externals,

  plugins: []
};