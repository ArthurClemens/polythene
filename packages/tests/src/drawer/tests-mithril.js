import { Drawer, List, ListTile, Icon, Toolbar, IconButton, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";
import AppDrawer from "./components/app-drawer-mithril";
import navigationList from "./components/navigation-list";
import { ResponsiveDrawer } from "./components/responsive-mithril";

const mithrilTests = () => {

  const createContent = ({ repeats, onClick }) => navigationList({ h, a, Icon, List, ListTile, repeats, onClick });

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
    {
      name: "Responsive drawer",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          h(ResponsiveDrawer)
      }
    },
  ];
};

export default []
  .concat(genericTests({ h, a, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }))
  .concat(mithrilTests({ h, a, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }));
