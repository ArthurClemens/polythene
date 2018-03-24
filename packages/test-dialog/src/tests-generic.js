import { shortText, longText, cancelOkButtons } from "./shared";
import fullScreen from "./components/full-screen";
import fullwidth from "./components/fullwidth";
import menu from "./components/menu";
import settings from "./components/settings";
import replaceDialog from "./components/replace-dialog";
// import replacePane from "./components/replace-pane";
import { DialogCSS, ToolbarCSS } from "polythene-css";

export default ({ renderer, keys, Dialog, DialogPane, Button, RaisedButton, Toolbar, ToolbarTitle, IconButton, Icon, List, ListTile }) => {

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
    border_radius:          5,
    color_light_background: "#2196F3",
    color_light_text:       "#fff",
  });

  DialogCSS.addStyle(".dialog-tests-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
  });

  ToolbarCSS.addStyle(".tests-dialog-themed-toolbar", {
    color_light_background: "#eee",
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
      name: "Themed pane (color and border radius)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            content: h("div", "Hello"),
            className: "dialog-tests-rounded-blue"
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
      name: "Option: panes attrs",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            panes: [h(DialogPane, {
              title: "Long dialog with a very long title that surely won't fit here",
              body: renderer.trust(longText),
              footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog })
            })]
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
          Opener(fullScreen({ renderer, keys, Toolbar, IconButton, Button, Dialog }))
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
      name: "Option: menu",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(menu({ renderer, keys, Icon, List, ListTile, Dialog }))
      }
    },
    {
      name: "Settings dialog",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(settings({ renderer, keys, List, ListTile, Dialog }))
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
  ];
};
