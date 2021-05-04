import { addLayoutStyles, addTypography } from "polythene-css";
import { rules as css } from "./styles";
import Page from "./Page";
import { List, ListTile, Toolbar, ToolbarTitle } from "polythene-mithril";
import { h } from "cyano-mithril";

import routes from "./routes";
import Footer from "./Footer";

addTypography();
addLayoutStyles();

const TITLE = "Polythene Components for Mithril";

const navBar = () =>
  h(
    css.headerRow,
    h(
      Toolbar,
      {
        style: { backgroundColor: "rgba(255,255,255,.93)" },
      },
      h(ToolbarTitle, {
        text: TITLE,
      })
    )
  );

const index = {
  oncreate: () => (document.title = TITLE),
  view: () => [
    navBar(),
    h(".navbar-spacer"),
    h(
      List,
      { className: "index-list" },
      routes.map((route) =>
        h(ListTile, {
          element: h.route.Link || "a", // let this work for Mithril 2.x
          title: route.name,
          hoverable: true,
          url: {
            href: route.path,
            oncreate: h.route.Link ? undefined : h.route.link, // let this work for Mithril 1.1.6
          },
        })
      )
    ),
    h(Footer),
  ],
};

if (typeof h.route.prefix === "function") {
  h.route.prefix("#");
} else {
  h.route.prefix = "#";
}
const mountNode = document.querySelector("#app");

const routeData = routes.reduce(
  (acc, route) => ((acc[route.path] = Page(route, "/")), acc),
  {
    "/": index,
  }
);
h.route(mountNode, "/", routeData);
