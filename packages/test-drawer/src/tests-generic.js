import opener from "./components/opener";
import permanent from "./components/permanent";
import sliding from "./components/sliding";
import navigationList from "./components/navigation-list";

export default ({ keys, renderer, Drawer, RaisedButton, List, ListTile, Icon }) => {

  const NavigationList = navigationList({ renderer, keys, Icon, List, ListTile });

  return [
    {
      name: "Permanent, floating",
      component: permanent({ renderer, Drawer, content: NavigationList })
    },
    {
      name: "Sliding drawer (push from left)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, content: NavigationList, drawerFn: sliding, backdrop: false })
    },
    {
      name: "Sliding drawer (push from left, with backdrop)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, content: NavigationList, drawerFn: sliding, backdrop: true })
    },
    
  ];
};
