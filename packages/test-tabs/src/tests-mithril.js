import { renderer, keys, Tabs } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Tabs, renderer, keys }))
  .concat(mithrilTests({ Tabs, renderer, keys }));
