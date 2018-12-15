/* global process */
const shell = require("shelljs");

const baseDir = process.cwd();

const buildAndCopy = which => {
  shell.cd(`packages/tests-render-${which}/`);
  shell.exec("npm run build");
  shell.cd(baseDir);
  shell.cp("-R", `packages/tests-render-${which}/dist/*`, `../../polythene-demos/gh-pages/${which}`);
};

buildAndCopy("mithril");
buildAndCopy("react");
