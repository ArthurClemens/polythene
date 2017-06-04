import multiple from '../common/multiple';
import instance from './notification-instance';
import transitions from './theme/notification/transitions';
import './theme/notification/theme';

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
