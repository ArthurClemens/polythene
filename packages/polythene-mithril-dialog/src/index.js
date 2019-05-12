
/**
 * @typedef {import("mithril").Vnode} Vnode
 * @typedef {import("polythene-core-dialog").Options} Options
 */

import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
import { Multi } from "polythene-core";
import { _Dialog } from "polythene-core-dialog";
import classes from "polythene-css-classes/dialog";
import { DialogPane } from "polythene-mithril-dialog-pane";
import { Shadow } from "polythene-mithril-shadow";

export const DialogInstance = cast(_Dialog, { h, a, useState, useEffect, useRef, getRef, useReducer, Shadow, Pane: DialogPane });
DialogInstance["displayName"] = "DialogInstance";

const options = {
  name:           "dialog",
  htmlShowClass:  classes.open,
  defaultId:      "default_dialog",
  holderSelector: `div.${classes.holder}`,
  instance:       DialogInstance,
  placeholder:    `span.${classes.placeholder}`
};

const MultipleInstance = Multi({ options });
export const Dialog = cast(MultipleInstance.render, { h, useState, useEffect });
Object.getOwnPropertyNames(MultipleInstance)
  .filter(p => p !== "render")
  .forEach(p => Dialog[p] = MultipleInstance[p]);
Dialog["displayName"] = "Dialog";
