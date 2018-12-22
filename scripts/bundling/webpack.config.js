/* global process */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseDir = process.cwd();

module.exports = {

  context: path.resolve(baseDir, "./src"),

  entry: {
    index: path.resolve(baseDir, "./index.js"),
  },

  output: {
    path: path.resolve(baseDir, "./dist"),
    filename: "js/[name].js"
  },

  resolve: {
    // Make sure that Mithril is included only once
    alias: {
      "mithril/stream": path.resolve(baseDir, "node_modules/mithril/stream/stream.js"),
      // Keep in this order!
      "mithril": path.resolve(baseDir, "node_modules/mithril/mithril.js"),
    },
    extensions: ["*", ".mjs", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.mjs$/, 
        type: "javascript/auto",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
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
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
  ],

  devtool: "source-map"

};
