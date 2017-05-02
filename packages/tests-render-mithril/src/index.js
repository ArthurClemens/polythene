import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import { rules as css } from "./styles";
import testPage from "./page";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import toolbar from "polythene-toolbar";
import { mithrilTests as tests } from "polythene-tests";

const pages = [
  {
    path: "/button",
    name: "Button",
    tests: tests.button
  },
  // {
  //   path: "/raised-button",
  //   name: "Raised button",
  //   tests: raisedButtonTests
  // },
  // {
  //   path: "/card",
  //   name: "Card",
  //   tests: cardTests
  // },
  // {
  //   path: "/checkbox",
  //   name: "Checkbox",
  //   tests: checkboxTests
  // },
  // {
  //   path: "/dialog",
  //   name: "Dialog",
  //   tests: dialogTests
  // },
  // {
  //   path: "/fab",
  //   name: "FAB",
  //   tests: fabTests
  // },
  {
    path: "/icon",
    name: "Icon",
    tests: tests.icon
  },
  // {
  //   path: "/icon-button",
  //   name: "Icon Button",
  //   tests: iconButtonTests
  // },
  // {
  //   path: "/list",
  //   name: "List",
  //   tests: listTests
  // },
  // {
  //   path: "/list-tile",
  //   name: "List tile",
  //   tests: listTileTests
  // },
  // {
  //   path: "/menu",
  //   name: "Menu",
  //   tests: menuTests
  // },
  // {
  //   path: "/md-spinner",
  //   name: "Material Design spinner",
  //   tests: mdSpinnerTests
  // },
  // {
  //   path: "/md-progress-spinner",
  //   name: "Material Design progress spinner",
  //   tests: mdEndSpinnerTests
  // },
  // {
  //   path: "/ios-spinner",
  //   name: "iOS spinner",
  //   tests: iOSSpinnerTests
  // },
  // {
  //   path: "/notification",
  //   name: "Notification",
  //   tests: notificationTests
  // },
  // {
  //   path: "/snackbar",
  //   name: "Notification - Snackbar",
  //   tests: snackbarTests
  // },
  // {
  //   path: "/radio-button",
  //   name: "Radio button",
  //   tests: radioButtonTests
  // },
  {
    path: "/ripple",
    name: "Ripple",
    tests: tests.ripple
  },
  // {
  //   path: "/search",
  //   name: "Search",
  //   tests: searchTests
  // },
  {
    path: "/shadow",
    name: "Shadow",
    tests: tests.shadow
  },
  // {
  //   path: "/slider",
  //   name: "Slider",
  //   tests: sliderTests
  // },
  {
    path: "/svg",
    name: "SVG",
    tests: tests.svg
  },
  // {
  //   path: "/switch-button",
  //   name: "Switch button",
  //   tests: switchButtonTests
  // },
  // {
  //   path: "/tabs",
  //   name: "Tabs",
  //   tests: tabsTests
  // },
  // {
  //   path: "/textfield",
  //   name: "Textfield",
  //   tests: textfieldTests
  // },
  // {
  //   path: "/toolbar",
  //   name: "Toolbar",
  //   tests: toolbarTests
  // },
  {
    path: "/theme",
    name: "Custom theme",
    tests: tests.theme
  },
  // {
  //   path: "/css",
  //   name: "CSS tools",
  //   tests: cssTests
  // },
  // {
  //   path: "/css-classes",
  //   name: "CSS classes",
  //   tests: cssClassesTests
  // }
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

