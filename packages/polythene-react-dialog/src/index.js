import { stateComponent, renderer } from "polythene-react-base";
import { multipleHOC } from "polythene-core";
import { coreDialogInstance as core, transitions, classes } from "polythene-core-dialog";
import { Shadow } from "polythene-react-shadow";

export const DialogInstance = stateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

DialogInstance.displayName = "DialogInstance";

const options = {
  bodyShowClass: classes.open,
  defaultId:     "default_dialog",
  element:       `div.${classes.holder}`,
  instance:      DialogInstance,
  placeholder:   `span.${classes.placeholder}`,
  transitions
};

const multiple = multipleHOC({ options, renderer });
export const Dialog = stateComponent(multiple);
Object.getOwnPropertyNames(multiple).forEach(p => Dialog[p] = multiple[p]);

Dialog.theme = core.theme;
Dialog.displayName = "Dialog";
