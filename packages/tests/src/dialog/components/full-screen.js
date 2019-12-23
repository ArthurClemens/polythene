import { longText } from "../shared";
import { ToolbarCSS } from "polythene-css";

const DIALOG_CONFIRM = "confirm-fullscreen";
const closeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

export default ({ h, a, Toolbar, ToolbarTitle, IconButton, Button, Dialog, isFullscreen, className }) => {

  ToolbarCSS.addStyle(".tests-dialog-full-screen-themed-toolbar", {
    color_dark_background: "#00c853"
  });

  const fullScreenToolbarRow = title => [
    h(IconButton, {
      key: "close",
      icon: { svg: { content: h.trust(closeSVG) } },
      events: {
        [a.onclick]: () => Dialog.show(confirmDialogOpts, { id: DIALOG_CONFIRM })
      }
    }),
    h(ToolbarTitle, { key: "title" }, title),
    h(Button, {
      key: "save",
      label: "Save",
      events: {
        [a.onclick]: () => Dialog.hide()
      }
    })
  ];

  const confirmDialogOpts = ({
    body: "This event is not yet saved. Are you sure you want to delete this event?",
    // modal: true,
    backdrop: true,
    footerButtons: [
      h(Button, {
        label: "Cancel",
        events: {
          [a.onclick]: () => Dialog.hide({ id: DIALOG_CONFIRM })
        }
      }),
      h(Button, {
        label: "Delete",
        events: {
          [a.onclick]: () => (
            Dialog
              .hide({ id: DIALOG_CONFIRM }) // hide confirm dialog
              .then(() => Dialog.hide()) // hide main dialog
          )
        }
      })
    ],
  });

  return {
    fullScreen: isFullscreen,
    className,
    header: h(Toolbar,
      {
        className: "tests-dialog-full-screen-themed-toolbar",
        tone: "dark",
        content: fullScreenToolbarRow("New event"),
        shadowDepth: 0,
      }
    ),
    body: h.trust(longText)
  };

};
