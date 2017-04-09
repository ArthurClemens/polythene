import m from "mithril";
import button from "polythene-button";
import toolbar from "polythene-toolbar";
import iconButton from "polythene-icon-button";
import dialog from "polythene-dialog";
import iconClose from "mmsvg/google/msvg/navigation/close";
import { shortText, longText, commonDialogProps } from "./shared";

const DIALOG_CONFIRM = "confirm-fullscreen";

const fullscreenToolbarRow = title => [
  m(iconButton, {
    icon: {
      msvg: iconClose
    },
    events: {
      onclick: () => dialog.show(confirmDialogOptsFn, { id: DIALOG_CONFIRM })
    }
  }),
  m("span.flex", title),
  m(button, {
    label: "Save",
    events: {
      onclick: () => dialog.hide()
    }
  })
];

const fullscreenPane = {
  view: () => [
    m(toolbar, {
      content: fullscreenToolbarRow("New event")
    }),
    m("div", {
      style: {
        padding: "21px"
      }
    }, m.trust(longText))
  ]
};

const confirmDialogOptsFn = () =>
  Object.assign({}, commonDialogProps, {
    class: "demo-dialog",
    footer: [
      m(button, {
        label: "Cancel",
        events: {
          onclick: () => dialog.hide({ id: DIALOG_CONFIRM })
        }
      }),
      m(button, {
        label: "Discard",
        events: {
          onclick: () => (
            // hide confirm dialog
            dialog.hide({ id: DIALOG_CONFIRM }),
            // hide main dialog
            dialog.hide()
          )
        }
      })
    ],
    body: m("div", m.trust(shortText)),
    modal: true,
    backdrop: true
  });

export default Object.assign({},
  commonDialogProps, {
    body: m(fullscreenPane),
    fullscreen: true
  }
);
