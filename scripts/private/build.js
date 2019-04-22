/* global process */

/*
Expects `ncu` to be available globally.
*/

const shell = require("shelljs");
const path = require("path");
const glob = require("glob");

const PACKAGE_FILE_PATTERN = "./packages/**/package.json";
const baseDir = process.cwd();

const buildPackage = dir => {
  shell.cd(baseDir);
  console.log(`Building ${dir}`); // eslint-disable-line no-console
  shell.cd(dir);
  if (dir.includes("tests-render-react-standalone") || dir.includes("tests-render-mithril-standalone")) {
    return;
  } else {
    shell.exec("npm run build");
  }
};

glob.sync(PACKAGE_FILE_PATTERN)
  .filter(filename => !/node_modules/.test(filename))
  .forEach(filename => {
    const dir = path.dirname(filename);
    buildPackage(dir);
  });

