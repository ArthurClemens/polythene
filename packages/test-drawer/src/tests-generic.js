import navigation from "./components/navigation";
import appDrawer from "./components/app-drawer";
import navigationList from "./components/navigation-list";
import permanent from "./components/permanent";
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
      }})
    },
    {
      name: "Permanent (no shadow)",
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        bordered: true,
        z: 0
      }})
    },
    {
      name: "Permanent, floating (with shadow)",
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        permanent: true,
        floating: true,
      }})
    },
    {
      name: "Default drawer (type cover) (can be closed with ESCAPE) (with backdrop)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
      }})
    },
    {
      name: "Default drawer (modal, cannot be closed with ESCAPE or backdrop tap)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        modal: true,
      }})
    },
    {
      name: "Default drawer (themed)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        className: "drawer-tests-themed",
        tone: "dark"
      }})
    },

    {
      name: "Transitions",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        backdrop: true,
        transitions: {
          show: ({ contentEl }) => ({
            el: contentEl,
            showDuration: .24,
            showTimingFunction: "ease-out",
            beforeShow: () => {
              const rect = contentEl.getBoundingClientRect();
              const height = rect.height + 15; // add shadow
              contentEl.style.left = 0;
              contentEl.style.transform = `translate3d(0, -${height}px, 0)`;
            },
            show: () => {
              contentEl.style.transform = "translate3d(0, 0, 0)";
            }
          }),
          hide: ({ contentEl }) => ({
            el: contentEl,
            hideDuration: .24,
            hideTimingFunction: "ease-out",
            hide: () => {
              const rect = contentEl.getBoundingClientRect();
              const height = rect.height + 15; // add shadow
              contentEl.style.left = 0;
              contentEl.style.transform = `translate3d(0, -${height}px, 0)`;
            }
          })
        }
      }})
    },

    {
      name: "Pushing drawer (push from left, without shadow, bordered)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
        push: true,
        z: 0,
        bordered: true,
      }})
    },
    {
      name: "Pushing drawer including toolbar",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, pushToolbar: true, createTopContent, drawerOpts: {
        push: true,
        z: 0,
        bordered: true,
      }})
    },

    {
      name: "Mini (expanding) drawer",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, createTopContent, drawerOpts: {
        push: true,
        z: 0,
        bordered: true,
        mini: true,
        miniWidthCollapsed: 56,
        miniWidthExpanded: 220,
      }})
    },

    {
      name: "Long content (scrolling list)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, repeats: 4, drawerOpts: {
        backdrop: true,
      }})
    },
    {
      name: "Default drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        backdrop: true,
      }})
    },
    {
      name: "Mini drawer (RTL)",
      interactive: true,
      exclude: true,
      component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, rtl: true, drawerOpts: {
        push: true,
        mini: true,
        z: 0,
        bordered: true,
      }})
    },

    // Dark tone

    {
      name: "Permanent, floating (no shadow) -- dark tone class",
      className: "pe-dark-tone",
      component: permanent({ renderer, Drawer, createContent, drawerOpts: {
        z: 0
      } })
    },

  ];
};
