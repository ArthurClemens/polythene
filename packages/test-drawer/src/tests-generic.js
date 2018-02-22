import opener from "./components/opener";
import navigationList from "./components/navigation-list";

export default ({ keys, renderer, Drawer, RaisedButton, List, ListTile, Icon }) => {

  const NavigationList = navigationList({ renderer, keys, Icon, List, ListTile });

  return [
    // {
    //   name: "Permanent, floating",
    //   component: permanent({ renderer, Drawer, content: NavigationList })
    // },
    {
      name: "Sliding drawer (slide over from left, with backdrop)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, name: "over", drawerOpts: {
        content: NavigationList,
        backdrop: true,
      }})
    },
    {
      name: "Pushing drawer (push from left, without shadow)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, name: "push", drawerOpts: {
        content: NavigationList,
        push: true,
        z: 0
      }})
    },
    
  ];
};
