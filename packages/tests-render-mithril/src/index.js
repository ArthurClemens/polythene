import m from "mithril";
import { addLayoutStyles, addFastClick } from "polythene-utilities";
import { addTypography, addRoboto } from "polythene-material-design";
import { rules as css } from "./styles";
import page from "./page";
import { renderer as h, List, ListTile, Toolbar } from "polythene-mithril";
import routes from "./routes";

addTypography();
addRoboto();
addLayoutStyles();
addFastClick();

const navBar = () =>
  h(css.headerRow, h(Toolbar,
    {
      style: {
        backgroundColor: "rgba(255,255,255,.93)"
      }
    },
    m("span", "Polythene components")
  ));

const index = {
  oncreate: () => 
    document.title = "Polythene components",
  view: () =>
    [
      navBar(),
      h(List,
        {
          style: {
            padding: "88px 8px 24px 8px"
          }
        }, routes.map(route => (
          h(ListTile, {
            title: route.name,
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

