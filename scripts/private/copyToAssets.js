/* global process */
const shell = require("shelljs");

shell.cp("-R", `packages/polythene-css/dist/polythene-css-standalone*`, `../../../assets/assets-gh-pages/polythene/standalone/polythene-css`);
shell.cp("-R", `packages/polythene-mithril/dist/polythene-mithril-standalone*`, `../../../assets/assets-gh-pages/polythene/standalone/polythene-mithril`);
shell.cp("-R", `packages/polythene-react/dist/polythene-react-standalone*`, `../../../assets/assets-gh-pages/polythene/standalone/polythene-react`);
