import { Snackbar, Dialog, Button } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-react";
import containerSelector from "./components/container-selector-react";

const reactTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, h, a }))
  .concat(reactTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, h, a }));
