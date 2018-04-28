import menuItems from "./components/menu-items";
import simple from "./components/simple";
import opener from "./components/opener";
import sizes from "./components/sizes";
import position from "./components/position";
import settings from "./components/settings";
import themed from "./components/themed";
import transitions from "./components/transitions";
import { MenuCSS } from "polythene-css";

export default ({ renderer, keys, Menu, List, ListTile, RaisedButton, Shadow, IconButton }) => {

  const { themeColor, themedList, styledList } = themed({ renderer, Menu, List, ListTile });
  const h = renderer;

  MenuCSS.addStyle(".menu-tests-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
    animation_hide_css:        "opacity: 0; transform: translateY(20px);",
    animation_show_css:        "opacity: 1; transform: translateY(0);",
  });

  return [
    {
      name: "Menu items",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Menu items -- dark tone",
      className: "pe-dark-tone",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Simple menu (demo without state)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: simple, id: "simple" })
    },
    {
      name: "Positioning",
      interactive: true,
      exclude: true,
      component: position({ renderer, keys, Menu, List, ListTile, Shadow, IconButton })
    },
    {
      name: "Change setting and reposition according to selected item",
      interactive: true,
      exclude: true,
      component: settings({ renderer, keys, Menu, List, ListTile })
    },
    {
      name: "Themed (color and border radius)",
      component: {
        view: () =>
          h(Menu, {
            content: themedList,
            permanent: true,
            tone: "dark",
            className: "menu-tests-blue-menu"
          })
      }
    },
    {
      name: "Option: style",
      component: {
        view: () =>
          h(Menu, {
            content: styledList,
            permanent: true,
            tone: "dark",
            style: {
              backgroundColor: themeColor,
              color: "#fff"
            }
          })
      }
    },
    {
      name: "Option: transitions",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: transitions, id: "transitions",
        transitionOptions: {
          transitions: {
            show: ({ el }) => ({
              el,
              duration:   .5,
              before:     () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
              transition: () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
            }),
            hide: ({ el }) => ({
              el,
              duration:   .5,
              transition: () => el.style.opacity = 0,
            })
          }
        }
      })
    },
    {
      name: "Transitions as theme",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: transitions, id: "theme-transitions",
        className: "menu-tests-transitions"
      })
    },
    {
      name: "Option: showDelay, hideDelay, showDuration, hideDuration",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, RaisedButton, List, ListTile, menuFn: transitions, id: "showDelay",
        transitionOptions: {
          showDuration: .9,
          hideDuration: 1.2,
          hideDelay: .3,
          showTimingFunction: "ease-in-out",
          hideTimingFunction: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
        }
      })
    },
    {
      name: "Option: size",
      component: sizes({ renderer, Menu, List, ListTile })
    },
    {
      name: "Menu items (RTL)",
      component: {
        view: () => 
          h("div", { className: "pe-rtl" },
            h(menuItems({ renderer, Menu, List, ListTile }))
          )
      }
    },
  ];
};
