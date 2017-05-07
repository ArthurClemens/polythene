import m from "mithril";
import { addLayoutStyles, addFastClick } from "polythene-utilities";
import { addTypography, addRoboto } from "polythene-material-design";
import { rules as css } from "./styles";
import page from "./page";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import toolbar from "polythene-toolbar";
import routes from "./routes";

addTypography();
addRoboto();
addLayoutStyles();
addFastClick();

const index = {
  oncreate: () => 
    document.title = "Polythene components",
  view: () =>
    [
      m(css.headerRow, m(toolbar,
        {
          style: {
            backgroundColor: "rgba(255,255,255,.93)"
          }
        },
        m("span", "Polythene components")
      )),
      m(list, {
        style: {
          padding: "88px 8px 24px 8px"
        }
      }, routes.map(route => (
        m(listTile, {
          title: route.name,
          url: {
            href: route.path,
            oncreate: m.route.link
          }
        })
      )))
    ]
};

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routeData = {
  "/": index
};
routes.forEach(route => routeData[route.path] = page(route.name, route.tests, "/"));
m.route(mountNode, "/", routeData);

