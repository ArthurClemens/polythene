/* globals process */
const fs = require("fs");
const path = require("path");

const env = process.env; // eslint-disable-line no-undef
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const entry = env.ENTRY || "./index.js";
const context = process.cwd();
const dependencies = Object.keys(pkg.dependencies || {});

const outputPath = env.OUTPUT_PATH || "./dist";

const externals = {};
dependencies.forEach(dep => {
  switch (dep) {
  case "mithril":
    externals["mithril"] = {
      umd: "m",
      root: "mithril"
    };
    break;
  default:
    externals[`"${dep}"`] = `"${dep}"`;
  }
});

module.exports = {
  
  context,
  
  module: {
    noParse: [
      /mithril/
    ]
  },

  entry,

  output: {
    path: path.resolve(context, outputPath)
  },
  
  externals,

  plugins: []
};