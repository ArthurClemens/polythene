import { renderer, keys, Button, RaisedButton, Dialog } from "polythene-mithril";
import genericTests from "./tests-generic";
// import createSettingsDialog from "./components/settings-dialog";

const mithrilTests = ({ Dialog, renderer: h }) => {

  // const settingsDialog = createSettingsDialog({ renderer, keys, dialog, Menu, List, ListTile });

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
    //           onclick: () => dialog.show(settingsDialog)
    //         }
    //       }
    //     )
    //   }
    // },
  ];
    
};

export default []
  .concat(genericTests({ Dialog, Button, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ Dialog, Button, RaisedButton, renderer, keys }));
