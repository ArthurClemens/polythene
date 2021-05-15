import ReactDOM from "react-dom";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import { addTypography, addLayoutStyles } from "polythene-css";
import { List, ListTile } from "polythene-react";
import Page from "./Page";
import routes from "./routes";
import { h } from "polythene-tests/utils/enhanced-renderer";
// import "./theme";
import "polythene-css";
import "./app.css";
import "./tests.css";

addTypography();
addLayoutStyles();

const TITLE = "Polythene for React";
const SECTION_TITLE = "Test specifications";

const Index = () =>
  h(".page", null, [
    h("nav", "Home"),
    h("h1.page__title", { key: "title" }, TITLE),
    h(
      ".page__content.page__content__list",
      null,
      h(
        List,
        {
          className: "page__content__navigation",
          header: { title: SECTION_TITLE },
        },
        routes.map((route) =>
          h(
            withRouter(({ history }) =>
              h(ListTile, {
                title: route.name,
                key: route.path,
                hoverable: true,
                url: {
                  href: route.path,
                  onClick: (e) => (
                    e.preventDefault(), history.push(route.path)
                  ),
                },
              })
            )
          )
        )
      )
    ),
  ]);

const routerMap = routes
  .map((route) =>
    h(Route, {
      exact: true,
      path: route.path,
      render: withRouter(({ history, ...props }) =>
        Page(
          Object.assign({}, props, {
            name: route.name,
            tests: route.tests,
            history,
          })
        )
      ),
    })
  )
  .concat([
    h(Route, {
      exact: true,
      path: "/",
      component: Index,
    }),
  ]);

const App = () => h(Router, null, h("div", routerMap));

const mountNode = document.querySelector("#app");
ReactDOM.render(h(App), mountNode);
