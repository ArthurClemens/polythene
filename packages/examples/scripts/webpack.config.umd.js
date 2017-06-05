const fs = require("fs");
const path = require("path");
const BabiliPlugin = require("babili-webpack-plugin");
const config = require("./webpack.config.js");

const pkg = JSON.parse(fs.readFileSync("./package.json"));
const env = process.env; // eslint-disable-line no-undef

config.output.filename = env.DEST || path.basename(pkg.main);
config.output.path = path.resolve(__dirname, "../dist/js");
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

config.plugins.push(new BabiliPlugin());

config.devtool = "source-map";

module.exports = config;
