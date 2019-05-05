// @ts-check

import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from "cyano-mithril";
import { ComponentCreator, renderer } from "polythene-mithril-base";
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

const Multiple = Multi({ options, renderer });
export const Notification = ComponentCreator(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Notification[p] = Multiple[p]);

Notification["displayName"] = "Notification";
