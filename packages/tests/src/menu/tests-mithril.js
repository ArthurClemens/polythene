import { Dialog, Button, Menu, List, ListTile, Shadow, IconButton, Icon } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import settingsDialog from "./components/settings-dialog";
import opener from "./components/opener";
import links from "./components/links-mithril";

const mithrilTests = ({ Menu, List, ListTile, h }) => {

  const settingsDialogOptions = settingsDialog({ h, a, Dialog, Menu, List, ListTile });

  return [
    // {
    //   section: "Mithril specific tests",
    // },
    // {
    //   name: "Dialog with option 'menu' (demo without state)",
    //   interactive: true,
    //   exclude: true,
    //   component: {
    //     view: () => 
    //       h(Button,
    //         {
    //           raised: true,
    //           label: "Open",
    //           events: {
    //             onclick: () => Dialog.show(settingsDialogOptions)
    //           }
    //         }
    //       )
    //   }
    // },
    // {
    //   name: "Menu with links",
    //   interactive: true,
    //   exclude: true,
    //   component: opener({ h, a, Menu, Button, List, ListTile, menuFn: links, id: "links" })
    // },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, h, a }))
  .concat(mithrilTests({ Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog, h, a }));
