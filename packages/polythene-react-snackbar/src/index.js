// @ts-check

import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-react";
import { ComponentCreator, renderer } from "polythene-react-base";
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

const Multiple = Multi({ options, renderer });
export const Snackbar = ComponentCreator(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Snackbar[p] = Multiple[p]);

Snackbar["displayName"] = "Snackbar";
