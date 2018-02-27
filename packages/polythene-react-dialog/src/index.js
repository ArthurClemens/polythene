import { StateComponent, renderer } from "polythene-react-base";
import { Multi } from "polythene-core";
import { coreDialog as core } from "polythene-core-dialog";
import classes from "polythene-css-classes/dialog";
import { DialogPane } from "polythene-react-dialog-pane";
import { Shadow } from "polythene-react-shadow";

export const DialogInstance = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow, Pane: DialogPane, createPane: core.createPane }))
  }
));

DialogInstance.displayName = "DialogInstance";

const options = {
  name:           "dialog",
  htmlShowClass:  classes.open,
  defaultId:      "default_dialog",
  holderSelector: `div.${classes.holder}`,
  instance:       DialogInstance,
  placeholder:    `span.${classes.placeholder}`,
};

const Multiple = Multi({ options, renderer });
export const Dialog = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Dialog[p] = Multiple[p]);

Dialog.displayName = "Dialog";
