import { renderer, keys, Dialog, RaisedButton, Menu, List, ListTile, Shadow, IconButton } from "polythene-mithril";
import genericTests from "./tests-generic";
import createSettingsDialog from "./components/settings-dialog";

const mithrilTests = ({ Menu, List, ListTile, renderer: h }) => {

  const settingsDialog = createSettingsDialog({ renderer, keys, Dialog, Menu, List, ListTile });

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
    //       h(RaisedButton, {
    //         label: "Open",
    //         events: {
    //           onclick: () => Dialog.show(settingsDialog)
    //         }
    //       }
    //     )
    //   }
    // },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }))
  .concat(mithrilTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }));
