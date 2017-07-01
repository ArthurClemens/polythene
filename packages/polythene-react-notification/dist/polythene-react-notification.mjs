import { StateComponent, renderer } from 'polythene-react-base';
import { multipleHOC } from 'polythene-core';
import { classes, coreNotificationInstance, transitions } from 'polythene-core-notification';

var NotificationInstance = StateComponent(coreNotificationInstance);

NotificationInstance.displayName = "NotificationInstance";

var options = {
  name: "notification",
  bodyShowClass: classes.open,
  defaultId: "default_notification",
  holder: "." + classes.holder,
  instance: NotificationInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: transitions
};

var multiple = multipleHOC({ options: options, renderer: renderer });
var Notification = StateComponent(multiple);
Object.getOwnPropertyNames(multiple).forEach(function (p) {
  return Notification[p] = multiple[p];
});

Notification.theme = coreNotificationInstance.theme;
Notification.displayName = "Notification";

export { NotificationInstance, Notification };
