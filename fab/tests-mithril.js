import { renderer, fab } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ fab, renderer: h }) => {

  return [
    
};

export default []
  .concat(genericTests({ fab, renderer }))
  .concat(mithrilTests({ fab, renderer }));
