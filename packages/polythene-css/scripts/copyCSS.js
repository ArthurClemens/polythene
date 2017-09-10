/* global process */
const path  = require("path");
const glob  = require("glob");
const shell = require("shelljs");

const rootPath = path.join(process.cwd(), "../");
const destPath = path.join(process.cwd(), "dist/");

const oldFiles = glob.sync(`${destPath}/*.css*`);

oldFiles.forEach(file =>
  shell.rm(file)
);

const files = glob.sync(`${rootPath}/polythene-*/dist/*.css*`);

files.forEach(file =>
  shell.cp(file, destPath)
);
