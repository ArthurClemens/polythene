import { Switch, Icon, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, Icon, Button, h, a }))
  .concat(mithrilTests({ Switch, Icon, Button, h, a }));
