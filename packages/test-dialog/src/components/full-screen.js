import { longText } from "../shared";

const DIALOG_CONFIRM = "confirm-fullscreen";
const closeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

export default ({ renderer: h, keys: k, Toolbar, IconButton, Button, Dialog }) => {

  const fullScreenToolbarRow = title => [
    h(IconButton, {
      key: "close",
      icon: { svg: h.trust(closeSVG) },
      events: {
        [k.onclick]: () => Dialog.show(confirmDialogOpts, { id: DIALOG_CONFIRM })
      }
    }),
    h("span.flex", { key: "title" }, title),
    h(Button, {
      key: "save",
      label: "Save",
      events: {
        [k.onclick]: () => Dialog.hide()
      }
    })
  ];

  const FullScreenPane = {
    view: () => 
      h("div", [
        h(Toolbar, {
          key: "toolbar",
          content: fullScreenToolbarRow("New event")
        }),
        h("div", {
          key: "content",
          style: { padding: "21px" }
        }, h.trust(longText))
      ])
  };

  const confirmDialogOpts = ({
    body: "This event is not yet saved. Are you sure you want to delete this event?",
    modal: true,
    backdrop: true,
    footer: [
      h(Button, {
        label: "Cancel",
        events: {
          [k.onclick]: () => Dialog.hide({ id: DIALOG_CONFIRM })
        }
      }),
      h(Button, {
        label: "Delete",
        events: {
          [k.onclick]: () => (
            // hide confirm dialog
            Dialog.hide({ id: DIALOG_CONFIRM }),
            // hide main dialog
            Dialog.hide()
          )
        }
      })
    ],
  });

  return {
    body: h(FullScreenPane),
    fullScreen: true
  };

};
