/* global process */
const shell = require("shelljs");

const name = process.argv[2];
const baseDir = process.cwd();

const mithrilBaseDir = "packages/polythene-mithril-base";
const reactBaseDir = "packages/polythene-react-base";

const coreDir = `packages/polythene-core-${name}`;
const mithrilDir = `packages/polythene-mithril-${name}`;
const reactDir = `packages/polythene-react-${name}`;

shell.exec("lerna bootstrap");

const build = function(dir) {
  shell.cd(dir);
  shell.exec("yarn run build");
  shell.cd(baseDir);
};

[mithrilBaseDir, reactBaseDir, coreDir, mithrilDir, reactDir].forEach(function(dir) {
  build(dir);
});

