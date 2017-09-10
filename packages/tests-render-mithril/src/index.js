import m from "mithril";
import * as polytheneCSS from "polythene-css";
import { addFastClick } from "polythene-fastclick";
import { addLayoutStyles, addTypography } from "polythene-style";
import { rules as css } from "./styles";
import page from "./page";
import { renderer as h, List, ListTile, Toolbar } from "polythene-mithril";
import routes from "./routes";

polytheneCSS.SVG.addStyle(".tests-svg-themed-svg", {
  color_light: "red",
  color_dark: "orange"
});

addTypography();
addLayoutStyles();
addFastClick();

const TITLE = "Polythene Components for Mithril";

const navBar = () =>
  h(css.headerRow, h(Toolbar,
    {
      style: { backgroundColor: "rgba(255,255,255,.93)" }
    },
    m("span", TITLE)
  ));

const index = {
  oncreate: () => document.title = TITLE,
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

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routeData = {
  "/": index
};
routes.forEach(route => routeData[route.path] = page(route.name, route.tests, "/"));
m.route(mountNode, "/", routeData);

