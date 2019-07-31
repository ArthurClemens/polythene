/* global process */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackModules = require("webpack-modules");

const baseDir = process.cwd();
const env = process.env; // eslint-disable-line no-undef

module.exports = {

  context: path.resolve(baseDir, "./src"),

  entry: {
    index: path.resolve(baseDir, env.ENTRY || "./src/index.js"),
  },

  output: {
    path: path.resolve(baseDir, "./dist"),
    filename: "js/[name].js"
  },

  resolve: {
    // Make sure that libs are included only once
    alias: {
      "mithril/stream": path.resolve(baseDir, "node_modules/mithril/stream.js"),
      "mithril": path.resolve(baseDir, "node_modules/mithril/mithril.js"),
    },
    extensions: [".mjs", ".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: [{
          loader: "babel-loader",
          options: {
            configFile: "../../babel.config.js"
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new WebpackModules(),
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
  ],

  devtool: "source-map"

};
