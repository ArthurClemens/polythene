
const config = require("./webpack.config.js");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin());

config.plugins.push(new CompressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
