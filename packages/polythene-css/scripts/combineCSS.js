const fs           = require("fs");
const glob         = require("glob-fs")();
const { writeCSS } = require("polythene-scripts");
const outPath      = "./dist/polythene.css";

const stripComment = str =>
  str.replace(/(\\r|\\n)\/\*#.*$/, "");

const filterStyleCSS = file =>
  file !== "dist/polythene-layout.css" &&
  file !== "dist/polythene-typography.css";

const files = glob.readdirSync("./dist/*.css");

const combinedFiles = files.filter(filterStyleCSS).reduce((acc, filename) =>
  acc + stripComment(fs.readFileSync(filename, "utf8")), "");

if (combinedFiles) {
  writeCSS({
    css: combinedFiles,
    path: outPath,
    autoPrefix: true
  });
}

