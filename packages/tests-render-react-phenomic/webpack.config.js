/* globals process */

import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";

const nodeModules = path.join(process.cwd(), "node_modules");
const isProduction = process.env.PHENOMIC_ENV === "static";

module.exports = config => ({
  mode: isProduction
    ? "production"
    : "development",
  entry: {
    [config.bundleName]: [
      !isProduction &&
        require.resolve("webpack-hot-middleware/client"),
      // !isProduction &&
      //   require.resolve("react-hot-loader/patch"),
      "./src/index.js"
    ].filter(item => item)
  },
  output: {
    publicPath: "/",
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
  },
  ...(isProduction
    ? {
      optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: true
          })
        ]
      }
    }
    : undefined
  ),
  stats: {
    entrypoints: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /node_modules/, // <==== don't exclude node_modules
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
          !isProduction
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
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
      filename: "app.css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    !isProduction &&
      new webpack.HotModuleReplacementPlugin(),
  ].filter(item => item),

  resolve: {
    extensions: [".mjs", ".js", ".json"],
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
