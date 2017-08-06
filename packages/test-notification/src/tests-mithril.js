import { renderer, keys, Notification, Dialog, Button } from "polythene-mithril";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-mithril";
import containerSelector from "./components/container-selector-mithril";

const mithrilTests = () => {

  return [];
  
};

export default []
  .concat(genericTests({ Notification, Dialog, Button, buttonGroup, containerSelector, renderer, keys }))
  .concat(mithrilTests({ Notification, Dialog, Button, buttonGroup, containerSelector, renderer, keys }));
