import { StateComponent, renderer } from "polythene-mithril-base";
import { multipleHOC } from "polythene-core";
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
  name:          "dialog",
  bodyShowClass: classes.open,
  defaultId:     "default_dialog",
  holder:        `div.${classes.holder}`,
  instance:      DialogInstance,
  placeholder:   `span.${classes.placeholder}`,
  transitions
};

const multiple = multipleHOC({ options, renderer });
export const Dialog = StateComponent(multiple);
Object.getOwnPropertyNames(multiple).forEach(p => Dialog[p] = multiple[p]);

Dialog.theme = core.theme;
Dialog.displayName = "Dialog";
