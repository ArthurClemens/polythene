const glob = require("glob-fs")({ gitignore: true });
const shell = require("shelljs");

const buildDir = function(dir) {
  shell.cd(dir);
  shell.exec("yarn run build");
  shell.cd("-");
};

shell.exec("lerna bootstrap");
glob.readdirSync("./packages/test-*").forEach(buildDir);
buildDir("./packages/tests");
