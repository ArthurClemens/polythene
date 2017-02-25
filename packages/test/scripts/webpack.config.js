/* global __dirname */
const path = require("path");
// const webpack = require("webpack");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    index: "../index.js",
    // vendor: ["mithril"]
  },

  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "../tests/theme/theme.js")
    }
  },

  externals: {
    mithril: "m"
  },

  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor"
    // }),
  ],

  devtool: "source-map"

};
