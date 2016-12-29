import m from "mithril";
import "polythene-fastclick";
import "polythene-theme";
import { tidy } from "../scripts/render";
import { rules as css } from "./styles";
import { tests as polytheneTests } from "../tests/polythene/tests";
import { tests as buttonTests } from "../tests/button/tests";
import { tests as configTests } from "../tests/config/tests";
import { tests as iconTests } from "../tests/icon/tests";
import { tests as rippleTests } from "../tests/ripple/tests";
import { tests as shadowTests } from "../tests/shadow/tests";
import { tests as svgTests } from "../tests/svg/tests";

const testsPage = (name, tests) => ({
  view: () => [
    m(css.headerRow, [
      m(css.link, {
        href: "/",
        oncreate: m.route.link
      }, "Components"),
      m(css.separator, "/"),
      m("span", name)
    ]),
    m(css.tests, {class: `test-${name.toLowerCase()}`}, tests.map(test => {
      const raw = tidy(m(test.component, test.attrs));
      return m([css.resultRow, test.interactive ? css.interactive : null].join(""), [
        m(css.resultTitle, test.name),
        m(css.result, m(css.content, m(test.component, test.attrs))),
        m(css.rawResult, raw)
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
    path: "/config",
    name: "Custom config",
    tests: configTests
  },
  {
    path: "/icon",
    name: "Icon",
    tests: iconTests
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
  }
];

const index = {
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

