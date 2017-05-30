import { renderer, keys, RaisedButton, Menu, List, ListTile, Shadow, IconButton } from "polythene-mithril";
import genericTests from "./tests-generic";
import dialog from "polythene-dialog";
import createSettingsDialog from "./components/settings-dialog";

const mithrilTests = ({ Menu, List, ListTile, renderer: h }) => {

  const settingsDialog = createSettingsDialog({ renderer, keys, dialog, Menu, List, ListTile });

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
          h(RaisedButton, {
            label: "Open",
            events: {
              onclick: () => dialog.show(settingsDialog)
            }
          }
        )
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }))
  .concat(mithrilTests({ Menu, List, ListTile, RaisedButton, Shadow, IconButton, renderer, keys }));
