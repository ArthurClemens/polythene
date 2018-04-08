import { renderer, Toolbar, ToolbarTitle, IconButton, Checkbox } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  
  return [];
    
};

export default []
  .concat(genericTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer }))
  .concat(mithrilTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer }));
