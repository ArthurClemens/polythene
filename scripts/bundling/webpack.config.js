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
      "mithril/stream": path.resolve(baseDir, "node_modules/mithril/stream/stream.js"),
      "mithril": path.resolve(baseDir, "node_modules/mithril/mithril.js"),
      "react": path.resolve(baseDir, "node_modules/react"),
      "react-dom": path.resolve(baseDir, "node_modules/react-dom"),
      "react-router-dom": path.resolve(baseDir, "node_modules/react-router-dom"),
    },
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "ts-loader" }
        ]
      },
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
          "css-loader",
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
