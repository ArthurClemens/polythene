import { addLayoutStyles, addTypography } from "polythene-css";
import Page from "./Page";
import { renderer as h, List, ListTile } from "polythene-mithril";
import routes from "./routes";

addLayoutStyles();
addTypography();

const index = {
  view: () =>
    [
      h(List,
        routes.map(route => (
          h(ListTile, {
            title: route.name,
            hoverable: true,
            url: {
              href: route.path,
              oncreate: h.route.link
            }
          })
        ))
      ),
    ]
};

h.route.prefix("#");
const mountNode = document.querySelector("#app");
const routeData = {
  "/": {
    onmatch: () => {
      return index;
    }
  }
};
routes.forEach(route => routeData[route.path] = {
  onmatch: () => {
    return Page(route, "/");
  }
});
h.route(mountNode, "/", routeData);
