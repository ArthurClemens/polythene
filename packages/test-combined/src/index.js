import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import { rules as css } from "./styles";
import testPage from "./page";
import { tests } from "../tests/polythene/tests";

const pages = [
  {
    path: "/combined",
    name: "Polythene combined",
    tests: tests
  }
];

const index = {
  oncreate: () => 
    document.title = "Polythene components",
  view: () => [
    m(css.page, [
      m(css.pageTitle, "Polythene components"),
      m(css.list, pages.map(link => (
        m(css.listItem, m(css.link, {
          href: link.path,
          oncreate: m.route.link
        }, link.name))
      )))
    ])
  ]
};

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routes = {
  "/": index
};
pages.forEach(page => routes[page.path] = testPage(page.name, page.tests, "/"));
m.route(mountNode, "/", routes);

