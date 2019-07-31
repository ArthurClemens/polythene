import navigation from "./components/navigation";
import appDrawer from "./components/app-drawer";
import navigationList from "./components/navigation-list";
import { DrawerCSS, ToolbarCSS } from "polythene-css";

export default ({ h, a, Drawer, List, ListTile, Icon, Toolbar, IconButton, Button }) => {

  const createContent = ({ repeats, onClick }) => navigationList({ h, a, Icon, List, ListTile, repeats, onClick });

  DrawerCSS.addStyle(".tests-drawer-themed", {
    color_dark_background:          "rgba(69, 45, 157, 1)",
    color_dark_text:                "#fff",
    color_dark_backdrop_background: "rgba(69, 45, 157, .5)"
  });

  DrawerCSS.addStyle(".tests-drawer-themed-mini", {
    mini:         true,
    border:       false,
    shadow_depth: 3,
  });
  
  ToolbarCSS.addStyle(".tests-drawer-themed-toolbar", {
    color_light_background: "#e01d5f",
    color_dark_background:  "#e01d5f"
  });

  const createTopContent = ({ onClick }) => h(List,
    {
      tiles: [
        h(ListTile, {
          title: "Jennifer Barker",
          front: h(Icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
          }),
          hoverable: true,
          navigation: true,
          events: {
            [a.onclick]: onClick
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
      component: appDrawer({ h, a, Drawer, Button, createContent, drawerOpts: {
        fixed: true,
        backdrop: true,
        shadowDepth: 1
      }})
    },
    {
      name: "Standard (options: permanent, border, shadowDepth: 0)",
      component: navigation({ h, a, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        border: true,
        shadowDepth: 0,
      }})
    },
    {
      name: "Standard within box (options: floating, shadowDepth: 1)",
      component: navigation({ h, a, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        floating: true,
        shadowDepth: 1,
      }})
    },
    {
      name: "Default drawer (type cover) (with backdrop)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        backdrop: true,
        shadowDepth: 1,
      }})
    },
    {
      name: "Default drawer (modal with disableEscape: cannot be closed with backdrop tap or ESCAPE)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        modal: true,
        shadowDepth: 1,
        disableEscape: true
      }})
    },
    {
      name: "Anchor end",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        backdrop: true,
        anchor: "end",
        shadowDepth: 1,
      }})
    },
    {
      name: "Pushing drawer (push from left, without shadow, with border)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        push: true,
        border: true,
      }})
    },
    {
      name: "Pushing drawer including toolbar",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, pushToolbar: true, createTopContent, drawerOpts: {
        push: true,
        border: true,
      }})
    },
    {
      name: "Mini (expanding) drawer",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, createTopContent, drawerOpts: {
        border: true,
        mini: true,
      }})
    },
    {
      name: "Long content (scrolling list)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, repeats: 4, drawerOpts: {
        backdrop: true,
        shadowDepth: 1,
      }})
    },
    {
      name: "Transitions",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        backdrop: true,
        shadowDepth: 1,
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
      name: "Styled drawer",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        backdrop: true,
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        },
        shadowDepth: 1,
      }})
    },

    {
      section: "Themed",
    },
    {
      name: "Themed drawer",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, drawerOpts: {
        backdrop: true,
        className: "tests-drawer-themed",
        tone: "dark",
        shadowDepth: 1,
      }})
    },
    {
      name: "Themed (set variant to mini and shadow depth)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, createTopContent, drawerOpts: {
        permanent: true,
        className: "tests-drawer-themed-mini",
      }})
    },
    
    {
      section: "Dark tone",
    },
    {
      name: "Default drawer -- dark tone class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, dark: true, drawerOpts: {
        backdrop: true,
        shadowDepth: 1
      }})
    },

    {
      section: "Right-to-left",
    },
    {
      name: "Default drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, rtl: true, drawerOpts: {
        backdrop: true,
        shadowDepth: 1,
      }})
    },
    {
      name: "Mini drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, rtl: true, drawerOpts: {
        mini: true,
        border: true,
      }})
    },
    {
      name: "Anchor end (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, rtl: true, drawerOpts: {
        backdrop: true,
        anchor: "end",
        shadowDepth: 1
      }})
    },
    {
      name: "Pushing drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ h, a, Drawer, Toolbar, IconButton, showMenuIcon: true, createContent, rtl: true, drawerOpts: {
        push: true,
        border: true,
      }})
    },

  ];
};
