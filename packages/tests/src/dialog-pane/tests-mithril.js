import { Button, DialogPane, Toolbar, ToolbarTitle } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ DialogPane, Toolbar, ToolbarTitle, Button, h, a }))
  .concat(mithrilTests({ DialogPane, Toolbar, ToolbarTitle, Button, h, a }));
