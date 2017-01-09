import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import { tidy } from "../scripts/render";
import { rules as css } from "./styles";
import { tests as polytheneTests } from "../tests/polythene/tests";
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

import { tests as cssTests } from "../tests/css/tests";
import { tests as cssClassesTests } from "../tests/css-classes/tests";
import { tests as themeTests } from "../tests/theme/tests";

const generatedHtml = {
  oninit: vnode => (
    vnode.state.open = false,
    vnode.state.toggle = () => vnode.state.open = !vnode.state.open
  ),
  view: vnode => {
    const test = vnode.attrs.test;
    const raw = tidy(m(test.component, test.attrs, test.children));
    return m(css.rawResult, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle,
    }, [
      m(".html", {}, raw),
      m(".ellipsis", "...")
    ]);
  }
};

const testsPage = (name, tests) => ({
  oncreate: () => 
    document.title = name,
  view: () => [
    m(css.headerRow, [
      m(css.link, {
        href: "/",
        oncreate: m.route.link
      }, "Components"),
      m(css.separator, "/"),
      m("span", name)
    ]),
    m([css.tests, css.results].join(" "), {
      class: `tests-${name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()}`
    }, tests.map(test => {
      const resultId = `test-${(test.name).replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()}`;
      return m([css.resultRow, test.interactive ? css.interactive : null].join(""), {
        key: resultId,
        class: [resultId, test.class || null].join(" "),
      }, [
        m(css.resultTitle, {
          class: "result-title"
        }, test.name),
        m(css.result, m(css.content, m(test.component, test.attrs, test.children))),
        m(generatedHtml, {test})
      ]);
    }))
  ]
});

const pages = [
  {
    path: "/polythene",
    name: "Polythene",
    tests: polytheneTests
  },
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
pages.forEach(page => routes[page.path] = testsPage(page.name, page.tests));
m.route(mountNode, "/", routes);

