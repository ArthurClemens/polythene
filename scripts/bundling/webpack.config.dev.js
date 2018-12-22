/* global process */
const path = require("path");
const config = require("./webpack.config.js");

const baseDir = process.cwd();

config.mode = "development";

config.devServer = {
  contentBase: path.resolve(baseDir, "./dist")
};

config.watchOptions = {
  ignored: /node_modules/
};

module.exports = config;
