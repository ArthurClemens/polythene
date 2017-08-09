import { renderer, keys, Card, List, ListTile, Button, IconButton, Tabs } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, Tabs, renderer, keys }))
  .concat(mithrilTests({ Card, List, ListTile, Button, IconButton, Tabs, renderer, keys }));
