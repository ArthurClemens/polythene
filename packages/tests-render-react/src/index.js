import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import "polythene-material-design";

import { rules as css } from "./styles";
import { renderer as h } from "polythene-react";
import Page from "./Page";
import routes from "./routes";


const Index = () =>
  h("div", null, [
    h(css.headerRow, null, h("div",
      {
        style: { backgroundColor: "rgba(255,255,255,.93)" }
      },
      h("span", "Polythene components")
    )),
    h("ul",
      {
        role: "nav",
        style: { padding: "88px 8px 24px 8px" }
      },
      routes.map(route => (
        h("li", null,
          h(Link, { to: route.path }, route.name)
        )
      ))
    )
  ]);

const routerMap = routes.map(route =>
  h(Route,
    {
      path: route.path,
      render: props => Page(Object.assign({}, props, { name: route.name, tests: route.tests, previous: "/" })),
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
ReactDOM.render((
  h(App)
), mountNode);
