/* global process */
const shell = require("shelljs");

const mithrilBaseDir = "packages/polythene-mithril-base";
const reactBaseDir = "packages/polythene-react-base";
const baseDir = process.cwd();
const componentNames = process.argv.slice(2);
const INCLUDE_CSS = true;

const build = function (dir) {
  shell.cd(dir);
  shell.exec("npm run build");
  shell.cd(baseDir);
};

shell.exec("lerna bootstrap");

componentNames.forEach(function (name) {
  if (name === "base") {
    [mithrilBaseDir, reactBaseDir].forEach(function (dir) {
      if (shell.test("-d", dir)) {
        console.log(`Building dir ${dir}`); // eslint-disable-line no-console
        build(dir);
      } else {
        console.log(`Directory ${dir} does not exist`); // eslint-disable-line no-console
      }
    });
  } else {
    const coreDir = `packages/polythene-core-${name}`;
    const mithrilDir = `packages/polythene-mithril-${name}`;
    const reactDir = `packages/polythene-react-${name}`;
    const cssDir = "packages/polythene-css";
    const componentCssDir = `packages/polythene-css-${name}`;

    [
      INCLUDE_CSS && componentCssDir,
      coreDir,
      INCLUDE_CSS && cssDir,
      mithrilDir,
      reactDir,
    ]
      .filter(Boolean)
      .forEach(function (dir) {
        if (shell.test("-d", dir)) {
          console.log(`Building dir ${dir}`); // eslint-disable-line no-console
          build(dir);
        } else {
          console.log(`Directory ${dir} does not exist`); // eslint-disable-line no-console
        }
      });
  }
});
