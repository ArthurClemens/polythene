
import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
// import { Multi } from "polythene-core";
import { _DialogComponent, openDialogsSelector, _show, _hide, _Dialog } from "polythene-core-dialog";
// import classes from "polythene-css-classes/dialog";
import { DialogPane } from "polythene-mithril-dialog-pane";
import { Shadow } from "polythene-mithril-shadow";

const DialogComponent = cast(_DialogComponent, { h, a, useState, useEffect, useRef, getRef, useReducer, Shadow, Pane: DialogPane, openDialogsSelector });

export const Dialog = {
  ..._Dialog,
  show: _show({ DialogComponent }),
  hide: _hide,
  displayName: "Dialog"
};

// Object.getOwnPropertyNames(_Dialog)
//   .forEach(p => Dialog[p] = _Dialog[p]);


// const options = {
//   name:           "dialog",
//   htmlShowClass:  classes.open,
//   defaultId:      "default_dialog",
//   holderSelector: `div.${classes.holder}`,
//   instance:       DialogInstance,
//   placeholder:    `span.${classes.placeholder}`
// };

// const MultipleInstance = Multi({ options });
// export const Dialog = cast(MultipleInstance.render, { h, useState, useEffect });
// Object.getOwnPropertyNames(MultipleInstance)
//   .filter(p => p !== "render")
//   .forEach(p => Dialog[p] = MultipleInstance[p]);
// Dialog["displayName"] = "Dialog";
