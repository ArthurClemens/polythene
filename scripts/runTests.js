const glob = require("glob-fs")({ gitignore: true });
const shell = require("shelljs");

const testDir = function(dir) {
  console.log(`Running tests in ${dir}`);
  shell.cd(dir);
  shell.exec("yarn run test");
  shell.cd("-");
};

glob.readdirSync("./packages/test-*").forEach(testDir);