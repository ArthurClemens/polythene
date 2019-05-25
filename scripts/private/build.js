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
  shell.exec("npm run build");
};

const validDirs = glob.sync(PACKAGE_FILE_PATTERN)
  .filter(filename => !/node_modules/.test(filename))
  .map(filename => path.dirname(filename)) // get dirs
  .filter(dir => !(
    dir.includes("tests-render-react-standalone") ||
    dir.includes("tests-render-mithril-standalone")
  ));

validDirs
  .filter(dir => !(
    dir.includes("tests-render-react-phenomic")
  ))
  .forEach(buildPackage);

// Build tests-render-react-phenomic
validDirs
  .filter(dir => (
    dir.includes("tests-render-react-phenomic")
  ))
  .forEach(buildPackage);
