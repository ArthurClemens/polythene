import { renderer, keys, Snackbar, Dialog, Button } from "polythene-mithril";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-mithril";
import containerSelector from "./components/container-selector-mithril";

const mithrilTests = () => {

  return [];
  
};

export default []
  .concat(genericTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, renderer, keys }))
  .concat(mithrilTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, renderer, keys }));
