/* global process */
import fs from "fs";
import glob from "fast-glob";
import parseArgs from "minimist";
import shell from "shelljs";

const PACKAGE_FILE_PATTERN = "./packages/*/package.json";

const argv = parseArgs(process.argv.slice(2));
const isTestRun = !!argv["dry-run"];
const newVersion = argv["version"];

const update = filename => {
  return new Promise((resolve, reject) => {
    const fileContents = fs.readFileSync(filename, "utf8");
    const data = JSON.parse(fileContents);
    const name = data.name;
    console.log("------------------------------"); // eslint-disable-line no-console
    console.log(`Package: ${name}`); // eslint-disable-line no-console
    if (data.version !== newVersion) {
      if (isTestRun) {
        console.log("DRY RUN", `"change version to": "${newVersion}"`); // eslint-disable-line no-console
      } else {
        shell.sed("-i", `"version": ".*"`, `"version": "${newVersion}"`, filename);
        shell.sed("-i", `"polythene-(.*)": ".*?"`, `"polythene-$1": "${newVersion}"`, filename);
      }
      resolve(filename);
    } else {
      console.log(`${name} is already at ${newVersion}`); // eslint-disable-line no-console
      reject(filename);
    }
  });
};

async function collectAndUpdate() {
  const readStream = glob.stream([PACKAGE_FILE_PATTERN, "!./node_modules/**/*"]);
  let resolved = [];
  let rejected = [];
  for await (const path of readStream) {
    await update(path).then(
      path => resolved.push(path),
      path => rejected.push(path),
    );
  }
  console.log(`Updated: ${resolved.length}`, resolved.length > 0 ? resolved : "");
  console.log(`Not updated: ${rejected.length}`, rejected.length > 0 ? rejected : "");
}

const updateLernaVersion = () => {
  const filename = "./lerna.json";
  console.log("------------------------------"); // eslint-disable-line no-console
  console.log(`lerna.json`); // eslint-disable-line no-console
  if (isTestRun) {
    console.log("DRY RUN", `"change version to": "${newVersion}"`); // eslint-disable-line no-console
  } else {
    shell.sed("-i", `"version": ".*"`, `"version": "${newVersion}"`, filename);
  }
};

collectAndUpdate();
updateLernaVersion();

