const glob = require("glob");
const shell = require("shelljs");

const testDir = function(dir) {
  console.log(`Running tests in ${dir}`); // eslint-disable-line no-console
  shell.cd(dir);
  shell.exec("npm run test");
  shell.cd("-");
};

glob.sync("./packages/test-*").forEach(testDir);
