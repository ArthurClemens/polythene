/*
Overrides default config at
https://github.com/phenomic/phenomic/blob/master/packages/plugin-bundler-webpack/src/webpack.config.js

Debug with:

DEBUG=phenomic:plugin:webpack npm run start
*/

/* globals process */

import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const nodeModules = path.join(process.cwd(), "node_modules");

module.exports = config => ({
  mode: process.env.PHENOMIC_ENV !== "static"
    ? "development"
    : "production",
  entry: {
    [config.bundleName]: [
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("webpack-hot-middleware/client"),
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("react-hot-loader/patch"),
      "./src/index.js"
    ].filter(item => item)
  },
  output: {
    publicPath: "/",
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
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
            babelrc: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              require.resolve("react-hot-loader/babel"),
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve("style-loader"),
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: "[local]"
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "app.css",
      disable: process.env.PHENOMIC_ENV !== "static"
    }),
    process.env.PHENOMIC_ENV !== "static" &&
      new webpack.HotModuleReplacementPlugin(),
    // process.env.NODE_ENV === "production" &&
    //   new webpack.optimize.UglifyJsPlugin()
  ].filter(item => item),

  resolve: {
    extensions: [".web.js", ".mjs", ".js", ".json"],
    alias: {
      // to ensure a single module is used
      react: path.resolve(path.join(nodeModules, "react")),
      "react-dom": path.resolve(path.join(nodeModules, "react-dom")),
      "react-router": path.resolve(path.join(nodeModules, "react-router"))
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
});
