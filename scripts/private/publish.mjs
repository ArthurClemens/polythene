/* global process */
import child_process from "child_process";
import fs from "fs";
import glob from "fast-glob";
import parseArgs from "minimist";
import path from "path";
import shell from "shelljs";

const baseDir = process.cwd();
const PACKAGE_FILE_PATTERN = "./packages/*/package.json";

const argv = parseArgs(process.argv.slice(2));
const isTestRun = !!argv["dry-run"];
const newVersion = argv["version"];

shell.exec("npm whoami", { silent: true }, (code, stdout, stderr) => {
  if (stderr) {
    console.log("log in to npm first.");
  }
});

const maybePublish = filename => {
  return new Promise((resolve, reject) => {
    const fileContents = fs.readFileSync(filename, "utf8");
    const data = JSON.parse(fileContents);
    const name = data.name;
    console.log("------------------------------");
    console.log(`Package: ${name}`); // eslint-disable-line no-console
    if (data.private) {
      console.log("Private package: won't publish");
      reject(filename);
      return;
    }
    shell.exec(`npm view ${name} version`, (code, npmVersion) => {
      const version = npmVersion.trim();
      console.log(`npm for ${name} is at ${version}`); // eslint-disable-line no-console
      if (version !== newVersion) {
        if (isTestRun) {
          console.log("DRY RUN", `Publish: ${name}`); // eslint-disable-line no-console
          resolve(filename);
        } else {
          shell.cd(path.dirname(filename));
          shell.exec("npm publish --tag=fixed-version-1.1.5");
          shell.cd(baseDir);
          child_process.execSync("sleep 1");
          resolve(filename);
        }
      } else {
        reject(filename);
      }
    });
  });
};

async function collectAndPublish() {
  const readStream = glob.stream([PACKAGE_FILE_PATTERN, "!./node_modules/**/*"]);
  let resolved = [];
  let rejected = [];
  for await (const path of readStream) {
    await maybePublish(path).then(
      path => resolved.push(path),
      path => rejected.push(path),
    );
  }
  console.log(`Published: ${resolved.length}`, resolved.length > 0 ? resolved : "");
  console.log(`Not published: ${rejected.length}`, rejected.length > 0 ? rejected : "");
}

collectAndPublish();
