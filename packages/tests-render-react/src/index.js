import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import { addLayoutStyles, addFastClick } from "polythene-utilities";
import { addTypography, addRoboto } from "polythene-material-design";
import { rules as css } from "./styles";
import { renderer as h, List, Toolbar, ListTile } from "polythene-react";
import Page from "./Page";
import routes from "./routes";
import ScrollToTop from "./ScrollToTop";

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
      h("span", "Polythene components for React")
    )
  );

const Index = () =>
  h("div", null, [
    NavBar(),
    h(List,
      {
        style: {
          padding: "88px 8px 24px 8px",
          margin: 0
        }
      },
      routes.map(route => (
        h(withRouter(({ history }) =>
          h(ListTile, {
            title: route.name,
            key: route.path,
            url: {
              href: route.path,
              onClick: e => (e.preventDefault(), history.push(route.path))
            }
          })
        ))
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
    h(ScrollToTop, null,
      h("div", routerMap)
    )
  )
);

const mountNode = document.querySelector("#app");
ReactDOM.render(h(App), mountNode);

