import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import { addTypography, addLayoutStyles } from "polythene-css";
import "polythene-css";
import { rules as css } from "./styles";
import { renderer as h, List, Toolbar, ToolbarTitle, ListTile, Snackbar, Notification } from "polythene-react";
import Page from "./Page";
import routes from "./routes";
import OnMatch from "./OnMatch";
import Footer from "./Footer";

addTypography();
addLayoutStyles();

const NavBar = () =>
  h(css.headerRow, null,
    h(Toolbar,
      {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      },
      h(ToolbarTitle, {
        text: "Polythene Components for React"
      })
    )
  );

const Index = () =>
  h("div", null, [
    NavBar(),
    h(".navbar-spacer", { key: "spacer" }),
    h(List,
      { className: "index-list" },
      routes.map(route => (
        h(withRouter(({ history }) =>
          h(ListTile, {
            title: route.name,
            key: route.path,
            hoverable: true,
            url: {
              href: route.path,
              onClick: e => (e.preventDefault(), history.push(route.path))
            }
          })
        ))
      ))
    ),
    h(Footer),
    h(Snackbar),
    h(Notification)
  ]);

const routerMap = routes.map(route =>
  h(Route,
    {
      path: route.path,
      render: props => Page(Object.assign({}, props, { name: route.name, tests: route.tests, doc: route.doc, previous: "/" })),
    }
  )).concat([
  h(Route, {
    exact: true,
    path: "/",
    component: Index
  })
]);

const App = () => (
  h(Router, null, 
    h(OnMatch, null,
      h("div", routerMap)
    )
  )
);

const mountNode = document.querySelector("#app");
ReactDOM.render(h(App), mountNode);

