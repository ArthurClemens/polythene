import { StateComponent, renderer } from "polythene-react-base";
import { multipleHOC } from "polythene-core";
import { coreNotificationInstance as core, transitions, classes } from "polythene-core-notification";

export const NotificationInstance = StateComponent(core);

NotificationInstance.displayName = "NotificationInstance";

const options = {
  name:          "notification",
  bodyShowClass: classes.open,
  defaultId:     "default_notification",
  holder:        `.${classes.holder}`,
  instance:      NotificationInstance,
  placeholder:   `span.${classes.placeholder}`,
  queue:         true,
  transitions
};

const multiple = multipleHOC({ options, renderer });
export const Notification = StateComponent(multiple);
Object.getOwnPropertyNames(multiple).forEach(p => Notification[p] = multiple[p]);

Notification.theme = core.theme;
Notification.displayName = "Notification";
