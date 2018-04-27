/* global __dirname */
const path = require("path");
const config = require("./webpack.config.js");

config.mode = "development";

config.devServer = {
  contentBase: path.resolve(__dirname, "../dist")
};

config.watchOptions = {
  ignored: /node_modules/
};

module.exports = config;
