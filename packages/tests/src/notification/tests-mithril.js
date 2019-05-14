import { Notification, Dialog, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-mithril";
import containerSelector from "./components/container-selector-mithril";

const mithrilTests = () => {

  return [];
  
};

export default []
  .concat(genericTests({ Notification, Dialog, Button, buttonGroup, containerSelector, h, a }))
  .concat(mithrilTests({ Notification, Dialog, Button, buttonGroup, containerSelector, h, a }));
