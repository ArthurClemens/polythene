const glob = require("glob-fs")({ gitignore: true });
const shell = require("shelljs");

const buildDir = function(dir) {
  if (shell.test("-e", dir)) {
    shell.cd(dir);
    shell.exec("yarn run build");
    shell.cd("-");
  } else {
    console.log(`Directory ${dir} does not exist`);
  }
};

shell.exec("lerna bootstrap");
glob.readdirSync("./packages/test-*").forEach(buildDir);
glob.readdirSync("./packages/tests").forEach(buildDir);
//glob.readdirSync("./packages/tests-*").forEach(buildDir);

