import { StateComponent, renderer } from 'polythene-react-base';
import { Multi } from 'polythene-core';
import { coreNotificationInstance } from 'polythene-core-notification';

var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

const NotificationInstance = StateComponent(coreNotificationInstance);
NotificationInstance.displayName = "NotificationInstance";
const options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: `.${classes.holder}`,
  instance: NotificationInstance,
  placeholder: `span.${classes.placeholder}`,
  queue: true
};
const Multiple = Multi({
  options,
  renderer
});
const Notification = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Notification[p] = Multiple[p]);
Notification.displayName = "Notification";

export { NotificationInstance, Notification };
