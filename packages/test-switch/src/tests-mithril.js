import { renderer, Switch, Icon, Button, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, Icon, Button, renderer, keys }))
  .concat(mithrilTests({ Switch, Icon, Button, renderer, keys }));
