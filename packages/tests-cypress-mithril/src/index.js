import h from "mithril";
import { addLayoutStyles, addTypography } from "polythene-css";
import Page from "./page";
import { List, ListTile } from "polythene-mithril";
import routes from "./routes";
import "./app.css";
import "./tests.css";

addLayoutStyles();
addTypography();

const TITLE = "Polythene for Mithril";
const SECTION_TITLE = "Test specifications";

const Index = {
  view: () =>
    h(".page", null, [
      h("nav", "Home"),
      h("h1.page__title", TITLE),
      h(
        ".page__content.page__content__list",
        null,
        h(
          List,
          {
            className: "page__content__navigation",
            header: { title: SECTION_TITLE },
          },
          routes.map((route) =>
            h(ListTile, {
              element: h.route.Link,
              title: route.name,
              hoverable: true,
              url: {
                href: route.path,
              },
            })
          )
        )
      ),
    ]),
};

h.route.prefix = "#";

const mountNode = document.querySelector("#app");
const routeData = {
  "/": {
    onmatch: () => {
      return Index;
    },
  },
};
routes.forEach(
  (route) =>
    (routeData[route.path] = {
      onmatch: () => {
        return Page(route, "/");
      },
    })
);
h.route(mountNode, "/", routeData);
