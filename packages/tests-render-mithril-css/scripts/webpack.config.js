/* global __dirname */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.resolve(__dirname, "../src"),

  entry: {
    index: "../index.js",
    // style: `${path.join(process.cwd(), "node_modules")}/polythene-css/dist/polythene.css`
  },

  externals: {
    mithril: "m"
  },

  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "js/[name].js"
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
