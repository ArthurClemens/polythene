import opener from "./components/opener";
import navigationList from "./components/navigation-list";
import permanent from "./components/permanent";
import { DrawerCSS } from "polythene-css";

export default ({ keys, renderer, Drawer, List, ListTile, Icon, Toolbar, IconButton }) => {

  const createContent = ({ repeats, onClick }) => navigationList({ renderer, keys, Icon, List, ListTile, repeats, onClick });

  DrawerCSS.addStyle(".drawer-tests-small", {
    content_max_width: 220,
  });

  return [
    {
      name: "Permanent, floating (no shadow)",
      component: permanent({ renderer, Drawer, createContent, drawerOpts: {
        z: 0
      } })
    },
    {
      name: "Permanent, floating (shadow depth 1)",
      component: permanent({ renderer, Drawer, createContent, drawerOpts: {
        z: 1
      } })
    },
    {
      name: "Sliding drawer (slide over from left, with backdrop, can be closed with ESCAPE)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
      }})
    },
    {
      name: "Sliding drawer (modal, cannot be closed with ESCAPE or backdrop tap)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        modal: true,
      }})
    },
    {
      name: "Pushing drawer (push from left, without shadow, bordered) (themed small width)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        push: true,
        z: 0,
        className: "drawer-tests-small",
        bordered: true,
      }})
    },
    {
      name: "Pushing drawer including toolbar",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, Toolbar, IconButton, createContent, pushToolbar: true, drawerOpts: {
        push: true,
        z: 0,
        className: "drawer-tests-small",
        bordered: true,
      }})
    },
    {
      name: "Long content (scrolling list)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, Toolbar, IconButton, createContent, repeats: 4, drawerOpts: {
        backdrop: true,
      }})
    },
    
  ];
};
