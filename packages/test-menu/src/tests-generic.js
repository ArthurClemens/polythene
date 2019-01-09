import exposed from "./components/exposed";
import menuDialog from "./components/menu-dialog";
import menuItems from "./components/menu-items";
import opener from "./components/opener";
import position from "./components/position";
import settings from "./components/settings";
import simple from "./components/simple";
import widths from "./components/widths";
import themed from "./components/themed";
import transitions from "./components/transitions";
import { MenuCSS } from "polythene-css";

export default ({ renderer, keys, Menu, List, ListTile, Button, Shadow, IconButton, Icon, Dialog }) => {

  const { themeColor, themedList, styledList } = themed({ renderer, Menu, List, ListTile });
  const h = renderer;

  MenuCSS.addStyle(".tests-menu-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
    animation_hide_css:        "opacity: 0; transform: translateY(20px);",
    animation_show_css:        "opacity: 1; transform: translateY(0);",
  });

  MenuCSS.addStyle(".tests-menu-themed-backdrop", {
    backdrop: true
  });

  MenuCSS.addStyle(".tests-menu-themed-shadow", {
    shadow_depth: 0,
  });

  MenuCSS.addStyle(".tests-menu-themed-behavior-top", {
    top_menu: true,
    z:        99999, // z-depth
    height:   "50vh"
  });

  const ExposedDropdown = exposed({ renderer, keys, Menu, List, ListTile, Button });
  const MenuItems = menuItems({ renderer, Menu, List, ListTile });

  const Opener = (dialogAttrs, label = "Open") => h(Button, {
    raised: true,
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  return [
    {
      name: "Menu items",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Exposed menu (simple, without state)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, button: Button, List, ListTile, dropdown: true, menuFn: simple, id: "simple" })
    },
    {
      name: "Exposed menu (options: origin, scrollTarget, compact list, height \"max\")",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                backgroundColor: "#dadada",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "exposed-menu", height: "max" })
          )
      }
    },
    {
      name: "Exposed menu (option: height 150)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                backgroundColor: "#dadada",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "exposed-menu-height-150", height: 150 })
          )
      }
    },
    {
      name: "Exposed menu (options: backdrop)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "exposed-backdrop", height: "max", backdrop: true })
          )
      }
    },
    {
      name: "Option: topMenu",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, button: Button, List, ListTile, menuFn: simple, id: "top-menu", height: "50vh", topMenu: true, exposed: false })
    },
    {
      name: "Dropdown menu (option: origin)",
      interactive: true,
      exclude: true,
      component: position({ renderer, keys, Menu, List, ListTile, Shadow, IconButton })
    },
    {
      name: "Dropdown menu (option: reposition) (positioned to the selected item)",
      interactive: true,
      exclude: true,
      component: settings({ renderer, keys, Menu, List, ListTile })
    },
    {
      name: "Dialog menu (dialog with option: menu)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(menuDialog({ renderer, keys, Icon, List, ListTile, Dialog }))
      }
    },
    {
      name: "Option: transitions",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, Button, List, ListTile, menuFn: transitions, id: "transitions",
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
      name: "Option: showDelay, hideDelay, showDuration, hideDuration",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, Button, List, ListTile, menuFn: transitions, id: "showDelay",
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
      name: "Option: width",
      component: widths({ renderer, Menu, List, ListTile })
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
      section: "Themed",
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
      name: "Themed (backdrop)",
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "themed-backdrop", height: "max", className: "tests-menu-themed-backdrop" })
          )
      }
    },
    {
      name: "Themed (shadow)",
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "themed-shadow", height: "max", className: "tests-menu-themed-shadow" })
          )
      }
    },
    {
      name: "Transitions as theme",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Menu, Button, List, ListTile, menuFn: transitions, id: "theme-transitions",
        className: "tests-menu-transitions"
      })
    },
    {
      name: "Themed behavior: set top menu",
      component: opener({ renderer, keys, Menu, button: Button, List, ListTile, menuFn: simple, id: "top-menu-themed", exposed: false, className: "tests-menu-themed-behavior-top" })
    },

    {
      section: "Dark tone",
    },
    {
      name: "Menu items -- dark tone",
      className: "pe-dark-tone",
      component: menuItems({ renderer, Menu, List, ListTile })
    },
    {
      name: "Exposed menu (options: backdrop) -- dark tone",
      className: "pe-dark-tone",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                height: "300px",
                padding: "0 10px"
              }
            },
            h(ExposedDropdown, { id: "exposed-backdrop-dark", height: "max", backdrop: true })
          )
      }
    },

    {
      section: "Right-to-left",
    },
    {
      name: "Menu items (RTL)",
      component: {
        view: () => 
          h("div", { className: "pe-rtl" },
            h(MenuItems)
          )
      }
    },
  ];
};
