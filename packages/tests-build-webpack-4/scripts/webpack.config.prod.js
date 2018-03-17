
const webpack = require("webpack");
const config = require("./webpack.config.js");
const CompressionPlugin = require("compression-webpack-plugin");

config.mode = "production";

config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

config.plugins.push(new CompressionPlugin({
  asset: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
