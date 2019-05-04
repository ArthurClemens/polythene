// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 * @typedef {import("polythene-core-dialog").Options} Options
 */

import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
import { ComponentCreator, renderer } from "polythene-mithril-base";
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

const Multiple = Multi({ options, renderer });
export const Dialog = ComponentCreator(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Dialog[p] = Multiple[p]);

Dialog["displayName"] = "Dialog";
