/* global __dirname */

const path = require("path");
const webpack = require("../../../node_modules/webpack");
const BabiliPlugin = require("../../../node_modules/babili-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../index.js"),
    // vendor: ["mithril"]
  },
  target: "web",
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js"
  },
  externals: {
    "mithril": "m"
  },
  devtool: "source-map",
  plugins: [
    new BabiliPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor"
    // })
  ],
  module: {
    noParse: [/mithril/],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          // cacheDirectory: true,
          presets: ["es2015"],
          plugins: [
            "transform-runtime",
            // "external-helpers",
            "transform-object-rest-spread",
            "transform-object-assign"
          ]
        }
      }
    ],
  }
};
