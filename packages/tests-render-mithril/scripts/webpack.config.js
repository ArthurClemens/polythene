/* global __dirname, process */
const path = require("path");
// const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const nodeModules = path.join(process.cwd(), "node_modules");

// // Create a list of CSS files from Polythene components
// const CSSFiles = glob.sync(`${nodeModules}/polythene-*/dist/*.css`)
//   // Add test-specific CSS files
//   .concat(
//     glob.sync(`${nodeModules}/tests-*/node_modules/test-*/node_modules/polythene-*/dist/*.css`)
//   );

module.exports = {

  context: path.resolve(__dirname, "../src"),

  entry: Object.assign(
    {},
    {
      index: "../index.js",
    }
    // CSSFiles.length ? { style : CSSFiles } : null
  ),

  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "../src/theme.js")
    }
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
    new ExtractTextPlugin("css/styles.css"),
  ],

  devtool: "source-map"

};
