import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import { rules as css } from "./styles";
import testPage from "./page";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import toolbar from "polythene-toolbar";
import { tests as buttonTests } from "../tests/button/tests";
import { tests as cardTests } from "../tests/card/tests";
import { tests as checkboxTests } from "../tests/checkbox/tests";
import { tests as dialogTests } from "../tests/dialog/tests";
import { tests as fabTests } from "../tests/fab/tests";
import { tests as iconTests } from "../tests/icon/tests";
import { tests as iconButtonTests } from "../tests/icon-button/tests";
import { tests as listTests } from "../tests/list/tests";
import { tests as listTileTests } from "../tests/list-tile/tests";
import { tests as menuTests } from "../tests/menu/tests";
import { tests as radioButtonTests } from "../tests/radio-button/tests";
import { tests as raisedButtonTests } from "../tests/raised-button/tests";
import { tests as rippleTests } from "../tests/ripple/tests";
import { tests as searchTests } from "../tests/search/tests";
import { tests as shadowTests } from "../tests/shadow/tests";
import { tests as svgTests } from "../tests/svg/tests";
import { tests as switchButtonTests } from "../tests/switch-button/tests";
import { tests as tabsTests } from "../tests/tabs/tests";
import { tests as textfieldTests } from "../tests/textfield/tests";
import { tests as toolbarTests } from "../tests/toolbar/tests";
import { tests as cssTests } from "../tests/css/tests";
import { tests as cssClassesTests } from "../tests/css-classes/tests";
import { tests as themeTests } from "../tests/theme/tests";

const pages = [
  {
    path: "/button",
    name: "Button",
    tests: buttonTests
  },
  {
    path: "/raised-button",
    name: "Raised button",
    tests: raisedButtonTests
  },
  {
    path: "/card",
    name: "Card",
    tests: cardTests
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    tests: checkboxTests
  },
  {
    path: "/dialog",
    name: "Dialog",
    tests: dialogTests
  },
  {
    path: "/fab",
    name: "FAB",
    tests: fabTests
  },
  {
    path: "/icon",
    name: "Icon",
    tests: iconTests
  },
  {
    path: "/icon-button",
    name: "Icon Button",
    tests: iconButtonTests
  },
  {
    path: "/list",
    name: "List",
    tests: listTests
  },
  {
    path: "/list-tile",
    name: "List tile",
    tests: listTileTests
  },
  {
    path: "/menu",
    name: "Menu",
    tests: menuTests
  },
  {
    path: "/radio-button",
    name: "Radio button",
    tests: radioButtonTests
  },
  {
    path: "/ripple",
    name: "Ripple",
    tests: rippleTests
  },
  {
    path: "/search",
    name: "Search",
    tests: searchTests
  },
  {
    path: "/shadow",
    name: "Shadow",
    tests: shadowTests
  },
  {
    path: "/svg",
    name: "SVG",
    tests: svgTests
  },
  {
    path: "/switch-button",
    name: "Switch button",
    tests: switchButtonTests
  },
  {
    path: "/tabs",
    name: "Tabs",
    tests: tabsTests
  },
  {
    path: "/textfield",
    name: "Textfield",
    tests: textfieldTests
  },
  {
    path: "/toolbar",
    name: "Toolbar",
    tests: toolbarTests
  },
  {
    path: "/theme",
    name: "Custom theme",
    tests: themeTests
  },
  {
    path: "/css",
    name: "CSS tools",
    tests: cssTests
  },
  {
    path: "/css-classes",
    name: "CSS classes",
    tests: cssClassesTests
  }
];

const index = {
  oncreate: () => 
    document.title = "Polythene components",
  view: () =>
    [
      m(css.headerRow, m(toolbar,
        {
          style: {
            backgroundColor: "rgba(255,255,255,.93)"
          }
        },
        m("span", "Polythene components")
      )),
      m(list, {
        style: {
          padding: "88px 8px 24px 8px"
        }
      }, pages.map(link => (
        m(listTile, {
          title: link.name,
          url: {
            href: link.path,
            oncreate: m.route.link
          }
        })
      )))
    ]
};

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routes = {
  "/": index
};
pages.forEach(page => routes[page.path] = testPage(page.name, page.tests, "/"));
m.route(mountNode, "/", routes);

