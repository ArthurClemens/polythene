import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button } from "polythene-mithril";
import genericTests from "./tests-generic";
import AppDrawer from "./components/app-drawer-mithril";
import navigationList from "./components/navigation-list";

const mithrilTests = () => {

  const h = renderer;
  const createContent = ({ repeats, onClick }) => navigationList({ renderer, keys, Icon, List, ListTile, repeats, onClick });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "App drawer",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          h(AppDrawer, {
            fixed: true,
            backdrop: true,
            createContent
          })
      }
    },
  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }))
  .concat(mithrilTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }));
