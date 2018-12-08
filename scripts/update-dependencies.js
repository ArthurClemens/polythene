/* global process */

const shell = require("shelljs");
const path = require("path");
const glob = require("glob");

const PACKAGE_FILE_PATTERN = "./packages/**/package.json";
const baseDir = process.cwd();

const updateDir = (dir, isBase) => {
  shell.cd(baseDir);
  console.log(`Updating ${dir}`); // eslint-disable-line no-console
  shell.cd(dir);
  if (dir.includes("phenomic")) {
    shell.exec("ncu -a -x react-router --packageFile package.json");
  } else {
    shell.exec("ncu -a --packageFile package.json");
  }
  if (!isBase) {
    shell.rm("-rf", "./node_modules");
  }
};

updateDir(baseDir, true);

glob.sync(PACKAGE_FILE_PATTERN)
  .filter(filename => !/node_modules/.test(filename))
  .forEach(filename => {
    const dir = path.dirname(filename);
    updateDir(dir, false);
  });


shell.exec("npm install");
shell.exec("lerna bootstrap");
