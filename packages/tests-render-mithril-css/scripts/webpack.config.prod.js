
const config = require("./webpack.config.js");
const BabiliPlugin = require("babili-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

config.plugins.push(new BabiliPlugin());
config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));

module.exports = config;
