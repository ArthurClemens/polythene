import multiple from 'polythene/common/multiple';
import instance from 'polythene/notification/notification-instance';
import transitions from 'polythene/notification/theme/notification/transitions';
import 'polythene/notification/theme/notification/theme';

export default multiple({
    instance,
    class: 'pe-notification pe-notification--notification',
    defaultId: 'default_notification',
    tag: 'div.pe-notification__holder',
    noneTag: 'span.pe-notification__placeholder',
    bodyShowClass: 'pe-notification--open',
    queue: true,
    transitions
});
