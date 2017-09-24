import { renderer, keys, Dialog, RaisedButton, Menu, List, ListTile, Shadow, IconButton } from "polythene-mithril";
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
          h(RaisedButton,
            {
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
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: links, id: "links" })
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }))
  .concat(mithrilTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }));
