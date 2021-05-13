import m from "mithril";
import { addLayoutStyles, addTypography } from "polythene-css";
import Page from "./Page";
import { List, ListTile } from "polythene-mithril";
import routes from "./routes";

addLayoutStyles();
addTypography();

const index = {
  view: () =>
    m(
      List,
      routes.map((route) =>
        m(ListTile, {
          element: m.route.Link,
          title: route.name,
          hoverable: true,
          url: {
            href: route.path,
          },
        })
      )
    ),
};

if (typeof m.route.prefix === "function") {
  m.route.prefix("#");
} else {
  m.route.prefix = "#";
}
const mountNode = document.querySelector("#app");
const routeData = {
  "/": {
    onmatch: () => {
      return index;
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
m.route(mountNode, "/", routeData);
