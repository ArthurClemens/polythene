import { renderer, Switch, Icon, RaisedButton, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, Icon, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ Switch, Icon, RaisedButton, renderer, keys }));
