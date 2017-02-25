import m from "mithril";
import { dialog as component} from "polythene-dialog";
import { raisedButton } from "polythene-raised-button";
import { shortText, longText, commonDialogProps } from "./shared";
import fullscreenOpts from "./fullscreen";
import menuOpts from "./menu";
import fullWidthOpts from "./fullwidth";
import formOpts from "./form";
import replaceOpts from "./replace";
import settingsOpts from "./settings";

const btn = (dialogAttrs, label = "Open") => m(raisedButton, {
  label,
  events: { onclick: () => component.show(dialogAttrs) }
});

const promiseShownBtn = (dialogAttrs, label = "Open") => m(raisedButton, {
  label,
  events: { onclick: () => component.show(dialogAttrs).then((id) => alert("dialog shown: " + id)) }
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
    name: "Option: fullscreen",
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

