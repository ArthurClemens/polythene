const fs = require("fs");
const path = require("path");
const config = require("./webpack.config.base.js");

const pkg = JSON.parse(fs.readFileSync("./package.json"));
const env = process.env; // eslint-disable-line no-undef
config.output.filename = env.DEST || path.basename(pkg.module);

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

module.exports = config;
