
import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
import { Multi } from "polythene-core";
import { _Notification } from "polythene-core-notification";
import classes from "polythene-css-classes/notification";

export const NotificationInstance = cast(_Notification, { h, a, useState, useEffect, useRef, getRef, useReducer });
NotificationInstance["displayName"] = "NotificationInstance";

const options = {
  name:           "notification",
  className:      classes.component,
  htmlShowClass:  classes.open,
  defaultId:      "default_notification",
  holderSelector: `.${classes.holder}`,
  instance:       NotificationInstance,
  placeholder:    `span.${classes.placeholder}`,
  queue:          true,
};

const MultipleInstance = Multi({ options });
export const Notification = cast(MultipleInstance.render, { h, useState, useEffect });
Object.getOwnPropertyNames(MultipleInstance)
  .filter(p => p !== "render")
  .forEach(p => Notification[p] = MultipleInstance[p]);
Notification["displayName"] = "Notification";
