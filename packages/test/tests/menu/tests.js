import m from "mithril";
import { menu } from "polythene-menu";
import simpleMenuComponent, { simpleMenuContent } from "./simple";
import sizesMenu from "./sizes";
import menuItems from "./menu-items";
import settingsDialog from "./settings-dialog";
import positionComponent from "./position";
import settingsComponent from "./settings";

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
    exclude: true,
    component: settingsDialog
  },
  {
    name: "Positioning",
    exclude: true,
    component: positionComponent
  },
  {
    name: "Change setting and reposition according to selected item",
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
    exclude: true,
    component: menuItems
  },
  
];
