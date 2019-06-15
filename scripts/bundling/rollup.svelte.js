/* global process */
import fs from "fs";
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;
const env = process.env;
export const pkg = JSON.parse(fs.readFileSync("./package.json"));

export default {
	input: env.ENTRY || "src/index.js",
	output: {
		sourcemap: true,
		format: 'es',
		name: env.MODULE_NAME || "polythene",
		file: `${env.DEST || pkg.main}.mjs`,
	},
	plugins: [
		svelte({
			dev: !production,
		}),
		resolve(),
		commonjs(),
	],
};
