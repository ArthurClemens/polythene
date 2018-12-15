const glob = require("glob-fs")({ gitignore: true });
const shell = require("shelljs");

const testDir = function(dir) {
  console.log(`Running tests in ${dir}`); // eslint-disable-line no-console
  shell.cd(dir);
  shell.exec("npm run test");
  shell.cd("-");
};

glob.readdirSync("./packages/test-*").forEach(testDir);