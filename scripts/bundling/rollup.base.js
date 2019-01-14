/* global process */
import fs from "fs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const env = process.env; // eslint-disable-line no-undef
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || {});
const name = env.MODULE_NAME || "polythene";

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  default:
    globals[ext] = ext;
  }
});

export const createConfig = () => {
  const config = {
    input: env.ENTRY || "src/index.js",
    external,
    output: {
      name,
      globals,
    },
    plugins: [

      resolve(),

      commonjs({
        namedExports: {
          "node_modules/react/index.js": ["Children", "Component", "PropTypes", "createElement", "createFactory"],
          "node_modules/react-dom/index.js": ["render"]
        }
      }),

      babel({
        exclude: "node_modules/**",
        configFile: "../../babel.config.js"
      })
    ]
  };
  
  return config;
};