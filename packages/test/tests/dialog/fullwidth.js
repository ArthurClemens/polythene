import m from "mithril";
import dialog from "polythene-dialog";
import button from "polythene-button";
import { commonDialogProps } from "./shared";

const buttonEvents = {
  onclick: () => dialog.hide()
};

const buttons = [
  m(button, {
    label: "Turn on location services",
    events: buttonEvents
  }),
  m(button, {
    label: "No thanks",
    events: buttonEvents
  })
];

export default Object.assign({},
  commonDialogProps, {
    class: "demo-dialog fullwidth-dialog",
    style: {
      width: "280px"
    },
    body: [
      m(".pe-dialog__title", "Let your apps know your location"),
      m("div", "This means that your location data will be sent to our servers, anonymously of course.")
    ],
    footer: buttons
  }
);