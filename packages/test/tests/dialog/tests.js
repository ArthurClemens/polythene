import m from "mithril";
import dialog from "polythene-dialog";
import raisedButton from "polythene-raised-button";
import { shortText, longText, commonDialogProps } from "./shared";
import fullscreenOpts from "./fullscreen";
import menuOpts from "./menu";
import fullWidthOpts from "./fullwidth";
import formOpts from "./form";
import replaceOpts from "./replace";
import settingsOpts from "./settings";

const btn = (dialogAttrs, label = "Open") => m(raisedButton, {
  label,
  events: { onclick: () => dialog.show(dialogAttrs) }
});

const promiseShownBtn = (dialogAttrs, label = "Open") => m(raisedButton, {
  label,
  events: { onclick: () => dialog.show(dialogAttrs).then((id) => alert("dialog shown: " + id)) }
});

dialog.theme(".dialog-tests-blue-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
});

export const tests = [
  {
    name: "Option: body",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
        body: "Hello"
      })
    }
  },
  {
    name: "Option: body as function",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(() => ({
        body: "Hello"
      }))
    }
  },
  {
    name: "Option: content",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
        content: m("div", "Hello")
      })
    }
  },
  {
    name: "Themed (color and border radius)",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
        content: m("div", "Hello"),
        class: "dialog-tests-blue-dialog"
      })
    }
  },
  {
    name: "Option: style",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
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
      view: () => btn({
        body: m.trust(shortText),
        z: 0
      })
    }
  },
  {
    name: "Option: z (5)",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
        body: m.trust(shortText),
        z: 5
      })
    }
  },
  {
    name: "Option: title and body (long text)",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
        title: "Long dialog with a very long title that surely won't fit here",
        body: m.trust(longText)
      })
    }
  },
  {
    name: "Option: modal with backdrop",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(Object.assign({}, commonDialogProps, {
        title: "Long dialog with a very long title that surely won't fit here",
        body: m.trust(longText),
        modal: true,
        backdrop: true
      }))
    }
  },
  {
    name: "Option: fullscreen (and show second dialog on top)",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(fullscreenOpts)
    }
  },
  {
    name: "Fullwidth buttons",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(fullWidthOpts)
    }
  },
  {
    name: "Option: menu",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(menuOpts)
    }
  },
  {
    name: "Conditional button states",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(formOpts)
    }
  },
  {
    name: "Settings dialog",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(settingsOpts)
    }
  },
  {
    name: "Replace dialog",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(replaceOpts)
    }
  },

  {
    name: "Promise shown",
    interactive: true,
    exclude: true,
    component: {
      view: () => promiseShownBtn({
        body: "Hello"
      })
    }
  },
  {
    name: "Option: didShow",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn({
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
      view: () => btn({
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
      view: () => btn({
        body: "Hello",
        transitions: {
          show: (el) => ({
            el,
            showDuration: .5,
            beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
            show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
          }),
          hide: (el) => ({
            el,
            hideDuration: .5,
            hide:         () => el.style.opacity = 0,
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
      view: () => btn({
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
      view: () => btn({
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
      view: () => btn({
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
      view: () => btn({
        body: m.trust(shortText),
        transition: "none"
      })
    }
  },

  // Dark theme
  {
    name: "Option: modal with backdrop (dark theme)",
    interactive: true,
    exclude: true,
    component: {
      view: () => btn(Object.assign({}, commonDialogProps, {
        title: "Long dialog with a very long title that surely won't fit here",
        body: m.trust(longText),
        modal: true,
        backdrop: true,
        class: "pe-dark-theme"
      }))
    }
  }
];

