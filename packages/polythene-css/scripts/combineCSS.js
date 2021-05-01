const fs           = require("fs");
const glob         = require("glob");
const { writej2c } = require("write-j2c");
const outPath      = "./dist/polythene.css";

const stripComment = str =>
  str.replace(/(\\r|\\n)\/\*#.*$/, "");

const filterStyleCSS = file =>
  file !== "dist/polythene-typography.css";

const files = glob.sync("./dist/*.css");

const combinedFiles = files.filter(filterStyleCSS).reduce((acc, filename) =>
  acc + stripComment(fs.readFileSync(filename, "utf8")), "");

if (combinedFiles) {
  writej2c({
    css: combinedFiles,
    path: outPath,
    autoPrefix: true,
    gzip: true,
  });
}

