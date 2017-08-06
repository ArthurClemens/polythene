import { renderer, keys, Card, List, ListTile, Button, IconButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, renderer, keys }))
  .concat(mithrilTests({ Card, List, ListTile, Button, IconButton, renderer, keys }));
