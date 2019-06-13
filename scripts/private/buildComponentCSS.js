/* global process */
const shell = require("shelljs");

const baseDir = process.cwd();
const componentNames = process.argv.slice(2);

const build = function(dir) {
  shell.cd(dir);
  shell.exec("npm run build:css");
  shell.cd(baseDir);
};

const buildDir = dir => {
  if (shell.test("-d", dir)) {
    console.log(`Building dir ${dir}`); // eslint-disable-line no-console
    build(dir);
  } else {
    console.log(`Directory ${dir} does not exist`); // eslint-disable-line no-console
  }
};

shell.exec("lerna bootstrap");

componentNames.forEach(function(name) {
  const componentCssDir = `packages/polythene-css-${name}`;
  buildDir(componentCssDir);
});
