/* global __dirname */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    index: "../index.js",
    // style: `${path.join(process.cwd(), "node_modules")}/polythene-css/dist/polythene.css`
  },

  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "../src/theme.js")
    }
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
  ],

  devtool: "source-map"

};
