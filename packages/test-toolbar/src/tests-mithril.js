import { renderer, Toolbar, ToolbarTitle, IconButton, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  
  return [];
    
};

export default []
  .concat(genericTests({ Toolbar, ToolbarTitle, IconButton, Shadow, renderer }))
  .concat(mithrilTests({ Toolbar, ToolbarTitle, IconButton, Shadow, renderer }));
