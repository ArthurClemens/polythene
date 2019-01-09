/* global process */
const shell = require("shelljs");

const mithrilDir = "packages/polythene-mithril";
const reactDir = "packages/polythene-react";
const cssDir = "packages/polythene-css";
const baseDir = process.cwd();

const build = dir => {
  shell.cd(dir);
  shell.exec("npm run build:standalone");
  shell.cd(baseDir);
};

shell.exec("lerna bootstrap");

[mithrilDir, reactDir, cssDir].forEach(build);
