import { StateComponent, renderer } from "polythene-mithril-base";
import { Multi } from "polythene-core";
import { coreDialogInstance as core, transitions, classes } from "polythene-core-dialog";
import { DialogPane } from "polythene-mithril-dialog-pane";
import { Shadow } from "polythene-mithril-shadow";

export const DialogInstance = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow, DialogPane })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow, DialogPane }))
  }
));

DialogInstance.displayName = "DialogInstance";

const options = {
  name:           "dialog",
  bodyShowClass:  classes.open,
  defaultId:      "default_dialog",
  holderSelector: `div.${classes.holder}`,
  instance:       DialogInstance,
  placeholder:    `span.${classes.placeholder}`,
  transitions
};

const Multiple = Multi({ options, renderer });
export const Dialog = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Dialog[p] = Multiple[p]);

Dialog.displayName = "Dialog";
