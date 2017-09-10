const fs           = require("fs");
const glob         = require("glob-fs")({ gitignore: true });
const shell        = require("shelljs");
const { writeCSS } = require("polythene-scripts");

const outPath = "./dist/polythene.css";

shell.touch(outPath);
shell.rm(outPath);

const files = glob.readdirSync("./dist/*.css");

const stripComment = str =>
  str.replace(/(\\r|\\n)\/\*#.*$/, "");

const combinedFiles = files.reduce((acc, filename) =>
  acc + stripComment(fs.readFileSync(filename, "utf8")), "");

if (combinedFiles) {
  writeCSS({
    css: combinedFiles,
    path: outPath,
    autoPrefix: true
  });
}

