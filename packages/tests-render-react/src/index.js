import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { addLayoutStyles, addFastClick } from "polythene-utilities";
import { addTypography, addRoboto } from "polythene-material-design";
import { rules as css } from "./styles";
import { renderer as h, Toolbar } from "polythene-react";
import Page from "./Page";
import routes from "./routes";

addTypography();
addRoboto();
addLayoutStyles();
addFastClick();

const NavBar = () =>
  h(css.headerRow, null,
    h(Toolbar,
      {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      },
      h("span", "Polythene components")
    )
  );

const Index = () =>
  h("div", null, [
    NavBar(),
    h("ul",
      {
        role: "nav",
        style: {
          padding: "88px 8px 24px 8px",
          margin: 0
        }
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
