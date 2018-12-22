const config = require("./webpack.config.js");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

config.mode = "production";

config.optimization = {
  minimizer: [new TerserPlugin({
    sourceMap: true
  })]
};

config.plugins.push(new CompressionPlugin());

module.exports = config;
