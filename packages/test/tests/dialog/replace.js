import m from "mithril";
import dialog from "polythene-dialog";
import button from "polythene-button";
import { commonDialogProps } from "./shared";

const dialogTwoOptions = Object.assign({},
  commonDialogProps, {
    body: "Dialog Two",
    footer: m(button, {
      label: "Show One",
      events: {
        onclick: () => dialog.show(dialogOneOptions)
      }
    })
  }
);

const dialogOneOptions = Object.assign({},
  commonDialogProps, {
    body: "Dialog One",
    footer: m(button, {
      label: "Show Two",
      events: {
        onclick: () => dialog.show(dialogTwoOptions)
      }
    })
  }
);

export default dialogOneOptions;