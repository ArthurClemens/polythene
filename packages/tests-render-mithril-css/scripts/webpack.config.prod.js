
const config = require("./webpack.config.js");
const webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

config.plugins.push(new BabiliPlugin());
config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));

module.exports = config;
