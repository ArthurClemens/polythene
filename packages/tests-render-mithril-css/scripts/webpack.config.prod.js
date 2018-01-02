
const config = require("./webpack.config.js");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

config.plugins.push(new UglifyWebpackPlugin());

config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
config.plugins.push(new CompressionPlugin({
  asset: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
