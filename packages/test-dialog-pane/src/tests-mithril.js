import { renderer, keys, Button, DialogPane, Toolbar, ToolbarTitle } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ DialogPane, Toolbar, ToolbarTitle, Button, renderer, keys }))
  .concat(mithrilTests({ DialogPane, Toolbar, ToolbarTitle, Button, renderer, keys }));
