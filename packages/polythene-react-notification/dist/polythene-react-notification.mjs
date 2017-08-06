import { StateComponent, renderer } from 'polythene-react-base';
import { Multi } from 'polythene-core';
import { classes, coreNotificationInstance, transitions } from 'polythene-core-notification';

var NotificationInstance = StateComponent(coreNotificationInstance);

NotificationInstance.displayName = "NotificationInstance";

var options = {
  name: "notification",
  className: classes.component,
  bodyShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: "." + classes.holder,
  instance: NotificationInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: transitions
};

var Multiple = Multi({ options: options, renderer: renderer });
var Notification = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Notification[p] = Multiple[p];
});

Notification.theme = coreNotificationInstance.theme;
Notification.displayName = "Notification";

export { NotificationInstance, Notification };
