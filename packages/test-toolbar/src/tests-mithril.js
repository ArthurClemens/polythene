import { renderer, Toolbar, ToolbarTitle, IconButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  
  return [];
    
};

export default []
  .concat(genericTests({ Toolbar, ToolbarTitle, IconButton, renderer }))
  .concat(mithrilTests({ Toolbar, ToolbarTitle, IconButton, renderer }));
