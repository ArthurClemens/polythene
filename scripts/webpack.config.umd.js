const fs = require("fs");
const path = require("path");
const config = require("./webpack.config.base.js");
const webpack = require("webpack");

const pkg = JSON.parse(fs.readFileSync("./package.json"));
const env = process.env; // eslint-disable-line no-undef

config.output.filename = env.DEST || path.basename(pkg.main);
config.output.libraryTarget = "umd";

config.module = {
  rules: [
    {
      test: /\.js$/, // Check for all js files
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }
  ]
};

config.plugins.push(new webpack.DefinePlugin({
  "process.env": { NODE_ENV: JSON.stringify("production") }
}));

config.devtool = "source-map";

module.exports = config;

