import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import { addTypography, addLayoutStyles } from "polythene-css";
import "polythene-css";
import { renderer as h, List, ListTile } from "polythene-react";
import Page from "./Page";
import routes from "./routes";

addTypography();
addLayoutStyles();

const Index = () =>
  h("div", null, [
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
  ]);

const routerMap = routes.map(route =>
  h(Route,
    {
      exact: true,
      path: route.path,
      render: props => Page(Object.assign({}, props, { name: route.name, tests: route.tests })),
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
    h("div", routerMap)
  )
);

const mountNode = document.querySelector("#app");
ReactDOM.render(h(App), mountNode);
