import { renderer, Toolbar, IconButton, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  
  return [];
    
};

export default []
  .concat(genericTests({ Toolbar, IconButton, Shadow, renderer }))
  .concat(mithrilTests({ Toolbar, IconButton, Shadow, renderer }));
