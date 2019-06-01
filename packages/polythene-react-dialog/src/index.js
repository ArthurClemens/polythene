
import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-react";
import { Multi } from "polythene-core";
import { _Dialog, openDialogsSelector } from "polythene-core-dialog";
import classes from "polythene-css-classes/dialog";
import { DialogPane } from "polythene-react-dialog-pane";
import { Shadow } from "polythene-react-shadow";

export const DialogInstance = cast(_Dialog, { h, a, useState, useEffect, useRef, getRef, useReducer, Shadow, Pane: DialogPane, openDialogsSelector });
DialogInstance["displayName"] = "DialogInstance";

const options = {
  name:           "dialog",
  htmlShowClass:  classes.open,
  defaultId:      "default_dialog",
  holderSelector: `div.${classes.holder}`,
  instance:       DialogInstance,
  placeholder:    `span.${classes.placeholder}`,
};

const MultipleInstance = Multi({ options });
export const Dialog = cast(MultipleInstance.render, { h, useState, useEffect });
Object.getOwnPropertyNames(MultipleInstance)
  .filter(p => p !== "render")
  .forEach(p => Dialog[p] = MultipleInstance[p]);
Dialog["displayName"] = "Dialog";

