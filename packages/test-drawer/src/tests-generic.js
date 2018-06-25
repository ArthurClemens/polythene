import navigation from "./components/navigation";
import appDrawer from "./components/app-drawer";
import navigationList from "./components/navigation-list";
import { DrawerCSS, ToolbarCSS } from "polythene-css";

export default ({ keys, renderer, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }) => {

  const createContent = ({ repeats, onClick }) => navigationList({ renderer, keys, Icon, List, ListTile, repeats, onClick });

  DrawerCSS.addStyle(".drawer-tests-themed", {
    color_dark_background:          "rgba(69, 45, 157, 1)",
    color_dark_text:                "#fff",
    color_dark_backdrop_background: "rgba(69, 45, 157, .5)"
  });
  
  ToolbarCSS.addStyle(".tests-drawer-themed-toolbar", {
    color_light_background: "#e01d5f",
    color_dark_background:  "#e01d5f"
  });

  const h = renderer;

  const createTopContent = ({ onClick }) => h(List,
    {
      tiles: [
        h(ListTile, {
          title: "Jennifer Barker",
          key: "Jennifer Barker",
          front: h(Icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
          }),
          hoverable: true,
          navigation: true,
          events: {
            [keys.onclick]: onClick
          }
        })
      ]
    }
  );

  return [
    {
      name: "App drawer",
      interactive: true,
      exclude: true,
      component: appDrawer({ renderer, keys, Drawer, RaisedButton, createContent, drawerOpts: {
        fixed: true,
        backdrop: true,
        z: 1
      }})
    },
    {
      name: "Permanent (no shadow, with border)",
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        border: true,
        z: 0
      }})
    },
    {
      name: "Permanent, floating (with shadow)",
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        floating: true,
        z: 1
      }})
    },
    {
      name: "Default drawer (type cover) (can be closed with ESCAPE) (with backdrop)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        z: 1
      }})
    },
    {
      name: "Default drawer (modal, cannot be closed with ESCAPE or backdrop tap)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        modal: true,
        z: 1
      }})
    },
    {
      name: "Anchor end",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        anchor: "end",
        z: 1
      }})
    },
    {
      name: "Pushing drawer (push from left, without shadow, with border)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        push: true,
        border: true,
      }})
    },
    {
      name: "Pushing drawer including toolbar",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, pushToolbar: true, createTopContent, drawerOpts: {
        push: true,
        border: true,
      }})
    },
    {
      name: "Mini (expanding) drawer",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, createTopContent, drawerOpts: {
        border: true,
        mini: true,
      }})
    },
    {
      name: "Long content (scrolling list)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, repeats: 4, drawerOpts: {
        backdrop: true,
        z: 1
      }})
    },
    {
      name: "Themed drawer",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        className: "drawer-tests-themed",
        tone: "dark",
        z: 1
      }})
    },
    {
      name: "Styled drawer",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        },
        z: 1
      }})
    },
    {
      name: "Transitions",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        z: 1,
        transitions: {
          show: ({ backdropEl, contentEl }) => ({
            el: contentEl,
            duration: .5,
            timingFunction: "ease-out",
            before: () => {
              const rect = contentEl.getBoundingClientRect();
              const width = rect.width + 15; // add shadow
              contentEl.style.transitionProperty = "none";
              contentEl.style.top = 0;
              contentEl.style.left = `${-width}px`;
              contentEl.style.transitionDuration = ".3s";
              backdropEl.style.opacity = 0;
              backdropEl.style.transitionDuration = ".5s";
              backdropEl.style.transitionDelay = 0;
            },
            transition: () => {
              contentEl.style.transitionProperty = "left, opacity";
              contentEl.style.left = 0;
              backdropEl.style.opacity = 1;
            }
          }),
          hide: ({ backdropEl, contentEl }) => ({
            el: contentEl,
            duration: .7,
            timingFunction: "ease-in-out",
            before: () => {
              contentEl.style.transitionDuration = ".3s";
              backdropEl.style.transitionDuration = ".4s";
              backdropEl.style.transitionDelay = ".3s";
            },
            transition: () => {
              const rect = contentEl.getBoundingClientRect();
              const width = rect.width + 15; // add shadow
              contentEl.style.top = 0;
              contentEl.style.left = `${-width}px`;
              backdropEl.style.opacity = 0;
            }
          })
        }
      }})
    },
    {
      name: "Default drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        backdrop: true,
        z: 1,
      }})
    },
    {
      name: "Mini drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        mini: true,
        border: true,
      }})
    },
    {
      name: "Anchor end (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        backdrop: true,
        anchor: "end",
        z: 1
      }})
    },
    {
      name: "Pushing drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        push: true,
        border: true,
      }})
    },

    // Dark tone

    {
      name: "Default drawer -- dark tone class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, dark: true, drawerOpts: {
        backdrop: true,
        z: 1
      }})
    },

  ];
};
