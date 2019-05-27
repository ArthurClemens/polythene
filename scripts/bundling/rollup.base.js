/* global process */
import fs from "fs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pathmodify from "rollup-plugin-pathmodify";

const env = process.env;
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || {});
const name = env.MODULE_NAME || "polythene";

const globals = {};
external.forEach(ext => {
  switch (ext) {
  case "mithril":
    globals["mithril"] = "m";
    break;
  case "react":
      globals["react"] = "React";
      break;
  case "react-dom":
    globals["react-dom"] = "ReactDOM";
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
      pathmodify({
        aliases: [
          {
            id: "mithril/stream",
            resolveTo: "node_modules/mithril/stream/stream.js"
          },
          {
            id: "mithril",
            resolveTo: "node_modules/mithril/mithril.js"
          },
          {
            id: "cyano-mithril",
            resolveTo: "node_modules/cyano-mithril/dist/cyano-mithril.mjs"
          },
          {
            id: "cyano-react",
            resolveTo: "node_modules/cyano-react/dist/cyano-react.mjs"
          },
        ]
      }),
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
