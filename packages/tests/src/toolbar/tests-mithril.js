import { Toolbar, ToolbarTitle, IconButton, Checkbox } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  
  return [];
    
};

export default []
  .concat(genericTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, h, a }))
  .concat(mithrilTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, h, a }));
