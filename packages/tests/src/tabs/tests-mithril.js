import { Tabs } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Tabs, h, a }))
  .concat(mithrilTests({ Tabs, h, a }));
