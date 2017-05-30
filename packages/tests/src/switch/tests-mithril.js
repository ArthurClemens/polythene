import { renderer, Switch, Icon, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, Icon, renderer, keys }))
  .concat(mithrilTests({ Switch, Icon, renderer, keys }));
