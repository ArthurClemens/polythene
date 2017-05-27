/* global process */
const shell = require("shelljs");

const mithrilBaseDir = "packages/polythene-mithril-base";
const reactBaseDir = "packages/polythene-react-base";
const baseDir = process.cwd();
const componentNames = process.argv.slice(2);

const build = function(dir) {
  shell.cd(dir);
  shell.exec("yarn run build");
  shell.cd(baseDir);
};

shell.exec("lerna bootstrap");

componentNames.forEach(function(name) {
  const coreDir = `packages/polythene-core-${name}`;
  const mithrilDir = `packages/polythene-mithril-${name}`;
  const reactDir = `packages/polythene-react-${name}`;

  [mithrilBaseDir, reactBaseDir, coreDir, mithrilDir, reactDir].forEach(function(dir) {
    if (shell.test("-d", dir)) {
      build(dir);
    } else {
      console.log(`Directory ${dir} does not exist`); // eslint-disable-line no-console
    }
  });
});
