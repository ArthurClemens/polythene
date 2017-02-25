const fs = require("fs");
const path = require("path");
const BabiliPlugin = require("babili-webpack-plugin");
const config = require("./webpack.config.base.js");

const pkg = JSON.parse(fs.readFileSync("./package.json"));

config.output.filename = path.basename(pkg.main);
config.output.libraryTarget = "umd";

config.module = {
  rules: [
    {
      test: /\.js$/, // Check for all js files
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["es2015"],
          "plugins": [
            "transform-object-rest-spread",
            "transform-object-assign"
          ]
        }
      }]
    }
  ]
};

config.plugins.push(new BabiliPlugin());

config.devtool = "source-map";

module.exports = config;
