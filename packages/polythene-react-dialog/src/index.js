// @ts-check

import { ComponentCreator, renderer } from "polythene-react-base";
import { Multi } from "polythene-core";
import { coreDialog as core } from "polythene-core-dialog";
import classes from "polythene-css-classes/dialog";
import { DialogPane } from "polythene-react-dialog-pane";
import { Shadow } from "polythene-react-shadow";

export const DialogInstance = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow, Pane: DialogPane, createPane: core.createPane })
});

DialogInstance["displayName"] = "DialogInstance";

const options = {
  name:           "dialog",
  htmlShowClass:  classes.open,
  defaultId:      "default_dialog",
  holderSelector: `div.${classes.holder}`,
  instance:       DialogInstance,
  placeholder:    `span.${classes.placeholder}`,
};

const Multiple = Multi({ options, renderer });
export const Dialog = ComponentCreator(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Dialog[p] = Multiple[p]);

Dialog["displayName"] = "Dialog";
