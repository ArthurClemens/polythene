
import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
import { Multi } from "polythene-core";
import { _Snackbar, transitions } from "polythene-core-snackbar";
import classes from "polythene-css-classes/snackbar";

export const SnackbarInstance = cast(_Snackbar, { h, a, useState, useEffect, useRef, getRef, useReducer });
SnackbarInstance["displayName"] = "SnackbarInstance";

const options = {
  name:           "snackbar",
  className:      classes.component,
  htmlShowClass:  classes.open,
  defaultId:      "default_snackbar",
  holderSelector: `.${classes.holder}`,
  instance:       SnackbarInstance,
  placeholder:    `span.${classes.placeholder}`,
  queue:          true,
  transitions
};

const MultipleInstance = Multi({ options });
export const Snackbar = cast(MultipleInstance.render, { h, useState, useEffect });
Object.getOwnPropertyNames(MultipleInstance)
  .filter(p => p !== "render")
  .forEach(p => Snackbar[p] = MultipleInstance[p]);
  Snackbar["displayName"] = "Snackbar";
