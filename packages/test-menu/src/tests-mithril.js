import { renderer, keys, Dialog, Button, Menu, List, ListTile, Shadow, IconButton, Icon } from "polythene-mithril";
import genericTests from "./tests-generic";
import settingsDialog from "./components/settings-dialog";
import opener from "./components/opener";
import links from "./components/links-mithril";

const mithrilTests = ({ Menu, List, ListTile, renderer: h }) => {

  const settingsDialogOptions = settingsDialog({ renderer, keys, Dialog, Menu, List, ListTile });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Dialog with option 'menu' (demo without state)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          h(Button,
            {
              raised: true,
              label: "Open",
              events: {
                onclick: () => Dialog.show(settingsDialogOptions)
              }
            }
          )
      }
    },
    {
      name: "Menu with links",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, Button, List, ListTile, menuFn: links, id: "links" })
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, renderer, keys }))
  .concat(mithrilTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, renderer, keys }));
