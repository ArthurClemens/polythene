/* global process */
const path  = require("path");
const glob  = require("glob");
const shell = require("shelljs");

const rootPath = path.join(process.cwd(), "../");
const destPath = path.join(process.cwd(), "dist/");

const filterPolytheneCss = file =>
  file.match(/dist\/polythene\.css/);

const oldFiles = glob.sync(`${destPath}/*.css*`);

oldFiles.filter(filterPolytheneCss).forEach(file =>
  shell.rm(file)
);

const filterCssDir = file =>
  !file.match(/polythene-css\/dist/);

const files = glob.sync(`${rootPath}/polythene-*/dist/*.css*`);

files
  .filter(filterCssDir)
  .forEach(file => shell.cp(file, destPath)
);
