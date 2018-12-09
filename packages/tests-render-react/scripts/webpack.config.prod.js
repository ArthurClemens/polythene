
const config = require("./webpack.config.js");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const env = process.env; // eslint-disable-line no-undef

config.mode = "production";
config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

const createSourceMap = env.SOURCEMAP !== undefined
  ? !!parseInt(env.SOURCEMAP, 10)
  : true;

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: createSourceMap,
        compress: {
          warnings: false,
        },
      }
    })
  ],
  namedModules: false,
  namedChunks: false,
  nodeEnv: "production",
  flagIncludedChunks: true,
  occurrenceOrder: true,
  sideEffects: true,
  usedExports: true,
  concatenateModules: true,
  noEmitOnErrors: true,
  checkWasmTypes: true,
  minimize: true,
};

config.plugins.push(new CompressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
}));

module.exports = config;
