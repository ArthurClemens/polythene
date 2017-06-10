import { renderer, keys, Button, DialogPane } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ DialogPane, Button, renderer, keys }))
  .concat(mithrilTests({ DialogPane, Button, renderer, keys }));
