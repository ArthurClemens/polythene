import m from "mithril";
import { addLayoutStyles, addTypography } from "polythene-css";
import { rules as css } from "./styles";
import page from "./page";
import { renderer as h, List, ListTile, Toolbar } from "polythene-mithril";
import routes from "./routes";

addTypography();
addLayoutStyles();

const TITLE = "Polythene Components for Mithril";

const navBar = () =>
  h(css.headerRow, h(Toolbar,
    {
      style: { backgroundColor: "rgba(255,255,255,.93)" }
    },
    m("span", TITLE)
  ));

const index = {
  oncreate: () => (
    document.title = TITLE
  ),
  view: () =>
    [
      navBar(),
      h(".navbar-spacer"),
      h(List,
        { className: "index-list" },
        routes.map(route => (
          h(ListTile, {
            title: route.name,
            hoverable: true,
            url: {
              href: route.path,
              oncreate: m.route.link
            }
          })
        ))
      )
    ]
};

let scrollTop = document.scrollingElement.scrollTop;
m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routeData = {
  "/": {
    onmatch: () => {
      document.scrollingElement.scrollTop = scrollTop;
      return index;
    }
  }
};
routes.forEach(route => routeData[route.path] = {
  onmatch: () => {
    scrollTop = document.scrollingElement.scrollTop;
    return page(route.name, route.tests, "/");
  }
});
m.route(mountNode, "/", routeData);

