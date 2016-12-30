/* globals process */

const wright = require("wright");
const rollup = require("rollup");
const resolve = require("rollup-plugin-node-resolve");
const pathmodify = require("rollup-plugin-pathmodify");
const buble = require("rollup-plugin-buble");
const commonjs = require("rollup-plugin-commonjs");

let bundle;

wright({
  debug: true,
  main: "dist/index.html",
  js: {
    watch: ["src/**/*.js", "tests/**/*.js"],
    path: "js/test.js",
    compile: roll
  }
});

function roll() {
  return rollup.rollup({
    entry: "src/index.js",
    external: ["mithril"],
    cache: bundle,
    plugins: [
      pathmodify({
        aliases: [{
          id: "polythene-config",
          resolveTo: process.cwd() + "/tests/config/config.js"
        }]
      }),
      resolve({
        jsnext: true,
        main: true
      }),
      commonjs({
        include: "node_modules/**"
      }),
      buble({ objectAssign: "Object.assign" })
    ]
  }).then(b => {
    bundle = b;
    return bundle.generate({
      moduleName: "polythene",
      format: "umd",
      globals: { mithril: "m" }
    }).code;
  });
}
