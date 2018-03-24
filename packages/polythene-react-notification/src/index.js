import { StateComponent, renderer } from "polythene-react-base";
import { Multi } from "polythene-core";
import { coreNotificationInstance as core } from "polythene-core-notification";
import classes from "polythene-css-classes/notification";

export const NotificationInstance = StateComponent(core);

NotificationInstance.displayName = "NotificationInstance";

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
export const Notification = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Notification[p] = Multiple[p]);

Notification.displayName = "Notification";
