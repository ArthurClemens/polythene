/* global process */
const shell = require("shelljs");
const path = require("path");
const child_process = require("child_process");
const fs = require("fs");
const glob = require("glob");
const baseDir = process.cwd();

const CURRENT_VERSION      = "1.1.0";
const NEW_VERSION          = "1.1.1";
const PACKAGE_FILE_PATTERN = "./packages/**/package.json";

const publish = filename => {
  shell.cd(path.dirname(filename));
  shell.exec("npm publish");
  shell.cd(baseDir);
  child_process.execSync("sleep 2");     
};

glob.sync(PACKAGE_FILE_PATTERN)
  .filter(filename => !/node_modules/.test(filename))
  .forEach(filename => {
    const fileContents = fs.readFileSync(filename, "utf8");
    const data = JSON.parse(fileContents);
    if (data.version === CURRENT_VERSION) {
      shell.sed("-i", `"version": "${CURRENT_VERSION}"`, `"version": "${NEW_VERSION}"`, filename);
      publish(filename);
    } else {
      console.log(`${data.name} is already at ${NEW_VERSION}`); // eslint-disable-line no-console
    }
  });
