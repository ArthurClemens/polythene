// This script is called using https://github.com/ArthurClemens/transpile_watch

const path = require('path');
var findup = require('findup-sync');

const debug = true;
const inPath = process.argv[2];

if (debug) {
    console.log(`transpile: ${inPath}`);
}

const execute = function(command) {
    const exec = require('child_process').exec;
    const log = function(error, stdout, stderr) {
        if (stderr) {
            console.log(stderr);
        } else if (stdout && debug) {
            console.log(stdout);
        }
    };
    if (debug) {
        console.log(`command: ${command}`);
    }
    exec(command, log);
};

const createOutPath = (p) => (p.replace(/.es6$/, '.js'));

const outPath = createOutPath(inPath);
const dir = path.dirname(inPath) + '/';
const re = new RegExp(dir);
const inFile = inPath.replace(re, '');
const outFile = outPath.replace(re, '');
const sourceMapFile = `${outFile}.map`;
const nodeModulesDir0 = findup('node_modules/', {cwd: inPath, nocase: true});
const nodeModulesDir = nodeModulesDir0.replace(/ /g, '\\\ ');
const escDir = dir.replace(/ /g, '\\\ ');
const command = [
    `cd ${escDir}`,
    `${nodeModulesDir}/babel-cli/bin/babel.js --presets es2015 --plugins add-module-exports,mithril-objectify ${inFile} --out-file ${outFile} --source-maps true`,
    `${nodeModulesDir}/uglify-js/bin/uglifyjs --compress --output ${outFile} --source-map ${sourceMapFile} --in-source-map ${sourceMapFile}`
].join(' && ');

execute(command);