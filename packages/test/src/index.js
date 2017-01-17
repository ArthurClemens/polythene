import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import { rules as css } from "./styles";
import testPage from "./page";
import { tests as buttonTests } from "../tests/button/tests";
import { tests as fabTests } from "../tests/fab/tests";
import { tests as iconTests } from "../tests/icon/tests";
import { tests as iconButtonTests } from "../tests/icon-button/tests";
import { tests as listTests } from "../tests/list/tests";
import { tests as listTileTests } from "../tests/list-tile/tests";
import { tests as raisedButtonTests } from "../tests/raised-button/tests";
import { tests as rippleTests } from "../tests/ripple/tests";
import { tests as shadowTests } from "../tests/shadow/tests";
import { tests as svgTests } from "../tests/svg/tests";
import { tests as tabsTests } from "../tests/tabs/tests";
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
    path: "/ripple",
    name: "Ripple",
    tests: rippleTests
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
    path: "/tabs",
    name: "Tabs",
    tests: tabsTests
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
    m(css.page, [
      m(css.pageTitle, "Polythene components"),
      m(css.list, pages.map(link => (
        m(css.listItem, m(css.link, {
          href: link.path,
          oncreate: m.route.link
        }, link.name))
      )))
    ])
};

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routes = {
  "/": index
};
pages.forEach(page => routes[page.path] = testPage(page.name, page.tests, "/"));
m.route(mountNode, "/", routes);

