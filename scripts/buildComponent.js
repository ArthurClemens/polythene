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
  const themeDir = `packages/polythene-core-${name}-theme`;
  const coreDir = `packages/polythene-core-${name}`;
  const mithrilDir = `packages/polythene-mithril-${name}`;
  const reactDir = `packages/polythene-react-${name}`;
  const testDir = `packages/test-${name}`;

  [themeDir, coreDir, mithrilBaseDir, reactBaseDir, mithrilDir, reactDir, testDir].forEach(function(dir) {
    if (shell.test("-d", dir)) {
      console.log(`Building dir ${dir}`); // eslint-disable-line no-console
      build(dir);
    } else {
      console.log(`Directory ${dir} does not exist`); // eslint-disable-line no-console
    }
  });
});
