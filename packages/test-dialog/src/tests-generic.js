import { shortText, longText, cancelOkButtons } from "./shared";
import fullScreen from "./components/full-screen";
import fullwidth from "./components/fullwidth";
// import menu from "./components/menu";
import menuDialog from "./components/menu-dialog";
import replaceDialog from "./components/replace-dialog";
// import replacePane from "./components/replace-pane";
import { DialogCSS, ToolbarCSS } from "polythene-css";

export default ({ renderer, keys, Dialog, Button, RaisedButton, Toolbar, ToolbarTitle, IconButton, List, ListTile }) => {

  const h = renderer;

  const Opener = (dialogAttrs, label = "Open") => h(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  const OpenerWithPromise = (dialogAttrs, label = "Open") => h(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs).then(id => 
        console.log("dialog shown: " + id) // eslint-disable-line no-console
      ) 
    }
  });

  DialogCSS.addStyle(".dialog-tests-rounded-blue", {
    border_radius:                   10,
    color_light_background:          "#2196F3",
    color_light_text:                "#fff",
    color_light_backdrop_background: "rgba(243, 138, 32, 0.35)",
  });

  DialogCSS.addStyle(".dialog-tests-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
    animation_hide_css:        "opacity: 0; transform: translate3d(0, 20px, 0);",
    animation_show_css:        "opacity: 1; transform: translate3d(0, 0, 0);"
  });

  DialogCSS.addStyle(".tests-dialog-themed-behavior-full-screen", {
    full_screen: true
  });

  DialogCSS.addStyle(".tests-dialog-themed-behavior-modal", {
    modal:    true,
    backdrop: true
  });

  ToolbarCSS.addStyle(".tests-dialog-themed-toolbar", {
    color_light_background: "#2196F3",
    color_dark_background: "#333",
  });

  return [
    {
      name: "Option: body",
      exclude: true,
      interactive: true,
      component: {
        view: () => 
          Opener({ body: "Hello" })
      }
    },
    {
      name: "Themed pane (color, border radius, backdrop color)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            content: h("div", "Hello"),
            className: "dialog-tests-rounded-blue",
            backdrop: true
          })
      }
    },
    {
      name: "Styled pane",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: "Hello",
            style: {
              background: "#fff59d",
              padding: "1.5rem"
            }
          })
      }
    },
    {
      name: "Option: transitions",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          transitions: {
            show: ({ el }) => ({
              duration:   .5,
              before:     () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
              transition: () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
            }),
            hide: ({ el }) => ({
              duration:   .5,
              transition: () => el.style.opacity = 0,
            })
          }
        })
      }
    },
    {
      name: "Transitions as theme",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          className: "dialog-tests-transitions"
        })
      }
    },
    {
      name: "Option: showDelay, hideDelay, showDuration, hideDuration, showTimingFunction, hideTimingFunction",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          showDuration: .9,
          hideDuration: 1.2,
          hideDelay: .3,
          showTimingFunction: "ease-in-out",
          hideTimingFunction: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
        })
      }
    },
    {
      name: "Option: z (0)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: renderer.trust(shortText),
            z: 0
          })
      }
    },
    {
      name: "Option: z (5)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: renderer.trust(shortText),
            z: 5
          })
      }
    },
    {
      name: "Option: title and body (long text)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            title: "Long dialog with a very long title that surely won't fit here",
            body: renderer.trust(longText),
            footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog })
          })
      }
    },
    {
      name: "Option: panesOptions",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            panesOptions: [{
              title: "Long dialog with a very long title that surely won't fit here",
              body: renderer.trust(longText),
              footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog })
            }]
          })
      }
    },
    {
      name: "Option: modal with backdrop",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            title: "Long dialog with a very long title that surely won't fit here",
            body: renderer.trust(longText),
            footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog }),
            modal: true,
            backdrop: true
          })
      }
    },
    {
      name: "Option: fullScreen (and show second dialog on top)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullScreen({ renderer, keys, Toolbar, IconButton, Button, Dialog, isFullscreen: true }))
      }
    },
    {
      name: "Closing dialogs with ESCAPE (one by one)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullScreen({ renderer, keys, Toolbar, IconButton, Button, Dialog, isFullscreen: false }))
      }
    },
    {
      name: "Vertically stacked buttons",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullwidth({ renderer, keys, Dialog, Button }))
      }
    },
    {
      name: "Vertically stacked buttons (RTL)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullwidth({ renderer, keys, Dialog, Button, className: "pe-rtl" }))
      }
    },
    // {
    //   name: "Option: menu",
    //   interactive: true,
    //   exclude: true,
    //   component: {
    //     view: () =>
    //       Opener(menu({ renderer, keys, Icon, List, ListTile, Dialog }))
    //   }
    // },
    {
      name: "Settings dialog",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(menuDialog({ renderer, keys, List, ListTile, Dialog }))
      }
    },
    {
      name: "Replace dialog",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(replaceDialog({ renderer, keys, Button, Dialog }))
      }
    },

    // replacePane example works with Mithril, but needs an explicit state update with React
    // {
    //   name: "Replace pane",
    //   interactive: true,
    //   exclude: true,
    //   component: {
    //     view: () => {
    //       const paneAttrs = replacePane({ renderer, keys, Button });
    //       return Opener(paneAttrs);
    //     }
    //   }
    // },

    // Feedback and timing

    {
      name: "Promise shown",
      interactive: true,
      exclude: true,
      component: {
        view: () => OpenerWithPromise({
          body: "Hello"
        })
      }
    },
    {
      name: "Option: didShow",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          didShow: id => console.log("dialog shown: " + id) // eslint-disable-line no-console
        })
      }
    },
    {
      name: "Option: didHide",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          didHide: id => console.log("dialog hidden: " + id) // eslint-disable-line no-console
        })
      }
    },
    {
      name: "Option: Toolbar as custom header and footer, fullBleed body",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          header: h(Toolbar, {
            content: [
              h(ToolbarTitle, { key: "header", text: "Header" })
            ],
            tone: "light",
            className: "tests-dialog-themed-toolbar"
          }),
          body: "Body", 
          fullBleed: true,
          footer: h(Toolbar, {
            content: [
              h(ToolbarTitle, { key: "footer", text: "Footer" })
            ],
            tone: "dark",
            className: "tests-dialog-themed-toolbar"
          }),
        })
      }
    },

    // Themed behavior

    {
      name: "Themed behavior (set modal, using a theme)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener({
            title: "Long dialog with a very long title that surely won't fit here",
            body: renderer.trust(longText),
            footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog }),
            className: "tests-dialog-themed-behavior-modal"
          })
      }
    },
    {
      name: "Themed behavior (set fullscreen, using a theme)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullScreen({ renderer, keys, Toolbar, IconButton, Button, Dialog, isFullscreen: false, className: "tests-dialog-themed-behavior-full-screen", }))
      }
    },
  ];
};
