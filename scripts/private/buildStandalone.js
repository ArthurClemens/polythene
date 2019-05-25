/* global process */
const shell = require("shelljs");
const glob = require("glob");
const path = require("path");

const mithrilDir = "packages/polythene-mithril";
const reactDir = "packages/polythene-react";
const cssDir = "packages/polythene-css";
const baseDir = process.cwd();

const PACKAGE_FILE_PATTERN = "./packages/**/package.json";

const build = dir => {
  shell.cd(dir);
  shell.exec("npm run build:standalone");
  shell.cd(baseDir);
};

shell.exec("lerna bootstrap");

[mithrilDir, reactDir, cssDir].forEach(build);

const buildPackage = dir => {
  shell.cd(baseDir);
  console.log(`Building ${dir}`); // eslint-disable-line no-console
  shell.cd(dir);
  shell.exec("npm run build");
};

const testDirs = glob.sync(PACKAGE_FILE_PATTERN)
  .filter(filename => !/node_modules/.test(filename))
  .map(filename => path.dirname(filename)) // get dirs
  .filter(dir => (
    dir.includes("tests-render-react-standalone") ||
    dir.includes("tests-render-mithril-standalone")
  ));

testDirs.forEach(buildPackage);
