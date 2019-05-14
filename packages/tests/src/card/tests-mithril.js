import { Card, List, ListTile, Button, IconButton, Tabs } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, Tabs, h, a }))
  .concat(mithrilTests({ Card, List, ListTile, Button, IconButton, Tabs, h, a }));
