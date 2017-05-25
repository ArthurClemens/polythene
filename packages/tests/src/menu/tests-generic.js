import menuItems from "./components/menu-items";
import simple from "./components/simple";
import opener from "./components/opener";
import sizes from "./components/sizes";
import position from "./components/position";
import settings from "./components/settings";
import themed from "./components/themed";

export default ({ renderer, keys, Menu, List, ListTile, RaisedButton, Shadow, IconButton }) => {

  const { themeColor, themedList, styledList } = themed({ renderer, Menu, List, ListTile });

  return [
    {
      name: "Menu items",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Menu items -- dark tone",
      className: "pe-dark-tone",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Simple menu (demo without state)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: simple, id: "simple" })
    },
    {
      name: "Positioning",
      interactive: true,
      exclude: true,
      component: position({ renderer, keys, Menu, List, ListTile, Shadow, IconButton })
    },
    {
      name: "Change setting and reposition according to selected item",
      interactive: true,
      exclude: true,
      component: settings({ renderer, keys, Menu, List, ListTile })
    },
    {
      name: "Themed (color and border radius)",
      component: {
        view: () =>
          renderer(Menu, {
            content: themedList,
            permanent: true,
            tone: "dark",
            className: "menu-tests-blue-menu"
          })
      }
    },
    {
      name: "Option: style",
      component: {
        view: () =>
          renderer(Menu, {
            content: styledList,
            permanent: true,
            tone: "dark",
            style: {
              backgroundColor: themeColor,
              color: "#fff"
            }
          })
      }
    },
    {
      name: "Option: size",
      component: sizes({ renderer, Menu, List, ListTile })
    },
  ];
};
