/* global process */
const config = require("./webpack.config.js");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const env = process.env;

config.mode = "production";

config.optimization = {
  minimizer: [new TerserPlugin({
    terserOptions: {
      compress: {},
    }
  })]
};

config.plugins.push(new CompressionPlugin());

if (env.ANALYSE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
