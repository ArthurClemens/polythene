import { renderer, keys, Button, Dialog, DialogPane, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic";
import form from "./components/form-mithril";
import Updating from "./components/updating-mithril";
import Spawns from "./components/spawns-mithril";

const mithrilTests = ({ renderer: h, keys, Dialog, Button }) => {

  const Opener = (dialogAttrs, label = "Open") => h(Button, {
    raised: true,
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Conditional button states",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener(form)
      }
    },
    {
      name: "Updating dialog",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(Updating)
      }
    },
    {
      name: "Spawns and ids",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(Spawns)
      }
    },
  ];
};

export default []
  .concat(genericTests({ Dialog, DialogPane, Button, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, renderer, keys }))
  .concat(mithrilTests({ Dialog, DialogPane, Button, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile, renderer, keys }));

