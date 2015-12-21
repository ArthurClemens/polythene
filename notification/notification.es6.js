import multiple from 'polythene/common/multiple';
import instance from 'polythene/notification/notification-instance';
import transitions from 'polythene-theme/notification/notification-transitions';
import 'polythene-theme/notification/notification';

export default multiple({
    instance,
    class: 'notification',
    defaultId: 'default_notification',
    tag: 'div.notification-holder',
    noneTag: 'span.notification-placeholder',
    bodyShowClass: 'notification-open',
    queue: true,
    transitions
});
