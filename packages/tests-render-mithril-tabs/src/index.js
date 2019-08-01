import m from "mithril";
import { addLayoutStyles, addTypography } from "polythene-css";

import {
  Tabs,
  Button,
} from "polythene-mithril";

addTypography();
addLayoutStyles();

const routeData = [
  {
    name: "Home",
    route: "/",
    tabIndex: 0,
  },
  {
    name: "Search",
    route: "/search",
    tabIndex: 0,
  },
  {
    name: "Matches",
    route: "/matches",
    tabIndex: 1,
  },
  {
    name: "History",
    route: "/history",
    tabIndex: 2,
  }
];

const getTabs = currentRoute => {
  const firstTabRoute = currentRoute === "/"
    ? "/search"
    : "/";
  const selectedIndex = routeData.reduce((acc, d) => (
    d.route === currentRoute
      ? d.tabIndex
      : acc
  ), undefined);
  const tabs = [
    {
      label: "Search",
      element: m.route.Link,
      url: {
        href: firstTabRoute,
      }
    },
    {
      label: "Matches",
      element: m.route.Link,
      url: {
        href: "/matches",
      }
    },
    {
      label: "History",
      element: m.route.Link,
      url: {
        href: "/history",
      }
    }
  ];
  return { tabs, selectedIndex };
}; 

const Navigation = {
  view: ({ attrs: { currentRoute } }) => {    
    const { tabs, selectedIndex } = getTabs(currentRoute);
    return m(Tabs, {
      tabs,
      autofit: true,
      activeSelected: true,
      selectedTabIndex: selectedIndex,
    });
  }
};

const App = {
  view: () => {
    const currentRoute = m.route.get() || "/"; 
    return m(".page", [
      m(".row", [
        m("h1", "Polythene for Mithril"),
        m("h2", "The first tab toggles routes home and search")
      ]),
      m(".row", 
        m(".component", [
          m(Navigation, { currentRoute }),
          m(".tabs-body",
            m("h1", currentRoute)
          ),
        ])
      ),
      m(".row",
        m(".component", [
          m("p", "Go to:"),
          m("ul", routeData.map(({ name, route }) =>
            m("li", 
              m(Button, {
                label: name,
                element: m.route.Link,
                url: {
                  href: route,
                },
              })
            )
          ))
        ])
      )
    ])
  }
};

m.route.prefix = "#";
const routes = routeData.reduce((acc, { route }) => (
  acc[route] = App,
  acc
), {});

m.route(document.querySelector("#root"), "/", routes);
