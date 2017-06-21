import { renderer, keys, Search, IconButton, Button, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, renderer, keys }))
  .concat(mithrilTests({ Search, IconButton, Button, Shadow, renderer, keys }));
