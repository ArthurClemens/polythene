
const config = require("./webpack.config.js");
const webpack = require("webpack");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const env = process.env; // eslint-disable-line no-undef

config.mode = "production";
config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

const createSourceMap = env.SOURCEMAP !== undefined
  ? !!parseInt(env.SOURCEMAP, 10)
  : true;

config.plugins.push(new UglifyWebpackPlugin({
  sourceMap: createSourceMap
}));

config.plugins.push(new CompressionPlugin({
  asset: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
