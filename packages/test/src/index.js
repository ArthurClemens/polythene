import m from "mithril";
import { tidy } from "../scripts/render";
import { rules as css } from "./styles";
import { tests as shadowTests } from "../tests/shadow/tests";
import { tests as buttonTests } from "../tests/button/tests";

const testsPage = (title, tests) => ({
  view: () => ([
    m(css.headerRow, m(css.link, {
      href: "/",
      oncreate: m.route.link
    }, "All components")),
    m(css.titleRow, m(css.pageTitle, title)),
    tests.map(test => {
      const raw = tidy(test.content);
      return m(css.resultRow, [
        m(css.resultTitle, test.name),
        m(css.result, m(css.content, test.content)),
        m(css.rawResult, raw)
      ]);
    })
  ])
});

const pages = [
  {
    path: "/button",
    name: "Button",
    tests: buttonTests
  },
  {
    path: "/shadow",
    name: "Shadow",
    tests: shadowTests
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

