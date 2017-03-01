import m from "mithril";
import button from "polythene-button";
import toolbar from "polythene-toolbar";
import iconButton from "polythene-icon-button";
import dialog from "polythene-dialog";
import iconClose from "mmsvg/google/msvg/navigation/close";
import { shortText, longText, commonDialogProps } from "./shared";

const DIALOG_CONFIRM = "confirm-fullscreen";

const fullscreenToolbarRow = title => {
  return [
    m(iconButton, {
      icon: {
        msvg: iconClose
      },
      events: {
        onclick: () => {
          dialog.show(confirmDialogOptsFn, DIALOG_CONFIRM);
        }
      }
    }),
    m("span.flex", title),
    m(button, {
      label: "Save",
      events: {
        onclick: () => {
          dialog.hide();
        }
      }
    })
  ];
};

const fullscreenPanelBlock = {
  view: () => {
    return [
      m(toolbar, {
        content: fullscreenToolbarRow("New event")
      }),
      m("div", {
        style: {
          padding: "21px"
        }
      }, m.trust(longText))
    ];
  }
};

const confirmDialogOptsFn = () => {
  return Object.assign({}, commonDialogProps, {
    class: "demo-dialog",
    footer: [
      m(button, {
        label: "Cancel",
        events: {
          onclick: () => {
            dialog.hide(DIALOG_CONFIRM);
          }
        }
      }),
      m(button, {
        label: "Discard",
        events: {
          onclick: () => {
            dialog.hide(DIALOG_CONFIRM);
            dialog.hide();
          }
        }
      })
    ],
    body: m("div", m.trust(shortText)),
    modal: true,
    backdrop: true
  });
};

export default Object.assign({},
  commonDialogProps, {
    body: m(fullscreenPanelBlock),
    fullscreen: true
  }
);
