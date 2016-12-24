/*
Build an UMD bundle that is updated with each file change
*/
import umdConfig from "./rollup.umd.js";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const env = process.env; // eslint-disable-line no-undef
const watchDir = env.WATCH_DIR;
const serverPort = env.PORT;

umdConfig.plugins.push(
  serve({
    contentBase: watchDir,
    port: serverPort
  })
);

umdConfig.plugins.push(
  livereload({
    watch: watchDir
  })
);

export default umdConfig;

