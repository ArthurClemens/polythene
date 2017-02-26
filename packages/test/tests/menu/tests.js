import m from "mithril";
import { menu } from "polythene-menu";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";
import simpleMenuComponent, { simpleMenuContent } from "./simple";
import sizesMenu from "./sizes";
import menuItems from "./menu-items";
import settingsDialog from "./settings-dialog";
import positionComponent from "./position";
import settingsComponent from "./settings";

const themeColor = "#2196F3";
menu.theme(".menu-tests-blue-menu", {
  color_light_background: themeColor,
  border_radius: "5px"
});
listTile.theme(".menu-tests-blue-menu-list-tile", {
  color_light_title: "#fff",
  color_light_background: themeColor
});

const themedSimpleMenuContent = m(list, [
  m(listTile, {
    title: "Yes",
    ink: true,
    class: "menu-tests-blue-menu-list-tile"
  }),
  m(listTile, {
    title: "No",
    ink: true,
    class: "menu-tests-blue-menu-list-tile"
  })
]);

export const tests = [
  {
    name: "Simple menu - permanent",
    component: {
      view: () =>
        m(menu, {
          content: simpleMenuContent,
          permanent: true
        })
    }
  },
  {
    name: "Themed (color and border radius)",
    component: {
      view: () =>
        m(menu, {
          content: themedSimpleMenuContent,
          permanent: true,
          class: "menu-tests-blue-menu"
        })
    }
  },
  {
    name: "Simple menu",
    interactive: true,
    exclude: true,
    component: simpleMenuComponent
  },
  {
    name: "Menu items",
    component: menuItems
  },
  {
    name: "Dialog with option 'menu'",
    interactive: true,
    exclude: true,
    component: settingsDialog
  },
  {
    name: "Positioning",
    interactive: true,
    exclude: true,
    component: positionComponent
  },
  {
    name: "Change setting and reposition according to selected item",
    interactive: true,
    exclude: true,
    component: settingsComponent
  },
  {
    name: "Option: size",
    component: {
      view: () => [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(s => sizesMenu(s))
    }
  },

  // Dark theme
  {
    name: "Simple menu - permanent -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () =>
        m(menu, {
          content: simpleMenuContent,
          permanent: true
        })
    }
  },
  {
    name: "Menu items -- dark theme",
    class: "pe-dark-theme",
    component: menuItems
  },
  
];
