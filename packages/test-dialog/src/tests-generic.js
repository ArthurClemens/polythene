import { shortText, longText, cancelOkButtons } from "./shared";
import fullscreen from "./components/fullscreen";
import fullwidth from "./components/fullwidth";
import menu from "./components/menu";
import settings from "./components/settings";
import replaceDialog from "./components/replace-dialog";
// import replacePane from "./components/replace-pane";

export default ({ renderer, keys, Dialog, DialogPane, Button, RaisedButton, Toolbar, IconButton, Icon, List, ListTile }) => {

  const Opener = (dialogAttrs, label = "Open") => renderer(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  const OpenerWithPromise = (dialogAttrs, label = "Open") => renderer(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs).then(id => alert("dialog shown: " + id))
    }
  });

  Dialog.theme(".dialog-tests-rounded-blue", {
    border_radius:          5,
    color_light_background: "#2196F3",
    color_light_text:  "#fff",
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
            content: renderer("div", "Hello"),
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
            footer: cancelOkButtons({ renderer, keys, Button, Dialog })
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
            panes: [renderer(DialogPane, {
              title: "Long dialog with a very long title that surely won't fit here",
              body: renderer.trust(longText),
              footer: cancelOkButtons({ renderer, keys, Button, Dialog })
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
            footer: cancelOkButtons({ renderer, keys, Button, Dialog }),
            modal: true,
            backdrop: true
          })
      }
    },
    {
      name: "Option: fullscreen (and show second dialog on top)",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          Opener(fullscreen({ renderer, keys, Toolbar, IconButton, Button, Dialog }))
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
          didShow: id => alert("dialog shown: " + id)
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
          didHide: id => alert("dialog hidden: " + id)
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
            show: el => ({
              el,
              showDuration: .5,
              beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
              show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
            }),
            hide: el => ({
              el,
              hideDuration: .5,
              hide:         () => el.style.opacity = 0
            })
          }
        })
      }
    },
    {
      name: "Option: showDelay, hideDelay, showDuration, hideDuration",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          showDelay: .4,
          hideDelay: .4,
          showDuration: 1.0,
          hideDuration: 1.0
        })
      }
    },
    {
      name: "Option: transition (show)",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          showDuration: 1.0,
          hideDuration: 1.0,
          transition: "show"
        })
      }
    },
    {
      name: "Option: transition (hide)",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: "Hello",
          showDuration: 1.0,
          hideDuration: 1.0,
          transition: "hide"
        })
      }
    },
    {
      name: "Option: no transition",
      interactive: true,
      exclude: true,
      component: {
        view: () => Opener({
          body: renderer.trust(shortText),
          transition: "none"
        })
      }
    },
  ];
};
